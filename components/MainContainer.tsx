import React from "react";

interface Props {
  children: React.ReactNode;
}

const MainContainer: React.FC<Props> = ({ children }) => {
  return (
    <div className="bg-dark-grey text-grey font-medium text-base leading-body m-0 p-0 box-border w-full h-full flex items-center justify-center">
        {children}
    </div>
  );
};

export default MainContainer;

