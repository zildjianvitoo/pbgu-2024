"use client";

import { UserAchievementType } from "@/lib/types/user-achievement";
import { UserCompetenceType } from "@/lib/types/user-competence";
import { UserFormalEducationType } from "@/lib/types/user-formal-education";
import { UserGeneralInfoType } from "@/lib/types/user-general-info";
import { UserInformalEducationType } from "@/lib/types/user-informal-education";
import { UserOrganizationalExperienceType } from "@/lib/types/user-organizational-experience";
import { UserPersonalInfoType } from "@/lib/types/user-personal-info";
import ParticipantFile from "../Dashboard/UnduhFormulir/ParticipantFile";
import { PDFViewer } from "@react-pdf/renderer";

interface Props {
  generalInfo?: UserGeneralInfoType;
  personalInfo?: UserPersonalInfoType;
  formalEducation?: UserFormalEducationType;
  informalEducations?: UserInformalEducationType[];
  competences?: UserCompetenceType[];
  organizationalExperiences?: UserOrganizationalExperienceType[];
  achievements?: UserAchievementType[];
}

export default function ViewPDF({
  achievements,
  competences,
  formalEducation,
  generalInfo,
  informalEducations,
  organizationalExperiences,
  personalInfo,
}: Props) {
  return (
    <PDFViewer className="min-h-screen">
      <ParticipantFile
        generalInfo={generalInfo}
        personalInfo={personalInfo}
        formalEducation={formalEducation}
        informalEducations={informalEducations}
        competences={competences}
        organizationalExperiences={organizationalExperiences}
        achievements={achievements}
      />
    </PDFViewer>
  );
}
