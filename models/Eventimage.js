import mongoose from "mongoose";

const venueSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true, 
  },
});

const eventImageSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "", // better than leaving undefined
    },
    venues: [venueSchema],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("EventImage", eventImageSchema);
