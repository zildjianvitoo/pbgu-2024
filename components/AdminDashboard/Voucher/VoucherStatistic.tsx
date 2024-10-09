import { Label, Pie, PieChart } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { UserGeneralInfoType } from "@/lib/types/user-general-info";
import { FaFemale, FaMale } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { VoucherType } from "@/lib/types/voucher";

const chartConfig = {
  "Total Voucher Terpakai": {
    label: "Total Voucher Terpakai",
    color: "hsl(var(--chart-1))",
  },
  "Voucher Terpakai Bujang": {
    label: "Voucher Terpakai Bujang",
    color: "hsl(var(--chart-2))",
  },
  "Voucher Terpakai Gadis": {
    label: "Voucher Terpakai Gadis",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig;

interface VoucherStatisticProps {
  vouchers: VoucherType[];
}

export function VoucherStatistic({ vouchers }: VoucherStatisticProps) {
  const totalVouchers = vouchers.reduce(
    (acc, { price }) => acc + Number(price),
    0,
  );
  const totalUsedVouchers = vouchers
    .filter((item) => item.status === "sudah terpakai")
    .reduce((acc, currentValue) => acc + +currentValue.price, 0);

  const totalUsedVouchersMale = vouchers
    .filter(
      (item) =>
        item.status === "sudah terpakai" &&
        item.finalist?.gender === "laki-laki",
    )
    .reduce((acc, { price }) => acc + Number(price), 0);

  const totalUsedVouchersFemale = vouchers
    .filter(
      (item) =>
        item.status === "sudah terpakai" &&
        item.finalist?.gender === "perempuan",
    )
    .reduce((acc, { price }) => acc + Number(price), 0);

  const chartData = [
    {
      service: "Voucher Terpakai Bujang",
      total: totalUsedVouchersMale,
      fill: "hsl(var(--chart-2))",
      Icon: FaMale,
    },
    {
      service: "Voucher Terpakai Gadis",
      total: totalUsedVouchersFemale,
      fill: "hsl(var(--chart-4))",
      Icon: FaFemale,
    },
  ];

  return (
    <Card className="flex flex-col gap-6 border-none bg-transparent px-0 shadow-none">
      <CardContent className="flex flex-col gap-6 p-0 lg:flex-row">
        <ChartContainer
          config={chartConfig}
          className="aspect-square max-h-[336px] flex-[5] rounded-lg bg-background px-2 py-2"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="total"
              nameKey="service"
              innerRadius={70}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalUsedVouchers.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Total Voucher Terpakai
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
            <ChartLegend content={<ChartLegendContent nameKey="service" />} />
          </PieChart>
        </ChartContainer>
        <div className="grid flex-[12] grid-cols-1 gap-3 rounded-lg bg-background p-6 md:grid-cols-3">
          <Card
            key={"Total Peserta"}
            className="group cursor-pointer border-2 border-primary transition-all duration-300 hover:scale-105 hover:text-white"
            style={{
              color: "hsl(var(--chart-1))",
              borderColor: "hsl(var(--chart-1))",
            }}
          >
            <CardHeader className="h-full items-center justify-center space-y-3">
              <FaPeopleGroup className="size-16" />

              <CardTitle className="text-center text-xl font-normal md:text-2xl">
                Total Voucher Terpakai
              </CardTitle>

              <p className="text-center text-xl font-bold md:text-2xl">
                {totalUsedVouchers.toLocaleString("id-ID")} (
                {Math.floor((totalUsedVouchers * 100) / totalUsedVouchers)}
                %)
              </p>
            </CardHeader>
          </Card>
          {chartData.map((item) => (
            <Card
              key={item.service}
              className="group cursor-pointer border-2 border-primary transition-all duration-300 hover:scale-105 hover:text-white"
              style={{ color: item.fill, borderColor: item.fill }}
            >
              <CardHeader className="h-full items-center justify-center space-y-3">
                <item.Icon className="size-16" />

                <CardTitle className="text-center text-xl font-normal md:text-2xl">
                  {item.service}
                </CardTitle>

                <p className="text-center text-xl font-bold md:text-2xl">
                  {item.total.toLocaleString("id-ID")} (
                  {Math.floor((item.total * 100) / totalUsedVouchers)}%)
                </p>
              </CardHeader>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
