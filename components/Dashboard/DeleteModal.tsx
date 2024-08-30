"use client";

import { Trash } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "../ui/button";

type DeleteDialogProps = {
  params: string;
  deleteFunction: (params: string) => Promise<string>;
  queryKey: any;
};

export default function DeleteModal({
  params,
  deleteFunction,
  queryKey,
}: DeleteDialogProps) {
  const queryClient = useQueryClient();

  const { mutate: onDelete } = useMutation({
    mutationFn: () => deleteFunction(params),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKey });
      toast.success("Data Berhasil Dihapus!");
    },
    onError: (error) => {
      toast.error("Terjadi Kesalahan Pada Server!");
      console.error(error);
    },
  });

  async function handleDelete() {
    await onDelete();
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button className="p-1" size="icon">
          <Trash className="size-5" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="font-inter">
        <AlertDialogHeader>
          <AlertDialogTitle>
            Anda Yakin Ingin Menghapus Data Ini?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Data yang terhapus akan tidak dapat di kembalikan lagi, pastikan
            keputusan anda sebelum melanjutkan!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Batalkan</AlertDialogCancel>
          <AlertDialogAction
            className="bg-red-500 hover:bg-red-700"
            onClick={handleDelete}
          >
            Hapus
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
