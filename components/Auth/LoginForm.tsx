"use client";

import { signIn, useSession } from "next-auth/react";
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

import { Input } from "@/components/ui/input";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import "@/lib/zodCustomError";

export const loginSchema = z.object({
  email: z.string().email().min(1),
  password: z.string().min(1),
});

export default function LoginForm() {
  const [isShow, setIsShow] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    const { email, password } = values;

    try {
      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (response?.error) {
        toast.error("Email atau password salah!");
      } else {
        toast.success("Login Berhasil!");
        router.push("/dashboard/data-diri");
      }
    } catch (error) {
      console.log(error);
      toast.error("Terjadi kesalahan pada server!");
    }
  }

  return (
    <Form {...form}>
      <form autoComplete="false" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="">
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
                      className="w-full rounded-lg border bg-transparent px-12 py-2 text-base placeholder:text-base focus:outline-primary focus:ring-primary"
                      placeholder="ex: johndoe@gmail.com"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="mt-5">
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
                      className="w-full rounded-lg border bg-transparent px-12 py-2 text-base placeholder:text-base focus:outline-primary focus:ring-primary"
                      placeholder="ex: johndoe@gmail.com"
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
        </div>

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
