import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-auto">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Footer content */}
        </div>
        <hr className="my-6 border-gray-700" />
        <p className="text-center text-gray-400">
          &copy; {new Date().getFullYear()} AI Resume Builder
        </p>
      </div>
    </footer>
  );
};

export default Footer;