import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const Navbar = () => {
  const { user, dispatch } = useAuth();

  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-50 shadow-sm py-3">
      <div className="container mx-auto flex justify-between items-center">
        <Link className="text-white font-bold text-3xl" to="/">
          <i className="fa fa-rocket me-2 text-blue-500"></i>AI Resume Builder
        </Link>
        
        <div className="flex items-center gap-6">
          {user ? (
            <>
              <Link to="/dashboard" className="text-white hover:text-gray-400">
                Dashboard
              </Link>
              <button
                onClick={() => dispatch({ type: 'LOGOUT' })}
                className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-white hover:text-gray-400">
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
              >
                Get Started
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;