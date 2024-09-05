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
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button } from "@/components/ui/button";
import { Plus, Upload, XCircle } from "lucide-react";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import sluggify from "slugify";
import { useRouter } from "next/navigation";
import { CreateActivityType } from "@/lib/types/activity";
import { createActivity } from "@/lib/network/activity";
import Image from "next/image";

const formSchema = z.object({
  title: z.string().min(1),
  slug: z.string().min(1),
  content: z.string().min(1),
});

export default function CreateActivity() {
  const [picture, setPicture] = useState<File>();
  const [pictureUrl, setPictureUrl] = useState<string>();
  const router = useRouter();
  const queryClient = useQueryClient();

  const { mutate: onCreateActivity } = useMutation({
    mutationFn: (values: CreateActivityType) => createActivity(values),
    onSuccess: () => {
      toast.success("Kegiatan berhasil dibuat!");
      queryClient.invalidateQueries({ queryKey: ["activities"] });
      router.push("/admin-dashboard/kegiatan");
    },
    onError: () => toast.error("Terjadi Kesalahan saat menambahkan Kegiatan"),
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

  function makeSlug() {
    const slugValue = sluggify(form.getValues("title"), { lower: true });
    form.setValue("slug", slugValue);
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      slug: "",
      content: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!picture) {
      toast.error("Sampul Kegiatan tidak boleh kosong");
      return;
    }

    onCreateActivity({
      image: picture,
      ...values,
    });
  }

  return (
    <section className="flex w-full flex-col gap-6 py-6">
      <div className="flex gap-1 text-2xl capitalize">
        <span className="text-gray-400">Admin Dashboard / </span>
        <span className="text-gray-400">Kegiatan / </span>
        <span>Tambah</span>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-6"
        >
          <header className="items-center justify-between lg:flex">
            <div className="">
              <h1 className="text-2xl font-medium">Tambah Kegiatan</h1>
              <p className="mt-1 text-gray-400">
                Tambahkan Kegiatan yang akan dipublikasikan
              </p>
            </div>
            <div className="mt-6 flex justify-end gap-4 lg:mt-0 lg:justify-start">
              <Button variant="default" type="submit" className="gap-2">
                <Plus />
                Submit
              </Button>
            </div>
          </header>
          <div className="flex flex-col flex-wrap gap-6 lg:flex-row">
            <div className="box-shadow flex w-full flex-col gap-6 rounded-md bg-white p-6 lg:flex-[4]">
              <h2 className="text-xl font-medium">Judul Kegiatan</h2>
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Judul Kegiatan</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="ex: John Doe"
                        {...field}
                        onBlur={makeSlug}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="slug"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Slug (otomatis)</FormLabel>
                    <FormControl>
                      <Input placeholder="ex: John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="box-shadow flex flex-col gap-6 rounded-md bg-white p-6 lg:flex-[3]">
              <h2 className="text-xl font-medium">Sampul Kegiatan</h2>
              {pictureUrl ? (
                <div className="relative flex h-60 w-full flex-col rounded-md border-[3px] border-dashed">
                  <div className="relative h-5/6 w-full items-center justify-center p-1">
                    <Image
                      fill
                      src={pictureUrl}
                      className="border-2 border-double object-contain object-center p-1"
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
                <div className="relative flex h-52 w-full flex-col items-center justify-center rounded-md border-[3px] border-dashed">
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
                        {"'"}
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
            <div className="box-shadow flex w-full flex-col gap-6 rounded-md bg-white p-6">
              <h2 className="text-xl font-medium">Konten/Isi Kegiatan</h2>

              <FormField
                control={form.control}
                name="content"
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
            </div>
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
    </section>
  );
}
