import * as React from "react";
import { useUserAuth } from "../../context/UserAuthContext";
import { FileEntry, PhotoMeta, Post } from "../../Types";
import FileUploader from "../../Component/FileUploader";
import { createPost } from "../../repository/post.service";
import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

interface MyPostProps {}

const MyPost: React.FC<MyPostProps> = () => {
  const { user } = useUserAuth();
  const navigate = useNavigate();

  const [fileEntry, setFileEntry] = React.useState<FileEntry>({
    files: [],
  });

  const [post, setPost] = React.useState<Post>({
    caption: "",
    photos: [],
    likes: 0,
    userlikes: [],
    userId: null,
    date: new Date(),
    videos: [],
  });

  
  const handleCaptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPost({ ...post, caption: e.target.value });
  };
 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!fileEntry.files.length) {
      alert("Please upload at least one file.");
      return;
    }
  
    console.log("Uploaded File Entry: ", fileEntry.files);
    console.log("Post Data: ", post);
  
    // Separate photo and video metadata
    const photoMeta: PhotoMeta[] = [];
    const videoMeta: VideoMeta[] = [];
  
    try {
      fileEntry.files.forEach((file) => {
        if (file.cdnUrl && file.uuid) {
          if (file.mimeType.startsWith("video/")) {
            // Process video files
            videoMeta.push({
              cdnUrl: file.cdnUrl,
              uuid: file.uuid,
              duration: file.metadata?.duration || 0, // Optional duration
              thumbnailUrl: file.metadata?.thumbnail || "", // Optional thumbnail
            });
          } else {
            // Process photo files
            photoMeta.push({
              cdnUrl: file.cdnUrl,
              uuid: file.uuid,
            });
          }
        } else {
          alert("Error: Missing file URL or UUID.");
          throw new Error("cdnUrl or uuid is null");
        }
      });
  
      if (user) {
        const newPost: Post = {
          ...post,
          userId: user.uid || null,
          photos: photoMeta,
          videos: videoMeta,
        };
  
        console.log("Final Post Data: ", newPost);
  
        await createPost(newPost);
        navigate("/");
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.error("Error processing files or creating post: ", error);
    }
  };
  

  return (
    <div className="   h-[100vh] w-[100vw]    p-4 rounded-lg ">
      <button
        className="flex flex-row items-center font-Karla font-[800] text-lg gap-3"
        onClick={() => navigate(-1)}
      >
        {" "}
        <IoMdArrowRoundBack height={24} width={24} />
        New Post
      </button>
      <div className=" max-w-md mx-auto h-[95%]  w-full  mt-4 rounded-lg ">
        <form
          onSubmit={handleSubmit}
          className="h-full w-full flex flex-col justify-between "
        >
          
          <div>
            <textarea
              id="caption"
              className="w-full p-2 rounded-md h-[248px] bg-[#D9D9D99C] border border-gray-300 mb-4 resize-none text-left"
              name="caption"
              value={post.caption}
              onChange={handleCaptionChange}
              placeholder="What's on your mind?"
              style={{
                paddingTop: "8px",  
              }}
            />

            <FileUploader fileEntry={fileEntry} onChange={setFileEntry} />
          </div>
          <button
            type="submit"
            className="w-full py-3 mt-3 mb-3 font-Karla font-[700] px-4 bg-black text-white rounded-[36px] hover:bg-blue-700 transition-colors"
          >
            CREATE
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyPost;
