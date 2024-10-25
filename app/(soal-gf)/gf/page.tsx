import Image from "next/image";
import QuestionCard from "./question-card";

const questions = [
  {
    number: 1,
    question: "Siapa Nama Presiden Indonesia Sekarang",
  },
  {
    number: 2,
    question: "Siapa Nama Presiden Indonesia Sekarang",
  },
  {
    number: 3,
    question: "Siapa Nama Presiden Indonesia Sekarang",
  },
  {
    number: 4,
    question: "Siapa Nama Presiden Indonesia Sekarang",
  },
  {
    number: 5,
    question: "Siapa Nama Presiden Indonesia Sekarang",
  },
  {
    number: 6,
    question: "Siapa Nama Presiden Indonesia Sekarang",
  },
  {
    number: 7,
    question: "Siapa Nama Presiden Indonesia Sekarang",
  },
  {
    number: 8,
    question: "Siapa Nama Presiden Indonesia Sekarang",
  },
  {
    number: 9,
    question: "Siapa Nama Presiden Indonesia Sekarang",
  },
  {
    number: 10,
    question: "Siapa Nama Presiden Indonesia Sekarang",
  },
  {
    number: 11,
    question: "Siapa Nama Presiden Indonesia Sekarang",
  },
  {
    number: 12,
    question: "Siapa Nama Presiden Indonesia Sekarang",
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
