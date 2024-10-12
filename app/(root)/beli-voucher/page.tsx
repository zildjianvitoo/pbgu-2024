import FinalistList from "@/components/Root/Vote/FinalistList";
import Header from "@/components/Root/BeliVoucher/Header";
import Image from "next/image";

export default function Vote() {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden py-20 md:py-40">
        <Image
          src="/images/bg-hero.png"
          alt="bg hero"
          fill
          className="absolute -z-20 object-cover"
          loading="eager"
        />
        <Image
          src="/images/texture.png"
          alt="texture"
          fill
          className="absolute object-cover opacity-10"
          loading="eager"
        />
        <Header />
      </section>
    </>
  );
}
