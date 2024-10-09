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
import { Input } from "@/components/ui/input";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Plus, Upload, XCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CreateFinalistType } from "@/lib/types/finalist";
import { updateFinalist, getFinalistById } from "@/lib/network/finalist";

const finalistSchema = z.object({
  name: z.string().min(1),
  gender: z.string().min(1),
  number: z.string().min(1),
  percentage: z.string().min(1),
  detail: z.string().optional(),
});

export default function UpdateFinalistForm() {
  const { finalistId } = useParams();
  const [picture, setPicture] = useState<File | string | undefined>();
  const [pictureUrl, setPictureUrl] = useState<string | undefined>();

  const router = useRouter();
  const queryClient = useQueryClient();

  const { data: finalist } = useQuery({
    queryFn: () => getFinalistById(finalistId as string),
    queryKey: ["finalists", finalistId],
    enabled: !!finalistId,
  });

  useEffect(() => {
    if (finalist?.image) {
      setPicture(finalist.image);
      setPictureUrl(finalist.image);
    }
  }, [finalist]);

  const { mutate: onUpdateFinalist } = useMutation({
    mutationFn: (values: CreateFinalistType) =>
      updateFinalist(finalistId as string, values),
    onSuccess: () => {
      toast.success("Data Finalis Berhasil Dimodifikasi!");
      queryClient.invalidateQueries({ queryKey: ["finalists"] });
      router.push("/admin-dashboard/finalis");
    },
    onError: (error) => console.log(error),
  });

  function handlePicture(e: React.ChangeEvent<HTMLInputElement>) {
    const picture = e.target.files?.[0];
    setPicture(picture);
    setPictureUrl(URL.createObjectURL(picture!));
  }

  function removePicture() {
    setPicture(undefined);
    setPictureUrl(undefined);
  }

  const form = useForm<z.infer<typeof finalistSchema>>({
    resolver: zodResolver(finalistSchema),
    values: {
      name: finalist?.name || "",
      gender: finalist?.gender || "",
      number: finalist?.number || "",
      percentage: finalist?.percentage || "",
      detail: finalist?.detail || "",
    },
  });

  async function onSubmit(values: z.infer<typeof finalistSchema>) {
    if (!picture) {
      toast.error("Foto Finalis harus diinput");
      return;
    }

    onUpdateFinalist({
      image: picture,
      ...values,
    });
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6"
      >
        <header className="items-center justify-between lg:flex">
          <div className="">
            <h1 className="text-xl font-medium lg:text-2xl">Data Finalis</h1>
            <p className="mt-1 text-sm text-gray-400 lg:text-base">
              Tambahkan Finalis PPUMP
            </p>
          </div>
          <div className="mt-6 flex justify-end gap-4 lg:mt-0 lg:justify-start">
            <Link href="/admin-dashboard/finalis">
              <Button type="button" variant="outline" className="gap-2">
                <ChevronLeft />
                Kembali
              </Button>
            </Link>

            <Button variant="default" type="submit" className="gap-2">
              <Plus />
              Submit
            </Button>
          </div>
        </header>

        {/* Finalis Data */}
        <div className="flex flex-col flex-wrap gap-6 lg:flex-row">
          <div className="box-shadow flex w-full flex-col gap-6 rounded-md bg-white p-6 lg:h-96 lg:flex-[3]">
            <h2 className="text-xl font-medium">Data Finalis</h2>

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel>Nama Finalis</FormLabel>
                  <FormControl>
                    <Input placeholder="ex: John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex flex-col gap-6 lg:flex-row">
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem className="flex-[1]">
                    <FormLabel>Jenis Kelamin</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih Jenis Kelamin" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="laki-laki">Laki-laki</SelectItem>
                        <SelectItem value="perempuan">Perempuan</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="number"
                render={({ field }) => (
                  <FormItem className="flex-[1]">
                    <FormLabel>Nomor Finalis</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="ex: Nomor Finalis
"
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
              name="percentage"
              render={({ field }) => (
                <FormItem className="flex-[1]">
                  <FormLabel>Poin per Voting</FormLabel>
                  <FormControl>
                    <Input placeholder="ex: 1" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Finalis Detail */}
          <div className="box-shadow flex flex-col gap-6 rounded-md bg-white p-6 lg:flex-[1]">
            <h2 className="text-xl font-medium">Foto Finalis</h2>
            {pictureUrl ? (
              <div className="relative flex h-56 w-full flex-col rounded-md border-[3px] border-dashed lg:h-full">
                <div className="relative h-5/6 w-full items-center justify-center p-1">
                  <Image
                    src={pictureUrl}
                    className="border-2 border-double object-contain object-center p-1"
                    fill
                    alt={pictureUrl}
                  />
                </div>
                <div
                  onClick={removePicture}
                  className="flex w-full cursor-pointer items-center justify-end gap-2 p-2 text-red-400"
                >
                  <XCircle size={18} />
                  <span className="text-lg font-medium">Hapus File</span>
                </div>
              </div>
            ) : (
              <div className="relative flex h-56 w-full flex-col items-center justify-center rounded-md border-[3px] border-dashed lg:h-full">
                <div className="flex size-12 items-center justify-center rounded-md bg-muted text-muted-foreground">
                  <Upload size={28} strokeWidth={1.75} />
                </div>
                <div className="mt-8 flex flex-col items-center gap-2 text-center">
                  <Button
                    type="button"
                    className="max-w-fit bg-sky-100 text-primary"
                  >
                    Upload Gambar
                    <FormLabel className="absolute left-0 top-0 h-full w-full border opacity-0">
                      .
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="absolute left-0 top-0 opacity-0"
                        type="file"
                        accept="image/*"
                        onChange={handlePicture}
                      />
                    </FormControl>
                  </Button>
                </div>
              </div>
            )}
          </div>
          {/* <div className="box-shadow flex w-full flex-col gap-6 rounded-md bg-white p-6">
            <h2 className="text-xl font-medium">
              Detail Data Finalis{" "}
              <span className="text-sm text-tertiary">(opsional)</span>
            </h2>

            <FormField
              control={form.control}
              name="detail"
              render={({ field }) => (
                <FormItem className="h-96 lg:h-80">
                  <FormLabel>Detail</FormLabel>
                  <FormControl className="h-64">
                    <ReactQuill theme="snow" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div> */}
          <div className="box-shadow flex w-full flex-col items-center justify-between gap-6 rounded-md bg-white p-6 lg:flex-row">
            <Button className="w-full lg:w-1/3">Submit</Button>
            <div className="text-center lg:text-end">
              <div className="text-primary lg:text-lg">
                Pastikan data yang anda masukkan sudah tepat
              </div>
              <small className="text-xs lg:text-sm">
                Data masih dapat diubah kedepannya*
              </small>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
}
