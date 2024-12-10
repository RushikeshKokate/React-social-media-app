import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {UserSignUp} from '../../Types'
import { useUserAuth } from "../../context/UserAuthContext";

interface Signupprops {

}
const initialValue: UserSignUp = {
  name: "",
  email:  "",
  password:  "",
  confirmPassword:  ""
};




 
const Signup: React.FC<Signupprops> = (props) => {
  const [userSignUpInfo, setuserSignUpInfo] =
  React.useState<UserSignUp>(initialValue);
  const {  signUp } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log("The user info is : ", userSignUpInfo);
      await signUp(userSignUpInfo.email, userSignUpInfo.password );
      navigate("/");
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen ml-4 mr-4 ">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg border">
        <h1 className="text-2xl font-semibold text-center mb-6">Sign Up</h1>

        <form onSubmit={handleSubmit}>
         
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name:
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name"
              value = {userSignUpInfo.name}
              onChange = {(e) => setuserSignUpInfo({...userSignUpInfo, name: e.target.value})}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

    
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value = {userSignUpInfo.email}
              onChange = {(e) => setuserSignUpInfo({...userSignUpInfo, email: e.target.value})}
              placeholder="Enter your email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

        
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value = {userSignUpInfo.password}
              onChange = {(e) => setuserSignUpInfo({...userSignUpInfo, password: e.target.value})}
              placeholder="Enter your password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

        
          <div className="mb-6">
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
              Confirm Password:
            </label>
            <input
              type="password"
              value = {userSignUpInfo.confirmPassword}
              onChange = {(e) => setuserSignUpInfo({...userSignUpInfo, confirmPassword: e.target.value})}
              id="confirm-password"
              placeholder="Confirm your password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

     
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Sign Up
            </button>
          </div>
        </form>

        
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
