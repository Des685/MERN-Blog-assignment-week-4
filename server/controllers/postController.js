// server/controllers/postController.js
import Post from '../models/Post.js';
import Joi from 'joi';

// Joi schema for Post validation
const postSchema = Joi.object({
  title: Joi.string().trim().max(100).required(),
  content: Joi.string().required(),
  category: Joi.string().optional().allow(null, ''), // Mongoose ObjectId will be validated later
  author: Joi.string().optional().allow(null, ''),
  imageUrl: Joi.string().uri().optional().allow(null, '') // Validate as URI for image URLs
});

// @desc    Get all blog posts
// @route   GET /api/posts
// @access  Public
export const getPosts = async (req, res, next) => {
  try {
    // Pagination (for advanced feature, but included now)
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    // Filtering/Searching (for advanced feature, but included now)
    const query = {};
    if (req.query.search) {
      query.title = { $regex: req.query.search, $options: 'i' }; // Case-insensitive search
    }
    if (req.query.category) {
      query.category = req.query.category; // Assuming category ID is passed
    }

    const posts = await Post.find(query)
      .populate('category', 'name') // Populate category name
      .sort({ createdAt: -1 }) // Sort by newest first
      .skip(skip)
      .limit(limit);

    const total = await Post.countDocuments(query);

    res.status(200).json({
      success: true,
      count: posts.length,
      total,
      page,
      pages: Math.ceil(total / limit),
      data: posts
    });
  } catch (error) {
    next(error); // Pass error to error handling middleware
  }
};

// @desc    Get a specific blog post
// @route   GET /api/posts/:id
// @access  Public
export const getPostById = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id).populate('category', 'name');
    if (!post) {
      return res.status(404).json({ success: false, message: 'Post not found' });
    }
    res.status(200).json({ success: true, data: post });
  } catch (error) {
    next(error);
  }
};

// @desc    Create a new blog post
// @route   POST /api/posts
// @access  Private (will be protected by auth middleware later)
export const createPost = async (req, res, next) => {
  try {
    const { error } = postSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ success: false, message: error.details[0].message });
    }

    const post = await Post.create(req.body);
    res.status(201).json({ success: true, data: post });
  } catch (error) {
    next(error);
  }
};

// @desc    Update an existing blog post
// @route   PUT /api/posts/:id
// @access  Private
export const updatePost = async (req, res, next) => {
  try {
    const { error } = postSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ success: false, message: error.details[0].message });
    }

    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Return the updated document
      runValidators: true // Run Mongoose validators on update
    });

    if (!post) {
      return res.status(404).json({ success: false, message: 'Post not found' });
    }
    res.status(200).json({ success: true, data: post });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete a blog post
// @route   DELETE /api/posts/:id
// @access  Private
export const deletePost = async (req, res, next) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) {
      return res.status(404).json({ success: false, message: 'Post not found' });
    }
    res.status(200).json({ success: true, message: 'Post removed' });
  } catch (error) {
    next(error);
  }
};