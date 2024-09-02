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
import { CreateUserCompetenceType } from "@/lib/types/user-competence";
import { createUserCompetence } from "@/lib/network/user-competence";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const createCompetenceSchema = z.object({
  userId: z.string().min(1),
  field: z.string().min(1),
  skill: z.string().min(1),
});

type Props = {
  competenceLength: number;
};

export default function CreateCompetence({ competenceLength }: Props) {
  const { data: session } = useSession();
  const userId = session?.user.id || "";
  const queryClient = useQueryClient();
  const router = useRouter();
  const form = useForm<z.infer<typeof createCompetenceSchema>>({
    resolver: zodResolver(createCompetenceSchema),
    values: {
      userId: userId,
      field: "",
      skill: "",
    },
  });

  const { mutate: onCreateUserCreateCompetence } = useMutation({
    mutationFn: (values: CreateUserCompetenceType) =>
      createUserCompetence(values),
    onSuccess: () => {
      router.refresh();
      queryClient.invalidateQueries({ queryKey: ["user-competences", userId] });
      toast.success("Berhasil Menambahkan Data Kemampuan dan Kompet,ensi!");
      form.reset();
    },
    onError: (error) => {
      toast.error("Terjadi Kesalahan Pada Server!");
      console.error(error);
    },
  });

  async function onSubmit(values: z.infer<typeof createCompetenceSchema>) {
    onCreateUserCreateCompetence(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <div className="flex items-center gap-3 font-semibold text-primary">
          <GraduationCap className="size-7" /> Tambah Data Kemampuan dan
          Kompetensi
        </div>
        <div className="flex flex-col gap-3 lg:flex-row">
          <FormField
            control={form.control}
            name="field"
            render={({ field }) => (
              <FormItem className="flex-[2]">
                <FormControl>
                  <Input placeholder="Bidang" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="skill"
            render={({ field }) => (
              <FormItem className="flex-[2]">
                <FormControl>
                  <Input placeholder="Keahlian / Bakat" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            disabled={competenceLength >= 5}
            className="flex items-center gap-3"
          >
            <Plus className="size-5" /> Tambah
          </Button>
        </div>
      </form>
    </Form>
  );
}
