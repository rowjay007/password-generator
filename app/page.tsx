"use client"
import React, { useState } from "react";
import MainContainer from "../components/MainContainer";
import Display from "../components/Display";
import Options from "../components/Options";
import Slider from "../components/Slider";
import CheckBox from "../components/CheckBox";
import StrengthMeter from "../components/StrengthMeter";
import GenerateButton from "../components/GenerateButton";

const App = () => {
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(16);

  const generatePassword = () => {
    // your code for generating password
  };

  return (
    <div>
      <h1 className="text-2xl font-medium leading-tight text-almost-white bg-[#556D92] flex justify-between items-center p-2 py-1.9 px-1.6 mb-2.4">Password Generator</h1>
      <Display password={password} />
      <Options>
        <Slider
          value={passwordLength}
          onChange={setPasswordLength}
          className="my-4"
        />
        <CheckBox
          text="Include Uppercase Letters"
          tag="uppLetters"
          onChange={(value) => setIncludeUppercase(value)}
          checked={includeUppercase}
          className="my-2"
        />
        <CheckBox
          text="Include Lowercase Letters"
          tag="lowLetters"
          onChange={(value) => setIncludeLowercase(value)}
          checked={includeLowercase}
          className="my-2"
        />
        <CheckBox
          text="Include Numbers"
          tag="numbers"
          onChange={(value) => setIncludeNumbers(value)}
          checked={includeNumbers}
          className="my-2"
        />
        <CheckBox
          text="Include Symbols"
          tag="symbols"
          onChange={(value) => setIncludeSymbols(value)}
          checked={includeSymbols}
          className="my-2"
        />
        <StrengthMeter password={password} className="my-4" />
        <GenerateButton onClick={generatePassword} className="my-4" />
      </Options>
    </div>
  );
};

export default App;
