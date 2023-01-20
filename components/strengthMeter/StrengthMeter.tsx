"use client"
import React from "react";
import { useAppSelector } from "../../store/hooks";
import { selectStrength } from "../../store/passwordSlice";

type Str = {
  [key: number]: string;
};

const StrengthMeter: React.FC = () => {
  const str = useAppSelector(selectStrength);

  const strText: Str = {
    1: "too weak",
    2: "weak",
    3: "medium",
    4: "strong",
  };

  const color: Str = {
    1: "red",
    2: "orange",
    3: "yellow",
    4: "neon-green",
  };

  return (
    <div>
      <p>strength</p>
      <div>
        <h4>{strText[str]}</h4>
        <div>
          <div color={color[str]} isFilled={str >= 1} />
          <div color={color[str]} isFilled={str >= 2} />
          <div color={color[str]} isFilled={str >= 3} />
          <div color={color[str]} isFilled={str >= 4} />
        </div>
      </div>
    </div>
  );
};

export default StrengthMeter;
