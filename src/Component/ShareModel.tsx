import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  RedditShareButton,
  TelegramShareButton,
  LinkedinShareButton,
} from "react-share";
import {
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  RedditIcon,
  TelegramIcon,
  LinkedinIcon,
} from "react-share";
import { FaCopy } from "react-icons/fa6";

const ShareModel = ({ isOpen, onClose, pageLink }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(pageLink).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset "copied" state after 2 seconds
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm w-full m-4">
         
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-[22px] font-bold font-karla">Share Post</h3>
          <button onClick={onClose} className="text-lg font-semibold">
            ×
          </button>
        </div>

  
        <div className="grid grid-cols-3 gap-4 mt-6">
          <FacebookShareButton url={pageLink}>
            <div className="bg-[#E6F0FF] p-3 rounded-full flex justify-center items-center">
              <FacebookIcon size={40} round />
            </div>
          </FacebookShareButton>
          <TwitterShareButton url={pageLink}>
            <div className="bg-[#E1F5FE] p-3 rounded-full flex justify-center items-center">
              <TwitterIcon size={40} round />
            </div>
          </TwitterShareButton>
          <WhatsappShareButton url={pageLink}>
            <div className="bg-[#E0F8E0] p-3 rounded-full flex justify-center items-center">
              <WhatsappIcon size={40} round />
            </div>
          </WhatsappShareButton>
          <RedditShareButton url={pageLink}>
            <div className="bg-[#FFEBE8] p-3 rounded-full flex justify-center items-center">
              <RedditIcon size={40} round />
            </div>
          </RedditShareButton>
          <TelegramShareButton url={pageLink}>
            <div className="bg-[#E4F6F9] p-3 rounded-full flex justify-center items-center">
              <TelegramIcon size={40} round />
            </div>
          </TelegramShareButton>
          <LinkedinShareButton url={pageLink}>
            <div className="bg-[#E6F4FF] p-3 rounded-full flex justify-center items-center">
              <LinkedinIcon size={40} round />
            </div>
          </LinkedinShareButton>
        </div>

     
        <div className="mt-6 border rounded-lg flex items-center justify-between bg-gray-100 p-3">
          <span className="text-sm text-gray-700 break-all">{pageLink}</span>
          <button
            onClick={handleCopyLink}
            className="flex items-center gap-2 text-sm text-gray-700 hover:text-black"
          >
            {copied ? <FaCheck className="text-green-500" /> : <FaCopy />}
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareModel;
