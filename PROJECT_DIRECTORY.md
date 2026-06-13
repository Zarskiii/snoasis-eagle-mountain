# Snoasis Utah Eagle Mountain - Project Directory

```text
.
├── index.html
├── package.json
├── vite.config.ts
├── public/
│   ├── images/
│   ├── favicon.svg
│   └── robots.txt
└── src/
    ├── App.tsx
    ├── main.tsx
    ├── components/
    │   ├── About.tsx
    │   ├── ChatBot.tsx
    │   ├── Contact.tsx
    │   ├── Footer.tsx
    │   ├── Hero.tsx
    │   ├── Menu.tsx
    │   ├── Navbar.tsx
    │   ├── Testimonials.tsx
    │   └── ui/
    ├── lib/
    │   ├── business.ts
    │   └── utils.ts
    └── pages/
        ├── CateringPage.tsx
        ├── Index.tsx
        └── NotFound.tsx
```

## Notes

- `src/lib/business.ts` is the shared source for business details, links, menu items, review stats, and catering packages.
- `src/components/Contact.tsx` handles the catering bid flow and SMS prefill behavior.
- `vite.config.ts` uses `base: "/"` for deployment at a VPS subdomain root.
