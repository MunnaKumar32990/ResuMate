import OpenAI from 'openai';
import Resume from '../models/Resume.js';

const openai = new OpenAI(process.env.OPENAI_API_KEY);

export const getAISuggestions = async (req, res) => {
  try {
    const { section, content } = req.body;
    
    const prompt = `Analyze this resume ${section} section and provide 3 professional improvement suggestions:\n\n${JSON.stringify(content)}\n\nSuggestions:`;
    
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 200,
      temperature: 0.7,
    });

    const suggestions = response.choices[0].message.content.split('\n').filter(s => s.trim());
    
    // Save suggestions to database
    await Resume.findByIdAndUpdate(
      req.params.resumeId,
      { $push: { aiSuggestions: { section, suggestions } } },
      { new: true }
    );

    res.json({ suggestions });
  } catch (error) {
    console.error('AI Error:', error);
    res.status(500).json({ error: 'Failed to generate AI suggestions' });
  }
};