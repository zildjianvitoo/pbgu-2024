import { FinalistType } from "@/lib/types/finalist";
import { FinalistCard } from "./FinalistCard";

export default function FinalistList({
  gender,
  finalists,
}: {
  gender: string;
  finalists: FinalistType[];
}) {
  return (
    <div className="mx-auto w-full space-y-3 lg:space-y-6">
      <div className="font-evogria flex flex-col items-center gap-3 text-center capitalize">
        <h2 className="text-2xl font-semibold text-primary md:text-3xl lg:text-4xl">
          CALON {gender}
        </h2>
        <div className="flex items-center gap-2">
          <div className="h-0.5 w-20 bg-secondary lg:w-40" />
          <div className="h-1.5 w-5 bg-primary lg:w-10" />
          <div className="h-0.5 w-20 bg-secondary lg:w-40" />
        </div>
        <h3 className="text-tertiary text-end text-3xl font-medium md:text-4xl lg:text-start lg:text-5xl">
          TAHUN {new Date().getFullYear()} /{" "}
          {Number(new Date().getFullYear()) + 1}
        </h3>
      </div>
      <div className="grid grid-cols-2 items-center justify-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:flex-row lg:gap-6 xl:grid-cols-5">
        {finalists.map((participant) => (
          <FinalistCard key={participant.id} participant={participant} />
        ))}
      </div>
    </div>
  );
}
