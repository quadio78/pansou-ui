import { kv } from '@vercel/kv';

export default async function handler(request, response) {
    if (request.method !== 'POST') {
        return response.status(405).json({ success: false, message: 'Method Not Allowed' });
    }

    const { url } = request.body;

    if (!url) {
        return response.status(400).json({ success: false, message: 'Resource URL is required' });
    }

    try {
        await kv.zincrby('invalid-resources', 1, url);

        return response.status(200).json({ success: true, message: 'Resource marked as invalid.' });
    } catch (error) {
        console.error('Error marking resource as invalid:', error);
        return response.status(500).json({ success: false, message: 'Internal Server Error' });
    }
}