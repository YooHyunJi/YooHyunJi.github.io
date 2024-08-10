import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/common/Navbar/Navbar";
import ThemeToggleButton from "@/components/common/ThemeToggleButton/ThemeToggleButton";

export const metadata: Metadata = {
  title: "LINZY's Blog",
  description: "알고리즘, 취업 일기 등 다양한 내용을 올립니다",
};

const pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable} scrollbar-hide`}>
      <body className={pretendard.className}>
        <Navbar />
        <div className="w-dvw h-full bg-custom-white mx-auto pt-[5rem] pb-[2rem]">
          {children}
        </div>
        <ThemeToggleButton />
      </body>
    </html>
  );
}
