import Resume from '../models/Resume.js';

export const createResume = async (req, res) => {
  try {
    const resume = new Resume({
      user: req.user.id,
      ...req.body
    });

    await resume.save();
    res.status(201).json(resume);
  } catch (error) {
    res.status(500).json({ message: 'Error creating resume' });
  }
};

export const getResumes = async (req, res) => {
  try {
    const resumes = await Resume.find({ user: req.user.id });
    res.json(resumes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching resumes' });
  }
};

export const updateResume = async (req, res) => {
  try {
    const resume = await Resume.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      req.body,
      { new: true }
    );
    res.json(resume);
  } catch (error) {
    res.status(500).json({ message: 'Error updating resume' });
  }
};