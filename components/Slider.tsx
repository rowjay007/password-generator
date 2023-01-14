import React, { useState } from "react";

interface Props {
  value: number;
  onChange: any;
//   onChange: (value: number) => void;
  className?: string;
}

const Slider: React.FC<Props> = ({ value, onChange, className }) => {
  const [localValue, setLocalValue] = useState(value);

  return (
    <div className={`relative ${className}`}>
      <input
        type="range"
        min="8"
        max="32"
        value={localValue}
        onChange={(e) => {
          setLocalValue(e.target.value);
          onChange(e.target.value);
        }}
        className="w-full"
      />
      <div className="absolute bottom-0 left-0 text-sm text-gray-600">
        {localValue}
      </div>
    </div>
  );
};

export default Slider;
