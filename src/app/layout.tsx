import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

const inter = localFont({
  src: "./fonts/InterVariableFont.ttf",
  variable: "--font-inter",
  weight: "100 900",
});

const sourceSans = localFont({
  src: "./fonts/SourceSans3VariableFont.ttf",
  variable: "--font-source-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Eh Web",
  description: "Agence de création d'applications web & mobiles basée à Arras",
  keywords: [
    "agence web",
    "développeur web",
    "Arras",
    "arrageois",
    "Lille",
    "région lilloise",
    "webdesign",
    "webdesigner",
    "création de sites internet",
    "création de sites web",
    "applications mobiles",
    "développement d'applications mobiles sur mesure",
    "responsive",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${sourceSans.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
