import React from "react";

interface Props {
  onClick: () => void;
  className?: string;
}

const GenerateButton: React.FC<Props> = ({ onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg ${className}`}
    >
      Generate Password
    </button>
  );
};

export default GenerateButton;
