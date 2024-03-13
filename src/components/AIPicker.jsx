import React from "react";
import CustomButton from "./CustomButton";

const AIPicker = ({ promt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className="aipicker-container">
      <textarea
        className="aipicker-textarea"
        placeholder="Enter a Prompt"
        rows={5}
        value={promt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <CustomButton type="outline" title="Generating..." customStyles="text-xs" />
        ) : (
          <>
            <CustomButton
              type="outline"
              title="AI logo"
              handleClick={() => handleSubmit("logo")}
              customStyles="text-xs"
            />
            <CustomButton
              type="outline"
              title="AI Full"
              handleClick={() => handleSubmit("full")}
              customStyles="text-xs"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default AIPicker;
