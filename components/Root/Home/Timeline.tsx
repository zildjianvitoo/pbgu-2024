"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const timelineData = [
  {
    title: "Close Registration",
    content: (
      <p className="text-xl font-bold text-secondary md:text-end lg:text-2xl">
        8 Oktober
      </p>
    ),
  },
  {
    title: "Technical Meeting & Foto Composite",
    content: (
      <p className="text-xl font-bold text-secondary md:text-end lg:text-2xl">
        10 Oktober
      </p>
    ),
  },
  {
    title: "Tes Tertulis",
    content: (
      <p className="text-xl font-bold text-secondary md:text-end lg:text-2xl">
        11 Oktober
      </p>
    ),
  },
  {
    title: "Walk in Interview",
    content: (
      <p className="text-xl font-bold text-secondary md:text-end lg:text-2xl">
        12 Oktober
      </p>
    ),
  },
  {
    title: "Pengumuman Hasil Tes Tertulis & WII",
    content: (
      <p className="text-xl font-bold text-secondary md:text-end lg:text-2xl">
        14 Oktober
      </p>
    ),
  },
  {
    title: "Pra-Semifinal",
    content: (
      <p className="text-xl font-bold text-secondary md:text-end lg:text-2xl">
        15 Oktober <span className="text-[#d0ab44]">s/d</span>
        <br /> 18 Oktober
      </p>
    ),
  },
  {
    title: "Grand Semifnal",
    content: (
      <p className="text-xl font-bold text-secondary md:text-end lg:text-2xl">
        19 Oktober
      </p>
    ),
  },
  {
    title: "Gathering",
    content: (
      <p className="text-xl font-bold text-secondary md:text-end lg:text-2xl">
        20 Oktober
      </p>
    ),
  },
  {
    title: "Karantina",
    content: (
      <p className="text-xl font-bold text-secondary md:text-end lg:text-2xl">
        21 Oktober <span className="text-[#d0ab44]">s/d</span>
        <br />
        25 Oktober
      </p>
    ),
  },
  {
    title: "Latihan Bakat",
    content: (
      <p className="text-xl font-bold text-secondary md:text-end lg:text-2xl">
        21 Oktober
      </p>
    ),
  },
  {
    title: "Talent Show",
    content: (
      <p className="text-xl font-bold text-secondary md:text-end lg:text-2xl">
        22 Oktober
      </p>
    ),
  },
  {
    title: "Gladi Resik Grandfinal",
    content: (
      <p className="text-xl font-bold text-secondary md:text-end lg:text-2xl">
        25 Oktober
      </p>
    ),
  },
  {
    title: "Grandfinal",
    content: (
      <p className="text-xl font-bold text-secondary md:text-end lg:text-2xl">
        26 Oktober
      </p>
    ),
  },
];

export default function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <section id="timeline">
      <div
        className="flex w-full flex-col gap-8 bg-primary/5 bg-white px-6 py-20 sm:gap-12 md:py-24 lg:flex-row lg:px-24"
        ref={containerRef}
      >
        <div className="flex-[2] space-y-6 lg:mt-32">
          <h2 className="text-3xl font-bold capitalize md:text-4xl lg:text-5xl">
            Timeline{" "}
            <span className="text-secondary">
              Agenda <br />
              PBGU
            </span>
          </h2>
          <p className="md:text-lg">
            Acara Pemilihan Bujang Gadis UNSRI 2024 bertujuan untuk menemukan
            dan menghargai mahasiswa-mahasiswa berbakat dan berprestasi di
            Universitas Sriwijaya. Selama acara ini, peserta akan menunjukkan
            kemampuan mereka dalam berbagai bidang, termasuk penampilan,
            keterampilan komunikasi, dan pengetahuan umum.
          </p>
          <p className="md:text-lg">
            Jangan lewatkan kesempatan untuk mendukung dan merayakan pencapaian
            mahasiswa unggulan UNSRI!
          </p>
        </div>

        <div ref={ref} className="relative max-w-7xl pb-20 lg:mx-auto">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-start pt-10 md:gap-10 md:pt-28"
            >
              <div className="sticky top-40 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-sm">
                <div className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-black md:left-3">
                  <div className="h-4 w-4 rounded-full border bg-secondary p-2" />
                </div>
                <h3 className="hidden text-xl font-bold text-secondary sm:text-3xl md:block md:pl-20 md:text-4xl">
                  {item.title}
                </h3>
              </div>

              <div className="relative w-full pl-20 pr-4 md:pl-4">
                <h3 className="block text-left text-3xl font-bold text-neutral-500 dark:text-neutral-500 md:hidden lg:mb-4">
                  {item.title}
                </h3>
                <div>{item.content}</div>
              </div>
            </div>
          ))}
          <div
            style={{
              height: height + "px",
            }}
            className="absolute left-8 top-0 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] dark:via-neutral-700 md:left-8"
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-primary from-[0%] via-secondary via-[10%] to-transparent"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
