"use client";

import SearchActivities from "./SearchActivities";

type Props = {};

export default function Header({}: Props) {
  return (
    <div className="flex flex-col items-center space-y-6 px-6 pt-6 lg:pt-0">
      <div className="space-y-3">
        <h1 className="text-5xl font-bold text-background lg:text-6xl">
          Kegiatan <span className="text-secondary">BGU</span>
        </h1>
        <p className="text-background">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <SearchActivities />
    </div>
  );
}
