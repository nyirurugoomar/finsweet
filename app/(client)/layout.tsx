import type { Metadata } from "next";
import { Header,Footer } from "@/components";
import "./globals.css";



export const metadata: Metadata = {
  title: "Blog app",
  description: "blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body>
        <Header/>
          {children}
        <Footer/>
        </body>
    </html>
  );
}
