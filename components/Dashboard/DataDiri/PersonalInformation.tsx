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
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { CreateUserGeneralInfoType } from "@/lib/types/user-general-info";
import { createUserGeneralInfo } from "@/lib/network/user-general-info";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const generalSchema = z.object({
  fullname: z.string().min(1),
  alias: z.string().min(1),
  nim: z.string().min(1),
  major: z.string().min(1),
  birth: z.string().min(1),
  age: z.string().min(1),
  gender: z.string().min(1),
  address: z.string().min(1),
  phone_number: z.string().min(1),
  email: z.string().min(1),
  line: z.string().min(1),
  facebook: z.string().min(1),
  instagram: z.string().min(1),
});

export default function PersonalInformation() {
  const query = useQueryClient();

  const form = useForm<z.infer<typeof generalSchema>>({
    resolver: zodResolver(generalSchema),
    defaultValues: {
      fullname: "",
      alias: "",
      nim: "",
      major: "",
      birth: "",
      age: "",
      gender: "",
      address: "",
      phone_number: "",
      email: "",
      line: "",
      facebook: "",
      instagram: "",
    },
  });

  const { mutate: onCreateUserGeneralInfo } = useMutation({
    mutationFn: (values: CreateUserGeneralInfoType) =>
      createUserGeneralInfo(values),
    onSuccess: () => {
      query.invalidateQueries({ queryKey: ["user-general-infos"] });
      toast.success("User General Information Added!");
    },
    onError: (error) => {
      toast.error("Something went wrong!");
      console.error(error);
    },
  });

  async function onSubmit(values: z.infer<typeof generalSchema>) {
    onCreateUserGeneralInfo({ ...values });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6 rounded-xl bg-white p-6"
      >
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold text-primary">Data Pribadi</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
            corporis nisi iste?
          </p>
        </div>

        <div className="flex w-full gap-6">
          <FormField
            control={form.control}
            name="fullname"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="font-semibold">Nama Lengkap</FormLabel>
                <FormControl>
                  <Input
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
                    placeholder="Isi dengan Nama Panggilan atau Alias anda"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex w-full gap-6">
          <FormField
            control={form.control}
            name="nim"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="font-semibold">NIM</FormLabel>
                <FormControl>
                  <Input
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
                  <Input placeholder="Isi Prodi dan Jurusan anda" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex w-full gap-6">
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
                  <Input placeholder="Usia anda saat mendaftar" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex w-full gap-6">
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="font-semibold">Jenis Kelamin</FormLabel>
                <FormControl>
                  <Input placeholder="Jenis Kelamin anda" {...field} />
                </FormControl>
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
                  <Input placeholder="Alamat tempat tinggal anda" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Separator />
        <div className="flex w-full gap-6">
          <FormField
            control={form.control}
            name="phone_number"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="font-semibold">Nomor Telepon</FormLabel>
                <FormControl>
                  <Input placeholder="Nomor Telepon/Whatsapp anda" {...field} />
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
                  <Input placeholder="Email aktif anda" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex w-full gap-6">
          <FormField
            control={form.control}
            name="line"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="font-semibold">ID Line</FormLabel>
                <FormControl>
                  <Input placeholder="ID Line anda" {...field} />
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
                  <Input placeholder="Username Akun Facebook anda" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex w-full gap-6">
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
                    placeholder="Username Akun Instagram anda"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Separator />
        <div className="flex items-center justify-between">
          <p className="flex-1 font-medium">
            <span className="text-xl text-red-500">*</span>Silahkan konfirmasi
            data sebelum melanjutkan.
            <br /> Pastikan data yang anda isikan sudah benar!
          </p>
          <Button className="flex-1">Simpan Data</Button>
        </div>
      </form>
    </Form>
  );
}
