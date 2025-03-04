import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import AIAnalysis from './AIAnalysis';
import ResumePreview from './ResumePreview';

const ResumeForm = () => {
  const [activeSection, setActiveSection] = useState('personal');
  const [aiSuggestions, setAiSuggestions] = useState(null);

  const validationSchema = Yup.object().shape({
    personal: Yup.object().shape({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
      phone: Yup.string().matches(/^[0-9]{10}$/, 'Invalid phone number'),
    }),
    education: Yup.array().of(
      Yup.object().shape({
        institution: Yup.string().required('Required'),
        degree: Yup.string().required('Required'),
        startYear: Yup.number().required('Required'),
        endYear: Yup.number(),
      })
    ),
  });

  const formik = useFormik({
    initialValues: {
      personal: {
        name: '',
        email: '',
        phone: '',
        address: '',
      },
      education: [],
      experience: [],
      skills: [],
    },
    validationSchema,
    onSubmit: (values) => {
      console.log('Form submitted:', values);
    },
  });

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6">
        <div className="flex gap-6">
          {/* Form Sections */}
          <div className="w-1/3 space-y-2">
            {['personal', 'education', 'experience', 'skills'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`w-full p-3 text-left rounded ${
                  activeSection === section ? 'bg-blue-500 text-white' : 'bg-gray-100'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>

          {/* Form Content */}
          <div className="w-2/3">
            {activeSection === 'personal' && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold mb-4">Personal Information</h3>
                <input
                  name="personal.name"
                  value={formik.values.personal.name}
                  onChange={formik.handleChange}
                  placeholder="Full Name"
                  className="w-full p-2 border rounded"
                />
                {/* Add other personal fields */}
              </div>
            )}

            {activeSection === 'education' && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold mb-4">Education</h3>
                {formik.values.education.map((edu, index) => (
                  <div key={index} className="border p-4 rounded mb-4">
                    <input
                      name={`education[${index}].institution`}
                      value={edu.institution}
                      onChange={formik.handleChange}
                      placeholder="Institution"
                      className="w-full p-2 border rounded mb-2"
                    />
                    {/* Add other education fields */}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => formik.setFieldValue('education', [...formik.values.education, {}])}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Add Education
                </button>
              </div>
            )}

            <AIAnalysis 
              suggestions={aiSuggestions} 
              section={activeSection}
              content={formik.values[activeSection]}
            />
          </div>
          <ResumePreview />
        </div>
      </div>
    </div>
  );
};

export default ResumeForm;