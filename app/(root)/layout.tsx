import Footer from "@/components/Root/Footer";
import Navbar from "@/components/Root/Navbar";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function ClientRootLayout({ children }: Props) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
