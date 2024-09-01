"use client";

import { LogOut } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import SearchDialog from "./SearchDialog";

interface DashboardHeaderProps {
  title?: string;
  subtitle?: string;
}

export default function DashboardHeader({
  title,
  subtitle,
}: DashboardHeaderProps) {
  const { data: session } = useSession();
  const router = useRouter();
  const username = session?.user.name;
  const userImage = session?.user.image;

  async function handleLogout() {
    await signOut();
    router.push("/");
    toast.success("Behasil Log Out!");
  }
  return (
    <div className="flex w-full flex-col gap-4 px-4 py-6 max-md:px-10 lg:flex-row lg:items-end lg:justify-between lg:gap-6 lg:p-6">
      <div className="flex items-center gap-5">
        {!title && (
          <figure className="relative size-14 overflow-hidden rounded-full border-2">
            <Image
              src={userImage || "/images/profile-default.jpg"}
              alt="User image profile"
              fill
              className="object-cover object-center"
            />
          </figure>
        )}
        <h2>
          {title ? title : "Welcome Back,"} <br />
          <span className="text-3xl font-bold">
            {subtitle ? subtitle : username}
          </span>
        </h2>
      </div>
      <div className="flex items-center gap-6">
        <SearchDialog />
        <div
          onClick={handleLogout}
          className="grid size-10 cursor-pointer place-items-center gap-3 rounded-md bg-primary text-white"
        >
          <LogOut className="w-6" />
        </div>
      </div>
    </div>
  );
}
