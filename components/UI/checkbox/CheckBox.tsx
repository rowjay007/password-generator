"use client";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { selectParams } from "../../../store/passwordSlice";
import { setParams } from "../../../store/passwordSlice";
import { CheckIcon } from "../../SVG/CheckIcon";
import CheckBoxLabel from "../checkbox/CheckBoxLabel";
import CustomCheckBox from "../checkbox/CustomCheckBox";
import HiddenCheckBox from "../HiddenCheckBoxProps";


const CheckBox: React.FC<{ text: string; tag: string }> = ({ text, tag }) => {
  const params = useAppSelector(selectParams);
  const dispatch = useAppDispatch();

  const checkHandler = () => {
    dispatch(setParams(tag));
  };
  return (
    <CheckBoxLabel data-testid="checkbox">
      <HiddenCheckBox onChange={checkHandler} />
      <CustomCheckBox isChecked={params[tag]}>
        <CheckIcon />
      </CustomCheckBox>
      <p>{text}</p>
    </CheckBoxLabel>
  );
};

export default CheckBox;
