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
  "Formulir Pendaftaran PBGU 2024 yang bisa diunduh di link pada bio Instagram @bgunsri.",
  "Fotokopi KPM (Kartu Pengenal Mahasiswa) atau KPM Sementara (bagi mahasiswa baru).",
  "Pas foto berwarna terbaru ukuran 3x4 sebanyak 1 Lembar ditempel di formulir.",
  "Foto full body dan close up ukuran 4R (kualitas foto studio)",
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
      className="bg-primary/5 px-6 py-12 lg:px-24 lg:py-20"
    >
      <div className="flex flex-col py-6 lg:py-10">
        <h5 className="text-xl font-semibold text-secondary">Registrasi</h5>
        <h1 className="text-3xl font-bold text-black md:text-4xl lg:text-5xl">
          Syarat dan Berkas <br />{" "}
          <span className="bg-gradient-to-br from-primary to-red-900/60 bg-clip-text text-transparent">
            Pemilihan Bujang Gadis UNSRI
          </span>{" "}
          2024
        </h1>
        <div className="mt-12 flex flex-col gap-6 lg:flex-row lg:gap-8">
          <div className="flex flex-1 flex-col gap-2">
            <h3 className="text-xl font-semibold text-secondary md:text-2xl">
              Persyaratan Umum
            </h3>
            <ol className="ml-5 list-decimal text-lg font-medium">
              {terms.map((term) => (
                <li key={term}>{term}</li>
              ))}
            </ol>
          </div>
          <div className="flex flex-1 flex-col gap-2">
            <h3 className="text-xl font-semibold text-secondary md:text-2xl">
              Lampiran Berkas
            </h3>
            <ol className="ml-5 flex-1 list-decimal text-lg font-medium">
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
