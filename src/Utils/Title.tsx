import React from "react";

const Title = ({ bigTitle, smallTitle }) => {
  return (
    <div className="bg-gradient-to-r from-[#060d3b] to-[#2c3a94] text-white p-6 rounded-lg text-center">
      <h1 className="text-5xl font-bold text-green-600 mb-2">{bigTitle}</h1>
      <p className="text-xl font-medium">{smallTitle}</p>
    </div>
  );
};

export default Title;
