import { rm } from "node:fs/promises";

const repos: string[] = Bun.env.SITE_REPOS ? Bun.env.SITE_REPOS.split(',') : [];

if(!repos.length) {
    throw new Error('SITE_REPOS is empty!');
}

for (const repo of repos) {
    const route = repo.split('-')[1];
    try {
        await rm(`./src/routes/[lang]/${route}`, { recursive: true, force: true });
        console.log(`Deleted ${route}.`);
    } catch(e) {
        console.error(`Could not delete ${route}`);
    }
}

console.log('Finished.');