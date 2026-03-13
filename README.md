# vue-backery

This is an experimental bakery website built with **Nuxt 3** and **Vue 3**.

## Project Structure

This project follows the standard Nuxt 3 directory structure:

- **`pages/`**: Contains the application's views. Nuxt uses file-based routing; for example, `pages/index.vue` is the home page, and `pages/zuurdesem.vue` is the sourdough page.
- **`components/`**: Reusable Vue components (e.g., `AppHeader.vue`, `AppFooter.vue`, `PromoCards.vue`) that are automatically imported by Nuxt.
- **`assets/`**: Uncompiled assets like CSS (`assets/css/main.css`), SASS, or images that need processing.
- **`public/`**: Static files served at the root (e.g., `favicon.ico`, logos).
- **`e2e/`**: End-to-end tests using [Playwright](https://playwright.dev).
- **`app.vue`**: The main entry point of the application.
- **`nuxt.config.ts`**: Configuration file for Nuxt.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Available Scripts

Use `pnpm` to run the following commands:

### Development

```sh
# Start the development server
pnpm dev
```

### Production

```sh
# Build the application for production
pnpm build

# Locally preview the production build
pnpm preview
```

### Static Generation

```sh
# Generate a static version of the website
pnpm generate
```

### Testing & Quality

```sh
# Run end-to-end tests with Playwright
pnpm test:e2e

# Run unit tests (if configured)
pnpm test:unit

# Lint the project
pnpm lint
```

## Project Setup

```sh
# Install dependencies
pnpm install
```

---
*Note: This project uses [pnpm](https://pnpm.io/) for package management.*
