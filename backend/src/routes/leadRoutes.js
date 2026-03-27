import express from 'express';
import { getLeads, createLead } from '../controllers/leadController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.route('/').get(protect, getLeads).post(protect, createLead);

export default router;
