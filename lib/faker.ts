"use server";

const { PrismaClient } = require("@prisma/client");
const { faker } = require("@faker-js/faker");

const prisma = new PrismaClient();

async function createRandomUser() {
  return await prisma.user.create({
    data: {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      role: faker.helpers.arrayElement(["user", "admin"]),
    },
  });
}

function createRandomGeneralInfo(userId: string) {
  return {
    userId: userId,
    fullname: faker.person.fullName(),
    alias: faker.person.firstName(),
    nim: faker.number.int({ min: 1000000, max: 9999999 }).toString(),
    major: faker.word.words(2),
    birth: faker.date.past().toISOString().split("T")[0],
    age: faker.number.int({ min: 18, max: 60 }).toString(),
    gender: faker.helpers.arrayElement(["male", "female"]),
    address: faker.location.streetAddress(),
    phone_number: faker.phone.number("+62 ##########"),
    email: faker.internet.email(),
    line: faker.internet.userName(),
    facebook: `https://facebook.com/${faker.internet.userName()}`,
    instagram: `https://instagram.com/${faker.internet.userName()}`,
    picture: faker.image.avatar(),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  };
}

async function main() {
  for (let i = 0; i < 20; i++) {
    const user = await createRandomUser();
    const generalInfo = createRandomGeneralInfo(user.id);
    await prisma.userGeneralInfo.create({
      data: generalInfo,
    });
  }
  console.log("Database has been seeded.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
