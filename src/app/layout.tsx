import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/common/Navbar/Navbar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="w-full h-full">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
