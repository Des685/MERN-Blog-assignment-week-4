// server/routes/categoryRoutes.js
import express from 'express'; // This import is essential
import { getCategories, createCategory } from '../controllers/categoryController.js';

// THIS LINE IS CRUCIAL:
const router = express.Router();

router.route('/').get(getCategories).post(createCategory);

export default router;

