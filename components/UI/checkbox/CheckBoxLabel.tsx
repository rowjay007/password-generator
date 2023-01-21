import classNames from "classnames";

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

export default CheckBoxLabel;
