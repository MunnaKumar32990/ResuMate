import React from 'react';
import { useReactToPrint } from 'react-to-print';
import html2pdf from 'html2pdf.js';

const ResumePreview = ({ resumeData, template }) => {
  const componentRef = React.useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleDownloadPDF = () => {
    const element = componentRef.current;
    html2pdf().from(element).save();
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div ref={componentRef} className={`resume-template ${template}`}>
        {/* Template rendering logic */}
        <h1>{resumeData.personal.name}</h1>
        {/* Add all resume sections */}
      </div>
      
      <div className="mt-6 flex gap-4">
        <button 
          onClick={handlePrint}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Print
        </button>
        <button
          onClick={handleDownloadPDF}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default ResumePreview;