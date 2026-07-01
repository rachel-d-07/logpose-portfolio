import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "LogPose | AI & ML Engineer Portfolio",
  description:
    "MSc Artificial Intelligence & Machine Learning student navigating the Grand Line of AI.",
  authors: [{ name: "Rachel" }],
  openGraph: {
    title: "LogPose | AI & ML Engineer Portfolio",
    description: "Navigating the Grand Line of Artificial Intelligence",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
  <Navbar />
  {children}
</body>
    </html>
);
}
