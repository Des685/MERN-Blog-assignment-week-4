// server/controllers/categoryController.js
import Category from '../models/Category.js';
import Joi from 'joi';

// Joi schema for Category validation
const categorySchema = Joi.object({
  name: Joi.string().trim().max(50).required(),
});

// @desc    Get all categories
// @route   GET /api/categories
// @access  Public
export const getCategories = async (req, res, next) => {
  try {
    const categories = await Category.find();
    res.status(200).json({ success: true, count: categories.length, data: categories });
  } catch (error) {
    next(error);
  }
};

// @desc    Create a new category
// @route   POST /api/categories
// @access  Private (will be protected by auth middleware later)
export const createCategory = async (req, res, next) => {
  try {
    const { error } = categorySchema.validate(req.body);
    if (error) {
      return res.status(400).json({ success: false, message: error.details[0].message });
    }

    const category = await Category.create(req.body);
    res.status(201).json({ success: true, data: category });
  } catch (error) {
    // Handle duplicate key error (MongoDB unique index)
    if (error.code === 11000) {
      return res.status(400).json({ success: false, message: 'Category with this name already exists' });
    }
    next(error);
  }
};