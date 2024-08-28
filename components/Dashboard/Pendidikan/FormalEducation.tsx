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
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { CreateUserGeneralInfoType } from "@/lib/types/user-general-info";
import { createUserGeneralInfo } from "@/lib/network/user-general-info";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { RiSchoolFill } from "react-icons/ri";
import { FaSchool } from "react-icons/fa";
import { FaSchoolFlag } from "react-icons/fa6";
import { CreateUserFormalEducationType } from "@/lib/types/user-formal-education";
import { createUserFormalEducation } from "@/lib/network/user-formal-education";

const formalEducationSchema = z.object({
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
  const query = useQueryClient();

  const form = useForm<z.infer<typeof formalEducationSchema>>({
    resolver: zodResolver(formalEducationSchema),
    defaultValues: {
      elementary: "",
      elementary_in: "",
      elementary_out: "",
      junior: "",
      junior_in: "",
      junior_out: "",
      senior: "",
      senior_in: "",
      senior_out: "",
    },
  });

  const { mutate: onCreateUserFormalEducation } = useMutation({
    mutationFn: (values: CreateUserFormalEducationType) =>
      createUserFormalEducation(values),
    onSuccess: () => {
      query.invalidateQueries({ queryKey: ["formal-education"] });
      toast.success("User Formal Education Added!");
    },
    onError: (error) => {
      toast.error("Something went wrong!");
      console.error(error);
    },
  });

  async function onSubmit(values: z.infer<typeof formalEducationSchema>) {
    onCreateUserFormalEducation({ ...values });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6 rounded-xl bg-white p-6"
      >
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold text-primary">
            Data Pendidikan Formal
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
            corporis nisi iste?
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex w-[440px] items-center gap-3 font-semibold text-primary">
              <RiSchoolFill className="size-7" /> Sekolah Dasar (SD)
            </div>
            <div className="flex gap-6">
              <FormField
                control={form.control}
                name="elementary"
                render={({ field }) => (
                  <FormItem className="flex-[2]">
                    <FormControl>
                      <Input placeholder="Nama Sekolah Dasar anda" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="elementary_in"
                render={({ field }) => (
                  <FormItem className="flex-[1]">
                    <FormControl>
                      <Input placeholder="Tahun Masuk SD" {...field} />
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
                      <Input placeholder="Tahun Lulus SD" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex w-[440px] items-center gap-3 font-semibold text-primary">
              <FaSchool className="size-7" /> Sekolah Mengah Pertama (SMP)
            </div>
            <div className="flex gap-6">
              <FormField
                control={form.control}
                name="junior"
                render={({ field }) => (
                  <FormItem className="flex-[2]">
                    <FormControl>
                      <Input
                        placeholder="Nama Sekolah Mengah Pertama (SMP)"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="junior_in"
                render={({ field }) => (
                  <FormItem className="flex-[1]">
                    <FormControl>
                      <Input placeholder="Tahun Masuk SMP" {...field} />
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
                      <Input placeholder="Tahun Lulus SMP" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex w-[440px] items-center gap-3 font-semibold text-primary">
              <FaSchoolFlag className="size-7" /> Sekolah Mengah Atas (SMA)
            </div>
            <div className="flex gap-6">
              <FormField
                control={form.control}
                name="senior"
                render={({ field }) => (
                  <FormItem className="flex-[2]">
                    <FormControl>
                      <Input
                        placeholder="Nama Sekolah Mengah Atas (SMA)"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="senior_in"
                render={({ field }) => (
                  <FormItem className="flex-[1]">
                    <FormControl>
                      <Input placeholder="Tahun Masuk SMA" {...field} />
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
                      <Input placeholder="Tahun Lulus SMA" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
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
