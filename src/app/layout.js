import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = "https://www.nickvandendungen.com";
const description =
  "Full-Stack Software Engineer based in Helsinki. I build React + Django systems and lead engineering at Soil Scout, where we ingest 6.5M+ telemetry records per hour.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nick van den Dungen — Full-Stack Software Engineer",
    template: "%s · Nick van den Dungen",
  },
  description,
  openGraph: {
    title: "Nick van den Dungen — Full-Stack Software Engineer",
    description,
    url: siteUrl,
    siteName: "Nick van den Dungen",
    images: ["/hero.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nick van den Dungen — Full-Stack Software Engineer",
    description,
    images: ["/hero.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
        <Analytics />
      </body>
    </html>
  );
}
