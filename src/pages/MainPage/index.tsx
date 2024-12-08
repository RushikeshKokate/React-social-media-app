import React from 'react';
import { img1, img2, img3, img4, img5, img6, img7, img8, img9, icon, Google_svg} from '../../assets';
import { Link } from 'react-router-dom';

const MainPage: React.FC = () => {
  return (
    <div>
      
      <div className="w-screen h-[65vh] bg-slate-100">
      <div className="grid grid-cols-3 lg:grid-cols-3  lg:overflow-hidden h-full sm:grid-cols-2 md:grid-cols-3 gap-[8px]">
  <div className="mb-[8px]">
    <div className="relative mb-[8px]">
      <img
        src={img8}
        alt="Image 1"
        className="w-full h-full object-cover shadow-md"
      />
    </div>
    <div className="relative mb-[8px]">
      <img
        src={img5}
        alt="Image 2"
        className="w-full h-full object-cover shadow-md"
      />
    </div>
    <div className="relative mb-[8px]">
      <img
        src={img2}
        alt="Image 3"
        className="w-full h-full object-cover shadow-md"
      />
    </div>
  </div>

  <div className="gap-[8px]">
    <div className="relative mb-[8px]">
      <img
        src={img7}
        alt="Image 4"
        className="w-full h-full object-cover shadow-md"
      />
    </div>
    <div className="relative mb-[8px]">
      <img
        src={img6}
        alt="Image 5"
        className="w-full h-full object-cover shadow-md"
      />
    </div>
    <div className="relative mb-[8px]">
      <img
        src={img4}
        alt="Image 6"
        className="w-full h-full object-cover shadow-md"
      />
    </div>
  </div>

  <div className="gap-[8px]">
    <div className="relative mb-[8px]">
      <img
        src={img9}
        alt="Image 7"
        className="w-full object-cover shadow-md"
      />
    </div>
    <div className="relative mb-[8px]">
      <img
        src={img3}
        alt="Image 8"
        className="w-full h-full  max-md:h-[200px] object-cover shadow-md"
      />
    </div>
    <div className="relative mb-[8px]">
      <img
        src={img1}
        alt="Image 9"
        className="w-full h-full object-cover shadow-md"
      />
    </div>
  </div>
</div>

      </div>
      <div className="h-[40%] w-full z-20 fixed bottom-0 bg-slate-100 flex flex-col  rounded-t-[64px]">
  <div className="flex flex-col items-center gap-2 mt-[36px]">
    <div className='flex flex-col items-center'>
        <div className='flex items-center gap-2'>
            <img src={icon} alt="" />
            <span className='font-karla font-[600] text-[28px]'>Vibesnap</span>
        </div>
             <span className='font-karla font-[400] text-[16px]'>Movements That Matter, Shared Forever.</span>
        <p></p>
    </div>
    <button className="font-karla font-[700] mt-[28px] flex items-center gap-[14px] rounded-[26px] text-white py-[14px] px-[19px] bg-[#292929]">
      <img className="" src={Google_svg} alt="" />
      <span>Continue With Google</span>
    </button>
    <div className="flex items-center gap-4">
      <Link
        to="/Login"
        className="text-blue-500 hover:underline text-lg font-medium"
      >
        Login
      </Link>
      <Link
        to="/Signup"
        className="text-blue-500 hover:underline text-lg font-medium"
      >
        Signup
      </Link>
    </div>
  </div>
</div>

    </div>
  );
};

export default MainPage;
