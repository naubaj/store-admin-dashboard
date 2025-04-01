# E-Commerce Admin Dashboard

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

Full Stack E-Commerce Store - Next.js App Router, React, Tailwind Prism, MySQL

Includes: Clerk (Login), Stripe (Payments), Cloudinary (Image bucket), Neon (Database), NextJS, Tailwind, Shadcn

## Getting Started

Install dependencies:

```
npm install
```

Update `.env` file

```
FRONTEND_STORE_URL=http://localhost:3001

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY= // Key from Clerk
CLERK_SECRET_KEY= // Secret key from Clerk

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/

# Cloudinary // Image Hosting service
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME= // name of your bucket
NEXT_PUBLIC_CLOUDINARY_API_KEY= // API key for Cloudinary
CLOUDINARY_API_SECRET= // secret key for Cloudinary

# Stripe
STRIPE_API_KEY= // API key for Stripe
STRIPE_WEBHOOK_SECRET= // Webhook secret for Stripe


# NEON
DATABASE_URL= // Database URL

```

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
