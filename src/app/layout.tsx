import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Créer un Site avec GLM - Guide Complet pour Débutants",
  description: "Apprenez à créer votre site web en 5 minutes avec GLM de z.ai, GitHub et Vercel. Guide étape par étape pour débutants sans connaissance technique.",
  keywords: ["créer site web", "GLM", "z.ai", "GitHub", "Vercel", "guide débutant", "IA", "déployer site", "Next.js"],
  authors: [{ name: "Minher0" }],
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Créer un Site avec GLM - Guide Complet",
    description: "Apprenez à créer votre site web en 5 minutes avec GLM de z.ai, GitHub et Vercel.",
    url: "https://explique-comment-faire-un-site.vercel.app",
    siteName: "Créer un Site avec GLM",
    type: "website",
    images: ["/icon.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Créer un Site avec GLM - Guide Complet",
    description: "Apprenez à créer votre site web en 5 minutes avec GLM de z.ai, GitHub et Vercel.",
    images: ["/icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
