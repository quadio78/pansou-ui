import { kv } from '@vercel/kv';

export default async function handler(request, response) {
    if (request.method === 'POST') {
        try {
            const { password } = request.body;
            const expectedPassword = process.env.CLEAR_PASSWORD;

            if (!expectedPassword) {
                return response.status(500).json({ error: 'Password not configured on server.' });
            }

            if (password !== expectedPassword) {
                return response.status(401).json({ error: 'Invalid password.' });
            }

            await kv.del('hot-searches');
            return response.status(200).json({ message: 'Hot searches cleared.' });
        } catch (error) {
            console.error('Error clearing hot searches:', error);
            return response.status(500).json({ error: 'Failed to clear hot searches.' });
        }
    }

    return response.status(405).json({ error: 'Method not allowed.' });
}