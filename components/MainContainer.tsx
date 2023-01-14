import React, { Children, FunctionComponent } from "react";

type MainContainerProps = {
  children: React.ReactNode;
};

const MainContainer: FunctionComponent<MainContainerProps> = ({ children }) => {
  return (
    <div className="flex justify-center items-center h-screen">{children}</div>
  );
};

export default MainContainer;
