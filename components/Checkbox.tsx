import React from 'react';

interface Props {
  text: string;
  tag: string;
  onChange: (value: boolean) => void;
  checked: boolean;
  className?: string;
}

const CheckBox: React.FC<Props> = ({
  text,
  tag,
  onChange,
  checked,
  className,
}) => {
  return (
    <div className={`flex items-center ${className}`}>
      <input
        type="checkbox"
        id={tag}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="form-checkbox"
      />
      <label htmlFor={tag} className="ml-2">
        {text}
      </label>
    </div>
  );
};

export default CheckBox;

