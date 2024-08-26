import { HeroParallax } from "@/components/ui/hero-parallax";
import React from "react";

type Props = {};
const heroImages = [
  {
    title: "Moonbeam",
    link: "#",
    thumbnail: "/images/hero.svg",
  },
  {
    title: "Moonbeam",
    link: "#",
    thumbnail: "/images/hero.svg",
  },
  {
    title: "Moonbeam",
    link: "#",
    thumbnail: "/images/hero.svg",
  },
  {
    title: "Moonbeam",
    link: "#",
    thumbnail: "/images/hero.svg",
  },
];

export default function HeroAnimate({}: Props) {
  return (
    <>
      <HeroParallax products={heroImages} />
    </>
  );
}
