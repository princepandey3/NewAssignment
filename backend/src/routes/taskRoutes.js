import express from 'express';
import { getTasks, createTask } from '../controllers/taskController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.route('/').get(protect, getTasks).post(protect, createTask);

export default router;
