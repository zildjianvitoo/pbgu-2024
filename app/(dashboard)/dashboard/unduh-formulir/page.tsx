"use client";

import ParticipantFile from "@/components/Dashboard/UnduhFormulir/ParticipantFile";
import { Button } from "@/components/ui/button";
import { getUserAchievementsByUserId } from "@/lib/network/user-achievement";
import { getUserCompetencesByUserId } from "@/lib/network/user-competence";
import { getUserFormalEducationByUserId } from "@/lib/network/user-formal-education";
import { getUserGeneralInfoByUserId } from "@/lib/network/user-general-info";
import { getUserInformalEducationsByUserId } from "@/lib/network/user-informal-education";
import { getUserOrganizationalExperiencesByUserId } from "@/lib/network/user-organizational-experience";
import { getUserPersonalInfoByUserId } from "@/lib/network/user-personal-info";
import { pdf } from "@react-pdf/renderer";
import { useQuery } from "@tanstack/react-query";
import { saveAs } from "file-saver";

import { Download, RotateCcw } from "lucide-react";
import { useSession } from "next-auth/react";

export default function UnduhFormulir() {
  const { data: session } = useSession();
  const userId = session?.user.id || "";

  const { data: userGeneralInfo } = useQuery({
    queryFn: () => getUserGeneralInfoByUserId(userId),
    queryKey: ["user-general-infos", userId],
  });

  const { data: userPersonalInfo } = useQuery({
    queryFn: () => getUserPersonalInfoByUserId(userId),
    queryKey: ["user-personal-infos", userId],
  });

  const { data: userFormalEducation } = useQuery({
    queryFn: () => getUserFormalEducationByUserId(userId),
    queryKey: ["user-formal-educations", userId],
  });

  const { data: userInformalEducations } = useQuery({
    queryFn: () => getUserInformalEducationsByUserId(userId),
    queryKey: ["user-informal-educations", userId],
  });

  const { data: userCompetences } = useQuery({
    queryFn: () => getUserCompetencesByUserId(userId),
    queryKey: ["user-competences", userId],
  });

  const { data: userOrganizationalExperiences } = useQuery({
    queryFn: () => getUserOrganizationalExperiencesByUserId(userId),
    queryKey: ["user-organizational-experiences", userId],
  });

  const { data: userAchievements } = useQuery({
    queryFn: () => getUserAchievementsByUserId(userId),
    queryKey: ["user-achievements", userId],
  });

  const downloadPdf = async () => {
    const fileName = "test.pdf";
    const blob = await pdf(
      <ParticipantFile
        generalInfo={userGeneralInfo}
        personalInfo={userPersonalInfo}
        formalEducation={userFormalEducation}
        informalEducations={userInformalEducations}
        competences={userCompetences}
        organizationalExperiences={userOrganizationalExperiences}
        achievements={userAchievements}
      />,
    ).toBlob();
    saveAs(blob, fileName);
  };

  if (
    userPersonalInfo &&
    userFormalEducation &&
    userInformalEducations &&
    userCompetences &&
    userOrganizationalExperiences &&
    userAchievements
  ) {
    return (
      <section className="flex w-full flex-col gap-4 pb-6 lg:gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-semibold text-primary">
            Formulir Data Peserta PBGU
          </h1>
          <div className="relative mt-4 flex justify-end gap-6 lg:mt-0 lg:justify-start">
            <Button onClick={downloadPdf} className="flex items-center gap-3">
              <Download />
              Unduh File
            </Button>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <Button disabled className="flex items-center gap-3">
        <RotateCcw className="size-5" />
        Generating File
      </Button>
    );
  }
}
