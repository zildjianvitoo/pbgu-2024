"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type FacultyGroup = {
  faculty: string;
  groupLink: string; // WhatsApp/Telegram group invite link
  platform?: "WhatsApp" | "Telegram";
};

// TODO: Move this to API or admin-managed config if needed
const FACULTY_GROUPS: FacultyGroup[] = [
  {
    faculty: "Fakultas Keguruan",
    groupLink:
      "https://chat.whatsapp.com/FyHCq5ytZZ8Ex0E4kuMBCO?mode=ems_copy_c",
    platform: "WhatsApp",
  },
  {
    faculty: "Fakultas Kesehatan Masyarakat",
    groupLink:
      "https://chat.whatsapp.com/IjutrlVw3QPAeVlY6Nuxrk?mode=ems_copy_c",
    platform: "WhatsApp",
  },
  {
    faculty: "Fakultas Kedokteran",
    groupLink:
      "https://chat.whatsapp.com/LhQcw3xTZadKbgii5n7Ngu?mode=ems_copy_c",
    platform: "WhatsApp",
  },
  {
    faculty: "Fakultas Pertanian",
    groupLink:
      "https://chat.whatsapp.com/ClA8A0wwWQDKByhu0wzvkL?mode=ems_copy_c",
    platform: "WhatsApp",
  },
  {
    faculty: "Fakultas Teknik",
    groupLink:
      "https://chat.whatsapp.com/I5nfWJ6GJFd00X6jzHhQVl?mode=ems_copy_c",
    platform: "WhatsApp",
  },
  {
    faculty: "Fakultas Ekonomi",
    groupLink:
      "https://chat.whatsapp.com/KL9gFZDYxNNHFn459eDGbz?mode=ems_copy_c",
    platform: "WhatsApp",
  },
  {
    faculty: "Fakultas MIPA",
    groupLink:
      "https://chat.whatsapp.com/E4MMehOhhuM30hOtiCKl7u?mode=ems_copy_c",
    platform: "WhatsApp",
  },
  {
    faculty: "Fakultas Ilmu Komputer",
    groupLink:
      "https://chat.whatsapp.com/EPh23RjNGszLQ2ln47q4uT?mode=ems_copy_c",
    platform: "WhatsApp",
  },
  {
    faculty: "Fakultas Hukum",
    groupLink:
      "https://chat.whatsapp.com/EHpZCyHadLuFK20lsukQpV?mode=ems_copy_c",
    platform: "WhatsApp",
  },
  {
    faculty: "Fakultas Ilmu Sosial dan Ilmu Politik",
    groupLink:
      "https://chat.whatsapp.com/EPnrNmFCMLbKYVQUfPdLbo?mode=ems_copy_c",
    platform: "WhatsApp",
  },
];

export default function ContactPersons() {
  return (
    <div className="space-y-4" id="contact-persons">
      <div className="rounded-md border border-yellow-200 bg-yellow-50 p-4 text-yellow-900">
        <p className="text-sm">
          <span className="font-semibold">
            Harap segera bergabung ke grup Peserta Bujang Gadis Unsri sesuai
            dengan fakultas masing-masing!
          </span>
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {FACULTY_GROUPS.map((fg) => (
          <Card key={`${fg.faculty}`} className="">
            <CardHeader>
              <CardTitle className="text-base">{fg.faculty}</CardTitle>
            </CardHeader>
            <CardContent className="pt-2 text-sm">
              <div className="flex items-center justify-between">
                <p className="text-muted-foreground">
                  Grup {fg.platform ?? "WhatsApp"}
                </p>
                <a
                  className="rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-white hover:opacity-90"
                  href={fg.groupLink}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Gabung Grup
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
