import React from "react";

interface Props {
  children: React.ReactNode;
}

const Options: React.FC = ({ children }: any) => {
  return <div className="flex flex-col items-center">{children}</div>;
};

export default Options;
