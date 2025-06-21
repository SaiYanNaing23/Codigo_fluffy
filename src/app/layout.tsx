import type { Metadata } from "next";
import localFont from "next/font/local";
import HeaderNav from "@/components/headerNav";
import Footer from "@/components/footer";
import "./globals.css";

const fotUdMarugo = localFont({
  src: "/fonts/FOT-UDMarugo.ttf",
  variable: "--font-fot-ud-marugo",
  weight: "100 400 900",
});

export const metadata: Metadata = {
  title: "Fluffy Hugs",
  description: "Fluffy Hugs is a collection of 10,000 unique NFTs on the Ethereum blockchain, each with its own distinct personality and charm. Join the Fluffy Hugs community and experience the joy of owning a one-of-a-kind digital pet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fotUdMarugo.variable} antialiased`}
      >
        <HeaderNav/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
