import * as React from "react";
import { useUserAuth } from "../../context/UserAuthContext";
import { DocumentResponse, Post } from "../../Types";
import { getPostByUserId } from "../../repository/post.service";
import { FaRegHeart } from "react-icons/fa";

interface MyPhotoProps {}

const MyPhoto: React.FC<MyPhotoProps> = () => {
  const { user } = useUserAuth();
  const [data, setData] = React.useState<DocumentResponse[]>([]);

  const getAllPost = async (id: string) => {
    try {
      const querySnapshot = await getPostByUserId(id);
      const tempArr: DocumentResponse[] = [];
      if (querySnapshot.size > 0) {
        querySnapshot.forEach((doc) => {
          const data = doc.data() as Post;
          const responseObj: DocumentResponse = {
            id: doc.id,
            ...data,
          };
          console.log("The response object is : ", responseObj);
          tempArr.push(responseObj);
        });
        setData(tempArr);
      } else {
        console.log("No such document");
      }
    } catch (error) {
      console.log("Error fetching posts:", error);
    }
  };

  React.useEffect(() => {
    if (user) {
      getAllPost(user.uid);
    }
  }, [user]);

  if (!data.length) {
    return <div>No photos available.</div>;  
  }

  return (
    <div className="grid grid-cols-2 gap-4 mb-5">
    {data.map((item) => (
      <div key={item.photos?.[0]?.uuid} className="relative w-full">
        <div className="absolute group transition-all duration-200 bg-transparent hover:bg-slate-950 hover:bg-opacity-75 top-0 bottom-0 left-0 right-0 w-full h-full">
          <div className="flex flex-col justify-center items-center w-full h-full">
            <FaRegHeart className="hidden group-hover:block fill-white w-6 h-6" />
            <div className="hidden group-hover:block text-white">
              {item.likes} likes
            </div>
          </div>
        </div>
        <img
          src={`${item.photos?.[0]?.cdnUrl}/-/progressive/yes/`}
          alt="User photo"
          className="w-full rounded-lg"
        />
      </div>
    ))}
  </div>
  
  );
};

export default MyPhoto;
