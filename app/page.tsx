import React from "react";
import Display from "../components/display/Display";
import Slider from "../components/UI/Slider";
import CheckBox from "../components/UI/CheckBox";
import StrengthMeter from "../components/strengthMeter/StrengthMeter";
import GenerateButton from "../components/UI/GenerateButton";
import MainContainer from "../components/MainContainer";
function App() {
  return (
    <MainContainer>
      <h1 className="text-lg md:text-xl text-center mb-5">
        Password Generator
      </h1>
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
    </MainContainer>
  );
}

export default App;
