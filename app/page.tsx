
"use client"
import { useState, useEffect } from "react";
import { useStore } from "zustand";
import { generatePassword } from "./utils/password";
import {
  MainContainer,
  Display,
  Options,
  Slider,
  CheckBox,
  StrengthMeter,
  GenerateButton,
} from "../components";

const Index = () => {
  const [length, setLength] = useState(12);
  const [uppLetters, setUppLetters] = useState(true);
  const [lowLetters, setLowLetters] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(false);
  const [password, setPassword] = useStore((state) => state.password);

  const handleLengthChange = (e: any) => {
    setLength(e.target.value);
  };

  const handleCheckBoxChange = (e: any) => {
    if (e.target.name === "uppLetters") {
      setUppLetters(!uppLetters);
    } else if (e.target.name === "lowLetters") {
      setLowLetters(!lowLetters);
    } else if (e.target.name === "numbers") {
      setNumbers(!numbers);
    } else if (e.target.name === "symbols") {
      setSymbols(!symbols);
    }
  };

  const handleGenerate = () => {
    setPassword(
      generatePassword(length, uppLetters, lowLetters, numbers, symbols)
    );
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(password);
  };

  return (
    <MainContainer>
      <h1>Password Generator</h1>
      <Display password={password} onClick={handleCopyToClipboard} />
      <Options>
        <Slider value={length} onChange={handleLengthChange} />
        <CheckBox
          text="Include Uppercase Letters"
          tag="uppLetters"
          checked={uppLetters}
          onChange={handleCheckBoxChange}
        />
        <CheckBox
          text="Include Lowercase Letters"
          tag="lowLetters"
          checked={lowLetters}
          onChange={handleCheckBoxChange}
        />
        <CheckBox
          text="Include Numbers"
          tag="numbers"
          checked={numbers}
          onChange={handleCheckBoxChange}
        />
        <CheckBox
          text="Include Symbols"
          tag="symbols"
          checked={symbols}
          onChange={handleCheckBoxChange}
        />
        <StrengthMeter password={password} />
        <GenerateButton onClick={handleGenerate} />
      </Options>
    </MainContainer>
  );
};

export default Index;
