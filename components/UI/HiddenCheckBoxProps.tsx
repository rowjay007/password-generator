import classNames from "classnames";

type HiddenCheckBoxProps = {
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const HiddenCheckBox = ({
  className,
  onChange,
}: HiddenCheckBoxProps) => {
  return (
    <input
      type="checkbox"
      className={classNames("hidden", className)}
      onChange={onChange}
    />
  );
};

export default HiddenCheckBox
