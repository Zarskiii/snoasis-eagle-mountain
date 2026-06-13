# Snoasis Utah Eagle Mountain

A Vite + React site for Snoasis Utah Eagle Mountain, the shaved ice stand at
3604 Pony Express Parkway in Eagle Mountain, Utah. The site supports walk-up
business discovery, menu browsing, public listing links, and a package-aware
catering bid form.

## What is included

- Responsive home page for Snoasis Eagle Mountain
- Real business phone, address, Facebook, map, and listing links
- Menu page based on the current Snoasis flavor and add-on boards
- Catering page with simple package starting points
- Catering bid form that opens a prefilled text message to the business number
- SEO metadata and local business JSON-LD
- Vite base configured for hosting at a subdomain root

## Local setup

```bash
npm install
npm run dev
```

The dev server is configured for port `8081`.

## Production build

```bash
npm run build
npm run preview
```

The static site is generated in `dist/`.

## Catering form behavior

The catering form builds a short event summary and opens the visitor's SMS app
with the business number and message prefilled. Visitors still tap send from
their own phone.

## Hostinger VPS deployment

Build locally or on the server, then serve `dist/` with nginx. A good temporary
subdomain name is `snoasis.zarskiii.com` or `snoasis.zarpierce.com`, depending
on which DNS zone is already pointed at the VPS.
