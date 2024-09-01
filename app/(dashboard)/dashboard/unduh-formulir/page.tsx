"use client";

import DialogConfirm from "@/components/Dashboard/DialogConfirm";
import ParticipantFile from "@/components/Dashboard/UnduhFormulir/ParticipantFile";
import { Button } from "@/components/ui/button";
import { getUserAchievementsByUserId } from "@/lib/network/user-achievement";
import { getUserCompetencesByUserId } from "@/lib/network/user-competence";
import { getUserFormalEducationByUserId } from "@/lib/network/user-formal-education";
import { getUserGeneralInfoByUserId } from "@/lib/network/user-general-info";
import { getUserInformalEducationsByUserId } from "@/lib/network/user-informal-education";
import { getUserOrganizationalExperiencesByUserId } from "@/lib/network/user-organizational-experience";
import { getUserPersonalInfoByUserId } from "@/lib/network/user-personal-info";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { useQuery } from "@tanstack/react-query";

import { Download, RotateCcw } from "lucide-react";
import { useSession } from "next-auth/react";

export default function UnduhFormulir() {
  const { data: session } = useSession();
  const userId = session?.user.id || "";

  const { data: userGeneralInfo, isLoading: generalInfoLoading } = useQuery({
    queryFn: () => getUserGeneralInfoByUserId(userId),
    queryKey: ["user-general-infos", userId],
  });

  const { data: userPersonalInfo, isLoading: personalInfoLoading } = useQuery({
    queryFn: () => getUserPersonalInfoByUserId(userId),
    queryKey: ["user-personal-infos", userId],
  });

  const { data: userFormalEducation, isLoading: formalEducationLoading } =
    useQuery({
      queryFn: () => getUserFormalEducationByUserId(userId),
      queryKey: ["user-formal-educations", userId],
    });

  const { data: userInformalEducations, isLoading: informalEducationsLoading } =
    useQuery({
      queryFn: () => getUserInformalEducationsByUserId(userId),
      queryKey: ["user-informal-educations", userId],
    });

  const { data: userCompetences, isLoading: competencesLoading } = useQuery({
    queryFn: () => getUserCompetencesByUserId(userId),
    queryKey: ["user-competences", userId],
  });

  const {
    data: userOrganizationalExperiences,
    isLoading: organizationalsLoading,
  } = useQuery({
    queryFn: () => getUserOrganizationalExperiencesByUserId(userId),
    queryKey: ["user-organizational-experiences", userId],
  });

  const { data: userAchievements, isLoading: achievementsLoading } = useQuery({
    queryFn: () => getUserAchievementsByUserId(userId),
    queryKey: ["user-achievements", userId],
  });

  const isLoading =
    generalInfoLoading ||
    personalInfoLoading ||
    formalEducationLoading ||
    informalEducationsLoading ||
    competencesLoading ||
    organizationalsLoading ||
    achievementsLoading;

  return (
    <section className="flex w-full flex-col gap-4 pb-6 lg:gap-6">
      {!isLoading && (
        <DialogConfirm
          userGeneralInfo={userGeneralInfo!}
          userPersonalInfo={userPersonalInfo!}
          userFormalEducation={userFormalEducation!}
          userInformalEducations={userInformalEducations!}
          userAchievements={userAchievements!}
          userCompetences={userCompetences!}
          userOrganizationalExperiences={userOrganizationalExperiences!}
        />
      )}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold text-primary">
          Formulir Data Peserta PBGU
        </h1>
        <div className="relative mt-4 flex justify-end gap-6 lg:mt-0 lg:justify-start">
          {!isLoading ? (
            <Button>
              <PDFDownloadLink
                document={
                  <ParticipantFile
                    generalInfo={userGeneralInfo}
                    personalInfo={userPersonalInfo}
                    formalEducation={userFormalEducation}
                    informalEducations={userInformalEducations}
                    competences={userCompetences}
                    organizationalExperiences={userOrganizationalExperiences}
                    achievements={userAchievements}
                  />
                }
                fileName="Formulir Pendaftaran PBGU 2024"
                className="flex items-center gap-3"
              >
                <Download />
                Unduh File
              </PDFDownloadLink>
            </Button>
          ) : (
            <Button disabled className="flex items-center gap-3">
              <RotateCcw className="size-5" />
              Generating File
            </Button>
          )}
        </div>
      </div>
      {!isLoading && (
        <PDFViewer className="min-h-screen">
          <ParticipantFile
            generalInfo={userGeneralInfo}
            personalInfo={userPersonalInfo}
            formalEducation={userFormalEducation}
            informalEducations={userInformalEducations}
            competences={userCompetences}
            organizationalExperiences={userOrganizationalExperiences}
            achievements={userAchievements}
          />
        </PDFViewer>
      )}
    </section>
  );
}
