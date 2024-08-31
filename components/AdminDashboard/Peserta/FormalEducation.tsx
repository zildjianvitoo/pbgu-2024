import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { UserFormalEducationType } from "@/lib/types/user-formal-education";
import { RiSchoolFill } from "react-icons/ri";
import { FaSchoolFlag } from "react-icons/fa6";
import { FaSchool } from "react-icons/fa";

interface FormalEducationProps {
  formalEducation: UserFormalEducationType;
}

export default function FormalEducation({
  formalEducation,
}: FormalEducationProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6 rounded-xl bg-white p-6 outline outline-transparent",
      )}
    >
      <div className="flex flex-col justify-between gap-y-6 lg:flex-row lg:items-center lg:gap-y-0">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-primary lg:text-3xl">
            Data Pendidikan Formal
          </h2>
        </div>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <div className="flex w-[440px] items-center gap-3 font-semibold text-primary">
            <RiSchoolFill className="size-7" /> Sekolah Dasar (SD)
          </div>
          <div className="flex flex-col gap-6 lg:flex-row">
            <div className="flex-[2]">
              <Input
                disabled
                value={formalEducation.elementary}
                className="border-foreground disabled:border-foreground/5 disabled:opacity-100"
                placeholder="Nama Sekolah Dasar anda"
              />
            </div>

            <div className="flex flex-[1] gap-6">
              <div className="flex-[1]">
                <Input
                  disabled
                  value={formalEducation.elementary_in}
                  className="border-foreground disabled:border-foreground/5 disabled:opacity-100"
                  placeholder="Tahun Masuk SD"
                />
              </div>

              <div className="flex-[1]">
                <Input
                  disabled
                  value={formalEducation.elementary_out}
                  className="border-foreground disabled:border-foreground/5 disabled:opacity-100"
                  placeholder="Tahun Lulus SD"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="flex w-[440px] items-center gap-3 font-semibold text-primary">
            <FaSchool className="size-7" /> Sekolah Mengah Pertama (SMP)
          </div>
          <div className="flex flex-col gap-6 lg:flex-row">
            <div className="flex-[2]">
              <Input
                disabled
                value={formalEducation.junior}
                className="border-foreground disabled:border-foreground/5 disabled:opacity-100"
                placeholder="Nama Sekolah Mengah Pertama (SMP)"
              />
            </div>

            <div className="flex flex-[1] gap-6">
              <div className="flex-[1]">
                <Input
                  disabled
                  value={formalEducation.junior_in}
                  className="border-foreground disabled:border-foreground/5 disabled:opacity-100"
                  placeholder="Tahun Masuk SMP"
                />
              </div>

              <div className="flex-[1]">
                <Input
                  disabled
                  value={formalEducation.junior_out}
                  className="border-foreground disabled:border-foreground/5 disabled:opacity-100"
                  placeholder="Tahun Lulus SMP"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="flex w-[440px] items-center gap-3 font-semibold text-primary">
            <FaSchoolFlag className="size-7" /> Sekolah Mengah Atas (SMA)
          </div>
          <div className="flex flex-col gap-6 lg:flex-row">
            <div className="flex-[2]">
              <Input
                disabled
                value={formalEducation.senior}
                className="border-foreground disabled:border-foreground/5 disabled:opacity-100"
                placeholder="Nama Sekolah Mengah Atas (SMA)"
              />
            </div>

            <div className="flex flex-[1] gap-6">
              <div className="flex-[1]">
                <Input
                  disabled
                  value={formalEducation.senior_in}
                  className="border-foreground disabled:border-foreground/5 disabled:opacity-100"
                  placeholder="Tahun Masuk SMA"
                />
              </div>

              <div className="flex-[1]">
                <Input
                  disabled
                  value={formalEducation.senior_out}
                  className="border-foreground disabled:border-foreground/5 disabled:opacity-100"
                  placeholder="Tahun Lulus SMA"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
