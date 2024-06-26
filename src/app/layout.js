import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import TransitionProvider from "@/components/transitionProvider";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nick's portfolio",
  description: "Best portfolio ever",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvider>
          {children}
        </TransitionProvider>
        <Analytics />
      </body>
    </html>
  );
}
