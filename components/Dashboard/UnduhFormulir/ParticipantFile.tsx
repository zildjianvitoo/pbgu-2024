/* eslint-disable jsx-a11y/alt-text */
import { UserAchievementType } from "@/lib/types/user-achievement";
import { UserCompetenceType } from "@/lib/types/user-competence";
import { UserFormalEducationType } from "@/lib/types/user-formal-education";
import { UserGeneralInfoType } from "@/lib/types/user-general-info";
import { UserInformalEducationType } from "@/lib/types/user-informal-education";
import { UserOrganizationalExperienceType } from "@/lib/types/user-organizational-experience";
import { UserPersonalInfoType } from "@/lib/types/user-personal-info";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";

Font.register({
  family: "Times New Roman",
  fonts: [
    {
      src: "/fonts/times new roman.ttf", // Regular
    },
    {
      src: "/fonts/times new roman bold.ttf",
      fontWeight: "bold", // Bold
    },
    {
      src: "/fonts/times new roman italic.ttf",
      fontStyle: "italic", // Italic
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    fontFamily: "Times New Roman",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#FFF",
    fontSize: 12,
    paddingTop: 24,
    paddingHorizontal: 0,
    minHeight: "100%",
  },
  head: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 24,
  },
  header: {
    fontFamily: "Times New Roman",
    fontSize: 12,
    textAlign: "center",
    paddingBottom: 8,
    fontWeight: 800,
  },
  subHeader: {
    fontFamily: "Times New Roman",
    fontSize: 10,
    textAlign: "center",
    paddingBottom: 6,
    fontWeight: 800,
  },
  text: {
    fontFamily: "Times New Roman",
    fontSize: 12,
    textAlign: "center",
    paddingBottom: 8,
  },
  form: {
    display: "flex",
    flexDirection: "row",
  },
  label: {
    fontFamily: "Times New Roman",
    fontSize: 12,
    paddingBottom: 8,
    width: "44%",
  },
  unsri: {
    width: 96,
    height: 86,
    objectFit: "cover",
  },
  pbgu: {
    width: 92,
    height: 86,
  },
  tableHeader: {
    textAlign: "center",
    fontWeight: 800,
    paddingHorizontal: 4,
    paddingVertical: 6,
    borderColor: "black",
    borderWidth: 1,
  },
  tableData: {
    paddingHorizontal: 4,
    paddingVertical: 6,
    borderColor: "black",
    borderWidth: 1,
  },
});

interface ParticipantFileProps {
  generalInfo?: UserGeneralInfoType;
  personalInfo?: UserPersonalInfoType;
  formalEducation?: UserFormalEducationType;
  informalEducations?: UserInformalEducationType[];
  competences?: UserCompetenceType[];
  organizationalExperiences?: UserOrganizationalExperienceType[];
  achievements?: UserAchievementType[];
}

export default function ParticipantFile({
  generalInfo,
  personalInfo,
  formalEducation,
  informalEducations,
  competences,
  organizationalExperiences,
  achievements,
}: ParticipantFileProps) {
  const papers = [
    { files: "Formulir Pendaftaran" },
    { files: "Pas Foto uk. 3x4" },
    { files: "Fotokopi KPM" },
    { files: "Foto Full Body" },
    { files: "Foto Close Up" },
    { files: "Fotokopi KHS/SKHUN" },
    { files: "Fotokopi Sertifikat" },
    { files: "Map Berwarna" },
  ];

  if (
    generalInfo &&
    personalInfo &&
    formalEducation &&
    informalEducations &&
    competences &&
    organizationalExperiences &&
    achievements
  ) {
    return (
      <Document>
        <Page wrap size="A4" style={styles.page}>
          <View style={{ maxHeight: "100%", height: "100%" }}>
            <View fixed>
              <View style={styles.head}>
                <Image style={styles.unsri} src="/images/logo-unsri.png" />
                <View
                  style={{
                    width: "84%",
                  }}
                >
                  <Text style={styles.header}>
                    KEMENTERIAN RISET, TEKNOLOGI, DAN PENDIDIKAN TINGGI
                  </Text>
                  <Text style={styles.header}>UNIVERSITAS SRIWIJAYA</Text>
                  <Text style={styles.header}>
                    IKATAN BUJANG GADIS UNIVERSITAS SRIWIJAYA
                  </Text>
                  <Text style={styles.subHeader}>Contact Person:</Text>
                  <Text style={styles.subHeader}>
                    M. Sultan Asfari (081377748943) / Shafira Junisar
                    (085720116361)
                  </Text>
                </View>
                <Image style={styles.pbgu} src="/images/logo-ibgu.png" />
              </View>
              <View
                style={{
                  width: "100%",
                  height: 8,
                  backgroundColor: "orange",
                }}
              />
              <View
                style={{
                  width: "100%",
                  height: 5,
                  backgroundColor: "yellow",
                }}
              />
            </View>
            <View
              style={{
                marginTop: 12,
              }}
            >
              <Text style={styles.header}>FORMULIR PENDAFTARAN</Text>
              <Text style={styles.header}>
                PEMILIHAN BUJANG GADIS UNIVERSITAS SRIWIJAYA
              </Text>
              <Text style={styles.header}>TAHUN 2024</Text>
            </View>
            <View
              style={{
                marginTop: 12,
                paddingHorizontal: 48,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    width: "72%",
                  }}
                >
                  <Text style={{ ...styles.label, fontWeight: 800 }}>
                    Informasi Umum
                  </Text>
                  <View style={styles.form}>
                    <Text style={styles.label}>Nama Lengkap</Text>
                    <Text>: {generalInfo.fullname}</Text>
                  </View>
                  <View style={styles.form}>
                    <Text style={styles.label}>Panggilan</Text>
                    <Text>: {generalInfo.alias}</Text>
                  </View>
                  <View style={styles.form}>
                    <Text style={styles.label}>NIM</Text>
                    <Text>: {generalInfo.nim}</Text>
                  </View>
                  <View style={styles.form}>
                    <Text style={styles.label}>Prodi/Jurusan</Text>
                    <Text>: {generalInfo.major}</Text>
                  </View>
                  <View style={styles.form}>
                    <Text style={styles.label}>Tempat, Tanggal Lahir</Text>
                    <Text>: {generalInfo.birth}</Text>
                  </View>
                  <View style={styles.form}>
                    <Text style={styles.label}>Usia</Text>
                    <Text>: {generalInfo.age} Tahun</Text>
                  </View>
                  <View style={styles.form}>
                    <Text style={styles.label}>Jenis Kelamin</Text>
                    <Text>: {generalInfo.gender}</Text>
                  </View>
                  <View style={styles.form}>
                    <Text style={styles.label}>Alamat Tempat Tinggal</Text>
                    <Text>: {generalInfo.address}</Text>
                  </View>
                </View>
                <View
                  style={{
                    borderColor: "#000",
                    borderWidth: "1",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 100,
                    height: 134,
                  }}
                >
                  <Text>3 X 4</Text>
                </View>
              </View>

              <View style={{ marginTop: 10, width: "72%" }}>
                <View style={styles.form}>
                  <Text style={styles.label}>Nomor Telepon</Text>
                  <Text>: {generalInfo.phone_number}</Text>
                </View>
                <View style={styles.form}>
                  <Text style={styles.label}>Email</Text>
                  <Text>: {generalInfo.email}</Text>
                </View>
                <View style={styles.form}>
                  <Text style={styles.label}>Line</Text>
                  <Text>: {generalInfo.line}</Text>
                </View>
                <View style={styles.form}>
                  <Text style={styles.label}>Facebook</Text>
                  <Text>: {generalInfo.facebook}</Text>
                </View>
                <View style={styles.form}>
                  <Text style={styles.label}>Instagram</Text>
                  <Text>: {generalInfo.instagram}</Text>
                </View>
              </View>

              <View style={{ marginTop: 12, width: "72%" }}>
                <Text style={{ ...styles.label, fontWeight: 800 }}>
                  Informasi Pribadi
                </Text>
                <View style={styles.form}>
                  <Text style={styles.label}>Tinggi/Berat Badan</Text>
                  <Text>
                    : {personalInfo.height} cm / {personalInfo.weight} kg
                  </Text>
                </View>
                <View style={styles.form}>
                  <Text style={styles.label}>Bahasa Asing yang Dikuasai</Text>
                  <Text>: {personalInfo.foreign_language}</Text>
                </View>
                <View style={styles.form}>
                  <Text style={styles.label}>Hobby</Text>
                  <Text>: {personalInfo.hobby}</Text>
                </View>
                <View style={styles.form}>
                  <Text style={styles.label}>Nama Ayah Kandung</Text>
                  <Text>: {personalInfo.father}</Text>
                </View>
                <View style={styles.form}>
                  <Text style={styles.label}>Nama Ibu Kandung</Text>
                  <Text>: {personalInfo.mother}</Text>
                </View>
                <View style={styles.form}>
                  <Text style={styles.label}>Pekerjaan Orang Tua</Text>
                  <Text>: {personalInfo.parents_job}</Text>
                </View>
                <View style={styles.form}>
                  <Text style={styles.label}>No. Telepon</Text>
                  <Text>: {personalInfo.parents_phone_number}</Text>
                </View>
                <View style={styles.form}>
                  <Text style={styles.label}>Alamat Orang Tua</Text>
                  <Text>: {personalInfo.parents_address}</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                width: "100%",
                position: "absolute",
                bottom: 0,
                left: 0,
                marginTop: 24,
              }}
            >
              <View
                style={{
                  width: "100%",
                  height: 5,
                  backgroundColor: "yellow",
                }}
              />
              <View
                style={{
                  width: "100%",
                  height: 80,
                  backgroundColor: "orange",
                  paddingHorizontal: 48,
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 6,
                    marginTop: 12,
                    alignItems: "center",
                  }}
                >
                  <Image
                    style={{
                      width: 18,
                      height: 18,
                    }}
                    src="/images/insta-icon.png"
                  />
                  <Text>: @bgunsri</Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 6,
                    marginTop: 12,
                    alignItems: "center",
                  }}
                >
                  <Image
                    style={{
                      width: 18,
                      height: 18,
                    }}
                    src="/images/mail-icon.png"
                  />

                  <Text>: bgu.unsri@gmail.com</Text>
                </View>
              </View>
            </View>
          </View>
        </Page>
        <Page size="A4" style={styles.page}>
          <View style={{ maxHeight: "100%", minHeight: "100%" }}>
            <View fixed style={{ paddingBottom: 24 }}>
              <View style={styles.head}>
                <Image style={styles.unsri} src="/images/logo-unsri.png" />
                <View
                  style={{
                    width: "84%",
                  }}
                >
                  <Text style={styles.header}>
                    KEMENTERIAN RISET, TEKNOLOGI, DAN PENDIDIKAN TINGGI
                  </Text>
                  <Text style={styles.header}>UNIVERSITAS SRIWIJAYA</Text>
                  <Text style={styles.header}>
                    IKATAN BUJANG GADIS UNIVERSITAS SRIWIJAYA
                  </Text>
                  <Text style={styles.subHeader}>Contact Person:</Text>
                  <Text style={styles.subHeader}>
                    M. Sultan Asfari (081377748943) / Shafira Junisar
                    (085720116361)
                  </Text>
                </View>
                <Image style={styles.pbgu} src="/images/logo-ibgu.png" />
              </View>
              <View
                style={{
                  width: "100%",
                  height: 8,
                  backgroundColor: "orange",
                }}
              />
              <View
                style={{
                  width: "100%",
                  height: 5,
                  backgroundColor: "yellow",
                }}
              />
            </View>
            <View
              style={{
                paddingHorizontal: 48,
              }}
            >
              <Text style={{ ...styles.label, fontWeight: 800 }}>
                Pendidikan Formal
              </Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                }}
              >
                <View style={{ ...styles.tableHeader, width: "10%" }}>
                  <Text>No</Text>
                </View>
                <View style={{ ...styles.tableHeader, width: "40%" }}>
                  <Text>Nama Sekolah / Universitas</Text>
                </View>
                <View
                  style={{
                    ...styles.tableHeader,
                    width: "25%",
                    textAlign: "center",
                  }}
                >
                  <Text>Tahun Masuk</Text>
                </View>
                <View
                  style={{
                    ...styles.tableHeader,
                    width: "25%",
                    textAlign: "center",
                  }}
                >
                  <Text>Tahun Keluar</Text>
                </View>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                }}
              >
                <View style={{ ...styles.tableHeader, width: "10%" }}>
                  <Text>1</Text>
                </View>
                <View
                  style={{
                    ...styles.tableData,
                    width: "40%",
                  }}
                >
                  <Text>{formalEducation.elementary}</Text>
                </View>
                <View
                  style={{
                    ...styles.tableData,
                    width: "25%",
                    textAlign: "center",
                  }}
                >
                  <Text>{formalEducation.elementary_in}</Text>
                </View>
                <View
                  style={{
                    ...styles.tableData,
                    width: "25%",
                    textAlign: "center",
                  }}
                >
                  <Text>{formalEducation.elementary_out}</Text>
                </View>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                }}
              >
                <View style={{ ...styles.tableHeader, width: "10%" }}>
                  <Text>2</Text>
                </View>
                <View style={{ ...styles.tableData, width: "40%" }}>
                  <Text>{formalEducation.junior}</Text>
                </View>
                <View
                  style={{
                    ...styles.tableData,
                    width: "25%",
                    textAlign: "center",
                  }}
                >
                  <Text>{formalEducation.junior_in}</Text>
                </View>
                <View
                  style={{
                    ...styles.tableData,
                    width: "25%",
                    textAlign: "center",
                  }}
                >
                  <Text>{formalEducation.junior_out}</Text>
                </View>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                }}
              >
                <View style={{ ...styles.tableHeader, width: "10%" }}>
                  <Text>3</Text>
                </View>
                <View style={{ ...styles.tableData, width: "40%" }}>
                  <Text>{formalEducation.senior}</Text>
                </View>
                <View
                  style={{
                    ...styles.tableData,
                    width: "25%",
                    textAlign: "center",
                  }}
                >
                  <Text>{formalEducation.senior_in}</Text>
                </View>
                <View
                  style={{
                    ...styles.tableData,
                    width: "25%",
                    textAlign: "center",
                  }}
                >
                  <Text>{formalEducation.senior_out}</Text>
                </View>
              </View>

              <Text style={{ ...styles.label, fontWeight: 800, marginTop: 24 }}>
                Pendidikan Non-Formal
              </Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                }}
              >
                <View style={{ ...styles.tableHeader, width: "10%" }}>
                  <Text>No</Text>
                </View>
                <View style={{ ...styles.tableHeader, width: "27%" }}>
                  <Text>Jenis Pendidikan</Text>
                </View>
                <View style={{ ...styles.tableHeader, width: "27%" }}>
                  <Text>Nama Lembaga</Text>
                </View>
                <View
                  style={{
                    ...styles.tableHeader,
                    width: "18%",
                    textAlign: "center",
                  }}
                >
                  <Text>Tahun Masuk</Text>
                </View>
                <View
                  style={{
                    ...styles.tableHeader,
                    width: "18%",
                    textAlign: "center",
                  }}
                >
                  <Text>Tahun Keluar</Text>
                </View>
              </View>
              {informalEducations.map((item, index) => (
                <View
                  key={item.id}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                  }}
                >
                  <View style={{ ...styles.tableHeader, width: "10%" }}>
                    <Text>{index + 1}</Text>
                  </View>
                  <View style={{ ...styles.tableData, width: "27%" }}>
                    <Text>{item.type}</Text>
                  </View>
                  <View style={{ ...styles.tableData, width: "27%" }}>
                    <Text>{item.institution}</Text>
                  </View>
                  <View
                    style={{
                      ...styles.tableData,
                      width: "18%",
                      textAlign: "center",
                    }}
                  >
                    <Text>{item.year_start}</Text>
                  </View>
                  <View
                    style={{
                      ...styles.tableData,
                      width: "18%",
                      textAlign: "center",
                    }}
                  >
                    <Text>{item.year_end}</Text>
                  </View>
                </View>
              ))}

              <Text style={{ ...styles.label, fontWeight: 800, marginTop: 24 }}>
                Kemampuan dan Kompetensi
              </Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                }}
              >
                <View style={{ ...styles.tableHeader, width: "10%" }}>
                  <Text>No</Text>
                </View>
                <View style={{ ...styles.tableHeader, width: "45%" }}>
                  <Text>Bidang</Text>
                </View>
                <View style={{ ...styles.tableHeader, width: "45%" }}>
                  <Text>Keahlian / Bakat</Text>
                </View>
              </View>
              {competences.map((item, index) => (
                <View
                  key={item.id}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                  }}
                >
                  <View style={{ ...styles.tableHeader, width: "10%" }}>
                    <Text>{index + 1}</Text>
                  </View>
                  <View style={{ ...styles.tableData, width: "45%" }}>
                    <Text>{item.field}</Text>
                  </View>
                  <View style={{ ...styles.tableData, width: "45%" }}>
                    <Text>{item.skill}</Text>
                  </View>
                </View>
              ))}
              <View break style={{ paddingBottom: 85 }}>
                <Text
                  style={{ ...styles.label, fontWeight: 800, marginTop: 24 }}
                >
                  Pengalaman Organisasi
                </Text>

                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                  }}
                >
                  <View style={{ ...styles.tableHeader, width: "10%" }}>
                    <Text>No</Text>
                  </View>
                  <View style={{ ...styles.tableHeader, width: "40%" }}>
                    <Text>Nama Organisasi</Text>
                  </View>
                  <View style={{ ...styles.tableHeader, width: "30%" }}>
                    <Text>Posisi / Jabatan</Text>
                  </View>
                  <View
                    style={{
                      ...styles.tableHeader,
                      width: "20%",
                      textAlign: "center",
                    }}
                  >
                    <Text>Periode</Text>
                  </View>
                </View>
                {organizationalExperiences.map((item, index) => (
                  <View
                    break
                    key={item.id}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      width: "100%",
                    }}
                  >
                    <View style={{ ...styles.tableHeader, width: "10%" }}>
                      <Text>{index + 1}</Text>
                    </View>
                    <View style={{ ...styles.tableData, width: "40%" }}>
                      <Text>{item.organization}</Text>
                    </View>
                    <View style={{ ...styles.tableData, width: "30%" }}>
                      <Text>{item.position}</Text>
                    </View>
                    <View
                      style={{
                        ...styles.tableData,
                        width: "20%",
                        textAlign: "center",
                      }}
                    >
                      <Text>{item.period}</Text>
                    </View>
                  </View>
                ))}
              </View>
            </View>
            <View
              fixed
              style={{
                width: "100%",
                position: "absolute",
                bottom: 0,
                left: 0,
              }}
            >
              <View
                style={{
                  width: "100%",
                  height: 5,
                  backgroundColor: "yellow",
                  marginTop: 24,
                }}
              />
              <View
                style={{
                  width: "100%",
                  height: 80,
                  backgroundColor: "orange",
                  paddingHorizontal: 48,
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 6,
                    marginTop: 12,
                    alignItems: "center",
                  }}
                >
                  <Image
                    style={{
                      width: 18,
                      height: 18,
                    }}
                    src="/images/insta-icon.png"
                  />
                  <Text>: @bgunsri</Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 6,
                    marginTop: 12,
                    alignItems: "center",
                  }}
                >
                  <Image
                    style={{
                      width: 18,
                      height: 18,
                    }}
                    src="/images/mail-icon.png"
                  />

                  <Text>: bgu.unsri@gmail.com</Text>
                </View>
              </View>
            </View>
          </View>
        </Page>
        <Page size="A4" style={styles.page}>
          <View style={styles.head} fixed>
            <Image style={styles.unsri} src="/images/logo-unsri.png" />
            <View
              style={{
                width: "84%",
              }}
            >
              <Text style={styles.header}>
                KEMENTERIAN RISET, TEKNOLOGI, DAN PENDIDIKAN TINGGI
              </Text>
              <Text style={styles.header}>UNIVERSITAS SRIWIJAYA</Text>
              <Text style={styles.header}>
                IKATAN BUJANG GADIS UNIVERSITAS SRIWIJAYA
              </Text>
              <Text style={styles.subHeader}>Contact Person:</Text>
              <Text style={styles.subHeader}>
                M. Sultan Asfari (081377748943) / Shafira Junisar (085720116361)
              </Text>
            </View>
            <Image style={styles.pbgu} src="/images/logo-ibgu.png" />
          </View>
          <View
            style={{
              width: "100%",
              height: 8,
              backgroundColor: "orange",
            }}
          />
          <View
            style={{
              width: "100%",
              height: 5,
              backgroundColor: "yellow",
            }}
          />
          <View
            style={{
              marginTop: 24,
              paddingHorizontal: 48,
              width: "100%",
            }}
          >
            <View
              style={{
                paddingHorizontal: 48,
                width: "100%",
              }}
            ></View>
            <Text style={{ ...styles.label, fontWeight: 800 }}>
              Prestasi yang Pernah Diraih
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
              }}
            >
              <View style={{ ...styles.tableHeader, width: "10%" }}>
                <Text>No</Text>
              </View>
              <View style={{ ...styles.tableHeader, width: "35%" }}>
                <Text>Nama Penghargaan</Text>
              </View>
              <View style={{ ...styles.tableHeader, width: "35%" }}>
                <Text>Instansi Pemberi Penghargaan</Text>
              </View>
              <View
                style={{
                  ...styles.tableHeader,
                  width: "20%",
                  textAlign: "center",
                }}
              >
                <Text>Tahun</Text>
              </View>
            </View>
            {achievements.map((item, index) => (
              <View
                key={item.id}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                }}
              >
                <View style={{ ...styles.tableHeader, width: "10%" }}>
                  <Text>{index + 1}</Text>
                </View>
                <View style={{ ...styles.tableData, width: "35%" }}>
                  <Text>{item.achievement}</Text>
                </View>
                <View style={{ ...styles.tableData, width: "35%" }}>
                  <Text>{item.instance}</Text>
                </View>
                <View
                  style={{
                    ...styles.tableData,
                    width: "20%",
                    textAlign: "center",
                  }}
                >
                  <Text>{item.year}</Text>
                </View>
              </View>
            ))}

            <Text
              style={{
                ...styles.label,
                fontWeight: 800,
                marginTop: 24,
                width: "100%",
              }}
            >
              Motivasi mengikuti Pemilihan Bujang Gadis Unsri 2024
            </Text>
            <View
              style={{
                borderColor: "black",
                borderWidth: 1,
                width: "100%",
                height: 100,
              }}
            />

            <View
              style={{
                marginTop: 16,
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <View style={{ width: "50%" }}>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                  }}
                >
                  <View style={{ ...styles.tableHeader, width: "10%" }}>
                    <Text>No</Text>
                  </View>
                  <View style={{ ...styles.tableHeader, width: "60%" }}>
                    <Text>Berkas</Text>
                  </View>
                  <View style={{ ...styles.tableHeader, width: "15%" }}>
                    <Text>Ada</Text>
                  </View>
                  <View style={{ ...styles.tableHeader, width: "15%" }}>
                    <Text>Tidak</Text>
                  </View>
                </View>
                {papers.map((item, index) => (
                  <View
                    key={item.files}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      width: "100%",
                    }}
                  >
                    <View
                      style={{
                        ...styles.tableHeader,
                        width: "10%",
                        fontSize: 10,
                      }}
                    >
                      <Text>{index + 1}</Text>
                    </View>
                    <View
                      style={{
                        ...styles.tableData,
                        width: "60%",
                        fontSize: 10,
                      }}
                    >
                      <Text>{item.files}</Text>
                    </View>
                    <View
                      style={{
                        ...styles.tableData,
                        width: "15%",
                        fontSize: 10,
                      }}
                    ></View>
                    <View
                      style={{
                        ...styles.tableData,
                        width: "15%",
                        fontSize: 10,
                      }}
                    ></View>
                  </View>
                ))}
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                  }}
                >
                  <View style={{ ...styles.tableHeader, width: "70%" }}>
                    <Text>Nama Pemeriksa</Text>
                  </View>
                  <View style={{ ...styles.tableData, width: "30%" }}></View>
                </View>
              </View>
              <View style={{ width: "40%" }}>
                <Text>Tanda Tangan,</Text>
                <View
                  style={{
                    display: "flex",
                    width: "100%",
                    alignItems: "flex-end",
                    flexDirection: "row",
                  }}
                >
                  <View
                    style={{
                      borderColor: "black",
                      borderBottomWidth: "1px",
                      borderStyle: "dotted",
                      width: "100%",
                      height: 10,
                    }}
                  />
                  <Text>2024</Text>
                </View>
                <View
                  style={{
                    borderColor: "black",
                    borderBottomWidth: "1px",
                    width: "100%",
                    height: 80,
                  }}
                />
                <Text
                  style={{
                    marginTop: 16,
                  }}
                >
                  NIM.
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              position: "absolute",
              bottom: 0,
              left: 0,
            }}
          >
            <View
              style={{
                width: "100%",
                height: 5,
                backgroundColor: "yellow",
                marginTop: 24,
              }}
            />
            <View
              style={{
                width: "100%",
                height: 80,
                backgroundColor: "orange",
                paddingHorizontal: 48,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 6,
                  marginTop: 12,
                  alignItems: "center",
                }}
              >
                <Image
                  style={{
                    width: 18,
                    height: 18,
                  }}
                  src="/images/insta-icon.png"
                />
                <Text>: @bgunsri</Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 6,
                  marginTop: 12,
                  alignItems: "center",
                }}
              >
                <Image
                  style={{
                    width: 18,
                    height: 18,
                  }}
                  src="/images/mail-icon.png"
                />

                <Text>: bgu.unsri@gmail.com</Text>
              </View>
            </View>
          </View>
        </Page>
        {/* <Page wrap={false} size="A4" style={styles.page}>
        <View>
          <Text>Section #2</Text>
        </View>
      </Page>{" "}
      <Page wrap={false} size="A4" style={styles.page}>
        <View>
          <Text>Section #3</Text>
        </View>
      </Page> */}
      </Document>
    );
  }
}
