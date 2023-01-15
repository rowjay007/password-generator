import tw from 'twin.macro';
import { useState } from 'react';

interface OptionsProps {
  length: number;
  setLength: (length: number) => void;
  uppLetters: boolean;
  setUppLetters: (uppLetters: boolean) => void;
  lowLetters: boolean;
  setLowLetters: (lowLetters: boolean) => void;
  numbers: boolean;
  setNumbers: (numbers: boolean) => void;
  symbols: boolean;
  setSymbols: (symbols: boolean) => void;
  onClick: () => void;
}

const Options: React.FC<OptionsProps> = ({
  length,
  setLength,
  uppLetters,
  setUppLetters,
  lowLetters,
  setLowLetters,
  numbers,
  setNumbers,
  symbols,
  setSymbols,
  onClick,
}) => {
  return (
    <div css={[tw`my-8`]}>
      <label css={[tw`block text-gray-700 font-medium`]}>
        Length
      </label>
      <input
        type="range"
        css={[tw`w-full`]}
        min={8}
        max={32}
        value={length}
        onChange={(e) => setLength(+e.target.value)}
      />
      <div css={[tw`my-4`]}>
        <label css={[tw`block text-gray-700 font-medium`]}>
          Characters
        </label>
        <div css={[tw`flex flex-wrap`]}>
          <div css={[tw`w-1/2 sm:w-1/4`]}>
            <input
              type="checkbox"
              id="uppLetters"
              checked={uppLetters}
              onChange={(e) => setUppLetters(e.target.checked)}
            />
            <label css={[tw`ml-2`]} htmlFor="uppLetters">
              Uppercase letters
            </label>
          </div>
          <div css={[tw`w-1/2 sm:w-1/4`]}>
            <input
              type="checkbox"
              id="lowLetters"
              checked{lowLetters}
              onChange={(e) => setLowLetters(e.target.checked)}
            />
            <label css={[tw`ml-2`]} htmlFor="lowLetters">
              Lowercase letters
            </label>
          </div>
          <div css={[tw`w-1/2 sm:w-1/4`]}>
            <input
              type="checkbox"
              id="numbers"
              checked={numbers}
              onChange={(e) => setNumbers(e.target.checked)}
            />
            <label css={[tw`ml-2`]} htmlFor="numbers">
              Numbers
            </label>
          </div>
          <div css={[tw`w-1/2 sm:w-1/4`]}>
            <input
              type="checkbox"
              id="symbols"
              checked={symbols}
              onChange={(e) => setSymbols(e.target.checked)}
            />
            <label css={[tw`ml-2`]} htmlFor="symbols">
              Symbols
            </label>
          </div>
        </div>
      </div>
      <button css={[tw`bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg`]} onClick={onClick}>
        Generate
      </button>
    </div>
  );
};

