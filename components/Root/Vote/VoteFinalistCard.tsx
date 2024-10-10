"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import { FinalistType } from "@/lib/types/finalist";
import VoteForm from "./VoteForm";
import { useState } from "react";

interface VoteFinalistCardProps {
  finalist: FinalistType;
}

export function VoteFinalistCard({ finalist }: VoteFinalistCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog key={finalist.id} open={open} onOpenChange={setOpen}>
      <DialogTrigger className="group relative flex aspect-[3/4] w-full origin-bottom flex-col overflow-hidden rounded-xl border-2 border-primary transition-all duration-300 hover:scale-[102%] hover:shadow-xl">
        <figure className="relative h-full w-full">
          <Image
            src={finalist.image}
            fill
            alt={finalist.name + " Picture"}
            className="object-cover object-top"
          />
        </figure>
        <div className="absolute flex h-full w-full -translate-y-full flex-col items-center justify-center bg-primary transition-all duration-300 group-hover:translate-y-0">
          <p className="text-lg text-slate-200">CLICK TO VOTE</p>
          <p className="font-evogria text-center text-2xl text-secondary">
            {finalist.name}
          </p>
        </div>

        <div className="absolute left-0 top-0 z-10 rounded-br-xl bg-primary px-2 py-2">
          <span className="font-evogria text-2xl text-secondary transition-all duration-300 group-hover:rotate-6 group-hover:text-white md:text-3xl">
            {finalist.number}
          </span>
        </div>

        <div className="w-full flex-shrink-0 bg-primary px-3 py-3 text-start">
          <p className="font-evogria text-center text-lg text-secondary">
            {finalist.name}
          </p>
        </div>
      </DialogTrigger>
      <DialogContent className="bg-orange-100 lg:min-w-[680px]">
        <VoteForm finalist={finalist} setOpenChange={setOpen} />
      </DialogContent>
    </Dialog>
  );
}
