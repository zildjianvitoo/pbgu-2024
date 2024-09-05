import { getUserFormalEducationByUserId } from "@/lib/network/user-formal-education";
import { getUserGeneralInfoByUserId } from "@/lib/network/user-general-info";
import { getUserInformalEducationsByUserId } from "@/lib/network/user-informal-education";
import { getUserPersonalInfoByUserId } from "@/lib/network/user-personal-info";
import { getUserCompetencesByUserId } from "@/lib/network/user-competence";
import { getUserOrganizationalExperiencesByUserId } from "@/lib/network/user-organizational-experience";
import { getUserAchievementsByUserId } from "@/lib/network/user-achievement";

import ViewPDF from "@/components/AdminDashboard/ViewPDF";
import GeneralInfo from "@/components/AdminDashboard/Peserta/GeneralInfo";
import PersonalInfo from "@/components/AdminDashboard/Peserta/PersonalInfo";
import FormalEducation from "@/components/AdminDashboard/Peserta/FormalEducation";
import InformalEducation from "@/components/AdminDashboard/Peserta/InformalEducation";
import Achievement from "@/components/AdminDashboard/Peserta/Achievement";
import Competence from "@/components/AdminDashboard/Peserta/Competence";
import OrganizationalExperience from "@/components/AdminDashboard/Peserta/OrganizationalExperience";

export default async function UserDetail({
  params,
}: {
  params: { userId: string };
}) {
  const userId = params.userId;
  const [
    generalInfo,
    personalInfo,
    formalEducation,
    informalEducations,
    competences,
    organizationalExperiences,
    achievements,
  ] = await Promise.all([
    getUserGeneralInfoByUserId(userId),
    getUserPersonalInfoByUserId(userId),
    getUserFormalEducationByUserId(userId),
    getUserInformalEducationsByUserId(userId),
    getUserCompetencesByUserId(userId),
    getUserOrganizationalExperiencesByUserId(userId),
    getUserAchievementsByUserId(userId),
  ]);

  return (
    <section className="flex w-full flex-col gap-4 py-6 lg:gap-6">
      {/* Header Title */}
      <div className="flex gap-1 text-2xl capitalize">
        <span className="text-gray-400">Dashboard /</span>
        <span>Data Peserta /</span>
        <span className="font-semibold text-primary">
          {generalInfo.fullname}
        </span>
      </div>
      <GeneralInfo generalInfo={generalInfo} />
      <PersonalInfo personalInfo={personalInfo} />

      <FormalEducation formalEducation={formalEducation} />
      <InformalEducation informalEducations={informalEducations} />

      <Competence competences={competences} />
      <OrganizationalExperience
        organizationalExperiences={organizationalExperiences}
      />
      <Achievement achievements={achievements} />
      <ViewPDF
        generalInfo={generalInfo}
        personalInfo={personalInfo}
        formalEducation={formalEducation}
        informalEducations={informalEducations}
        competences={competences}
        organizationalExperiences={organizationalExperiences}
        achievements={achievements}
      />
    </section>
  );
}
