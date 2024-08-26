import localFont from "next/font/local";
import { Montserrat } from "next/font/google";

export const montserrat = Montserrat({ subsets: ["latin"] });
export const nexaScript = localFont({
  src: [
    {
      path: "./Nexa-Script-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./Nexa-Script-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./Nexa-Script-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Nexa-Script-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./Nexa-Script-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-nexaScript",
});
