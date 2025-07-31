import { kv } from '@vercel/kv';

export default async function handler(request, response) {
    if (request.method !== 'POST') {
        return response.status(405).json({ success: false, message: 'Method Not Allowed' });
    }

    const { urls } = request.body;

    if (!urls || !Array.isArray(urls) || urls.length === 0) {
        return response.status(400).json({ success: false, message: 'An array of resource URLs is required' });
    }

    try {
        const invalidStatus = {};
        
        // 优先尝试使用 zmscore
        const scores = await kv.zmscore('invalid-resources', ...urls);

        // 检查 zmscore 是否返回了有效数据
        const isZmscoreWorking = scores.some(score => score !== null);

        if (isZmscoreWorking) {
            // zmscore 工作正常
            for (let i = 0; i < urls.length; i++) {
                const score = scores[i];
                if (score && score >= 3) {
                    invalidStatus[urls[i]] = true;
                }
            }
        } else {
            // zmscore 未返回有效数据，回退到 zrange
            const allInvalid = await kv.zrange('invalid-resources', 0, -1, { withScores: true });
            
            const invalidMap = {};
            for (let i = 0; i < allInvalid.length; i += 2) {
                const url = allInvalid[i];
                const score = allInvalid[i + 1];
                if (score >= 3) {
                    invalidMap[url] = true;
                }
            }

            for (const url of urls) {
                if (invalidMap[url]) {
                    invalidStatus[url] = true;
                }
            }
        }

        return response.status(200).json({ success: true, invalidStatus });
    } catch (error) {
        console.error('Error getting invalid status:', error);
        return response.status(500).json({ success: false, message: 'Internal Server Error' });
    }
}