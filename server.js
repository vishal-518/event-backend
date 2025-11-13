import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/database.js';
import authRoutes from './routes/authRoutes.js';
import eventRoutes from './routes/eventRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import eventImageRoutes from "./routes/eventImageRoutes.js";

dotenv.config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

// Routes
app.use('/api/auth',authRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/conatcts',contactRoutes);
app.use("/api/eventsimg", eventImageRoutes);

const PORT = process.env.PORT || 4500;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});