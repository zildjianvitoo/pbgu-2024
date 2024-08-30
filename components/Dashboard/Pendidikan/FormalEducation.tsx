"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { RiSchoolFill } from "react-icons/ri";
import { FaSchool } from "react-icons/fa";
import { FaSchoolFlag } from "react-icons/fa6";
import { CreateUserFormalEducationType } from "@/lib/types/user-formal-education";
import {
  createUserFormalEducation,
  getUserFormalEducationByUserId,
  updateUserFormalEducation,
} from "@/lib/network/user-formal-education";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Pencil } from "lucide-react";

const formSchema = z.object({
  userId: z.string().min(1),
  elementary: z.string().min(1),
  elementary_in: z.string().min(1),
  elementary_out: z.string().min(1),
  junior: z.string().min(1),
  junior_in: z.string().min(1),
  junior_out: z.string().min(1),
  senior: z.string().min(1),
  senior_in: z.string().min(1),
  senior_out: z.string().min(1),
});

export default function FormalEducation() {
  const [isUpdating, setIsUpdating] = useState(false);
  const { data: session } = useSession();
  const userId = session?.user.id || "";
  const query = useQueryClient();

  const { data: userFormalEducation } = useQuery({
    queryFn: () => getUserFormalEducationByUserId(userId),
    queryKey: ["user-formal-educations", userId],
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: {
      userId: userFormalEducation?.userId || userId,
      elementary: userFormalEducation?.elementary || "",
      elementary_in: userFormalEducation?.elementary_in || "",
      elementary_out: userFormalEducation?.elementary_out || "",
      junior: userFormalEducation?.junior || "",
      junior_in: userFormalEducation?.junior_in || "",
      junior_out: userFormalEducation?.junior_out || "",
      senior: userFormalEducation?.senior || "",
      senior_in: userFormalEducation?.senior_in || "",
      senior_out: userFormalEducation?.senior_out || "",
    },
  });

  const { mutate: onCreateUserFormalEducation } = useMutation({
    mutationFn: (values: CreateUserFormalEducationType) =>
      createUserFormalEducation(values),
    onSuccess: () => {
      setIsUpdating(false);
      query.invalidateQueries({ queryKey: ["user-formal-educations", userId] });
      toast.success("Berhasil Menambahkan Data Pendidikan Formal!");
    },
    onError: (error) => {
      toast.error("Something went wrong!");
      console.error(error);
    },
  });

  const { mutate: onUpdateUserFormalEducation } = useMutation({
    mutationFn: (values: CreateUserFormalEducationType) =>
      updateUserFormalEducation(userFormalEducation!.id, values),
    onSuccess: () => {
      setIsUpdating(false);
      query.invalidateQueries({ queryKey: ["user-formal-educations", userId] });
      toast.success("Berhasil Memodifikasi Data Pendidikan Formal!");
    },
    onError: (error) => {
      toast.error("Something went wrong!");
      console.error(error);
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (userFormalEducation) {
      onUpdateUserFormalEducation(values);
    } else {
      onCreateUserFormalEducation(values);
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
              Data Pendidikan Formal
            </h2>
            <p className="text-sm lg:text-base">
              Isi data pendidikan formal Kamu
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
              {userFormalEducation ? "Modifikasi Data" : "Isi Data"}
            </Button>
          )}
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex w-[440px] items-center gap-3 font-semibold text-primary">
              <RiSchoolFill className="size-7" /> Sekolah Dasar (SD)
            </div>
            <div className="flex flex-col gap-6 lg:flex-row">
              <FormField
                control={form.control}
                name="elementary"
                render={({ field }) => (
                  <FormItem className="flex-[2]">
                    <FormControl>
                      <Input
                        disabled={!isUpdating}
                        className="border-foreground disabled:border-foreground/5 disabled:opacity-100"
                        placeholder="Nama Sekolah Dasar anda"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex flex-[1] gap-6">
                <FormField
                  control={form.control}
                  name="elementary_in"
                  render={({ field }) => (
                    <FormItem className="flex-[1]">
                      <FormControl>
                        <Input
                          disabled={!isUpdating}
                          className="border-foreground disabled:border-foreground/5 disabled:opacity-100"
                          placeholder="Tahun Masuk SD"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="elementary_out"
                  render={({ field }) => (
                    <FormItem className="flex-[1]">
                      <FormControl>
                        <Input
                          disabled={!isUpdating}
                          className="border-foreground disabled:border-foreground/5 disabled:opacity-100"
                          placeholder="Tahun Lulus SD"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex w-[440px] items-center gap-3 font-semibold text-primary">
              <FaSchool className="size-7" /> Sekolah Mengah Pertama (SMP)
            </div>
            <div className="flex flex-col gap-6 lg:flex-row">
              <FormField
                control={form.control}
                name="junior"
                render={({ field }) => (
                  <FormItem className="flex-[2]">
                    <FormControl>
                      <Input
                        disabled={!isUpdating}
                        className="border-foreground disabled:border-foreground/5 disabled:opacity-100"
                        placeholder="Nama Sekolah Mengah Pertama (SMP)"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex flex-[1] gap-6">
                <FormField
                  control={form.control}
                  name="junior_in"
                  render={({ field }) => (
                    <FormItem className="flex-[1]">
                      <FormControl>
                        <Input
                          disabled={!isUpdating}
                          className="border-foreground disabled:border-foreground/5 disabled:opacity-100"
                          placeholder="Tahun Masuk SMP"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="junior_out"
                  render={({ field }) => (
                    <FormItem className="flex-[1]">
                      <FormControl>
                        <Input
                          disabled={!isUpdating}
                          className="border-foreground disabled:border-foreground/5 disabled:opacity-100"
                          placeholder="Tahun Lulus SMP"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex w-[440px] items-center gap-3 font-semibold text-primary">
              <FaSchoolFlag className="size-7" /> Sekolah Mengah Atas (SMA)
            </div>
            <div className="flex flex-col gap-6 lg:flex-row">
              <FormField
                control={form.control}
                name="senior"
                render={({ field }) => (
                  <FormItem className="flex-[2]">
                    <FormControl>
                      <Input
                        disabled={!isUpdating}
                        className="border-foreground disabled:border-foreground/5 disabled:opacity-100"
                        placeholder="Nama Sekolah Mengah Atas (SMA)"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex flex-[1] gap-6">
                <FormField
                  control={form.control}
                  name="senior_in"
                  render={({ field }) => (
                    <FormItem className="flex-[1]">
                      <FormControl>
                        <Input
                          disabled={!isUpdating}
                          className="border-foreground disabled:border-foreground/5 disabled:opacity-100"
                          placeholder="Tahun Masuk SMA"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="senior_out"
                  render={({ field }) => (
                    <FormItem className="flex-[1]">
                      <FormControl>
                        <Input
                          disabled={!isUpdating}
                          className="border-foreground disabled:border-foreground/5 disabled:opacity-100"
                          placeholder="Tahun Lulus SMA"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
        </div>

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
