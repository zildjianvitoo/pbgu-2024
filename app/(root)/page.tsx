import About from "@/components/Root/Home/About";
import Hero from "@/components/Root/Home/Hero";
import History from "@/components/Root/Home/History";
import Timeline from "@/components/Root/Home/Timeline";
import TnC from "@/components/Root/Home/TnC";
import React from "react";

type Props = {};

export default function Home({}: Props) {
  return (
    <>
      <Hero />
      <About />
      <History />
      <TnC />
      <Timeline />
    </>
  );
}
