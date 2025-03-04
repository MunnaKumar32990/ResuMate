import mongoose from 'mongoose';

const resumeSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  personalInfo: {
    name: String,
    email: String,
    phone: String,
    address: String,
    linkedIn: String,
    github: String,
  },
  education: [{
    institution: String,
    degree: String,
    fieldOfStudy: String,
    startDate: Date,
    endDate: Date,
    description: String,
  }],
  experience: [{
    company: String,
    position: String,
    startDate: Date,
    endDate: Date,
    description: String,
  }],
  skills: [{
    name: String,
    level: String,
  }],
  aiSuggestions: [{
    section: String,
    suggestions: [String],
  }],
  template: { type: String, default: 'classic' },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Resume', resumeSchema);