import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vape Shop Maps",
  description:
    "Connect, engage, and grow your presence in the world's first all-in-one social platform made for the vape industry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
