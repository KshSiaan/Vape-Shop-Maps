import Navbar from "@/components/core/navbar";
import MagicButton from "@/components/magic-button";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}

      <MagicButton />
    </>
  );
}
