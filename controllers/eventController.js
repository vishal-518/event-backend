import e from 'express';
import Event from '../models/Event.js';

const createEvent = async (req, res) => {
  const { 
    name, 
    phone, 
    email, 
    eventType, 
    date, 
    guests, 
    venue, 
    services, 
    message 
  } = req.body;

  try {
    const newEvent = new Event({
      name,
      phone,
      email,
      eventType,
      date,
      guests,
      venue,
      services,
      message,
      userId: req.user.id 
    });

    const savedEvent = await newEvent.save();
    res.status(201).json({
      message: "Event booking successful!",
      event: savedEvent
    });
  } catch (error) {
    res.status(400).json({ 
      message: 'Error creating event booking.',
      error: error.message 
    });
  }
};
const updateEventStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const event = await Event.findByIdAndUpdate(req.params.id, { status }, { new: true,runValidators: true }).populate('userId');

    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getEvents = async (req, res) => {
  try {
    let events;
    if (req.user.role === 'admin') {
      events = await Event.find()
    } else {
      events = await Event.find({ userId: req.user.id })
    }

    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id).populate('userId');
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateEvent = async (req, res) => {
  try {
    const { name, contact, category, destination, date, address, description } = req.body;
    const event = await Event.findByIdAndUpdate(
      req.params.id,
      { name, contact, category, destination, date, address, description },
      { new: true, runValidators: true }
    ).populate('userId');

    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);

    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    res.status(200).json({ message: 'Event deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  createEvent,
  getEvents,
  getEventById,
  updateEvent,
  deleteEvent,
  updateEventStatus
};