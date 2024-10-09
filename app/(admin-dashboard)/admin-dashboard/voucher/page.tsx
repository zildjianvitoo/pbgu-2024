"use client";
import { VoucherStatistic } from "@/components/AdminDashboard/Voucher/VoucherStatistic";
import VoucherTable from "@/components/AdminDashboard/Voucher/VoucherTable";
import { voucherColumn } from "@/lib/columns/voucher-column";
import { getAllVouchers } from "@/lib/network/voucher";
import { useQuery } from "@tanstack/react-query";

export default function VoucherDashboard() {
  const { data: vouchers } = useQuery({
    queryKey: ["vouchers"],
    queryFn: getAllVouchers,
  });

  return (
    <section className="flex w-full flex-col gap-4 py-6 lg:gap-6">
      <div className="flex gap-1 text-2xl capitalize">
        <span className="text-gray-400">Dashboard /</span>
        <span>Voucher</span>
      </div>
      <VoucherStatistic vouchers={vouchers || []} />
      <VoucherTable columns={voucherColumn} data={vouchers || []} />
    </section>
  );
}
