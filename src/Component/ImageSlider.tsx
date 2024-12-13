import React from "react";
import { Carousel } from "antd";
import { MdDelete } from "react-icons/md";

interface File {
  uuid: string;
  cdnUrl: string;
  name: string;
}

interface ImageSliderProps {
  fileEntry: { files: File[] };
  handleRemoveClick: (uuid: string) => void;
}

const ImageSlider: React.FC<ImageSliderProps> = ({
  fileEntry,
  handleRemoveClick,
}) => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  const contentStyle: React.CSSProperties = {
    margin: 0,
    height: "120px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <div className="relative">
      <Carousel afterChange={onChange}>
        {fileEntry.files.map((file) => (
          <div key={file.uuid}>
            <div className="relative w-full h-full">
              {file.cdnUrl ? (
                <img
                  src={`${file.cdnUrl}/-/format/webp/-/quality/smart/-/stretch/fill/`}
                  alt={file.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <p>No preview available</p>
              )}

              <div className="cursor-pointer flex justify-center absolute bg-black rounded-full -right-3 -top-3 m-6 w-8 h-8">
                <button
                  className="text-white text-center"
                  type="button"
                  onClick={() => handleRemoveClick(file.uuid)}
                >
                  <MdDelete color="white" size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageSlider;
