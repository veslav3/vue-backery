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
RUN pnpm --filter backend build
RUN pnpm deploy --filter backend --prod --legacy /prod/backend

FROM base AS backend
WORKDIR /app
COPY --from=build /prod/backend/package.json .
COPY --from=build /prod/backend/dist ./dist
COPY --from=build /prod/backend/node_modules ./node_modules

ENV PORT=3000
EXPOSE 3000
CMD [ "node", "dist/main.js" ]
