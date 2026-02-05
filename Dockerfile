FROM oven/bun:alpine

ARG SITE_REPOS
ARG REPO_OWNER
ARG GH_TOKEN

WORKDIR /app

COPY . .

RUN bun install

RUN bun generate_site.ts

RUN bun run build

EXPOSE 3000

ENV NODE_ENV=production

ENTRYPOINT ["bun","/app/build/index.js"]