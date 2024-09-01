import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { useState } from "react";
import { UserPersonalInfoType } from "@/lib/types/user-personal-info";
import { UserAchievementType } from "@/lib/types/user-achievement";
import { UserFormalEducationType } from "@/lib/types/user-formal-education";
import { UserInformalEducation } from "@prisma/client";
import { UserCompetenceType } from "@/lib/types/user-competence";
import { UserOrganizationalExperienceType } from "@/lib/types/user-organizational-experience";
import { UserGeneralInfoType } from "@/lib/types/user-general-info";
import { Checkbox } from "../ui/checkbox";
import Link from "next/link";

interface DialogConfirmProps {
  userGeneralInfo: UserGeneralInfoType;
  userPersonalInfo: UserPersonalInfoType;
  userFormalEducation: UserFormalEducationType;
  userInformalEducations: UserInformalEducation[];
  userCompetences: UserCompetenceType[];
  userOrganizationalExperiences: UserOrganizationalExperienceType[];
  userAchievements: UserAchievementType[];
}

export default function DialogConfirm({
  userGeneralInfo,
  userPersonalInfo,
  userFormalEducation,
  userInformalEducations,
  userCompetences,
  userOrganizationalExperiences,
  userAchievements,
}: DialogConfirmProps) {
  const [open, setOpen] = useState(true);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        onInteractOutside={(e) => {
          e.preventDefault();
        }}
        className="sm:max-w-[480px]"
      >
        <DialogHeader>
          <DialogTitle>Ingin mengunduh formulir?</DialogTitle>
          <DialogDescription>
            Pastikan semua data sudah terisi dengan baik dan benar!.
          </DialogDescription>
          <div className="space-y-3 pt-6">
            <p>Diwajibkan untuk mengisi data berikut :</p>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="data-umum"
                checked={userGeneralInfo && true}
                disabled
              />
              <label
                htmlFor="data-umum"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-100"
              >
                Data Umum
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="data-personal"
                checked={userPersonalInfo && true}
                disabled
              />
              <label
                htmlFor="data-personal"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-100"
              >
                Data Personal
              </label>
            </div>
          </div>
          <div className="space-y-3 pb-6 pt-4">
            <p>Disarankan untuk mengisi data berikut :</p>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="data-pendidikan-formal"
                checked={userFormalEducation && true}
                disabled
              />
              <label
                htmlFor="data-pendidikan-formal"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-100"
              >
                Data Pendidikan Formal
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="data-pendidikan-nonformal"
                checked={userInformalEducations && true}
                disabled
              />
              <label
                htmlFor="data-pendidikan-nonformal"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-100"
              >
                Data Pendidikan Non-Formal
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="data-pencapaian"
                checked={userCompetences && true}
                disabled
              />
              <label
                htmlFor="data-pencapaian"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-100"
              >
                Data Kemampuan & Kompetensi
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="data-pengalaman-organisasi"
                checked={userOrganizationalExperiences && true}
                disabled
              />
              <label
                htmlFor="data-pengalaman-organisasi"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-100"
              >
                Data Pengalaman Organisasi
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="data-prestasi"
                checked={userAchievements && true}
                disabled
              />
              <label
                htmlFor="data-prestasi"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-100"
              >
                Data Prestasi yang Pernah Diraih
              </label>
            </div>
          </div>
        </DialogHeader>

        <DialogFooter className="flex gap-2">
          <Link href="/dashboard/data-diri">
            <Button
              variant="outline"
              className="border-primary text-primary transition hover:bg-primary hover:text-white"
            >
              Lengkapi Data
            </Button>
          </Link>
          <Button
            disabled={!userGeneralInfo || !userPersonalInfo}
            type="submit"
            onClick={() => setOpen(false)}
          >
            Data Sudah Lengkap
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
