import About from "@/components/Root/Home/About";
import Hero from "@/components/Root/Home/Hero";
import HeroAnimate from "@/components/Root/Home/HeroAnimate";
import Timeline from "@/components/Root/Home/Timeline";
import TnC from "@/components/Root/Home/TnC";
import React from "react";

type Props = {};

export default function Home({}: Props) {
  return (
    <>
      <Hero />
      <About />
      <TnC />
      <Timeline />
    </>
  );
}
