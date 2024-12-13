import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";
import { Profile_img } from "../../assets";
import { IoMdAdd } from "react-icons/io";
import { TbLogout2 } from "react-icons/tb";
import { DocumentResponse } from "../../Types";
import { getPost, getPosts } from "../../repository/post.service";
import PostCard from "../../Component/PostCard";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const [data, setData] = React.useState<DocumentResponse[]>([]);

  const getAllPost = async () => {
    const response: DocumentResponse[] = (await getPosts()) || [];
    console.log("all post are", response);

    setData(response);
  };

  React.useEffect(() => {
    if (user !== null) {
      getAllPost();
    }
  }, []);
  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  const renderPost = () => {
    return data.map((item, index) => {
      return <PostCard data={item} key={item.id} index={index} />;
    });
  };

  return (
    <div className="relative h-[100vh]">
      {" "}
      
      <div className="flex justify-between">
        <div
          className="flex m-[16px] h-[50px] items-center"
          onClick={() => navigate("/profile")}
        >
          <div className="h-[50px] w-[50px]">
            <img
              src={user?.photoURL === null ? Profile_img : user?.photoURL}
              alt="Profile"
              className="h-full w-full rounded-full object-cover"
            />
          </div>

          <div className="flex flex-col ml-[10px]">
            <span className="text-[10px] text-gray-400">Welcome Back,</span>
            <span className="font-semibold">
              {user?.displayName === null ? "New User" : user?.displayName}
            </span>
          </div>
        </div>

        <div>
          <button onClick={handleLogout} className="mt-[27px] mr-[15px]">
            <TbLogout2 size={30} />
          </button>
        </div>
      </div>
      <span className="font-karla font-bold text-[24px] ml-[16px] mt-[31px]">
        Feeds
      </span>
      <div className="lg:flex lg:flex-col lg:items-center md:flex md:flex-col md:items-center">
        {data ? renderPost() : <div>...loading</div>}
      </div>
      <button
        className="h-12 w-12 rounded-full bg-black flex justify-center items-center fixed bottom-4 right-4 z-50"
        onClick={() => navigate("/post")}
      >
        <IoMdAdd color="white" size={20} />
      </button>
    </div>
  );
};

export default Home;
