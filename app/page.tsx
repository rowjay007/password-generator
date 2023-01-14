"use client";
import React, { useState } from "react";
import MainContainer from "../components/MainContainer";
import Checkbox from "../components/Checkbox";
import PasswordGenerator from "../components/PasswordGenerator";
export default function Page() {
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(true);

  return (
    <MainContainer>
      <Checkbox
      
        label="Include lowercase letters"
        onChange={(value) => setIncludeLowercase(value)}
        checked={includeLowercase}
      />
      <Checkbox
        label="Include uppercase letters"
        onChange={(value) => setIncludeUppercase(value)}
        checked={includeUppercase}
      />
      <Checkbox
        label="Include symbols"
        onChange={(value) => setIncludeSymbols(value)}
        checked={includeSymbols}
      />
      <Checkbox
        label="Include numbers"
        onChange={(value) => setIncludeNumbers(value)}
        checked={includeNumbers}
      />
      {/* <PasswordStrengthMeter
      includeLowercase={includeLowercase}
      includeUppercase={includeUppercase}
      includeSymbols={includeSymbols}
      includeNumbers={includeNumbers}
    />
    <GenerateButton />
    <Slider />
    <Options
      includeLowercase={includeLowercase}
      includeUppercase={includeUppercase}
      includeSymbols={includeSymbols}
      includeNumbers={includeNumbers}
    /> */}
    <PasswordGenerator
      includeLowercase={includeLowercase}
      includeUppercase={includeUppercase}
      includeSymbols={includeSymbols}
      includeNumbers={includeNumbers}
    />
    </MainContainer>
  );
}
