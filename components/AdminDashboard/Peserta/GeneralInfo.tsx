import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { UserGeneralInfoType } from "@/lib/types/user-general-info";
import { cn } from "@/lib/utils";

type GeneralInfoProps = {
  generalInfo: UserGeneralInfoType;
};

export default function GeneralInfo({ generalInfo }: GeneralInfoProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6 rounded-xl bg-white p-6 outline outline-transparent",
      )}
    >
      <div className="flex flex-col justify-between gap-y-6 lg:flex-row lg:items-center lg:gap-y-0">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-primary lg:text-3xl">
            Data Umum Peserta
          </h2>
        </div>
      </div>

      <div className="flex w-full flex-col gap-6 lg:flex-row">
        <div className="flex-1">
          <p className="font-semibold">Nama Lengkap</p>
          <Input
            disabled
            value={generalInfo?.fullname}
            className="border-foreground disabled:border-foreground/5 disabled:opacity-100"
          />
        </div>

        <div className="flex-1">
          <p className="font-semibold">Alias / Nama Panggilan</p>
          <Input
            disabled
            value={generalInfo?.alias}
            className="border-foreground disabled:border-foreground/5 disabled:opacity-100"
          />
        </div>
      </div>
      <div className="flex w-full flex-col gap-6 lg:flex-row">
        <div className="flex-1">
          <p className="font-semibold">NIM</p>
          <Input
            disabled
            value={generalInfo?.nim}
            className="border-foreground disabled:border-foreground/5 disabled:opacity-100"
            placeholder="Isi NIM perkuliahan anda di UNSRI"
          />
        </div>

        <div className="flex-1">
          <p className="font-semibold">Prodi/Jurusan</p>
          <Input
            disabled
            value={generalInfo?.major}
            className="border-foreground disabled:border-foreground/5 disabled:opacity-100"
            placeholder="Isi Prodi dan Jurusan anda"
          />
        </div>
      </div>
      <div className="flex w-full flex-col gap-6 lg:flex-row">
        <div className="flex-1">
          <p className="font-semibold">Tempat / Tanggal Lahir</p>
          <Input
            disabled
            value={generalInfo?.birth}
            className="border-foreground disabled:border-foreground/5 disabled:opacity-100"
            placeholder="Isi Tempat / Tanggal Lahir anda"
          />
        </div>

        <div className="flex-1">
          <p className="font-semibold">Usia</p>
          <Input
            disabled
            value={generalInfo?.age}
            className="border-foreground disabled:border-foreground/5 disabled:opacity-100"
            placeholder="Usia anda saat mendaftar"
          />
        </div>
      </div>
      <div className="flex w-full flex-col gap-6 lg:flex-row">
        <div className="flex-1">
          <p className="font-semibold">Jenis Kelamin</p>
          <Input
            disabled
            value={generalInfo?.gender}
            className="border-foreground disabled:border-foreground/5 disabled:opacity-100"
            placeholder="Usia anda saat mendaftar"
          />
        </div>

        <div className="flex-1">
          <p className="font-semibold">Alamat</p>
          <Input
            disabled
            value={generalInfo?.address}
            className="border-foreground disabled:border-foreground/5 disabled:opacity-100"
            placeholder="Alamat tempat tinggal anda"
          />
        </div>
      </div>
      <Separator />
      <div className="flex w-full flex-col gap-6 lg:flex-row">
        <div className="flex-1">
          <p className="font-semibold">Nomor Telepon</p>
          <Input
            disabled
            value={generalInfo?.phone_number}
            className="border-foreground disabled:border-foreground/5 disabled:opacity-100"
            placeholder="Nomor Telepon/Whatsapp anda"
          />
        </div>

        <div className="flex-1">
          <p className="font-semibold">E-mail</p>
          <Input
            disabled
            value={generalInfo?.email}
            className="border-foreground disabled:border-foreground/5 disabled:opacity-100"
            placeholder="Email aktif anda"
          />
        </div>
      </div>
      <div className="flex w-full flex-col gap-6 lg:flex-row">
        <div className="flex-1">
          <p className="font-semibold">ID Line</p>
          <Input
            disabled
            value={generalInfo?.line}
            className="border-foreground disabled:border-foreground/5 disabled:opacity-100"
            placeholder="ID Line anda"
          />
        </div>

        <div className="flex-1">
          <p className="font-semibold">Username Facebook</p>
          <Input
            disabled
            value={generalInfo?.facebook}
            className="border-foreground disabled:border-foreground/5 disabled:opacity-100"
            placeholder="Username Akun Facebook anda"
          />
        </div>
      </div>

      <div className="flex-1">
        <p className="font-semibold">Username Instagram</p>
        <Input
          disabled
          value={generalInfo?.instagram}
          className="border-foreground disabled:border-foreground/5 disabled:opacity-100"
          placeholder="Username Akun Instagram anda"
        />
      </div>
    </div>
  );
}
