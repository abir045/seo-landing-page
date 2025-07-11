import { Geist, Geist_Mono, Manrope } from "next/font/google";
import "./globals.css";
import { degularDemo } from "./fonts";
import { Inter } from "next/font/google";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
});
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

export const metadata = {
  title: "Seo Landing Page",
  description: "Seo Landing Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${degularDemo.variable} ${inter.variable} ${manrope.variable}  antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
