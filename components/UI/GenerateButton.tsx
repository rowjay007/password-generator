import React from "react";
import { ReactComponent as ArrowIcon } from "../../images/icon-arrow-right.svg";
import { useAppSelector } from "../../store/hooks";
import { useAppDispatch } from "../../store/hooks";
import { generatePassword } from "../../store/passwordSlice";
import { selectLength, selectParams } from "../../store/passwordSlice";
const GenerateButton: React.FC = () => {
  const length = useAppSelector(selectLength);
  const params = useAppSelector(selectParams);
  const dispatch = useAppDispatch();
  const generateHandler = (): void => {
    dispatch(generatePassword());
  };

  const isDisabled =
    length === 0 || Object.values(params).every((value) => value === false);
  return (
    <div disabled={isDisabled} onClick={generateHandler}>
      Generate
      <ArrowIcon />
    </div>
  );
};

export default GenerateButton;
