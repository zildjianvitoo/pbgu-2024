import { Input } from "@/components/ui/input";
import { UserPersonalInfoType } from "@/lib/types/user-personal-info";
import { cn } from "@/lib/utils";

interface PersonalInfoProps {
  personalInfo: UserPersonalInfoType;
}

export default function PersonalInfo({ personalInfo }: PersonalInfoProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6 rounded-xl bg-white p-6 outline outline-transparent",
      )}
    >
      <div className="flex flex-col justify-between gap-y-6 lg:flex-row lg:items-center lg:gap-y-0">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-primary lg:text-3xl">
            Data Pribadi Peserta
          </h2>
        </div>
      </div>

      <div className="flex w-full flex-col gap-6 lg:flex-row">
        <div className="flex-1">
          <p className="font-semibold">Tinggi Badan</p>

          <Input
            disabled
            value={personalInfo?.height}
            className="border-foreground disabled:border-foreground/5 disabled:opacity-100"
            placeholder="Tinggi Badan anda (cm)"
          />
        </div>

        <div className="flex-1">
          <p className="font-semibold">Berat Badan</p>

          <Input
            disabled
            value={personalInfo?.weight}
            className="border-foreground disabled:border-foreground/5 disabled:opacity-100"
            placeholder="Berat Badan anda (Kg)"
          />
        </div>
      </div>
      <div className="flex w-full flex-col gap-6 lg:flex-row">
        <div className="flex-1">
          <p className="font-semibold">Bahasa Asing yang di kuasai</p>

          <Input
            disabled
            value={personalInfo?.foreign_language}
            className="border-foreground disabled:border-foreground/5 disabled:opacity-100"
            placeholder="Bahasa Asing yang anda kuasai (opsional)"
          />
        </div>

        <div className="flex-1">
          <p className="font-semibold">Hobby</p>

          <Input
            disabled
            value={personalInfo?.hobby}
            className="border-foreground disabled:border-foreground/5 disabled:opacity-100"
            placeholder="Daftar Hobby anda"
          />
        </div>
      </div>
      <div className="flex w-full flex-col gap-6 lg:flex-row">
        <div className="flex-1">
          <p className="font-semibold">Nama Ayah Kandung</p>

          <Input
            disabled
            value={personalInfo?.father}
            className="border-foreground disabled:border-foreground/5 disabled:opacity-100"
            placeholder="Nama Ayah Kandung anda"
          />
        </div>

        <div className="flex-1">
          <p className="font-semibold">Nama Ibu Kandung</p>

          <Input
            disabled
            value={personalInfo?.mother}
            className="border-foreground disabled:border-foreground/5 disabled:opacity-100"
            placeholder="Nama Ibu Kandung anda"
          />
        </div>
      </div>
      <div className="flex w-full flex-col gap-6 lg:flex-row">
        <div className="flex-1">
          <p className="font-semibold">Pekerjaan Orang Tua</p>

          <Input
            disabled
            value={personalInfo?.parents_job}
            className="border-foreground disabled:border-foreground/5 disabled:opacity-100"
            placeholder="Pekerjaan Ibu/Ayah anda"
          />
        </div>

        <div className="flex-1">
          <p className="font-semibold">Nomor Telepon Orang Tua</p>

          <Input
            disabled
            value={personalInfo?.parents_phone_number}
            className="border-foreground disabled:border-foreground/5 disabled:opacity-100"
            placeholder="Nomor telepon salah satu dari kedua orang tua anda"
          />
        </div>
      </div>

      <div className="flex-1">
        <p className="font-semibold">Alamat Orang Tua</p>

        <Input
          disabled
          value={personalInfo?.parents_address}
          className="border-foreground disabled:border-foreground/5 disabled:opacity-100"
          placeholder="Alamat tempat tinggal orang tua anda"
        />
      </div>
    </div>
  );
}
