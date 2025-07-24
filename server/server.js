import dotenv from 'dotenv';
import path from 'path'; // NEW: Import the path module
import { fileURLToPath } from 'url'; // NEW: Import for ES Modules __dirname equivalent

// Define __dirname equivalent for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Explicitly tell dotenv where to find your .env file
dotenv.config({ path: path.resolve(__dirname, '../server/.env') }); // Adjust path if .env is in MERN-Blog root

// If .env is directly in the server directory (where server.js is), use this instead:
// dotenv.config({ path: path.resolve(__dirname, '.env') });

console.log('MONGO_URI from server.js (top):', process.env.MONGO_URI);

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import connectDB from './config/db.js';
import postRoutes from './routes/postRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';
import authRoutes from './routes/authRoutes.js';
import { errorHandler } from './middleware/errorMiddleware.js';

// No dotenv.config() here if it's already at the very top

connectDB(); // This call uses process.env.MONGO_URI

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('API is running...');
});

// Use Routes
app.use('/api/posts', postRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/auth', authRoutes);

// Error Handling Middleware - MUST BE LAST
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});