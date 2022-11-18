This is a [Next.js](https://nextjs.org/) and Typescript project.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The `pages/` directory contains the pages present in this application. Folder structure is generic Nextjs structure.

The `public/` directory contains all public entities such as images, icons, favicons, etc used in the application.

## Components

The `src/` directory contains all the components, functions, styling, etc.

The `views/` directory under `src/` contains components which are rendered for the users. Each `view` is further divided into components, functions (which contains API calls, functions being used in the components, etc), constants, css file for that particular component, and interface file.

The `common/` directory contains common reusable components, constants, interfaces, widgets, etc.

## Styling

Most of the stylings are done through TailwindCSS, while stylings which require animations are done with module css files.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
