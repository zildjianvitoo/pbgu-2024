"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { CreateUserGeneralInfoType } from "@/lib/types/user-general-info";
import {
  createUserGeneralInfo,
  getUserGeneralInfoByUserId,
  updateUserGeneralInfo,
} from "@/lib/network/user-general-info";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { Pencil, Upload, XCircle } from "lucide-react";
import "@/lib/zodCustomError";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const generalSchema = z.object({
  userId: z.string().min(1),
  fullname: z.string().min(1),
  alias: z.string().min(1),
  nim: z.string().min(1),
  major: z.string().min(1),
  birth: z.string().min(1),
  age: z.string().min(1).regex(/^\d+$/, "Hanya angka yang diperbolehkan"),
  gender: z.string().min(1),
  address: z.string().min(1),
  phone_number: z
    .string()
    .min(1)
    .regex(/^\d+$/, "Hanya angka yang diperbolehkan"),
  email: z.string().min(1).email(),
  line: z.string().min(1),
  facebook: z.string().min(1),
  instagram: z.string().min(1),
});

export default function GeneralInformation() {
  const [isUpdating, setIsUpdating] = useState(false);
  const { data: session } = useSession();
  const userId = session?.user.id || "";
  const query = useQueryClient();

  const { data: userGeneralInfo } = useQuery({
    queryFn: () => getUserGeneralInfoByUserId(userId),
    queryKey: ["user-general-infos", userId],
  });

  const form = useForm<z.infer<typeof generalSchema>>({
    resolver: zodResolver(generalSchema),
    values: {
      userId,
      fullname: userGeneralInfo?.fullname || "",
      alias: userGeneralInfo?.alias || "",
      nim: userGeneralInfo?.nim || "",
      major: userGeneralInfo?.major || "",
      birth: userGeneralInfo?.birth || "",
      age: userGeneralInfo?.age || "",
      gender: userGeneralInfo?.gender || "",
      address: userGeneralInfo?.address || "",
      phone_number: userGeneralInfo?.phone_number || "",
      email: userGeneralInfo?.email || "",
      line: userGeneralInfo?.line || "",
      facebook: userGeneralInfo?.facebook || "",
      instagram: userGeneralInfo?.instagram || "",
    },
  });

  const { mutate: onCreateUserGeneralInfo } = useMutation({
    mutationFn: (values: CreateUserGeneralInfoType) =>
      createUserGeneralInfo(values),
    onSuccess: () => {
      query.invalidateQueries({ queryKey: ["user-general-infos", userId] });
      setIsUpdating(false);
      toast.success("Data umum berhasil ditambah!");
    },
    onError: (error) => {
      toast.error("Something went wrong!");
      console.error(error);
    },
  });

  const { mutate: onUpdateUserGeneralInfo } = useMutation({
    mutationFn: (values: CreateUserGeneralInfoType) =>
      updateUserGeneralInfo(userGeneralInfo?.id!, values),
    onSuccess: () => {
      query.invalidateQueries({ queryKey: ["user-general-infos", userId] });
      setIsUpdating(false);
      toast.success("Data umum berhasil diupdate!");
    },
    onError: (error) => {
      toast.error("Something went wrong!");
      console.error(error);
    },
  });

  async function onSubmit(values: z.infer<typeof generalSchema>) {
    if (userGeneralInfo?.createdAt) {
      onUpdateUserGeneralInfo(values);
    } else {
      onCreateUserGeneralInfo(values);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn(
          "flex flex-col gap-6 rounded-xl bg-white p-6 outline outline-transparent",
          {
            "outline-primary": isUpdating,
          },
        )}
      >
        <div className="flex flex-col justify-between gap-y-6 lg:flex-row lg:items-center lg:gap-y-0">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-primary lg:text-3xl">
              Data Umum Peserta
            </h2>
            <p className="text-sm lg:text-base">
              Isi data umum mengenai diri Kamu
            </p>
          </div>
          {isUpdating ? (
            <div className="flex h-10 items-center gap-3 rounded-lg border-2 border-dashed border-primary bg-primary/10 px-4 py-2 text-primary">
              <Pencil />
              Sedang Mengisi Data
            </div>
          ) : (
            <Button
              onClick={() => setIsUpdating(true)}
              className="flex items-center gap-3"
            >
              <Pencil />
              {userGeneralInfo ? "Modifikasi Data" : "Isi Data"}
            </Button>
          )}
        </div>

        <div className="flex w-full flex-col gap-6 lg:flex-row">
          <FormField
            control={form.control}
            name="fullname"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="font-semibold">Nama Lengkap</FormLabel>
                <FormControl>
                  <Input
                    disabled={!isUpdating}
                    className="border-foreground disabled:border-foreground/5 disabled:opacity-100"
                    placeholder="Isi dengan Nama Lengkap anda"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="alias"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="font-semibold">
                  Alias / Nama Panggilan
                </FormLabel>
                <FormControl>
                  <Input
                    disabled={!isUpdating}
                    className="border-foreground disabled:border-foreground/5 disabled:opacity-100"
                    placeholder="Isi dengan Nama Panggilan atau Alias anda"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex w-full flex-col gap-6 lg:flex-row">
          <FormField
            control={form.control}
            name="nim"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="font-semibold">NIM</FormLabel>
                <FormControl>
                  <Input
                    disabled={!isUpdating}
                    className="border-foreground disabled:border-foreground/5 disabled:opacity-100"
                    placeholder="Isi NIM perkuliahan anda di UNSRI"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="major"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="font-semibold">Prodi/Jurusan</FormLabel>
                <FormControl>
                  <Input
                    disabled={!isUpdating}
                    className="border-foreground disabled:border-foreground/5 disabled:opacity-100"
                    placeholder="Isi Prodi dan Jurusan anda"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex w-full flex-col gap-6 lg:flex-row">
          <FormField
            control={form.control}
            name="birth"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="font-semibold">
                  Tempat / Tanggal Lahir
                </FormLabel>
                <FormControl>
                  <Input
                    disabled={!isUpdating}
                    className="border-foreground disabled:border-foreground/5 disabled:opacity-100"
                    placeholder="Isi Tempat / Tanggal Lahir anda"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="font-semibold">Usia</FormLabel>
                <FormControl>
                  <Input
                    disabled={!isUpdating}
                    className="border-foreground disabled:border-foreground/5 disabled:opacity-100"
                    placeholder="Usia anda saat mendaftar"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex w-full flex-col gap-6 lg:flex-row">
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="font-semibold">Jenis Kelamin</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger
                      disabled={!isUpdating}
                      className="border-foreground disabled:border-foreground/5 disabled:opacity-100"
                    >
                      <SelectValue placeholder="Pilih jenis kelamin" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="!border-foreground disabled:border-foreground/5 disabled:opacity-100">
                    <SelectItem value="Laki-laki">Laki-laki</SelectItem>
                    <SelectItem value="Perempuan">Perempuan</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="font-semibold">Alamat</FormLabel>
                <FormControl>
                  <Input
                    disabled={!isUpdating}
                    className="border-foreground disabled:border-foreground/5 disabled:opacity-100"
                    placeholder="Alamat tempat tinggal anda"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Separator />
        <div className="flex w-full flex-col gap-6 lg:flex-row">
          <FormField
            control={form.control}
            name="phone_number"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="font-semibold">Nomor Telepon</FormLabel>
                <FormControl>
                  <Input
                    disabled={!isUpdating}
                    className="border-foreground disabled:border-foreground/5 disabled:opacity-100"
                    placeholder="Nomor Telepon/Whatsapp anda"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="font-semibold">E-mail</FormLabel>
                <FormControl>
                  <Input
                    disabled={!isUpdating}
                    className="border-foreground disabled:border-foreground/5 disabled:opacity-100"
                    placeholder="Email aktif anda"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex w-full flex-col gap-6 lg:flex-row">
          <FormField
            control={form.control}
            name="line"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="font-semibold">ID Line</FormLabel>
                <FormControl>
                  <Input
                    disabled={!isUpdating}
                    className="border-foreground disabled:border-foreground/5 disabled:opacity-100"
                    placeholder="ID Line anda"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="facebook"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="font-semibold">
                  Username Facebook
                </FormLabel>
                <FormControl>
                  <Input
                    disabled={!isUpdating}
                    className="border-foreground disabled:border-foreground/5 disabled:opacity-100"
                    placeholder="Username Akun Facebook anda"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="instagram"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel className="font-semibold">
                Username Instagram
              </FormLabel>
              <FormControl>
                <Input
                  disabled={!isUpdating}
                  className="border-foreground disabled:border-foreground/5 disabled:opacity-100"
                  placeholder="Username Akun Instagram anda"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {isUpdating && (
          <>
            <Separator />
            <div className="flex flex-col gap-y-3 lg:flex-row lg:items-center lg:justify-between lg:gap-y-0">
              <p className="flex-1 text-center text-xs font-medium lg:text-start lg:text-base">
                <span className="text-xl text-red-500">*</span>Silahkan
                konfirmasi data sebelum melanjutkan.
                <br /> Pastikan data yang anda isikan sudah benar!
              </p>
              <Button className="flex-1">Simpan Data</Button>
            </div>
          </>
        )}
      </form>
    </Form>
  );
}

// <div className="flex h-72 flex-[1] flex-col gap-6 rounded-md bg-white p-6">
//   {pictureUrl ? (
//     <div className="relative flex h-full w-full flex-col items-center rounded-md border-[3px] border-dashed">
//       <div className="relative aspect-[3/4] w-2/3 items-center justify-center border-2 p-1">
//         <Image
//           src={pictureUrl}
//           fill
//           className="object-cover object-center"
//           alt="Foto Peserta"
//         />
//       </div>
//       <div
//         onClick={removePicture}
//         className="flex w-full cursor-pointer items-center justify-end gap-2 p-2 text-red-400"
//       >
//         <XCircle size={18} />
//         <span className="text-lg font-medium">Hapus Foto</span>
//       </div>
//     </div>
//   ) : (
//     <div className="relative flex h-full w-full flex-col items-center justify-center rounded-md border-[3px] border-dashed py-12">
//       <h2 className="text-xl font-medium">Foto Peserta (3 x 4)</h2>
//       <div className="mt-8 flex size-12 items-center justify-center rounded-md bg-muted text-muted-foreground">
//         <Upload size={28} strokeWidth={1.75} />
//       </div>
//       <div className="mt-8 flex flex-col items-center gap-2 text-center">
//         <Button
//           type="button"
//           className="max-w-fit bg-sky-100 text-primary"
//         >
//           Upload Foto Anda
//           <FormLabel className="absolute left-0 top-0 h-full w-full border opacity-0">
//             SMTH
//           </FormLabel>
//           <FormControl>
//             <Input
//               disabled={!isUpdating}
//               className="absolute left-0 top-0 border-foreground opacity-0 disabled:border-foreground/5 disabled:opacity-100"
//               type="file"
//               onChange={handlePicture}
//             />
//           </FormControl>
//         </Button>
//       </div>
//     </div>
//   )}
// </div>;
