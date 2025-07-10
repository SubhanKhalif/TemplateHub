import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';

import adminAuthRoutes from './routes/AdminauthRoutes.js';
import userAuthRoutes from './routes/UserAuthRoutes.js';
import templateRoutes from './routes/templateRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import reviewRoutes from './routes/reviewRoutes.js';
//import cloudnaryroutes from './routes/cloudnaryroutes.js'

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Serve uploaded files statically
app.use('/uploads', express.static('uploads'));

// Routes
app.use('/api/admin', adminAuthRoutes);
app.use('/api/user', userAuthRoutes);
app.use('/api/templates', templateRoutes);
app.use('/api/upload', uploadRoutes);  // for cloud use app.use('/api/upload', cloudnaryroutes);
app.use('/api/contact', contactRoutes);
app.use('/api/reviews', reviewRoutes);

// Connect to MongoDB and start server
connectDB().then(() => {
  console.log('✅ MongoDB connected');
  app.listen(process.env.PORT, () => console.log(`🚀 Server running on ${process.env.PORT}`));
}).catch(err => console.error('❌ MongoDB connection error:', err));
