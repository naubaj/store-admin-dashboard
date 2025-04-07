# Store Admin Dashboard

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

Full Stack Store Admin Dashboard - Next.js App Router, React, Tailwind Prism, MySQL

Includes: Clerk (Login), Stripe (Payments), Cloudinary (Image host), Neon (Database), NextJS, Tailwind, Shadcn

## Getting Started

Install dependencies:

```
npm install
```

Create an `.env` file containing:

`FRONTEND_STORE_URL`

- Domain for the front end
- For local instances it would be `http://localhost:3001` for example

`NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`

- Key from Clerk as this project uses Clerk to handle Sign Up / Login

`CLERK_SECRET_KEY`

- Secret Key from Clerk

`NEXT_PUBLIC_CLERK_SIGN_IN_URL`, `NEXT_PUBLIC_CLERK_SIGN_UP_URL`, `NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL`, `NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL`

- Defines routes that re-direct user after login/sign-up
- `NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in` Defines where you specified the sign-in page for your project, project sign in is `app/(auth)/(routes)/sign-in`
- `NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up` Defines where you specified the signup page for your project, project sign in is `app/(auth)/(routes)/sign-up`
- `NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/`, `NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/` Defines where you want to be re-directed to after logging in / signing up

`NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`

- Name of Cloudinary bucket

`NEXT_PUBLIC_CLOUDINARY_API_KEY`

- API Key from Cloudinary as this project uses it to store images

`CLOUDINARY_API_SECRET`

- Secret Key from Cloudinary

`STRIPE_API_KEY`

- API Key from Stripe used to handle purchases

`STRIPE_WEBHOOK_SECRET`

- Webhook secret as we use stripe to handle purchases

`DATABASE_URL`

- Database for the URL
- Project uses Neon for the database, update to suit your methods

After, run the development server:

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

# Credits

## Images used

### Billboards

Photo by <a href="https://unsplash.com/@codioful?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Codioful (Formerly Gradienta)</a> on <a href="https://unsplash.com/photos/blue-and-yellow-digital-wallpaper-QWutu2BRpOs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

Photo by <a href="https://unsplash.com/@codioful?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Codioful (Formerly Gradienta)</a> on <a href="https://unsplash.com/photos/blue-and-black-digital-wallpaper-bKESVqfxass?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

Photo by <a href="https://unsplash.com/@codioful?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Codioful (Formerly Gradienta)</a> on <a href="https://unsplash.com/photos/brown-and-white-wooden-table-oPC-b39ZuzE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

### Products

Photo by <a href="https://unsplash.com/@uyk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Haryo Setyadi</a> on <a href="https://unsplash.com/photos/white-crew-neck-t-shirt-acn5ERAeSb4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

Photo by <a href="https://unsplash.com/@mediamodifier?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Mediamodifier</a> on <a href="https://unsplash.com/photos/man-in-white-crew-neck-t-shirt-standing-on-green-grass-field-during-daytime-ogmenj2NGho?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

Photo by <a href="https://unsplash.com/@tamixes?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Tami Mitchell</a> on <a href="https://unsplash.com/photos/an-abstract-painting-of-blue-and-white-colors-RoH3VzX2t5k?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

Photo by <a href="https://unsplash.com/@verf_leechaewon?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Chaewon Lee</a> on <a href="https://unsplash.com/photos/red-and-black-abstract-painting-VfhoKbFv16Y?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
