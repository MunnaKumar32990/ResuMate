import { useEffect } from 'react';
import api from '../../services/api';

const AIAnalysis = ({ section, content, suggestions }) => {
  const getSuggestions = async () => {
    try {
      const response = await api.post('/ai/suggestions', {
        section,
        content,
      });
      return response.data.suggestions;
    } catch (error) {
      console.error('Error fetching AI suggestions:', error);
    }
  };

  useEffect(() => {
    if (content) {
      getSuggestions();
    }
  }, [content]);

  return (
    <div className="mt-6 p-4 bg-blue-50 rounded-lg">
      <h4 className="text-lg font-semibold mb-3">AI Suggestions</h4>
      {suggestions ? (
        <ul className="list-disc pl-5 space-y-2">
          {suggestions.map((suggestion, index) => (
            <li key={index} className="text-gray-700">
              {suggestion}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No suggestions available for this section</p>
      )}
    </div>
  );
};

export default AIAnalysis;