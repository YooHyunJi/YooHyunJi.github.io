import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/common/Navbar/Navbar";
import ThemeToggleButton from "@/components/common/ThemeToggleButton/ThemeToggleButton";

export const metadata: Metadata = {
  title: "LINZY's Blog",
  description: "알고리즘, 취업 일기 등 다양한 내용을 올립니다",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="w-full h-full">
      <body className="flex">
        <Navbar />
        <div className="w-full">{children}</div>
        <ThemeToggleButton />
      </body>
    </html>
  );
}
