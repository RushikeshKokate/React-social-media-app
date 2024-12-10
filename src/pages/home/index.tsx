import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../../context/UserAuthContext';
import { Profile_img } from '../../assets';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();  
    } catch (error) {
      console.error("Error during logout:", error);  
    }
  };

  return (
    <div>
        <div className='flex justify-between'>
      <div className='flex m-[16px] h-[50px]   items-center'>
          <img src={Profile_img} alt=""className='h-full'/>
        <div className='flex flex-col ml-[10px]'>
         <span className=' text-[10px] text-gray-400'>Welcome Back,</span>
         <span className='font-semibold'>{user?.displayName === null ? "New User" : user?.displayName }</span>
       </div>
       </div>
       <div>
        <button onClick={handleLogout} className='m-[16px] '>
            LogOut
        </button>
       </div>
       
      </div>

      <span className='font-karla font-bold text-[24px] ml-[16px] mt-[31px]'>
        Feeds
      </span>
    </div>
  );
};

export default Home;
