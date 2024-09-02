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
import { CreateUserOrganizationalExperienceType } from "@/lib/types/user-organizational-experience";
import { createUserOrganizationalExperience } from "@/lib/network/user-organizational-experience";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  userId: z.string().min(1),
  organization: z.string().min(1),
  position: z.string().min(1),
  period: z.string().min(1),
});

type Props = {
  organizationalExperiencesLength: number;
};

export default function CreateOrganizationalExperience({
  organizationalExperiencesLength,
}: Props) {
  const { data: session } = useSession();
  const userId = session?.user.id || "";
  const queryClient = useQueryClient();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: {
      userId: userId,
      organization: "",
      position: "",
      period: "",
    },
  });

  const { mutate: onCreateOrganizationalExperience } = useMutation({
    mutationFn: (values: CreateUserOrganizationalExperienceType) =>
      createUserOrganizationalExperience(values),
    onSuccess: () => {
      router.refresh();
      queryClient.invalidateQueries({
        queryKey: ["user-organizational-experiences", userId],
      });
      toast.success("Berhasil Menambahkan Data Pengalaman Organisasi!");
      form.reset();
    },
    onError: (error) => {
      toast.error("Terjadi Kesalahan Pada Server!");
      console.error(error);
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    onCreateOrganizationalExperience(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <div className="flex items-center gap-3 font-semibold text-primary">
          <GraduationCap className="size-7" /> Tambah Data Pengalaman Organisasi
        </div>
        <div className="flex flex-col gap-3 lg:flex-row">
          <FormField
            control={form.control}
            name="organization"
            render={({ field }) => (
              <FormItem className="flex-[3]">
                <FormControl>
                  <Input placeholder="Nama Organisasi" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="position"
            render={({ field }) => (
              <FormItem className="flex-[2]">
                <FormControl>
                  <Input placeholder="Posisi / Jabatan" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="period"
            render={({ field }) => (
              <FormItem className="flex-[1]">
                <FormControl>
                  <Input placeholder="Periode" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            disabled={organizationalExperiencesLength >= 5}
            className="flex items-center gap-3"
          >
            <Plus className="size-5" /> Tambah
          </Button>
        </div>
      </form>
    </Form>
  );
}
