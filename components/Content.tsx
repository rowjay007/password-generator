import React from "react";

interface Props {
  children: React.ReactNode;
}

const MainContainer: React.FC<Props> = ({ children }) => {
  return (
    <div className="bg-dark-grey text-grey font-medium text-base leading-body m-0 p-0 box-border w-full h-full flex items-center justify-center">
      <h1 className="text-center text-grey font-medium text-lg leading-medium my-4 sm:text-xl">
        {children}
      </h1>
    </div>
  );
};

export default MainContainer;
