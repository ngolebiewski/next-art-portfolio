Dev Log
- Perhaps I should have used a more robust template, but here we go. A journey to learn Next and perhaps even get a working art portfolio in the mix. 
- Goal: Learn Typescript. Learn Next.js. GO!

1. Create project, git repo, and deploy on Vercel (hmmm it is so easy...)
2. Deployed on Vercel, auto with every push: https://next-art-portfolio-test.vercel.app/
3. Delete Vercel boilerplate -- although may have done with studying it a bit more first!
4. Create components folder, make a navbar. Note the use of Link rather than for partial reloads, so it acts like an app and avoids full page reloads
5. Create about/art/contact/tech directories and page.tsx files within.
    -   `mkdir -p src/app/{art,tech,about,contact} && touch src/app/{art,tech,about,contact}/page.tsx`


------
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
