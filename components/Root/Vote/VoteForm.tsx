"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateVoucherByCode } from "@/lib/network/voucher";
import { CreateVoucherType } from "@/lib/types/voucher";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef, useState } from "react";
import { FinalistType } from "@/lib/types/finalist";
import Image from "next/image";
import { AxiosError } from "axios";

const ticketSchema = z.object({
  code: z.string().min(1),
  status: z.string().min(1),
  finalistId: z.string().min(1),
});

interface ErrorResponse {
  error: string;
}

interface VoteFormProps {
  finalist: FinalistType;
  setOpenChange: (value: boolean) => void;
}

export default function VoteForm({ finalist, setOpenChange }: VoteFormProps) {
  const queryClient = useQueryClient();
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA | null>(null);

  const gender = finalist.gender === "laki-laki" ? "BUJANG" : "GADIS";

  const { mutate: onUpdateVoucher } = useMutation({
    mutationFn: (values: CreateVoucherType) => updateVoucherByCode(values),
    onSuccess: () => {
      toast.success("Berhasil voting peserta pilihan anda!");
      queryClient.invalidateQueries({ queryKey: ["finalist"] });
      setOpenChange(false);
    },
    onError: (error: AxiosError<ErrorResponse>) => {
      toast.error(error.response?.data?.error);
    },
  });

  const form = useForm<z.infer<typeof ticketSchema>>({
    resolver: zodResolver(ticketSchema),
    values: {
      code: "",
      status: "sudah terpakai",
      finalistId: finalist.id,
    },
  });

  async function onSubmit(values: z.infer<typeof ticketSchema>) {
    // if (!recaptchaToken) {
    //   toast.error("Please complete the CAPTCHA");
    //   return;
    // }

    onUpdateVoucher(values);
  }

  function onReCAPTCHAChange(token: string | null) {
    setRecaptchaToken(token);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5 lg:flex-row lg:gap-9"
      >
        {/* <figure className="relative h-40 flex-shrink-0 overflow-hidden rounded-lg bg-primary/20 sm:h-48 md:h-56 lg:aspect-[3/4] lg:h-80">
          <Image
            src={finalist.image}
            fill
            className="object-cover object-top lg:object-bottom"
            alt={finalist.name}
          />
        </figure> */}
        <div className="relative h-64 flex-grow lg:h-80 lg:pb-8">
          <p className="font-evogria text-tertiary text-lg lg:text-xl">
            VOTE CALON {gender}
          </p>
          <p className="mt-2 text-2xl font-semibold text-primary lg:text-3xl">
            <span className="text-tertiary">{finalist.number}.</span>{" "}
            {finalist.name}
          </p>
          <div className="mt-4 flex flex-col lg:h-full">
            <div className="flex flex-col lg:h-full">
              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Kode Voucher</FormLabel>
                    <FormControl>
                      <Input placeholder="BGUXXXXXXXXX" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* <ReCAPTCHA
                className="py-3"
                ref={recaptchaRef}
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                onChange={onReCAPTCHAChange}
              /> */}
              <div className="mt-6 flex h-full flex-col items-center justify-between gap-3 lg:mt-auto lg:flex-row">
                <Button type="submit" className="w-full lg:w-1/2">
                  Vote
                </Button>
                <p className="text-end text-sm text-primary">
                  Pastikan peserta yang anda pilih sudah tepat!
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
}
