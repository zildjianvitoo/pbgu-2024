import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

export default function Cta() {
  return (
    <section id="cta" className="relative overflow-hidden py-14 lg:px-24">
      <div className="flex w-full flex-col items-center justify-between bg-primary/10 p-12 px-6 lg:flex-row lg:rounded-xl lg:px-12">
        <div className="space-y-5">
          <h2 className="text-4xl/snug font-semibold">
            Mari Bergabung dan Berkembang bersama <br />
            <span className="font-semibold text-secondary">
              Ikatan Bujang Gadis Unsri!
            </span>
          </h2>
          <p>Ayo segera bergabung dengan kami</p>
          <Link href="/daftar">
            <Button size="lg" className="mt-3 px-8 py-6 text-2xl uppercase">
              Bergabung
            </Button>
          </Link>
        </div>
        <figure className="relative hidden size-52 pr-20 lg:block">
          <Image
            src="/images/logo-ibgu.png"
            fill
            className="object-contain object-center"
            alt="IBGU Logo"
          />
        </figure>
      </div>
    </section>
  );
}
