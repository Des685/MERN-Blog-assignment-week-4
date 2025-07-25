// server/config/db.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      // These options are deprecated in newer Mongoose versions, but harmless
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      // useCreateIndex: true, // Deprecated
      // useFindAndModify: false, // Deprecated
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;