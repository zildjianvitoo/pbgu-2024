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
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { CreateUserPersonalInfoType } from "@/lib/types/user-personal-info";
import {
  createUserPersonalInfo,
  getUserPersonalInfoByUserId,
  updateUserPersonalInfo,
} from "@/lib/network/user-personal-info";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Pencil } from "lucide-react";
import "@/lib/zodCustomError";

const personalSchema = z.object({
  userId: z.string().min(1),
  height: z.string().min(1).regex(/^\d+$/, "Hanya angka yang diperbolehkan"),
  weight: z.string().min(1).regex(/^\d+$/, "Hanya angka yang diperbolehkan"),
  foreign_language: z.string().min(1),
  hobby: z.string().min(1),
  father: z.string().min(1),
  mother: z.string().min(1),
  parents_job: z.string().min(1),
  parents_phone_number: z
    .string()
    .min(1)
    .regex(/^\d+$/, "Hanya angka yang diperbolehkan"),
  parents_address: z.string().min(1),
});

export default function PersonalInformation() {
  const { data: session } = useSession();
  const userId = session?.user.id || "";
  const query = useQueryClient();

  const { data: userPersonalInfo } = useQuery({
    queryFn: () => getUserPersonalInfoByUserId(userId),
    queryKey: ["user-personal-infos", userId],
  });

  const form = useForm<z.infer<typeof personalSchema>>({
    resolver: zodResolver(personalSchema),
    values: {
      userId: userPersonalInfo?.userId || userId,
      height: userPersonalInfo?.height || "",
      weight: userPersonalInfo?.weight || "",
      foreign_language: userPersonalInfo?.foreign_language || "",
      hobby: userPersonalInfo?.hobby || "",
      father: userPersonalInfo?.father || "",
      mother: userPersonalInfo?.mother || "",
      parents_job: userPersonalInfo?.parents_job || "",
      parents_phone_number: userPersonalInfo?.parents_phone_number || "",
      parents_address: userPersonalInfo?.parents_address || "",
    },
  });

  const { mutate: onCreateUserPersonalInfo } = useMutation({
    mutationFn: (values: CreateUserPersonalInfoType) =>
      createUserPersonalInfo(values),
    onSuccess: () => {
      query.invalidateQueries({ queryKey: ["user-personal-infos", userId] });
      toast.success("Berhasil Menambahkan Informasi Pribadi!");
    },
    onError: (error) => {
      toast.error("Something went wrong!");
      console.error(error);
    },
  });

  const { mutate: onUpdateUserPersonalInfo } = useMutation({
    mutationFn: (values: CreateUserPersonalInfoType) =>
      updateUserPersonalInfo(userPersonalInfo!.id, values),

    onSuccess: () => {
      query.invalidateQueries({ queryKey: ["user-personal-infos", userId] });
      toast.success("Berhasil Memodifikasi Informasi Pribadi!");
    },
    onError: (error) => {
      toast.error("Something went wrong!");
      console.error(error);
    },
  });

  async function onSubmit(values: z.infer<typeof personalSchema>) {
    if (userPersonalInfo) {
      onUpdateUserPersonalInfo(values);
    } else {
      onCreateUserPersonalInfo(values);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn(
          "flex flex-col gap-6 rounded-xl bg-white p-6 outline outline-transparent",
        )}
      >
        <div className="flex flex-col justify-between gap-y-6 lg:flex-row lg:items-center lg:gap-y-0">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-primary lg:text-3xl">
              Data Pribadi Peserta
            </h2>
            <p className="text-sm lg:text-base">
              Isi data pribadi mengenai diri Kamu
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col gap-6 lg:flex-row">
          <FormField
            control={form.control}
            name="height"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="font-semibold">Tinggi Badan</FormLabel>
                <FormControl>
                  <Input
                    className="border-foreground disabled:border-foreground/5 disabled:opacity-100"
                    placeholder="Tinggi Badan anda (cm)"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="weight"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="font-semibold">Berat Badan</FormLabel>
                <FormControl>
                  <Input
                    className="border-foreground disabled:border-foreground/5 disabled:opacity-100"
                    placeholder="Berat Badan anda (Kg)"
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
            name="foreign_language"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="font-semibold">
                  Bahasa Asing yang di kuasai
                </FormLabel>
                <FormControl>
                  <Input
                    className="border-foreground disabled:border-foreground/5 disabled:opacity-100"
                    placeholder="Bahasa Asing yang anda kuasai (opsional)"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="hobby"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="font-semibold">Hobby</FormLabel>
                <FormControl>
                  <Input
                    className="border-foreground disabled:border-foreground/5 disabled:opacity-100"
                    placeholder="Daftar Hobby anda"
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
            name="father"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="font-semibold">
                  Nama Ayah Kandung
                </FormLabel>
                <FormControl>
                  <Input
                    className="border-foreground disabled:border-foreground/5 disabled:opacity-100"
                    placeholder="Nama Ayah Kandung anda"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="mother"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="font-semibold">
                  Nama Ibu Kandung
                </FormLabel>
                <FormControl>
                  <Input
                    className="border-foreground disabled:border-foreground/5 disabled:opacity-100"
                    placeholder="Nama Ibu Kandung anda"
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
            name="parents_job"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="font-semibold">
                  Pekerjaan Orang Tua
                </FormLabel>
                <FormControl>
                  <Input
                    className="border-foreground disabled:border-foreground/5 disabled:opacity-100"
                    placeholder="Pekerjaan Ibu/Ayah anda"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="parents_phone_number"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="font-semibold">
                  Nomor Telepon Orang Tua
                </FormLabel>
                <FormControl>
                  <Input
                    className="border-foreground disabled:border-foreground/5 disabled:opacity-100"
                    placeholder="Nomor telepon salah satu dari kedua orang tua anda"
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
          name="parents_address"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel className="font-semibold">Alamat Orang Tua</FormLabel>
              <FormControl>
                <Input
                  className="border-foreground disabled:border-foreground/5 disabled:opacity-100"
                  placeholder="Alamat tempat tinggal orang tua anda"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Separator />
        <div className="flex flex-col gap-y-3 lg:flex-row lg:items-center lg:justify-between lg:gap-y-0">
          <p className="flex-1 text-center text-xs font-medium lg:text-start lg:text-base">
            <span className="text-xl text-red-500">*</span>Silahkan konfirmasi
            data sebelum melanjutkan.
            <br /> Pastikan data yang anda isikan sudah benar!
          </p>
          <Button
            disabled={form.formState.isSubmitting}
            className="flex-1 disabled:opacity-80"
          >
            {userPersonalInfo ? "Modifikasi Data" : "Tambahkan Data"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
