import { useState } from "react";

interface Props {
  includeLowercase: boolean;
  includeUppercase: boolean;
  includeSymbols: boolean;
  includeNumbers: boolean;
}

const PasswordGenerator: React.FC<Props> = ({
  includeLowercase,
  includeUppercase,
  includeSymbols,
  includeNumbers,
}) => {
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    let charSet = "";
    if (includeLowercase) {
      charSet += "abcdefghijklmnopqrstuvwxyz";
    }
    if (includeUppercase) {
      charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (includeSymbols) {
      charSet += "!@#%^&*()_+-=";
    }
    if (includeNumbers) {
      charSet += "0123456789";
    }

    let generatedPassword = "";
    for (let i = 0; i < 16; i++) {
      generatedPassword += charSet.charAt(
        Math.floor(Math.random() * charSet.length)
      );
    }
    setPassword(generatedPassword);
  };

  return (
    <div>
      <p>{password}</p>
    </div>
  );
};

export default PasswordGenerator;
