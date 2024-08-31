"use server";

const { PrismaClient } = require("@prisma/client");
const { faker } = require("@faker-js/faker");

const prisma = new PrismaClient();

function createRandomNews() {
  return {
    name: faker.lorem.sentence(),
    email: faker.lorem.slug(),
    password: faker.lorem.paragraphs(3),
    role: faker.image.url(),
    view_count: faker.number.int({ min: 0, max: 1000 }),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  };
}

const NEWS = faker.helpers.multiple(createRandomNews, {
  count: 20,
});

async function main() {
  for (const news of NEWS) {
    await prisma.news.create({
      data: news,
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
