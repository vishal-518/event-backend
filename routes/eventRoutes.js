import express from 'express';
import {
  createEvent,
  getEvents,
  getEventById,
  updateEvent,
  deleteEvent
} from '../controllers/eventController.js';
import { allowRoles, tokenverify } from '../middlewares/auth.js';



const router = express.Router();

router.get('/',tokenverify,allowRoles('admin','user'), getEvents);
router.post('/create',tokenverify, createEvent);
router.get('/:id', getEventById);
router.put('/:id', updateEvent);
router.delete('/:id', deleteEvent);

export default router;