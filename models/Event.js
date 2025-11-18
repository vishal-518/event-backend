// import mongoose from 'mongoose';

// const eventSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//     trim: true
//   },
//   contact: {
//     type: String,
//     required: true,
//     trim: true
//   },
//   category: {
//     type: String,
//     required: true,
//     trim: true
//   },
//   destination: {
//     type: String,
//     required: true,
//     trim: true
//   },
//   date: {
//     type: Date,
//     required: true
//   },
//   address: {
//     type: String,
//     required: true,
//     trim: true
//   },
//   description: {
//     type: String,
//     required: true
//   },
//   userId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true
//   },
//   status: {
//     type: String,
//     enum: ['pending', 'approved', 'rejected'],
//     default: 'pending'
//   }
// }, {
//   timestamps: true
// });

// export default mongoose.model('Event', eventSchema);

import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  phone: { 
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    trim: true,
  },
  
  eventType: { 
    type: String,
    required: true,
    trim: true
  },
  date: {
    type: Date,
    required: true
  },
  guests: {
    type: Number, 
    required: true
  },
  venue: { 
    type: String,
    required: true,
    trim: true
  },
  services: {
    type: [String], 
    default: []
  },
  message: { 
    type: String,
    trim: true
  },

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    // required: true // Uncomment if auth is required
  },
  
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  }
}, {
  timestamps: true
});

export default mongoose.model('Event', eventSchema);