import React from "react";

interface Props {
  children: React.ReactNode;
}

const MainContainer: React.FC<Props> = ({ children }) => {
  return <main className="max-w-5xl mx-auto">{children}</main>;
};

export default MainContainer;
