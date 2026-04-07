FROM node:20-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base AS build
WORKDIR /app
COPY . .
ENV CI=true
RUN pnpm install --frozen-lockfile
RUN pnpm --filter "@vue-backery/shared" build
ENV API_URL="http://backend:3000"
RUN pnpm --filter "@vue-backery/frontend" build

FROM base AS frontend
WORKDIR /app
COPY --from=build /app/apps/frontend/.output /app/.output
EXPOSE 3000

ENV HOST=0.0.0.0
ENV PORT=3000
ENV NODE_ENV=production

CMD [ "node", ".output/server/index.mjs" ]
