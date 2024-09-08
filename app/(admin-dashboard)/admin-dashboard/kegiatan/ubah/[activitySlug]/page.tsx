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
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import sluggify from "slugify";
import { useParams, useRouter } from "next/navigation";
import { CreateActivityType } from "@/lib/types/activity";
import {
  createActivity,
  getActivityBySlug,
  updateActivity,
} from "@/lib/network/activity";
import Image from "next/image";
import {
  createActivityImage,
  getActivityImageBySlug,
  updateActivityImage,
} from "@/lib/network/activity-image";
import { CreateActivityImage } from "@/lib/types/activity-image";

const formSchema = z.object({
  title: z.string().min(1),
  slug: z.string().min(1),
  content: z.string().min(1),
});

export default function UpdateActivity() {
  const { activitySlug } = useParams();

  const { data: activity } = useQuery({
    queryFn: () => getActivityBySlug(activitySlug as string),
    queryKey: ["activities", activitySlug],
  });

  const router = useRouter();
  const queryClient = useQueryClient();

  const { mutate: onCreateActivity } = useMutation({
    mutationFn: (values: CreateActivityType) =>
      updateActivity(activity!.id, values),
    onError: (error) => console.log(error),
  });

  function makeSlug() {
    const slugValue = sluggify(form.getValues("title"), { lower: true });
    form.setValue("slug", slugValue);
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: {
      title: activity?.title || "",
      slug: activity?.slug || "",
      content: activity?.content || "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    onCreateActivity(values);

    toast.success("Kegiatan berhasil dimodifikasi!");
    queryClient.invalidateQueries({ queryKey: ["activities"] });
    router.push("/admin-dashboard/kegiatan");
    router.refresh();
  }

  return (
    <section className="flex w-full flex-col gap-6 py-6">
      <div className="flex gap-1 text-2xl capitalize">
        <span className="text-gray-400">Admin Dashboard / </span>
        <span className="text-gray-400">Kegiatan / </span>
        <span>Ubah</span>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-6"
        >
          <header className="items-center justify-between lg:flex">
            <div className="">
              <h1 className="text-2xl font-medium">Ubah Kegiatan</h1>
              <p className="mt-1 text-gray-400">
                Modifikasi Kegiatan yang akan dipublikasikan
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
