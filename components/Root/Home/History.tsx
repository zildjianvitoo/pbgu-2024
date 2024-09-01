import Image from "next/image";

import React from "react";

export default function History() {
  return (
    <section className="relative flex flex-col items-center gap-6 overflow-hidden px-6 py-10 md:pb-36 md:pt-12 lg:flex-row lg:gap-y-0 lg:px-24">
      <div className="flex flex-[2] justify-center">
        <figure className="relative h-56 w-72 lg:h-[320px] lg:w-[480px]">
          <Image
            src="/images/logo-ibgu-old.png"
            fill
            alt="About Image"
            quality={100}
            className="object-contain object-center"
          />
        </figure>
      </div>
      <div className="flex-[3] space-y-6">
        <h2 className="text-3xl font-bold capitalize md:text-4xl lg:text-5xl">
          Sejarah
          <span className="text-secondary"> IBGU</span>
        </h2>
        <p className="md:text-[17px]/26">
          Musyawarah Besar pertama diadakan pada tanggal 24 Januari 2014 dengan
          hasil terpilihnya M. Satrian Duva Dama sebagai ketua umum. pada tahun
          2013 sempat diadakan Pemilihan Bujang Gadis Unsri pertama dalam
          rangkaian Dies Natalis Unsri. Lalu, pada tahun 2014 Pemilihan Bujang
          Gadis Unsri ditiadakan karena hanya diadakan 2 tahun sekali. Kemudian
          diadakan kembali pada tahun 2015 atas kerjasama 3 fakultas (Fakultas
          Ilmu Komputer, Fakultas Hukum, dan FMIPA).
        </p>
        <p className="md:text-[17px]/26">
          Berdasarkan keputusan Musyawarah Besar IBGU Pelaksanaan Pemilihan
          Bujang Gadis Unsri diadakan setiap 1 tahun sekali dengan jumlah
          anggota terpilih sebanyak 30 orang. Tercatat anggota IBGU berjumlah
          222 orang dengan total 8 angkatan.
        </p>
      </div>
    </section>
  );
}
