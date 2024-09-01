import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { useState } from "react";

export default function DialogConfirm() {
  const [open, setOpen] = useState(true);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Ingin mengunduh formulir?</DialogTitle>
          <DialogDescription>
            Pastikan semua data sudah terisi dengan baik dan benar!.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Button type="submit" onClick={() => setOpen(false)}>
            Sudah diisi semua
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
