import React, { useState } from "react";

interface Props {
  label: string;
  onChange: (value: boolean) => void;
  checked?: boolean;
}

const Checkbox: React.FC<Props> = ({ label, onChange, checked = false }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
    onChange(event.target.checked);
  };

  return (
    <label className="inline-flex items-center">
      <input
        type="checkbox"
        className="form-checkbox"
        checked={isChecked}
        onChange={handleChange}
      />
      <span className="ml-2">{label}</span>
    </label>
  );
};

export default Checkbox;
