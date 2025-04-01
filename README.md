Dev Log
- Perhaps I should have used a more robust template, but here we go. A journey to learn Next and perhaps even get a working art portfolio in the mix. 
- Goal: Learn Typescript. Learn Next.js. GO!

1. Create project, git repo, and deploy on Vercel (hmmm it is so easy...)
2. Deployed on Vercel, auto with every push: https://next-art-portfolio-test.vercel.app/
3. Delete Vercel boilerplate -- although may have done with studying it a bit more first!
4. Create components folder, make a navbar. Note the use of Link rather than for partial reloads, so it acts like an app and avoids full page reloads
5. Create about/art/contact/tech directories and page.tsx files within.
    -   `mkdir -p src/app/{art,tech,about,contact} && touch src/app/{art,tech,about,contact}/page.tsx`
6. Make some sort of Gallery. Start with the 'Chinatown Series' and for the time being, rename images 1.jpg, 2.jpg, etc. as a placeholder
7. Discover Typescript with ESLint is like GoLang, and won't compile if there are unused imports and variables, and fix after I notice the last few commits didn't deploy.
8. Add in hero image for home page -> Will need to fix the verical scroll bar. Would be cool to put in a big p5.js animation interactive thing. 
9. Note: Oi Vey, will need to fix the sidebar on the left to disappear when on mobile.
10. Make the NavBar up top more mobile friendly, with a veggieburger and making the artist name font smaller. 
11. Hide sidebar for mobile/add to navbar dropdown on mobile
12. Digging the Rubik font: https://fonts.google.com/specimen/Rubik?categoryFilters=Feeling:%2FExpressive%2FBusiness;Sans+Serif:%2FSans%2F*
13. While I'm thinking of it, here's the initial sketched out design of the site...

![sketchbook with a pencil wireframe of the art portfolio site](public/images/ephemera/website_sketch_portfolio.jpg)

14. Adding in my art cv. I already have it as a Google Doc. 
The amount I want to reformat it by hand is "not-at-all", so how about downloading the file as markdown and working with that?
OK, Next has something called MDX, but tryng a less complex version with react-markdown. Eventually I **should** refactor to the MDX, since it will probably be the nicest way to write content in the long run. I'm curious to see if the SSR will build properly and not give an error once off my local computer. Info: https://nextjs.org/docs/app/building-your-application/configuring/mdx
15. The linter is really strict. Run `pnpm next lint` BEFORE committing to GitHub and getting a failed deploy on Vercel!
16. make gallery slideshow with white background, rather than black, so it looks more art gallery-like. Not sure if I like the slight transparency or not.
17. Actually, gallery pop up back to black. white seemed like and error. If it was a card/detail situation white would make more sense. May end up moving to the latter solution, but that will be later on.
18. I like the markdown as content idea. It separates out the concern of writing content from the code. I think I will stick with that for stand alone text. Otherwise, content will be pulled from a data object. Therefore, made a markdown renderer component and a markdown fetcher util to add into pages that need content like this.


## ------boilerplate below------------------


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
