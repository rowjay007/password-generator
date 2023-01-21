import classNames from "classnames";


type CustomCheckBoxProps = {
  isChecked: boolean;
  children?: React.ReactNode;
};


const CustomCheckBox = ({ isChecked, children }: CustomCheckBoxProps) => {
  return (
    <div
      className={classNames(
        "w-2",
        "h-2",
        "border-2",
        "border-neon-green",
        "bg-neon-green",
        "flex",
        "items-center",
        "justify-center",
        "transition-all",
        "duration-300",
        "ease-in-out",
        { "border-neon-green": isChecked },
        { "bg-transparent": !isChecked }
      )}
    >
      <svg
        className={classNames(
          "transition-all",
          "duration-300",
          "ease-in-out",
          "transform",
          { "scale-1": isChecked },
          { "scale-0": !isChecked }
        )}
      >
        {children}
      </svg>
    </div>
  );
};

export default CustomCheckBox;
