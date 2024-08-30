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
import { CreateUserAchievementType } from "@/lib/types/user-achievement";
import { createUserAchievement } from "@/lib/network/user-achievement";
import { useSession } from "next-auth/react";

const formSchema = z.object({
  userId: z.string().min(1),
  achievement: z.string().min(1),
  instance: z.string().min(1),
  year: z.string().min(1),
});

export default function CreateAchievement() {
  const { data: session } = useSession();
  const userId = session?.user.id || "";
  const queryClient = useQueryClient();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: {
      userId: userId,
      achievement: "",
      instance: "",
      year: "",
    },
  });

  const { mutate: onCreateUserAchievement } = useMutation({
    mutationFn: (values: CreateUserAchievementType) =>
      createUserAchievement(values),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user-achievements", userId],
      });
      toast.success("Berhasil Menambahkan Data Prestasi!");
    },
    onError: (error) => {
      toast.error("Terjadi Kesalahan Pada Server!");
      console.error(error);
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    onCreateUserAchievement(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <div className="flex items-center gap-3 font-semibold text-primary">
          <GraduationCap className="size-7" /> Tambah Data Prestasi yang Pernah
          Diraih
        </div>
        <div className="flex flex-col gap-3 lg:flex-row">
          <FormField
            control={form.control}
            name="achievement"
            render={({ field }) => (
              <FormItem className="flex-[2]">
                <FormControl>
                  <Input placeholder="Nama Penghargaan" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="instance"
            render={({ field }) => (
              <FormItem className="flex-[2]">
                <FormControl>
                  <Input
                    placeholder="Instansi Pemberi Penghargaan"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="year"
            render={({ field }) => (
              <FormItem className="flex-[1]">
                <FormControl>
                  <Input placeholder="Tahun" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="flex items-center gap-3">
            <Plus className="size-5" /> Tambah
          </Button>
        </div>
      </form>
    </Form>
  );
}
