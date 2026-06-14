const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.stat.createMany({
    data: [
      { label: 'Projects Completed', value: 150 },
      { label: 'Clients Worldwide', value: 50 },
      { label: 'Years Experience', value: 5 },
    ],
  });
  console.log('Stats seeded successfully');
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());