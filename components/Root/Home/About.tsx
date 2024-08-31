import Image from "next/image";

type Props = {};

export default function About({}: Props) {
  return (
    <section
      id="tentang-bgu"
      className="relative flex flex-col items-center gap-y-6 overflow-hidden px-6 py-20 md:py-36 md:pb-12 lg:flex-row lg:gap-y-0 lg:px-24"
    >
      <div className="order-2 flex-1 space-y-6 lg:order-1">
        <h2 className="text-3xl font-bold capitalize md:text-4xl lg:text-5xl">
          Perkenalkan Kami Dari{" "}
          <span className="text-secondary">IBG UNSRI!</span>
        </h2>
        <p className="md:text-lg">
          Ikatan Bujang Gadis Universitas Sriwijaya merupakan organisasi yang
          berada di tingkat Universitas Sriwijaya yang didirikan pada tanggal 21
          Januari 2013. Organisasi ini digagasi oleh anggota Bujang Gadis
          Universitas Sriwijaya tahun 2015
        </p>
      </div>
      <div className="order-1 flex flex-1 justify-center lg:order-2 lg:justify-end">
        <figure className="relative h-56 w-72 lg:h-[320px] lg:w-[480px]">
          <Image
            src="/images/logo-ibgu.png"
            fill
            alt="About Image"
            className="object-contain object-center"
          />
        </figure>
      </div>
    </section>
  );
}
