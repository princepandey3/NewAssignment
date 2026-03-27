import Lead from '../models/Lead.js';

export const getLeads = async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      count: leads.length,
      data: leads,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const createLead = async (req, res) => {
  try {
    const lead = await Lead.create(req.body);
    res.status(201).json({
      success: true,
      data: lead,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
