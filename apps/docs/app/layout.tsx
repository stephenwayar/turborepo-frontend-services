import "./globals.css";
import { favicon } from '@repo/ui'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Docs App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={favicon.src} type="image/x-icon" />
      </head>

      <body>
        {children}
      </body>
    </html>
  );
}
