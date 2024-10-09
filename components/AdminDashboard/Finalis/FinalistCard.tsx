"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import Link from "next/link";
import DeleteModal from "../DeleteModal";
import { FinalistType } from "@/lib/types/finalist";
import { deleteFinalist } from "@/lib/network/finalist";

interface FinalistCardProps {
  participant: FinalistType;
}

export function FinalistCard({ participant }: FinalistCardProps) {
  const position = participant.gender === "laki-laki" ? "putera" : "puteri";

  return (
    <Dialog key={participant.id}>
      <DialogTrigger className="relative aspect-[3/4] w-full origin-bottom overflow-hidden rounded-xl border-2 border-primary transition-all duration-300 hover:-translate-y-2 hover:bg-primary hover:drop-shadow-xl md:h-64">
        <Image
          src={participant.image}
          fill
          alt={participant.name + " Picture"}
          className="z-10 object-cover object-center"
        />

        <div className="absolute bottom-0 z-10 w-full bg-primary/80 px-3 py-1.5 text-start">
          <p className="font-evogria text-sm text-secondary">
            Calon {position}
          </p>
          <p className="font-medium text-white lg:text-lg">
            {participant.name}
          </p>
        </div>
      </DialogTrigger>
      <DialogContent className="flex gap-9 bg-slate-100 lg:min-w-[600px]">
        <figure className="relative h-64 w-52 flex-shrink-0 overflow-hidden rounded-lg border-2 border-primary bg-primary/20">
          <Image
            src={participant.image}
            fill
            className="object-cover object-center"
            alt={participant.name}
          />
        </figure>
        <ScrollArea className="relative h-64 flex-grow overflow-hidden pb-8">
          <p className="font-evogria text-tertiary text-lg">Calon {position}</p>
          <p className="text-2xl font-medium text-primary">
            {participant.name}
          </p>
          {participant.detail ? (
            <div
              className="prose-sm mt-3 lg:prose lg:mt-6"
              dangerouslySetInnerHTML={{ __html: participant.detail }}
            />
          ) : (
            <div>No Detail</div>
          )}
          <div className="absolute bottom-0 right-0 mt-6 flex gap-3">
            <Link href={"/admin-dashboard/finalis/ubah/" + participant.id}>
              <Button size="sm" className="rounded-full px-6" variant="outline">
                UPDATE
              </Button>
            </Link>

            <DeleteModal
              params={participant.id}
              deleteFunction={deleteFinalist}
              queryKey={["finalists"]}
            >
              <Button size="sm" className="rounded-full px-6">
                DELETE
              </Button>
            </DeleteModal>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
