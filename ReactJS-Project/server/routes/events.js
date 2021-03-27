import express from 'express';

import { getEvents, getEvent, createEvent, updateEvent, likeEvent, deleteEvent } from '../controllers/events.js'

const router = express.Router();

router.get('/', getEvents);
router.post('/', createEvent);
router.get('/:id', getEvent);
router.patch('/:id', updateEvent);
router.delete('/:id', likeEvent);
router.patch('/:id/likeEvent', deleteEvent);


export default router;