import React from "react";

const ProgramCard = ({ title, buttonText, imgSrc, imgAlt }) => {
    return (
      <div className="bg-black text-white p-6 rounded-lg flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>
        <button className="bg-white text-black px-4 py-2 rounded mb-4">{buttonText}</button>
        <img
          src={imgSrc}
          alt={imgAlt}
          className="mt-4 rounded-lg max-w-full h-auto"
        />
      </div>
    );
  };

  export default ProgramCard;