import classNames from "classnames";
import React from "react";

type CheckBoxLabelProps = {
  children?: React.ReactNode;
  onHover?: (event: React.MouseEvent<HTMLDivElement>) => void;
};

export const CheckBoxLabel = ({ children, onHover }: CheckBoxLabelProps) => {
  return (
    <div
      className={classNames(
        "flex",
        "text-almost-white",
        "cursor-pointer",
        "mb-2",
        { "hover:border-2": onHover }
      )}
      onMouseEnter={onHover}
    >
      {children}
    </div>
  );
};

type HiddenCheckBoxProps = {
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const HiddenCheckBox = ({ className, onChange }: HiddenCheckBoxProps) => {
  return (
    <input
      type="checkbox"
      className={classNames("hidden", className)}
      onChange={onChange}
    />
  );
};




type CustomCheckBoxProps = {
  isChecked: boolean;
  children?: React.ReactNode;
};

export const CustomCheckBox = ({ isChecked, children }: CustomCheckBoxProps) => {
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

