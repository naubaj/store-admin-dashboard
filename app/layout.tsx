import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import {
  ClerkProvider,
  // SignInButton,
  // SignUpButton,
  // SignedOut,
  // SignedIn,
  // UserButton,
} from "@clerk/nextjs";

import { ModalProvider } from "@/providers/modal-provider";
import { ToasterProvider } from "@/providers/toast-provider";
import { ThemeProvider } from "@/providers/theme-provider";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <header className="flex justify-end items-center ">
              {/* <div className="p-2 gap-4">
              <SignedOut>
                <SignInButton />
                <SignUpButton />
              </SignedOut>
            </div> */}

              {/* <SignedIn>
              <UserButton />
            </SignedIn> */}
            </header>
            <ToasterProvider />
            <ModalProvider />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
