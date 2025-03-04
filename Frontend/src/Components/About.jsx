import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaGithub, FaUsers, FaRocket, FaRegLightbulb, FaShieldAlt } from "react-icons/fa";
import AryanImage from "../images/Aryan.jpg";
import MunnaImage from "../images/Munna.png";
import DibuImages from "../images/Dibu.jpeg";

const teamMembers = [
  {
    name: "Munna Kumar",
    role: "Full Stack Developer & AI Specialist",
    image: MunnaImage,
    linkedin: "https://www.linkedin.com/in/munnakumar32990/",
    twitter: "#",
    github: "#",
    bio: "Passionate about building intelligent systems. Leads our AI integration and backend architecture."
  },
  {
    name: "Dibakar Pal",
    role: "Frontend Developer & Performance Expert",
    image: DibuImages,
    linkedin: "https://www.linkedin.com/in/dibakar-pal-760bba2b0?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BiojlmXcBRveJgEoZLL9HaA%3D%3D",
    twitter: "#",
    github: "#",
    bio: "Crafts seamless user experiences with a focus on performance and accessibility."
  },
  {
    name: "Aryan Raj Sharma",
    role: "UI/UX Designer & Product Strategist",
    image: AryanImage,
    linkedin: "https://www.linkedin.com/in/aryan-raj-11285a2b2",
    twitter: "#",
    github: "#",
    bio: "Transforms complex workflows into intuitive designs that users love."
  }
];

const About = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 text-center">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-800">
          Revolutionizing Resume Creation with AI
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          At AI Resume Builder, we're transforming job applications through intelligent technology and human-centered design. 
          Born from the frustration of outdated resume practices, our platform combines cutting-edge AI with expert HR insights 
          to help you land dream jobs faster.
        </p>
      </motion.div>

      <motion.div 
        className="grid md:grid-cols-3 gap-6 mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="p-6 bg-blue-50 rounded-xl">
          <h3 className="text-3xl font-bold text-blue-600">10,000+</h3>
          <p className="text-gray-600">Resumes Created</p>
        </div>
        <div className="p-6 bg-green-50 rounded-xl">
          <h3 className="text-3xl font-bold text-green-600">89%</h3>
          <p className="text-gray-600">Interview Success Rate</p>
        </div>
        <div className="p-6 bg-purple-50 rounded-xl">
          <h3 className="text-3xl font-bold text-purple-600">50+</h3>
          <p className="text-gray-600">Industry Templates</p>
        </div>
      </motion.div>

      
      <div className="my-16">
        <h2 className="text-3xl font-bold mb-12">Why We're Different</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div 
            className="p-6 border rounded-xl hover:shadow-lg transition-all"
            whileHover={{ scale: 1.02 }}
          >
            <FaRocket className="text-4xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Smart Optimization</h3>
            <p className="text-gray-600">Our AI analyzes job descriptions and optimizes your resume for Applicant Tracking Systems (ATS)</p>
          </motion.div>
          
          <motion.div 
            className="p-6 border rounded-xl hover:shadow-lg transition-all"
            whileHover={{ scale: 1.02 }}
          >
            <FaRegLightbulb className="text-4xl text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Expert Guidance</h3>
            <p className="text-gray-600">Access real-time suggestions from career experts and hiring managers</p>
          </motion.div>

          <motion.div 
            className="p-6 border rounded-xl hover:shadow-lg transition-all"
            whileHover={{ scale: 1.02 }}
          >
            <FaShieldAlt className="text-4xl text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Privacy First</h3>
            <p className="text-gray-600">Your data remains 100% confidential with enterprise-grade security</p>
          </motion.div>
        </div>
      </div>

      {/* Team Section */}
      <div className="my-16">
        <h2 className="text-3xl font-bold mb-12 flex justify-center items-center">
          <FaUsers className="mr-2" /> The Minds Behind the Magic
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index} 
              className="bg-white shadow-lg rounded-xl p-8 text-center"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-lg"
              />
              <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
              <p className="text-blue-500 mb-3">{member.role}</p>
              <p className="text-gray-600 text-sm mb-4 min-h-[60px]">{member.bio}</p>
              <div className="flex justify-center gap-4">
                <a href={member.linkedin} className="text-blue-500 hover:text-blue-700 transition-colors">
                  <FaLinkedin className="text-2xl" />
                </a>
                <a href={member.twitter} className="text-blue-400 hover:text-blue-600 transition-colors">
                  <FaTwitter className="text-2xl" />
                </a>
                <a href={member.github} className="text-gray-700 hover:text-gray-900 transition-colors">
                  <FaGithub className="text-2xl" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <motion.div 
        className="my-16 p-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl text-white"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Career?</h2>
        <p className="text-lg mb-8">Start building your AI-optimized resume in minutes</p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all">
          Create Your Resume Now
        </button>
      </motion.div>

    
    </div>
  );
};

export default About;