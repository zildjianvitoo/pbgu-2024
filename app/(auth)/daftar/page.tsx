import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import RegisterForm from "@/components/Auth/RegisterForm";

export default function RegisterPage() {
  return (
    <section
      id="register"
      className="relative flex h-screen w-full overflow-hidden px-3 sm:px-5 lg:px-0"
    >
      <div
        id="img-container"
        className="absolute left-0 top-0 -z-10 h-full w-full flex-[2] lg:relative lg:block"
      >
        <Image
          src={"/images/logo-ibgu.png"}
          alt="LOGO IBGU"
          width={160}
          height={80}
          className="absolute left-10 top-10 z-20 hidden object-cover object-center lg:block"
        />

        <Image
          src={"/images/hero-image.jpeg"}
          alt="Register Image"
          fill
          className="-z-10 object-cover object-center brightness-[50%]"
        />
      </div>
      <div
        id="Register-form"
        className="m-auto flex-[1] rounded-lg bg-white px-8 py-8 sm:px-16 lg:px-20 xl:px-24"
      >
        <Link href="/" className="flex items-center gap-2">
          <div className="grid size-8 place-items-center rounded-full bg-white shadow-lg">
            <ArrowLeft size={20} />
          </div>
          <div className="mt-1 text-lg font-semibold">Back</div>
        </Link>
        <header className="mt-2">
          <h1 className="text-4xl font-bold text-primary drop-shadow-[0_2px_1px_#00000032]">
            Daftar
          </h1>
          <p className="mt-2 leading-6">
            Silahkan Daftar terlebih dahulu sebelum masuk lebih lanjut!
          </p>
        </header>
        <div className="mt-2">
          <RegisterForm />
        </div>
        <div className="mt-4 text-center text-sm">
          <span>Sudah memiliki akun? </span>
          <span>
            <Link className="font-semibold text-primary" href="/login">
              Masuk!
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
}
