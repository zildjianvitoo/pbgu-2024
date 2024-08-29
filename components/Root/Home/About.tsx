import Image from "next/image";

type Props = {};

export default function About({}: Props) {
  return (
    <section className="relative flex min-h-screen flex-col items-center gap-y-6 overflow-hidden px-6 py-20 md:py-36 lg:flex-row lg:gap-y-0 lg:px-24">
      <div className="order-2 flex-1 space-y-6 lg:order-1">
        <h2 className="text-3xl font-bold capitalize md:text-4xl lg:text-5xl">
          Perkenalkan Kami Dari{" "}
          <span className="text-secondary">IBG UNSRI!</span>
        </h2>
        <p className="md:text-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga,
          tenetur sequi at corporis atque beatae nulla explicabo saepe!. Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Perferendis at
          nihil quia.
        </p>
        <p className="md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum minima
          neque saepe?. Lorem ipsum dolor, sit amet consectetur adipisicing
          elit.
        </p>
      </div>
      <div className="order-1 flex flex-1 justify-center lg:order-2 lg:justify-end">
        <figure className="relative h-56 w-72 lg:h-[320px] lg:w-[480px]">
          <Image
            src="/images/icon-pbgu.png"
            fill
            alt="About Image"
            className="object-contain object-center"
          />
        </figure>
      </div>
    </section>
  );
}
