import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ReactNode, useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { CreateVoucherType } from "@/lib/types/voucher";
import { createVoucher } from "@/lib/network/voucher";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CreateVoucherModalProps {
  children?: ReactNode;
}

const formSchema = z.object({
  price: z.string().min(1),
  quantity: z.string().min(1),
});

export default function CreateVoucherModal({
  children,
}: CreateVoucherModalProps) {
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      price: "",
      quantity: "",
    },
  });

  const { mutate: onCreateUser } = useMutation({
    mutationFn: (values: CreateVoucherType) => createVoucher(values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["vouchers"] });
      setOpen(false);
      router.refresh();
      toast.success("Voucher Berhasil Dibuat!");
    },
    onError: (error) => {
      toast.error("Something went wrong!");
      console.error(error);
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    onCreateUser(values);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="font-inter bg-slate-100 lg:min-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-3xl font-semibold text-primary">
            Tambahkan Voucher
          </DialogTitle>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex items-end gap-6"
            >
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem className="w-3/6">
                    <FormLabel>Tarif (Rp)</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih Tarif Voucher" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="20000">Rp. 20.000</SelectItem>
                        <SelectItem value="50000">Rp. 50.000</SelectItem>
                        <SelectItem value="100000">Rp. 100.000</SelectItem>
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="quantity"
                render={({ field }) => (
                  <FormItem className="w-2/6">
                    <FormLabel>Jumlah Voucher</FormLabel>
                    <FormControl>
                      <Input placeholder="ex: 10" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-1/6">
                Submit
              </Button>
            </form>
          </Form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
