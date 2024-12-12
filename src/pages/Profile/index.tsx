import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Cover_img, Vector, Profile_img } from "../../assets/index";
import { UserAuthContext } from "../../context/UserAuthContext";

interface ProfileProps {}

const Profile: React.FC<ProfileProps> = () => {
  const { user } = React.useContext(UserAuthContext);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="relative">
       
      <img
        src={Cover_img}
        alt="Cover"
        className="object-cover w-full h-[20vh] sm:h-[25vh] md:h-[30vh] lg:h-[35vh] rounded-b-[20px]"
      />
      <button className=" w-[208px] mt-[16px] font-karla font-[700] ml-[40vw] h-[32px] lg:ml-[22vw] xl:ml-[20vw] border border-gray-400 rounded-full">
        Edit Profile
      </button>
      <div className="mt-[24px] lg:mt-[60px] absolute left-7 right-6 h-auto">
        <span className="font-karla font-[800] text-[24px] w-full ">
          {user?.displayName ? user?.displayName : "New User"}
        </span>
        <p className="leading-[17px] font-kumbh font-[400] mt-[6px] text-[14px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        </p>
        <div className="mt-[24px]">
        <span className=" font-karla font-[600] text-[18px]">
          My Post
        </span>
        </div>
        
      </div>

      
      <div className="absolute left-8 sm:left-10 md:left-14 lg:left-16 top-[calc(20vh-56px)] sm:top-[calc(25vh-60px)] md:top-[calc(30vh-75px)] lg:top-[calc(35vh-90px)] w-[112px] sm:w-[120px] md:w-[150px] lg:w-[180px] h-[112px] sm:h-[120px] md:h-[150px] lg:h-[180px] rounded-full bg-white shadow-lg border-2 border-gray-200">
        <img
          src={user?.photoURL === null ? Profile_img : user?.photoURL}
          alt="Profile"
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      <button
        onClick={handleBack}
        className="absolute top-4 left-4 p-2  rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
        title="Go Back"
      >
        <img
          src={Vector}
          alt="Back"
          className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8"
        />
      </button>
    </div>
  );
};

export default Profile;
