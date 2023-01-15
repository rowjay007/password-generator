import tw from "twin.macro";

interface SliderProps {
  length: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Slider: React.FC<SliderProps> = ({ length, onChange }) => {
  return (
    <input
      type="range"
      css={[tw`w-full`]}
      min={8}
      max={32}
      value={length}
      onChange={onChange}
    />
  );
};
