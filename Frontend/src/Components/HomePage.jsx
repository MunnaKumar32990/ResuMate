import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer"; // Ensure this path is correct

const HomePage = () => {
  return (
    <div className="wrapper">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-500 py-10">
        <div className="container mx-auto py-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 text-center lg:text-left mb-5 lg:mb-0">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-4xl font-bold text-white mb-4"
              >
                Craft Your Perfect Resume with  AI Power<span className="text-blue-500"></span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="text-lg text-white mb-4"
              >
                Transform your career journey with intelligent resume building, tailored for the modern job market.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="flex gap-3 justify-center lg:justify-start"
              >
                <Link to="/register" className="bg-white text-gray-800 px-5 py-3 rounded-full shadow hover:shadow-lg">
                  Start Free Trial
                </Link>
                <Link to="/demo" className="bg-transparent border border-white text-white px-5 py-3 rounded-full hover:bg-white hover:text-gray-800">
                  Live Demo
                </Link>
              </motion.div>
            </div>
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 2 }}
                className="p-5"
              >
                <div className="border border-blue-500 rounded-3xl p-3">
                  <img 
                    src="https://marketplace.canva.com/EAFszEvkM50/2/0/1131w/canva-simple-professional-cv-resume-36p5VOFVDxY.jpg" 
                    alt="Resume Example" 
                    className="w-full rounded-3xl shadow-lg" 
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-10 bg-gray-100">
        <div className="container mx-auto py-10">
          <div className="text-center mb-10">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-3xl font-bold mb-3"
            >
              Why Choose AI Resume Builder?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-gray-600"
            >
              Revolutionizing resume creation with cutting-edge technology
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {[{
                icon: 'magic',
                title: 'Smart Optimization',
                text: 'AI analyzes job descriptions to optimize your resume'
              },
              {
                icon: 'file-text',
                title: 'Professional Templates',
                text: '20+ ATS-friendly templates to choose from'
              },
              {
                icon: 'shield',
                title: 'Privacy First',
                text: 'Your data remains 100% confidential and secure'
              },
              {
                icon: 'cloud-download',
                title: 'Instant Export',
                text: 'Download in PDF/DOCX with one click'
              },
              {
                icon: 'chart-line',
                title: 'Resume Score',
                text: 'Get instant feedback on your resume quality'
              },
              {
                icon: 'comments',
                title: '24/7 Support',
                text: 'Dedicated support team always ready to help'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                className="bg-white p-4 rounded-3xl shadow hover:shadow-lg"
              >
                <i className={`fa fa-${feature.icon} text-blue-500 text-3xl mb-3`}></i>
                <h5 className="text-xl font-bold mb-2">{feature.title}</h5>
                <p className="text-gray-600">{feature.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-10">
        <div className="container mx-auto py-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-3xl font-bold mb-4"
          >
            Ready to Land Your Dream Job?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-lg mb-5"
          >
            Join thousands of successful job seekers who boosted their career with AI Resume Builder
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <Link to="/register" className="bg-blue-500 text-white px-5 py-3 rounded-full shadow hover:bg-blue-600">
              Create Your Resume Now <i className="fa fa-arrow-right ms-2"></i>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;