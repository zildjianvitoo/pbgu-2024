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
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { CreateUserPersonalInfoType } from "@/lib/types/user-personal-info";
import { createUserPersonalInfo } from "@/lib/network/user-personal-info";

const personalSchema = z.object({
  height: z.string().min(1),
  weight: z.string().min(1),
  foreign_language: z.string().min(1),
  hobby: z.string().min(1),
  father: z.string().min(1),
  mother: z.string().min(1),
  parents_job: z.string().min(1),
  parents_phone_number: z.string().min(1),
  parents_address: z.string().min(1),
});

export default function PersonalInformation() {
  const query = useQueryClient();

  const form = useForm<z.infer<typeof personalSchema>>({
    resolver: zodResolver(personalSchema),
    defaultValues: {
      height: "",
      weight: "",
      foreign_language: "",
      hobby: "",
      father: "",
      mother: "",
      parents_job: "",
      parents_phone_number: "",
      parents_address: "",
    },
  });

  const { mutate: onCreateUserPersonalInfo } = useMutation({
    mutationFn: (values: CreateUserPersonalInfoType) =>
      createUserPersonalInfo(values),
    onSuccess: () => {
      query.invalidateQueries({ queryKey: ["user-personal-infos"] });
      toast.success("Berhasil Memodifikasi Informasi Pribadi!");
    },
    onError: (error) => {
      toast.error("Something went wrong!");
      console.error(error);
    },
  });

  async function onSubmit(values: z.infer<typeof personalSchema>) {
    onCreateUserPersonalInfo({ ...values });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6 rounded-xl bg-white p-6"
      >
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold text-primary">
            Data Pribadi Peserta
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
            corporis nisi iste?
          </p>
        </div>

        <div className="flex w-full gap-6">
          <FormField
            control={form.control}
            name="height"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="font-semibold">Tinggi Badan</FormLabel>
                <FormControl>
                  <Input placeholder="Tinggi Badan anda (cm)" {...field} />
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
                  <Input placeholder="Berat Badan anda (Kg)" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex w-full gap-6">
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
                  <Input placeholder="Daftar Hobby anda" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex w-full gap-6">
          <FormField
            control={form.control}
            name="father"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="font-semibold">
                  Nama Ayah Kandung
                </FormLabel>
                <FormControl>
                  <Input placeholder="Nama Ayah Kandung anda" {...field} />
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
                  <Input placeholder="Nama Ibu Kandung anda" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex w-full gap-6">
          <FormField
            control={form.control}
            name="parents_job"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="font-semibold">
                  Pekerjaan Orang Tua
                </FormLabel>
                <FormControl>
                  <Input placeholder="Pekerjaan Ibu/Ayah anda" {...field} />
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
                  placeholder="Alamat tempat tinggal orang tua anda"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

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
