import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const finalists = await prisma.finalist.findMany({
      where: { gender: "perempuan" },
    });
    const voucher = await prisma.voucher.findMany({
      where: {
        status: "sudah-terpakai",
      },
    });

    const getFinalistVotes = (finalistId: string) => {
      const finalistVotes =
        voucher?.filter((vote) => vote.finalistId === finalistId) || [];

      if (finalistVotes.length === 0) return 0;

      return finalistVotes.reduce(
        (total, finalist) => total + Number(finalist.price),
        0,
      );
    };

    const calculateRealPercentage = (
      finalistId: string,
      votePercentage: string,
    ) => {
      const finalistVotes = getFinalistVotes(finalistId);
      return (finalistVotes / 100) * Number(votePercentage);
    };

    const finalistData = finalists.map((finalist) => ({
      name: `${finalist.number}. ${finalist.name}`,
      votes: getFinalistVotes(finalist.id),
      picture: finalist.image,
      prodi: finalist.prodi,
      faculty: finalist.faculty,
      number: finalist.number,
      gender: finalist.gender,
      manipulatedVotes: calculateRealPercentage(
        finalist.id,
        finalist.percentage,
      ),
    }));

    const totalManipulatedVotes = finalistData.reduce(
      (total, finalist) => total + finalist.manipulatedVotes,
      0,
    );

    const calculateManipulatedPercentage = (finalistVotes: number) =>
      totalManipulatedVotes > 0
        ? +((finalistVotes / totalManipulatedVotes) * 100).toFixed(2)
        : 0;

    const chartData = finalistData
      .map((finalist) => ({
        finalist: finalist.name,
        picture: finalist.picture,
        prodi: finalist.prodi,
        faculty: finalist.faculty,
        number: finalist.number,
        gender: finalist.gender,
        percentage: calculateManipulatedPercentage(finalist.manipulatedVotes),
      }))
      .sort((a, b) => b.percentage - a.percentage);

    return NextResponse.json(chartData, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong!", error },
      { status: 500 },
    );
  }
}
