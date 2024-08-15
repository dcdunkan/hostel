import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "sonner";
import { NextUIProvider } from "@nextui-org/react";

const fixelFont = localFont({
  src: [
    { path: "../../public/fonts/FixelVariable.woff2", style: "normal" },
    { path: "../../public/fonts/FixelVariableItalic.woff2", style: "italic" },
  ],
});

export const metadata: Metadata = {
  title: "Hostels",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NextUIProvider>
      <html lang="en">
        <body className={fixelFont.className}>
          {children}
          <Toaster />
        </body>
      </html>
    </NextUIProvider>
  );
}
