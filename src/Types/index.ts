import { OutputFileEntry } from "@uploadcare/react-uploader";

export interface UserLogIn {
    email: string;
    password: string;
}

export interface UserSignUp {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface FileEntry {
    files: OutputFileEntry[];
  }
export interface Post {
    caption : string,
    photos : PhotoMeta[],
    videos: VideoMeta[],
    likes : number,
    userlikes : [],
    userId : string | null,
    date: Date
}

export interface PhotoMeta {
    cdnUrl: string;
    uuid: string;
  }
  
  export interface VideoMeta {
    cdnUrl: string;
    uuid: string;
}
  export interface DocumentResponse {
    id: string,
    caption : string,
    photos : PhotoMeta[],
    videos: VideoMeta[],
    likes : number,
    userlikes : [],
    userId : string | null,
    date: Date
  }