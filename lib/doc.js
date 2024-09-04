import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
const postsDirectory = path.join(process.cwd(), 'docs');

export function getDocuments() {
    const fileNames = fs.readdirSync(postsDirectory);

    const allDocuments = fileNames.map(fileName => {
        const id = fileName.replace(".md", "");

        const fullPath = path.join(postsDirectory, fileName);

        const fileContent = fs.readFileSync(fullPath, "utf8")

        const matterResult = matter(fileContent);

        return {
            id,
            ...matterResult.data
        }
    })
    return allDocuments.sort((a, b) => {
        if (a.order < b.order) {
            return -1
        }
        if (a.order > b.order) {
            return 1
        }
        return 0;
    })
}