import { kv } from '@vercel/kv';
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

const COOLDOWN_PERIOD = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

export default async function handler(request, response) {
    if (request.method !== 'POST') {
        return response.status(405).json({ error: 'Method not allowed.' });
    }

    try {
        const { collectionId } = request.body;

        if (!collectionId) {
            return response.status(400).json({ error: 'collectionId is required.' });
        }

        // --- IP-based rate limiting ---
        const forwarded = request.headers['x-forwarded-for'];
        const ip = typeof forwarded === 'string' ? forwarded.split(',')[0]?.trim() : request.socket.remoteAddress;
        const key = `view:${collectionId}:${ip}`;
        const lastViewTimestamp = await kv.get(key);

        const now = Date.now();
        if (lastViewTimestamp && (now - lastViewTimestamp < COOLDOWN_PERIOD)) {
            return response.status(200).json({ message: 'View already recorded recently.' });
        }
        // --- End of IP-based rate limiting ---

        const filePath = path.join(process.cwd(), 'collections', 'src', 'data', 'collections', `${collectionId}.mdoc`);

        let fileContent;
        try {
            fileContent = await fs.readFile(filePath, 'utf-8');
        } catch (error) {
            if (error.code === 'ENOENT') {
                return response.status(404).json({ error: 'Collection not found.' });
            }
            throw error;
        }

        const { data, content } = matter(fileContent);
        
        data.views = (data.views || 0) + 1;

        const newFileContent = matter.stringify(content, data);

        await fs.writeFile(filePath, newFileContent, 'utf-8');

        // Update the timestamp in KV store
        await kv.set(key, now, { ex: COOLDOWN_PERIOD / 1000 }); // Set with expiration

        return response.status(200).json({ message: 'View count incremented.', views: data.views });

    } catch (error) {
        console.error('Error incrementing view count:', error);
        return response.status(500).json({ error: 'Failed to increment view count.' });
    }
}