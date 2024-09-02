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
import { GraduationCap, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CreateUserInformalEducationType } from "@/lib/types/user-informal-education";
import { createUserInformalEducation } from "@/lib/network/user-informal-education";
import { useSession } from "next-auth/react";
import "@/lib/zodCustomError";
import { useRouter } from "next/navigation";

const formalEducationSchema = z.object({
  userId: z.string().min(1),
  type: z.string().min(1),
  institution: z.string().min(1),
  year_start: z.string().min(1),
  year_end: z.string().min(1),
});

type Props = {
  userInformalEducationsLength: number;
};

export default function CreateInformalEducation({
  userInformalEducationsLength,
}: Props) {
  const { data: session } = useSession();
  const userId = session?.user.id || "";
  const queryClient = useQueryClient();
  const router = useRouter();

  const form = useForm<z.infer<typeof formalEducationSchema>>({
    resolver: zodResolver(formalEducationSchema),
    values: {
      userId: userId,
      type: "",
      institution: "",
      year_start: "",
      year_end: "",
    },
  });

  const { mutate: onCreateUserFormalEducation } = useMutation({
    mutationFn: (values: CreateUserInformalEducationType) =>
      createUserInformalEducation(values),
    onSuccess: () => {
      router.refresh();
      toast.success("Berhasil Menambahkan Data Pendidikan Informal!");
      queryClient.invalidateQueries({
        queryKey: ["user-informal-educations", userId],
      });
      form.reset();
    },
    onError: (error) => {
      toast.error("Terjadi Kesalahan Pada Server!");
      console.error(error);
    },
  });

  async function onSubmit(values: z.infer<typeof formalEducationSchema>) {
    onCreateUserFormalEducation(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <div className="flex items-center gap-3 text-sm font-semibold text-primary lg:text-base">
          <GraduationCap className="size-7" /> Tambah Data Pendidikan Informal
        </div>
        <div className="flex flex-col gap-3 lg:flex-row">
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input placeholder="Jenis Pendidikan" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="institution"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input placeholder="Nama Lembaga" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex flex-[1] gap-3">
            <FormField
              control={form.control}
              name="year_start"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input placeholder="Tahun Masuk" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="year_end"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input placeholder="Tahun Keluar" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            disabled={userInformalEducationsLength >= 5}
            className="flex items-center gap-3"
          >
            <Plus className="size-5" /> Tambah
          </Button>
        </div>
      </form>
    </Form>
  );
}
