import { kv } from '@vercel/kv';
import { isForbidden } from '../lib/filter.js';

export default async function handler(request, response) {
    if (request.method === 'GET') {
        try {
            // 获取排名前 30 的热搜词
            const searches = await kv.zrange('hot-searches', 0, 29, { withScores: true, rev: true });
            
            const hotSearches = [];
            for (let i = 0; i < searches.length; i += 2) {
                hotSearches.push({
                    term: searches[i],
                    score: searches[i + 1],
                });
            }

            return response.status(200).json({ hotSearches });
        } catch (error) {
            console.error('Error fetching hot searches:', error);
            return response.status(500).json({ error: 'Failed to fetch hot searches.' });
        }
    }

    if (request.method === 'POST') {
        try {
            const { term } = request.body;

            if (!term || typeof term !== 'string' || term.trim().length === 0) {
                return response.status(400).json({ error: 'Search term is required.' });
            }
            
            if (isForbidden(term)) {
                return response.status(200).json({ message: 'Search term processed.' });
            }
            
            await kv.zincrby('hot-searches', 1, term.trim());

            // 限制热搜榜的大小为 50
            const count = await kv.zcard('hot-searches');
            if (count > 50) {
                // 移除分数最低的条目，直到数量降至 50
                await kv.zremrangebyrank('hot-searches', 0, count - 51);
            }
            
            return response.status(200).json({ message: 'Search term recorded.' });
        } catch (error) {
            console.error('Error recording search term:', error);
            return response.status(500).json({ error: 'Failed to record search term.' });
        }
    }

    return response.status(405).json({ error: 'Method not allowed.' });
}