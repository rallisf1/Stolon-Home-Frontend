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

try {
    await rm(`./src/lib/symbols`, { recursive: true, force: true });
    console.log(`Deleted symbols.`);
} catch(e) {
    console.error(`Could not delete symbols`);
}

console.log('Finished.');