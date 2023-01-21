"use client";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectLength } from "../../store/passwordSlice";
import { setLength } from "../../store/passwordSlice";
import { SliderComponent } from "./SliderComponent";
const Slider: React.FC = () => {
  const length = useAppSelector(selectLength);
  const dispatch = useAppDispatch();

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setLength(+e.target.value));
  };

  return (
    <div className="mb-3">
      <div className="flex items-center justify-between mb-4 sm:mb-0 sm:items-start">
        <span className="text-almost-white"> Character Length</span>
        <h3 className="text-neon-green text-lg leading-tight sm:text-xl">
          {length}
        </h3>
      </div>
      <SliderComponent
        data-testid="slider"
        type="range"
        min={0}
        max={20}
        value={length}
        onChange={changeHandler}
      />
    </div>
  );
};

export default Slider;
