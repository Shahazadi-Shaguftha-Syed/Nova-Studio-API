const express = require('express');
const cors = require('cors');
require('dotenv').config();
const contactsRouter = require('./routes/contacts');
const analyticsRouter = require('./routes/analytics');
const servicesRouter = require('./routes/services');


const app = express();
app.use(cors({
  origin: [
    'http://localhost:3000',
    'https://nova-studio-fe.vercel.app'
  ],
}));
app.use(express.json());


app.get('/', (req, res) => {
  res.json({ message: 'server is alive' });
});

// Routes (we'll add these one by one)
const projectsRouter = require('./routes/projects');
const statsRouter = require('./routes/stats');
const contactRouter = require('./routes/contact');
const adminRouter = require('./routes/admin');

app.use('/api/projects', projectsRouter);
app.use('/api/stats', statsRouter);
app.use('/api/contact', contactRouter);
app.use('/api/admin', adminRouter);
app.use('/api/contacts', contactsRouter);
app.use('/api/analytics', analyticsRouter);
app.use('/api/services', servicesRouter);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});