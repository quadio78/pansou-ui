import Filter from 'bad-words';
import fs from 'fs';
import path from 'path';
import iconv from 'iconv-lite';

const filter = new Filter();

try {
    const dictionaryPath = path.join(process.cwd(), 'mgck');
    const files = fs.readdirSync(dictionaryPath);
    
    const allWords = new Set();

    for (const file of files) {
        if (path.extname(file) === '.txt') {
            const filePath = path.join(dictionaryPath, file);
            const fileBuffer = fs.readFileSync(filePath);
            const fileContent = iconv.decode(fileBuffer, 'gb2312');
            const words = fileContent.split('\n').map(word => word.trim()).filter(word => word.length > 0);
            words.forEach(word => allWords.add(word));
        }
    }
    
    if (allWords.size > 0) {
        filter.addWords(...Array.from(allWords));
        console.log(`Successfully loaded ${allWords.size} words from custom dictionaries.`);
    }
} catch (error) {
    console.error('Failed to load custom bad words dictionary:', error);
    const fallbackWords = ['色情', '暴力', '赌博', '毒品'];
    filter.addWords(...fallbackWords);
}

export function isForbidden(term) {
    const trimmedTerm = term ? term.trim() : '';
    if (!trimmedTerm) {
        return false;
    }

    const list = filter.list;
    for (const word of list) {
        if (trimmedTerm.includes(word)) {
            return true;
        }
    }

    return filter.isProfane(trimmedTerm);
}