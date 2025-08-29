import Link from "next/link";

const tutorEVoting = [];

export default function Header() {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 px-4 pt-6 text-center sm:px-6 lg:pt-0">
      <div className="space-y-6">
        <h1 className="text-5xl font-bold text-background lg:text-6xl">
          Tutorial <span className="text-secondary">E-VOTING</span>
        </h1>
        <ol className="relative z-30 mx-auto ml-6 flex list-decimal flex-col justify-center gap-3 text-left text-lg font-medium text-background lg:ml-10">
          <li>
            Buka halaman website{" "}
            <Link href="/" className="text-secondary">
              bgunsri.com
            </Link>
          </li>
          <li>
            Klik {"'"}Beli Voucher{"'"}
          </li>
          <li>
            Hubungi contact person yang tertera{" "}
            <a href="https://wa.me/6282382367306" className="text-secondary">
              082382367306
            </a>{" "}
            (Gadis Elviera)
          </li>
          <li>
            Lakukan transaksi dengan transfer melalui rekening <br /> sebagai
            berikut:{" "}
            <div className="inline-block text-secondary">
              BNI 2910201971 a.n Ikatan Bujang Gadis Unsri
            </div>
          </li>
          <li>
            Konfimasi ke CP sebelumnya dengan melampirkan bukti transfer
            <p className="text-secondary">
              (paling lama 10 menit setelah melakukan pembayaran)
            </p>
          </li>
          <li>
            Cantumkan Nomor Peserta_Nama Peserta_Jumlah Voucher <br /> Contoh:{" "}
            <p className="inline-block text-secondary">
              012_Putri_25.000 (2 buah)
            </p>
          </li>
          <li>
            Panitia akan mengirimkan kode voucher yang dapat <br /> anda
            masukkan pada web.
          </li>
        </ol>
      </div>
    </div>
  );
}
