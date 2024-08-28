import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/provider/Providers";
import { montserrat, nexaScript } from "@/public/fonts";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Pemilihan Bujang Gadis UNSRI",
  description: "Website Pemilihan Bujang Gadis Universitas Sriwijaya",
  icons: {
    icon: "/logo-ibgu.png",
    shortcut: "/logo-ibgu.png",
    apple: "/logo-ibgu.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} ${nexaScript.variable}`}>
        <Toaster richColors position="top-right" theme="light" />
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
