This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Local Development

In your Auth0 app's settings, set the following
- Application Type: `Single Page Application`
- Allowed Callback URLs: `http://localhost:3000`
- Allowed Logout URLs: `http://localhost:3000`
- Allowed Web Origins: `http://localhost:3000`

Under "Credentials" set the Authentication Method from "Post" to "None".

In your `.env.local` set the following found in your Auth0 app's settings
- NEXT_PUBLIC_AUTH0_DOMAIN=<Basic Information - Domain>
- NEXT_PUBLIC_AUTH0_CLIENTID=<Basic Information - Client ID>
- NEXT_PUBLIC_AUTH0_CALLBACK=http://localhost:3000

## Deploy on Kinsta
This project has been set up to [export a static site](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports).  

In your Auth0 app's settings, extend the following with your app's domain
- Allowed Callback URLs
- Allowed Logout URLs
- Allowed Web Origins

In your Static Site environment variables set the following found in your Auth0 app's settings
- NEXT_PUBLIC_AUTH0_DOMAIN=<Basic Information - Domain>
- NEXT_PUBLIC_AUTH0_CLIENTID=<Basic Information - Client ID>
- NEXT_PUBLIC_AUTH0_CALLBACK=<Your app's domain>
