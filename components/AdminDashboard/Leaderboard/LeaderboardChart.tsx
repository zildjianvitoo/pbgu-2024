import { FinalistType } from "@/lib/types/finalist";
import { useQuery } from "@tanstack/react-query";

import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { getAllVouchers } from "@/lib/network/voucher";

export function LeaderboardChart({
  gender,
  participants,
}: {
  gender: string;
  participants: FinalistType[];
}) {
  const { data: votes } = useQuery({
    queryFn: getAllVouchers,
    queryKey: ["vouchers"],
  });

  const getParticipantVotes = (participantId: string) =>
    votes?.filter((vote) => vote.participantId === participantId).length || 0;

  const calculateRealPercentage = (
    participantId: string,
    votePercentage: string,
  ) => {
    const participantVotes = getParticipantVotes(participantId);
    return (participantVotes / 100) * Number(votePercentage);
  };

  const participantData = participants.map((participant) => ({
    name: `${participant.number}. ${participant.name}`,
    votes: getParticipantVotes(participant.id),
    manipulatedVotes: calculateRealPercentage(
      participant.id,
      participant.percentage,
    ),
  }));

  const totalManipulatedVotes = participantData.reduce(
    (total, participant) => total + participant.manipulatedVotes,
    0,
  );

  const calculateManipulatedPercentage = (participantVotes: number) =>
    Math.round(
      totalManipulatedVotes > 0
        ? (participantVotes / totalManipulatedVotes) * 100
        : 0,
    );

  const chartData = participantData
    .map((participant) => ({
      participant: participant.name,
      percentage: calculateManipulatedPercentage(participant.manipulatedVotes),
    }))
    .sort((a, b) => b.percentage - a.percentage);

  const chartConfig = {
    percentage: {
      label: "Percentage",
      color: "hsl(var(--chart-1))",
    },
  } satisfies ChartConfig;

  return (
    <div className="mx-auto w-full space-y-3 rounded-xl border-2 border-primary px-4 py-6 lg:space-y-6">
      <div className="font-evogria flex flex-col items-center gap-1 text-center capitalize">
        <h2 className="text-2xl font-semibold text-primary md:text-3xl lg:text-3xl">
          LEADERBOARD
        </h2>

        <div className="h-0.5 w-80 bg-secondary" />

        <h3 className="text-tertiary text-end text-3xl font-medium md:text-4xl lg:text-start lg:text-4xl">
          VOTING {gender}
        </h3>
        <p>
          Total Real Votes :{" "}
          {votes?.filter((vote) => vote?.participant?.gender === gender).length}
        </p>

        <p>Total Manipulated Votes : {totalManipulatedVotes}</p>
      </div>

      <ChartContainer config={chartConfig}>
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
            dataKey="participant"
            type="category"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
            hide
          />
          <XAxis dataKey="percentage" type="number" hide />
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
              dataKey="participant"
              position="insideLeft"
              offset={8}
              className="fill-white"
              fontSize={16}
            />
            <LabelList
              dataKey="percentage"
              position="right"
              offset={8}
              className="fill-primary text-xl"
              fontSize={12}
              formatter={(value: number) => `${value}%`}
            />
          </Bar>
        </BarChart>
      </ChartContainer>
    </div>
  );
}
