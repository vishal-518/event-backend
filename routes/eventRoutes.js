import express from 'express';
import {
  createEvent,
  getEvents,
  getEventById,
  updateEvent,
  deleteEvent,
  updateEventStatus
} from '../controllers/eventController.js';
import { allowRoles, tokenverify } from '../middlewares/auth.js';



const router = express.Router();

router.post('/create',tokenverify, createEvent);
router.get('/',tokenverify, getEvents);
router.get('/:id', getEventById);
router.put('/:id', updateEvent);
router.delete('/:id',tokenverify,allowRoles('admin'), deleteEvent);
router.put('/status/:id',tokenverify,allowRoles('admin'), updateEventStatus);

export default router;