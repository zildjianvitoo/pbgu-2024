"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { useState } from "react";

type Props = {
  question: {
    number: number;
    question: string;
  };
  index: number;
};

export default function QuestionCard({ index, question }: Props) {
  const [open, setOpen] = useState(false);
  const [opened, setOpenend] = useState(false);

  return (
    <Dialog key={index} open={open} onOpenChange={setOpen}>
      <DialogTrigger
        onClick={() => setOpenend(true)}
        className={cn(
          "group relative flex h-56 w-full origin-bottom flex-col items-center justify-center overflow-hidden rounded-xl border-2 border-primary bg-red-700 shadow-xl transition-all duration-300 hover:scale-[102%] hover:shadow-xl",
          { "opacity-0": opened },
        )}
        disabled={opened}
      >
        <h1 className="text-8xl font-bold text-white">{question.number}</h1>
      </DialogTrigger>
      <DialogContent className="bg-orange-100 lg:min-w-[680px]">
        <h1 className="text-2xl font-bold">{question.question}</h1>
      </DialogContent>
    </Dialog>
  );
}
