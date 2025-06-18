import React from "react";
import CustomButton from "./CustomButton";
import { useSnapshot } from "valtio";
import state from "../store";

const FilePicker = ({ file, setFile, readFile }) => {
  const snap = useSnapshot(state);
  return (
    <div className="filepicker-container">
      <div className="flex flex-1 flex-col">
        <input
          type="file"
          id="file-upload"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label htmlFor="file-upload" className="filepicker-label">
          Upload File
        </label>
        <p className="mt-2 text-neutral-300 text-xs truncate">
          {file === "" ? "no file selected" : file.name}
        </p>
      </div>
      <div className="mt-4 flex flex-wrap gap-3">
        <CustomButton
          title="Logo"
          type="outline"
          handleClick={() => {
            readFile("logo");
          }}
          customStyles="text - xs  "
        />
        <CustomButton
          title="Full"
          type="filled"
          handleClick={() => {
            readFile("full");
          }}
          customStyles="text - xs "
        />
      </div>
    </div>
  );
};

export default FilePicker;
