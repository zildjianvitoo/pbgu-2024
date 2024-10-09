import UpdateFinalistForm from "@/components/AdminDashboard/Finalis/UpdateFinalistForm";

export default function UpdateFinalist() {
  return (
    <section className="flex w-full flex-col gap-6 py-6">
      <div className="flex gap-1 text-2xl capitalize">
        <span className="text-gray-400">Dashboard / Finalis / </span>
        <span>Ubah</span>
      </div>
      <UpdateFinalistForm />
    </section>
  );
}
