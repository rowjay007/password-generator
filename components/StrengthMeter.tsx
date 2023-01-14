import React from "react";
import { calculateStrength, getStrengthClass } from "./calculateStrength";
interface Props {
  password: string;
  className?: string;
}

const StrengthMeter: React.FC<Props> = ({ password, className }) => {
  // code to calculate password strength and return the appropriate className
  const strength = calculateStrength(password);
  const strengthClass = getStrengthClass(strength);

  return <div className={`bg-gray-300 ${strengthClass} ${className}`} />;
};

export default StrengthMeter;
