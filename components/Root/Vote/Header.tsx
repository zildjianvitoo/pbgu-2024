"use client";

type Props = {};

export default function Header({}: Props) {
  return (
    <div className="flex flex-col items-center space-y-6 px-6 pt-6 text-center lg:pt-0">
      <div className="space-y-3">
        <h1 className="text-5xl font-bold text-background lg:text-6xl">
          VOTE PESERTA <span className="text-secondary">BGU</span>
        </h1>
        <p className="text-background">
          Ayo Segera Vote Calon Anggota BGU Pilihan Anda!
        </p>
      </div>
    </div>
  );
}
