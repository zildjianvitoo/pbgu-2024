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

const chartConfig = {
  "Total Peserta": {
    label: "Total Peserta",
    color: "hsl(var(--chart-1))",
  },
  "Peserta Bujang": {
    label: "Peserta Bujang",
    color: "hsl(var(--chart-2))",
  },
  "Peserta Gadis": {
    label: "Peserta Gadis",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig;

interface UserStatisticProps {
  userGeneralInfo: UserGeneralInfoType[];
}

export function UserStatistic({ userGeneralInfo }: UserStatisticProps) {
  const totalUser = userGeneralInfo.length;
  const totalMale = userGeneralInfo.filter(
    (item) => item.gender === "Laki-laki",
  ).length;
  const totalFemale = userGeneralInfo.filter(
    (item) => item.gender === "Perempuan",
  ).length;

  const chartData = [
    {
      service: "Total Peserta",
      total: totalUser,
      fill: "hsl(var(--chart-1))",
      Icon: FaPeopleGroup,
    },
    {
      service: "Peserta Bujang",
      total: totalMale,
      fill: "hsl(var(--chart-2))",
      Icon: FaMale,
    },
    {
      service: "Peserta Gadis",
      total: totalFemale,
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
                          {totalUser.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Total Pendaftar
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
                  {item.total} ({Math.floor((item.total * 100) / totalUser)}%)
                </p>
              </CardHeader>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
