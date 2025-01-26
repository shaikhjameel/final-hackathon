import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/authRouter.js';
import productRoutes from './routes/productRouter.js';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
app.use(cors());

// Middleware
app.use(express.json());



// Routes
app.use('/auth', authRoutes);
app.use('/product', productRoutes);


app.listen(process.env.PORT, () => {
  console.log('Server is running');
});
// // Database Connection
// mongoose
//   .connect(process.env.MONGODB_URI)
//   .then(() => {
//     app.listen(3000,()=>{})
//     console.log('Connected to MongoDB');
//   })
//   .catch((err) => {
//     console.error('Failed to connect to MongoDB', err);
//   });
