import Image from "next/image";
import QuestionCard from "./question-card";

const questions = [
  {
    number: 1,
    question:
      "Bagaimana cara Anda berencana meningkatkan kesadaran masyarakat tentang pentingnya pendidikan?",
  },
  {
    number: 2,
    question:
      "Bagaimana Anda akan melibatkan mahasiswa dalam program-program pendidikan?",
  },
  {
    number: 3,
    question:
      "Bagaimana Anda berencana mendukung pendidikan inklusif bagi semua lapisan masyarakat?",
  },
  {
    number: 4,
    question:
      "Apa peran teknologi dalam rencana Anda untuk memajukan pendidikan?",
  },
  {
    number: 5,
    question:
      "Bagaimana Anda melihat hubungan antara pendidikan dan pengembangan karakter mahasiswa?",
  },
  {
    number: 6,
    question: "How will you address the issue of gender equality in education?",
  },
  {
    number: 7,
    question:
      "Apa yang akan Anda lakukan jika terpilih menjadi bujang/gadis unsri?",
  },
  {
    number: 8,
    question:
      "Bagaimana respon anda terhadap isu ketidakadilan sosial yang semakin mengemuka?",
  },
  {
    number: 9,
    question:
      "Bagaimana perkembangan teknologi mempengaruhi cara kita memahami berita dan informasi saat ini?",
  },
  {
    number: 10,
    question:
      "Bagaimana media sosial berperan dalam menyebarkan informasi tentang isu-isu sosial saat ini?",
  },
  {
    number: 11,
    question:
      "What are the biggest challenges faced by educational institutions in facing the digital era?",
  },
  {
    number: 12,
    question:
      "Bagaimana upaya penegakan hukum terhadap kejahatan siber yang semakin meningkat?",
  },
];

export default function GF() {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden py-20 md:py-14">
        <Image
          src="/images/bg-hero.png"
          alt="bg hero"
          fill
          className="absolute -z-20 object-cover"
          loading="eager"
        />
        <Image
          src="/images/texture.png"
          alt="texture"
          fill
          className="absolute object-cover opacity-10"
          loading="eager"
        />

        <div className="grid grid-cols-4 gap-8 px-20">
          {questions.map((question, index) => (
            <QuestionCard key={index} index={index} question={question} />
          ))}
        </div>
      </section>
    </>
  );
}
