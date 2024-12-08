import * as React from 'react';
import { Link } from 'react-router-dom';

interface SignupProps {}

const Signup: React.FC<SignupProps> = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ml-4 mr-4 ">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg border">
        <h1 className="text-2xl font-semibold text-center mb-6">Sign Up</h1>

        <form>
          {/* Full Name Input */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name:
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email:
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password:
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Confirm Password Input */}
          <div className="mb-6">
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm your password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Signup Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Sign Up
            </button>
          </div>
        </form>

        {/* Already Have an Account? Login */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-700">
            Already have an account?{' '}
            <Link
             to={'/Login'}
              className="text-blue-500 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;