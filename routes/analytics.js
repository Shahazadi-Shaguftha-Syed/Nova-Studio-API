const express = require('express');
const router = express.Router();
const connectMongo = require('../db/mongo');

// POST - track an event (page visit or CTA click)
router.post('/', async (req, res) => {
  try {
    const { eventType, page } = req.body;
    if (!eventType) {
      return res.status(400).json({ error: 'eventType is required' });
    }
    const db = await connectMongo();
    await db.collection('events').insertOne({
      eventType,
      page: page || 'unknown',
      timestamp: new Date(),
    });
    res.status(201).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to track event' });
  }
});

// GET - retrieve all events (for admin viewing later, optional)
router.get('/', async (req, res) => {
  try {
    const db = await connectMongo();
    const events = await db.collection('events').find().sort({ timestamp: -1 }).toArray();
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch events' });
  }
});

module.exports = router;