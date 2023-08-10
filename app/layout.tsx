import type { Metadata } from "next";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/footer/Footer";
import { dm_sans } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dm_sans.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
