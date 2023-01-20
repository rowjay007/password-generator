"use client";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectParams } from "../../store/passwordSlice";
import { setParams } from "../../store/passwordSlice";
import { CheckIcon } from "../SVG/CheckIcon";


const CheckBox: React.FC<{ text: string; tag: string }> = ({ text, tag }) => {
  const params = useAppSelector(selectParams);
  const dispatch = useAppDispatch();

  const checkHandler = () => {
    dispatch(setParams(tag));
  };
  return (
    <div data-testid="checkbox">
      <div onChange={checkHandler} />
      <div isChecked={params[tag]}>
        <CheckIcon />
      </div>
      <p>{text}</p>
    </div>
  );
};

export default CheckBox;
