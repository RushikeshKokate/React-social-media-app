import * as React from 'react';
import { Link } from 'react-router-dom';

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ml-4 mr-4 bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-center mb-6">Login</h1>

        <form>
        
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

         
          <div className="mb-6">
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
 
          <div className="mb-4 text-right">
            <a
              href="#"
              className="text-sm text-blue-500 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Forgot Password?
            </a>
          </div>

         
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Login
            </button>
          </div>
        </form>

 
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-700">
            Don't have an account?{' '}
            <Link
              to={'/SignUp'}
              className="text-blue-500 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
