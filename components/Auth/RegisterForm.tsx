"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { IoMailOutline } from "react-icons/io5";
import { PiLockKeyThin } from "react-icons/pi";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FaTransgender } from "react-icons/fa";

import { toast } from "sonner";
import { User } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
// import { createUser } from "@/lib/network/user";

export const registerSchema = z.object({
  name: z.string().min(1, {
    message: "Nama tidak boleh kosong",
  }),
  email: z.string().email({
    message: "Masukkan email yang valid",
  }),
  gender: z.string().min(1, {
    message: "Gender tidak boleh kosong",
  }),
  password: z.string().min(1),
});

export default function RegisterForm() {
  const [isShow, setIsShow] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      gender: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof registerSchema>) {}

  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg font-bold text-primary">
                Nama
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <div className="absolute left-3 top-2 text-2xl text-primary">
                    <User />
                  </div>
                  <Input
                    className="w-full rounded-lg border bg-transparent px-12 py-2 text-base focus:outline-primary focus:ring-primary"
                    placeholder="ex: John Doe"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg font-bold text-primary">
                Email
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <div className="absolute left-3 top-2 text-2xl text-primary">
                    <IoMailOutline />
                  </div>
                  <Input
                    className="w-full rounded-lg border bg-transparent px-12 py-2 text-base focus:outline-primary focus:ring-primary"
                    placeholder="ex: johndoe@gmail.com"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg font-bold text-primary">
                Jenis Kelamin
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <div className="relative">
                    <div className="absolute left-3 top-2 text-2xl text-primary">
                      <FaTransgender />
                    </div>
                    <SelectTrigger className="pl-12">
                      <SelectValue placeholder="Pilih jenis kelamin" />
                    </SelectTrigger>
                  </div>
                </FormControl>
                <SelectContent>
                  <SelectItem value="bujang">Laki-laki</SelectItem>
                  <SelectItem value="gadis">Perempuan</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg font-bold text-primary">
                Password
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <div className="absolute left-3 top-2 text-2xl text-primary">
                    <PiLockKeyThin />
                  </div>
                  <Input
                    type={isShow ? "text" : "password"}
                    className="w-full rounded-lg border bg-transparent px-12 py-2 text-base focus:outline-primary focus:ring-primary"
                    placeholder="Ketik passwordmu disini"
                    {...field}
                  />
                  <div
                    onClick={() => setIsShow(!isShow)}
                    className="absolute right-3 top-2 bg-transparent text-2xl text-primary"
                  >
                    {isShow ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                  </div>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="mt-8">
          <button
            disabled={form.formState.isSubmitting}
            type="submit"
            className={`w-full rounded-lg py-2 text-lg text-white ${
              form.formState.isSubmitting ? "bg-green-300" : "bg-primary"
            }`}
          >
            {form.formState.isSubmitting ? "Submitting..." : "Login"}
          </button>
        </div>
      </form>
    </Form>
  );
}
