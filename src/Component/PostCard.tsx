import React, { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import ShareModel from "../Component/ShareModel";
import { useUserAuth } from "../context/UserAuthContext";

interface Timestamp {
  seconds: number;
  nanoseconds: number;
}

interface Photo {
  cdnUrl: string;
  uuid: string;
}

interface Video {
  cdnUrl: string;
  uuid: string;
  thumbnailUrl: string;
  duration: number;
}

interface DocumentResponse {
  id: string;
  caption: string;
  date: Timestamp;
  likes: number;
  photos: Photo[];
  videos: Video[];
  userId: string;
  userlikes: string[];
}

interface PostCardProps {
  data: DocumentResponse;
  index: number;
}

const convertTimestampToRelativeTime = (timestamp: Timestamp): string => {
  const postDate = new Date(timestamp.seconds * 1000);  
  const now = new Date();

  const diffInMs = now.getTime() - postDate.getTime();  
  const diffInSeconds = Math.floor(diffInMs / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);
  const diffInWeeks = Math.floor(diffInDays / 7);
  const diffInMonths = Math.floor(diffInDays / 30);  
  const diffInYears = Math.floor(diffInDays / 365); 

  if (diffInYears > 0)
    return diffInYears === 1 ? "1 year ago" : `${diffInYears} years ago`;
  if (diffInMonths > 0)
    return diffInMonths === 1 ? "1 month ago" : `${diffInMonths} months ago`;
  if (diffInWeeks > 0)
    return diffInWeeks === 1 ? "1 week ago" : `${diffInWeeks} weeks ago`;
  if (diffInDays > 0)
    return diffInDays === 1 ? "1 day ago" : `${diffInDays} days ago`;
  if (diffInHours > 0)
    return diffInHours === 1 ? "1 hour ago" : `${diffInHours} hours ago`;
  if (diffInMinutes > 0)
    return diffInMinutes === 1
      ? "1 minute ago"
      : `${diffInMinutes} minutes ago`;
  return "Just now";
};

const PostCard: React.FC<PostCardProps> = ({ data, index }) => {
  const { user } = useUserAuth();
  const [isModalOpen, setModalOpen] = useState(false);  
  const pageLink = data.photos?.[0]?.cdnUrl || data.videos?.[0]?.cdnUrl;  

  const backgroundColor = index % 2 === 0 ? "#F7EBFF" : "#FFFAEE";

  useEffect(() => {
    console.log("PostCard data:", data);
  }, [data]);

   
  const relativeTime = convertTimestampToRelativeTime(data.date);

  return (
    <div
      className="max-w-md mx-auto lg:w-full md:w-full ml-4 rounded-[24px] mr-4 overflow-hidden my-4"
      style={{ backgroundColor }}
    >
    
      <div className="flex items-center px-4 py-3">
        <img
          src={user?.photoURL || "https://via.placeholder.com/40"}
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
        <div className="ml-3">
          <h3 className="text-sm font-semibold">
            {user?.displayName || "Guest User"}
          </h3>
          <p className="text-xs text-gray-500">{relativeTime}</p>
        </div>
      </div>

   
      <div className="px-4 pb-2">
        <p className="text-sm text-gray-700">
          {data.caption || "No description provided"}
        </p>
      </div>

       
      <div className="w-full px-3">
        {data.photos && data.photos.length > 0 ? (
          <img
            src={data.photos[0].cdnUrl}
            alt="Post"
            className="w-full rounded-xl h-[300px] object-cover"
          />
        ) : data.videos && data.videos.length > 0 ? (
          <video
            src={data.videos[0].cdnUrl}
            controls
            className="w-full rounded-xl h-[300px] object-cover"
          />
        ) : (
          <div className="w-full h-[300px] flex items-center justify-center bg-gray-200">
            <p className="text-gray-500">No media available</p>
          </div>
        )}
      </div>

  
      <div className="m-[12px] flex item-center justify-between">
        <button className="flex items-center text-[#D95B7F] font-kumbh font-[700] gap-1">
          <FaRegHeart />
          {data.likes || 0}
        </button>
        <button
          className="flex items-center bg-[#00000012] font-karla font-[600] rounded-full gap-1 px-[26px] py-[7px]"
          onClick={() => setModalOpen(true)} 
        >
          Share
        </button>
      </div>

       
      <ShareModel
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        pageLink={pageLink}
      />
    </div>
  );
};

export default PostCard;
