import React from "react";

interface Props {
  password: string;
}

const Display: React.FC<Props> = ({ password }) => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-center text-3xl font-medium">{password}</p>
    </div>
  );
};

export default Display;
