"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import { RecoilRoot } from "recoil";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Polar-Star: 여러분의 진로를 함께해요",
//   description: "여러분들의 진로를 함께해요",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <RecoilRoot>
        <body className={inter.className}>{children}</body>
      </RecoilRoot>
    </html>
  );
}
