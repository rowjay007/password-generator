import React from "react";
import Display from "../components/display/Display";
import Slider from "../components/UI/Slider";
import CheckBox from "../components/UI/CheckBox";
import StrengthMeter from "../components/strengthMeter/StrengthMeter";
import GenerateButton from "../components/UI/GenerateButton";
function App() {
  return (
    <div>
      <h1>Password Generator</h1>
      <Display />
      <div>
        <Slider />
        <CheckBox text="Include Uppercase Letters" tag="uppLetters" />
        <CheckBox text="Include Lowercase Letters" tag="lowLetters" />
        <CheckBox text="Include Numbers" tag="numbers" />
        <CheckBox text="Include Symbols" tag="symbols" />
        <StrengthMeter />
        <GenerateButton />
      </div>
    </div>
  );
}

export default App;
