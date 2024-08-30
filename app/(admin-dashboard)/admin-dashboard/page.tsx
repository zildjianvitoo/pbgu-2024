import { BarChart2 } from "lucide-react";

import RegistrantTable from "@/components/AdminDashboard/RegistrantTable";

import { getAllUsers } from "@/lib/network/user";
import { registrantColumn } from "@/lib/columns/registrant-column";
import { getAllUserGeneralInfos } from "@/lib/network/user-general-info";

export default async function Dashboard() {
  const data = await getAllUserGeneralInfos();

  return (
    <section className="flex w-full flex-col gap-4 py-6 lg:gap-6">
      {/* Header Title */}
      <div className="flex gap-1 text-2xl capitalize">
        <span className="text-gray-400">Dashboard /</span>
        <span>Daftar Pendaftar</span>
      </div>

      {/* Data Statistic */}
      <div className="flex flex-col gap-4 lg:flex-row lg:gap-6">
        <div className="box-shadow flex flex-[1] flex-col items-center justify-center gap-2 rounded-md bg-white p-6">
          <div className="relative grid aspect-square w-52 place-items-center rounded-full bg-primary">
            <div className="flex aspect-square w-44 flex-col items-center justify-center gap-2 rounded-full bg-white">
              <p className="text-4xl font-bold text-primary">{data.length}</p>
              <p className="flex gap-1 text-xl font-medium text-secondary">
                <BarChart2 />
                Total Data
              </p>
            </div>
          </div>
        </div>

        {/* <div className="box-shadow max-h-fit w-full flex-[3] justify-between rounded-md bg-white px-6 pt-6">
          <WeeklyChart
            chartData={remapData(news || []).slice(-10)}
            title="Berita 10 data terakhir"
            label="Berita"
          />
        </div> */}
      </div>

      <RegistrantTable columns={registrantColumn} data={data || []} />
    </section>
  );
}
