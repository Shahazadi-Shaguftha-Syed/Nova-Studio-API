const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.project.deleteMany();

  await prisma.project.createMany({
    data: [
      { title: 'Aurora E-Commerce', category: 'Web Design', image: 'https://unsplash.com/photos/close-up-of-shopping-cart-on-top-of-computer-keyboard-with-shipping-boxes-around-it-and-copy-space-concept-of-e-commerce-shipping-drop-shipping-and-retailers-3d-rendering-6elR6qXxT3s?w=600&h=400&fit=crop' },
      { title: 'Pulse Fitness App', category: 'Front-End Development', image: 'https://plus.unsplash.com/premium_photo-1742910864321-3b82274720dc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHVsc2UlMjBmaXRuZXNzJTIwYXBwfGVufDB8fDB8fHww?w=600&h=400&fit=crop' },
      { title: 'Lumen Branding Kit', category: 'Branding', image: 'https://images.unsplash.com/photo-1651786216552-d627fe3aabdc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8a2l0JTIwYnJhbmRpbmd8ZW58MHx8MHx8fDA%3D?w=600&h=400&fit=crop' },
      { title: 'Nimbus SaaS Dashboard', category: 'Web Design', image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1612&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=600&h=400&fit=crop' },
    ],
  });

  console.log('Projects seeded successfully');
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());