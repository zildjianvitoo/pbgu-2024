import Image from "next/image";
import { Progress } from "@radix-ui/react-progress";

export function LeaderboardChart({
  gender,
  leaderboard,
}: {
  gender: string;
  leaderboard: LeaderboardType[];
}) {
  // const { data: votes } = useQuery({
  //   queryFn: getAllVouchers,
  //   queryKey: ["vouchers"],
  // });

  // const getFinalistVotes = (finalistId: string) => {
  //   const finalistVotes =
  //     votes?.filter((vote) => vote.finalistId === finalistId) || [];

  //   if (finalistVotes.length === 0) return 0;

  //   return finalistVotes.reduce(
  //     (total, finalist) => total + Number(finalist.price),
  //     0,
  //   );
  // };

  // const calculateRealPercentage = (
  //   finalistId: string,
  //   votePercentage: string,
  // ) => {
  //   const finalistVotes = getFinalistVotes(finalistId);
  //   return (finalistVotes / 100) * Number(votePercentage);
  // };

  // const finalistData = finalists.map((finalist) => ({
  //   name: `${finalist.number}. ${finalist.name}`,
  //   votes: getFinalistVotes(finalist.id),
  //   picture: finalist.image,
  //   prodi: finalist.prodi,
  //   faculty: finalist.faculty,
  //   number: finalist.number,
  //   manipulatedVotes: calculateRealPercentage(finalist.id, finalist.percentage),
  // }));

  // const totalManipulatedVotes = finalistData.reduce(
  //   (total, finalist) => total + finalist.manipulatedVotes,
  //   0,
  // );

  // const calculateManipulatedPercentage = (finalistVotes: number) =>
  //   Math.round(
  //     totalManipulatedVotes > 0
  //       ? (finalistVotes / totalManipulatedVotes) * 100
  //       : 0,
  //   );

  // const chartData = finalistData
  //   .map((finalist) => ({
  //     finalist: finalist.name,
  //     picture: finalist.picture,
  //     prodi: finalist.prodi,
  //     faculty: finalist.faculty,
  //     number: finalist.number,
  //     percentage: calculateManipulatedPercentage(finalist.manipulatedVotes),
  //   }))
  //   .sort((a, b) => b.percentage - a.percentage);

  return (
    <div className="mx-auto w-full space-y-3 rounded-xl border-2 border-primary px-4 py-6 lg:space-y-6">
      <div className="font-evogria flex flex-col items-center gap-1 text-center capitalize">
        <h2 className="text-2xl font-semibold text-primary md:text-3xl lg:text-3xl">
          LEADERBOARD
        </h2>

        <div className="h-0.5 w-80 bg-secondary" />

        <h3 className="text-tertiary text-end text-3xl font-medium md:text-4xl lg:text-start lg:text-4xl">
          VOTING {gender === "perempuan" ? "GADIS" : "BUJANG"}
        </h3>
        {/* <p>
          Total Real Votes :{" "}
          {votes?.filter((vote) => vote?.finalist?.gender === gender).length}
        </p>

        <p>Total Manipulated Votes : {totalManipulatedVotes}</p> */}
      </div>

      {/* <ChartContainer config={chartConfig}>
        <BarChart
          accessibilityLayer
          data={chartData}
          layout="vertical"
          margin={{
            right: 16,
          }}
        >
          <CartesianGrid horizontal={false} />
          <YAxis
            dataKey="finalist"
            type="category"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
            interval={0}
            hide
          />
          <XAxis dataKey="percentage" type="number" domain={[0, 115]} hide />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="line" />}
          />
          <Bar
            dataKey="percentage"
            layout="vertical"
            fill="var(--color-percentage)"
            radius={4}
          >
            <LabelList
              dataKey="finalist"
              position="insideLeft"
              offset={8}
              className={cn("fill-black/60 font-semibold", {
                "translate-x-10": value === 0,
              })}
              fontSize={16}
            />
            <LabelList
              dataKey="percentage"
              position="right"
              offset={8}
              className="fill-primary text-xl font-semibold"
              fontSize={12}
              formatter={(value: number) => {
                setValue(value);
                return value > 0 ? `${value}%` : "0%";
              }}
            />
          </Bar>
        </BarChart>
      </ChartContainer> */}

      <div className="space-y-8">
        {leaderboard.map((data) => (
          <div key={data.finalist} className="space-y-3">
            <div className="flex items-center gap-6">
              <div className="relative size-12 overflow-hidden rounded-full border-2 border-primary">
                <Image
                  src={data.picture}
                  alt={data.finalist}
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="flex flex-col items-center gap-2 md:flex-row">
                <div className="flex items-center gap-2">
                  <span className="text-base font-semibold text-primary lg:text-lg">
                    {data.number}.{" "}
                  </span>
                  <span className="text-sm lg:text-base">
                    {data.finalist.split(".")[1]}{" "}
                  </span>
                  <span className="hidden md:inline-block">-</span>
                  <span className="hidden text-sm md:block lg:text-base">
                    {data.prodi}
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Progress value={data.percentage} className="w-full" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-sm font-semibold text-primary">
                {data.percentage} %
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
