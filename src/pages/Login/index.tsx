import * as React from 'react';
import {UserLogIn} from '../../Types'
import { useUserAuth } from "../../context/UserAuthContext";
import { Link, useNavigate } from "react-router-dom";

interface ILoginProps {}
const initialValue: UserLogIn = {
   email: "",
   password: "",
 };

const Login: React.FC<ILoginProps> = (props) => {
   const {  signIn, resetPassword } = useUserAuth();
   const navigate = useNavigate();
   const [userLogInInfo, setuserLogInInfo] =
   React.useState<UserLogIn>(initialValue);

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        console.log("The user info is : ", userLogInInfo);
        await signIn(userLogInInfo.email, userLogInInfo.password);
        navigate("/");
      } catch (error) {
        console.log("Error : ", error);
        alert(`Error: ${(error as any)?.message}`);
      }
    };

    const handleForgetPassword: React.MouseEventHandler = () => {
      try {
        resetPassword(userLogInInfo.email);
      } catch (error) {
        console.log("Error : ", error);
      }
    }
   

  return (
    <div className="flex items-center justify-center min-h-screen ml-4 mr-4 ">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg border">
        <h1 className="text-2xl font-semibold text-center mb-6">Login</h1>

        <form onSubmit={handleSubmit}>
        
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email:
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={userLogInInfo.email}
              
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setuserLogInInfo({
                  ...userLogInInfo,
                  email: e.target.value,
                })
              }
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
              value={userLogInInfo.password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setuserLogInInfo({
                  ...userLogInInfo,
                  password: e.target.value,
                })
              }
              placeholder="Enter your password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
 
          <div className="mb-4 text-right">
            <button 
              onClick={handleForgetPassword}
              className="text-sm text-blue-500 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Forgot Password?
            </button>
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
