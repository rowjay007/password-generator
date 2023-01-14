

export const getStrengthClass = (strength: number): string => {
  let className = "";
  if (strength < 30) {
    className = "bg-red-500";
  } else if (strength < 60) {
    className = "bg-yellow-500";
  } else {
    className = "bg-green-500";
  }
  return className;
};

export const calculateStrength = (password: string): number => {
  let strength = 0;
  const regExps = {
    lower: /[a-z]/,
    upper: /[A-Z]/,
    number: /[0-9]/,
    symbol: /[!@#$%^&*(),.?":{}|<>]/,
  };
  if (regExps.lower.test(password)) strength += 25;
  if (regExps.upper.test(password)) strength += 25;
  if (regExps.number.test(password)) strength += 25;
  if (regExps.symbol.test(password)) strength += 25;
  return strength + (password.length >= 8 ? 50 : -100);
};
