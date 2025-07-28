import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

export default async function handler(request, response) {
    if (request.method !== 'GET') {
        return response.status(405).json({ error: 'Method not allowed.' });
    }

    try {
        const collectionsDir = path.join(process.cwd(), 'collections', 'src', 'data', 'collections');
        const files = await fs.readdir(collectionsDir);
        const mdocFiles = files.filter(file => file.endsWith('.mdoc'));

        const allViews = {};

        for (const file of mdocFiles) {
            const filePath = path.join(collectionsDir, file);
            const fileContent = await fs.readFile(filePath, 'utf-8');
            const { data } = matter(fileContent);
            const collectionId = path.basename(file, '.mdoc');
            allViews[collectionId] = data.views || 0;
        }

        return response.status(200).json(allViews);

    } catch (error) {
        console.error('Error getting all views:', error);
        return response.status(500).json({ error: 'Failed to get all views.' });
    }
}