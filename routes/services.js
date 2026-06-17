const express = require('express');
const router = express.Router();

const services = [
  {
    title: 'Web Design',
    description: 'Beautiful, user-centered designs that convert visitors into customers.',
  },
  {
    title: 'Front-End Development',
    description: 'Fast, responsive, and accessible interfaces built with modern frameworks.',
  },
  {
    title: 'Branding',
    description: 'Cohesive brand identities that make your business memorable.',
  },
];

router.get('/', (req, res) => {
  res.json(services);
});

module.exports = router;


