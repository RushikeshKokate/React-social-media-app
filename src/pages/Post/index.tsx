import * as React from "react";
import { useUserAuth } from "../../context/UserAuthContext";
import { FileEntry, PhotoMeta, Post } from "../../Types";
import FileUploader from "../../Component/FileUploader";
import { createPost } from "../../repository/post.service";
import { useNavigate } from "react-router-dom";
 

interface MyPostProps {}

const MyPost: React.FC<MyPostProps> = () => {
  const { user } = useUserAuth();

  const [fileEntry, setFileEntry] = React.useState<FileEntry>({
    files: [],
  });

  const navigate = useNavigate()
  const [post, setPost] = React.useState<Post>({
    caption: "",
    photos: [],
    likes: 0,
    userlikes: [],
    userId: null,
    date: new Date(),
  });

  React.useEffect(() => {
    console.log(post);
    console.log(fileEntry);
  }, [post]);

  const handleSubmit = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Uploaded File Entry : ", fileEntry.files);
    console.log("The create post is : ", post);
    const photoMeta: PhotoMeta[] = fileEntry.files.map((file) => {
      if (file.cdnUrl && file.uuid) {
        return {
          cdnUrl: file.cdnUrl,
          uuid: file.uuid,
        };
      } else {
        // Handle the case where cdnUrl or uuid is null
        // For example, you could return a default value or throw an error
        throw new Error('cdnUrl or uuid is null');
      }
    });
    if (user != null) {
      const newPost: Post = {
        ...post,
        userId: user?.uid || null,
        photos: photoMeta,
      };
      console.log("The final posy is  : ", newPost);
      await createPost(newPost);
      navigate("/");
    } else {
      navigate("/login");
    }
  };
  return (
     <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">
          <input type="text" name="caption" value={post.caption} onChange={(e)=>setPost({...post, caption: e.target.value})}/>
        </label>
        <FileUploader fileEntry={fileEntry} onChange={setFileEntry}/> 
        <button type="submit">Submit</button>
        </form>
     </div>
  );
};

export default MyPost;
