# Globalized Technology Website — Version 5

A complete static corporate website for Globalized Technology. It includes the official company logo, a light/dark theme toggle, a responsive Services dropdown, 15 reusable service pages, SEO metadata, sitemap, robots file, portfolio examples, support information, and a contact form fallback.

## Technology

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Lucide icons
- Static export

## 1. Install dependencies

```bash
npm install
```

## 2. Start development

```bash
npm run dev
```

Open `http://localhost:3000`.

## 3. Customize the company

Edit:

```text
src/data/site.ts
```

Change the company name, initials, URL, email, telephone number, address, office hours, and social links.

## 4. Customize services

Edit:

```text
src/data/services.ts
```

Each service automatically receives its own static page at `/services/[slug]`.

## 5. Configure the contact form

Copy the example environment file:

```bash
cp .env.example .env.local
```

Add a Formspree, Web3Forms, Basin, or compatible endpoint:

```env
NEXT_PUBLIC_CONTACT_FORM_ENDPOINT=https://form-provider.example/your-endpoint
```

When no endpoint is configured, the form opens the visitor's default email application.

## 6. Production build

```bash
npm run build
```

The fully static website is generated in:

```text
out/
```

Upload the contents of `out/` to any static hosting platform.

## Important edits before launch

- Replace sample portfolio projects with genuine work.
- Add approved testimonials only.
- Review legal pages for your jurisdiction and real data practices.
- Confirm authorization and vendor terms before advertising third-party subscriptions.
- Replace `siteConfig.url` with the final production domain before building.

## npm registry troubleshooting

This package uses the public npm registry. If `npm install` reports a registry or proxy error on Windows, run:

```bat
fix-npm-registry.cmd
npm install
```

You can also verify the registry manually:

```bat
npm config get registry
```

It should show `https://registry.npmjs.org/`.

## Version 3 mobile navigation and theme fixes

- The default theme is now light on every device unless the visitor explicitly selects dark mode.
- The theme toggle no longer relies on hydration-sensitive state synchronization.
- The mobile navigation and nested Services menu are fully interactive.
- Desktop and mobile service menus close immediately after a service link is selected.
- Desktop Services also closes on outside click, mouse leave, route change, or Escape.


## Version 5 navigation update

All internal navigation now uses Next.js `Link` for client-side transitions. The browser URL changes for each page, but the document is not fully reloaded. Native mobile menu and theme controls remain unchanged.
