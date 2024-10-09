import CreateFinalistForm from "@/components/AdminDashboard/Finalis/CreateFinalistForm";

export default function CreateFinalist() {
  return (
    <section className="flex w-full flex-col gap-6 py-6">
      <div className="flex gap-1 text-2xl capitalize">
        <span className="text-gray-400">Dashboard / Finalis / </span>
        <span>Tambah</span>
      </div>
      <CreateFinalistForm />
    </section>
  );
}
