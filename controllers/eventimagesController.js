import Eventimage from "../models/Eventimage.js";


export const eventImages = async (req, res) => {
  try {
    const { type, city, title, description, venues } = req.body;

    const newEventImage = new Eventimage({
      image: req.file ? req.file.path : "",
      type,
      city,
      title,
      description,
      venues: venues ? JSON.parse(venues) : [], 
    });

    await newEventImage.save();
    res.status(201).json({ message: "Event image added successfully", newEventImage });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const getEventImages = async (req, res) => {
  try {
    const eventImages = await Eventimage.find().sort({ createdAt: -1 });
    res.status(200).json(eventImages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const getEventImageById = async (req, res) => {
  try {
    const eventImage = await Eventimage.findById(req.params.id);
    if (!eventImage) return res.status(404).json({ message: "Event image not found" });
    res.status(200).json(eventImage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteEventImage = async (req, res) => {
  try {
    const eventImage = await Eventimage.findByIdAndDelete(req.params.id);
    if (!eventImage) return res.status(404).json({ message: "Event image not found" });
    res.status(200).json({ message: "Event image deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
