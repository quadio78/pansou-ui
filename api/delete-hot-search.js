import { kv } from '@vercel/kv';

export default async function handler(request, response) {
    if (request.method !== 'POST') {
        return response.status(405).json({ error: 'Method not allowed.' });
    }

    try {
        const { password, term } = request.body;

        // Password validation, same as clear-hot-searches
        const expectedPassword = process.env.CLEAR_PASSWORD;
        if (!expectedPassword) {
            return response.status(500).json({ error: 'Password not configured on server.' });
        }
        if (password !== expectedPassword) {
            return response.status(401).json({ error: 'Invalid password.' });
        }

        // Term validation
        if (!term || typeof term !== 'string' || term.trim().length === 0) {
            return response.status(400).json({ error: 'Search term to delete is required.' });
        }

        // Delete the term from the sorted set
        const result = await kv.zrem('hot-searches', term.trim());

        if (result > 0) {
            return response.status(200).json({ message: `Hot search term "${term}" deleted.` });
        } else {
            return response.status(404).json({ error: `Hot search term "${term}" not found.` });
        }

    } catch (error) {
        console.error('Error deleting hot search term:', error);
        return response.status(500).json({ error: 'Failed to delete hot search term.' });
    }
}