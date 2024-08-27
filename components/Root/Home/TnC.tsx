const terms = [
  "Mahasiswa/i aktif Universitas Sriwijaya.",
  "Jujur dan bertanggung jawab.",
  "Berkomitmen tinggi dan memiliki loyalitas.",
  "Mahasiswa aktif maksimal semester 5.",
  "IPK minimal 2,75 dan melampirkan SKHUN (bagi mahasiswa baru).",
  "Berusia maksimal 22 tahun dan belum menikah.",
  "Tinggi badan minimal Bujang 160 cm dan Gadis 150 cm.",
  "Mengikuti akun instagram @bgunsri.",
  "Mengunggah foto bukti pendaftaran di instagram yang didapatkan setelah mengumpulkanseluruh berkas. (note: akun instagram tidak diprivate dan tag @bgunsri).",
];

const attachments = [
  "Formulir Pendaftaran PBGU 2024 yang bisa diunduh di link pada bio Instagram@bgunsri.",
  "Fotokopi KPM (Kartu Pengenal Mahasiswa) atau KPM Sementara (bagi mahasiswa baru).",
  "Pas foto berwarna terbaru ukuran 3x4 sebanyak 1 Lembar ditempel di formulir.",
  "Fotokopi KHS semester terakhir atau SKHUN (bagi mahasiswa baru).",
  "Fotokopi Sertifikat (bila ada).",
  "Membayar uang pendaftaran Rp 100.000.",
  "Berkas dimasukkan kedalam map berwarna biru (Bujang) dan merah (Gadis).",
  "Map yang berisi berkas dituliskan Nama, Fakultas dan Jurusan peserta.",
];

export default function TnC() {
  return (
    <section
      id="syarat-dan-ketentuan"
      className="px-6 py-3 lg:px-24 lg:py-5 "
      //   bg-
      //   #F7F3F5
    >
      <div className="flex flex-col py-6 lg:py-10">
        <h5 className=" text-xl font-semibold text-secondary">Registrasi</h5>
        <h1 className="text-black   text-3xl lg:text-4xl  font-bold">
          Syarat dan Berkas <br />{" "}
          <span className=" text-transparent bg-clip-text bg-gradient-to-br from-primary to-yellow-700">
            Pemilihan Bujang Gadis UNSRI
          </span>{" "}
          2024
        </h1>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 mt-6 ">
          <div className="flex flex-1 flex-col gap-2 ">
            <h3 className="font-semibold text-secondary text-xl md:text-2xl">
              Persyaratan Umum
            </h3>
            <ol className=" list-decimal ml-5 text-lg font-medium">
              {terms.map((term) => (
                <li key={term}>{term}</li>
              ))}
            </ol>
          </div>
          <div className="flex flex-1 flex-col gap-2">
            <h3 className="font-semibold text-secondary text-xl md:text-2xl">
              Lampiran Berkas
            </h3>
            <ol className="flex-1 list-decimal ml-5 text-lg font-medium">
              {attachments.map((attachment) => (
                <li key={attachment}>{attachment}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
