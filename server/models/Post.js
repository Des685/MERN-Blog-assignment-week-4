// server/models/Post.js
import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true,
    maxlength: [100, 'Title cannot be more than 100 characters']
  },
  content: {
    type: String,
    required: [true, 'Please add content']
  },
  category: {
    type: mongoose.Schema.ObjectId,
    ref: 'Category',
    required: false // Can be optional initially, but good to have
  },
  author: { // Will link to User model later for auth
    type: String, // Placeholder for now
    default: 'Anonymous'
  },
  imageUrl: { // For featured image (advanced feature)
    type: String,
    default: 'https://via.placeholder.com/600x400'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update `updatedAt` field on save
PostSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

const Post = mongoose.model('Post', PostSchema);
export default Post;