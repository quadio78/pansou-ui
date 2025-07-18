import { isForbidden } from '../lib/filter.js';

export default async function handler(request, response) {
    if (request.method === 'POST') {
        try {
            const { term } = request.body;
            
            if (!term || typeof term !== 'string' || term.trim().length === 0) {
                return response.status(400).json({ error: 'Search term is required.' });
            }

            const forbidden = isForbidden(term);
            
            return response.status(200).json({ isForbidden: forbidden });
        } catch (error) {
            console.error('Error in check-term handler:', error);
            return response.status(500).json({ error: 'Failed to check term.' });
        }
    }

    return response.status(405).json({ error: 'Method not allowed.' });
}