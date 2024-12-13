import React, { useCallback, useEffect, useState } from "react";
import "@uploadcare/react-uploader/core.css";
import * as UC from "@uploadcare/file-uploader";
import { FileEntry } from "../Types";
import ImageSlider from "./ImageSlider";

UC.defineComponents(UC);

interface IFileUploaderProps {
  fileEntry: FileEntry;
  onChange: (fileEntry: FileEntry) => void;
}

const FileUploader: React.FC<IFileUploaderProps> = ({
  fileEntry,
  onChange,
}) => {
  const [uploadedFiles, setUploadedFiles] = useState<UC.OutputFileEntry[]>([]);

  const handleRemoveClick = useCallback(
    (uuid: UC.OutputFileEntry["uuid"]) => {
      const updatedFiles = fileEntry.files.filter((f) => f.uuid !== uuid);
      onChange({ files: updatedFiles });
    },
    [fileEntry.files, onChange]
  );

  useEffect(() => {
    const ctxProvider = document.querySelector("uc-upload-ctx-provider");

    if (ctxProvider) {
      const handleFileChange = (e: Event) => {
        const customEvent = e as CustomEvent;
        const files = customEvent.detail.allEntries || [];
        setUploadedFiles(files);
        onChange({ files });
      };

      ctxProvider.addEventListener("change", handleFileChange);

      return () => {
        if (ctxProvider) {
          ctxProvider.removeEventListener("change", handleFileChange);
        }
      };
    } else {
      console.error("Error: 'uc-upload-ctx-provider' not found.");
    }
  }, [onChange]);

  return (
    <div>
      <uc-config
        ctx-name="my-uploader"
        pubkey="14c5e9a317284dd58634"
        max-local-file-size-bytes="524288000"
        use-cloud-image-editor="true"
        multiple={true}
        source-list="local, url, camera, dropbox, video"
      ></uc-config>
      <uc-file-uploader-regular ctx-name="my-uploader"></uc-file-uploader-regular>
      <uc-upload-ctx-provider ctx-name="my-uploader"></uc-upload-ctx-provider>

      <div className=" gap-4 mt-8">
        <ImageSlider
          fileEntry={fileEntry}
          handleRemoveClick={handleRemoveClick}
        />
      </div>
    </div>
  );
};

export default FileUploader;
