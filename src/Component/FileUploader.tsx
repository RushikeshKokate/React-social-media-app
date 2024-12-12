import React, { useCallback, useEffect, useState } from "react";
import "@uploadcare/react-uploader/core.css";
import * as UC from "@uploadcare/file-uploader";
import { FileEntry } from "../Types";

UC.defineComponents(UC);

interface IFileUploaderProps {
  fileEntry: FileEntry;
  onChange: (fileEntry: FileEntry) => void;
}

const FileUploader: React.FC<IFileUploaderProps> = ({ fileEntry, onChange }) => {
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
          ctxProvider.removeEventListener('change', handleFileChange);
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
        img-only="true"
        max-local-file-size-bytes="524288000"
        use-cloud-image-editor="true"
        source-list="local, url, camera, dropbox"
        confirmUpload
      ></uc-config>
      <uc-file-uploader-regular ctx-name="my-uploader"></uc-file-uploader-regular>
      <uc-upload-ctx-provider ctx-name="my-uploader"></uc-upload-ctx-provider>

      <div className="grid grid-cols-2 gap-4 mt-8">
        {fileEntry.files.map((file) => (
          <div key={file.uuid} className="relative">
            {file.cdnUrl ? (
              <img
                src={`${file.cdnUrl}/-/format/webp/-/quality/smart/-/stretch/fill/`}
                alt={file.name}
              />
            ) : (
              <p>No preview available</p>
            )}

            <div className="cursor-pointer flex justify-center absolute -right-2 -top-2 bg-white border-2 border-slate-800 rounded-full w-7 h-7">
              <button
                className="text-slate-800 text-center"
                type="button"
                onClick={() => handleRemoveClick(file.uuid)}
              >
                ×
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileUploader;
