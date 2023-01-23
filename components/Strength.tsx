import { useEffect, useState } from "react";

export type StrengthType = 0 | 1 | 2 | 3 | 4;
const availableStrengths: StrengthType[] = [1, 2, 3, 4];
type StrengthProps = {
  strength: StrengthType;
  setStrength: React.Dispatch<React.SetStateAction<StrengthType>>;
  setCharacterLength: React.Dispatch<React.SetStateAction<number>>;
  setOptions: React.Dispatch<
    React.SetStateAction<{
      upperCase: boolean;
      lowerCase: boolean;
      numbers: boolean;
      symbols: boolean;
    }>
  >;
};

function Strength({
  strength,
  setStrength,
  setCharacterLength,
  setOptions,
}: StrengthProps) {
  const [tempStrength, setTempStrength] = useState<StrengthType>(strength);
  useEffect(() => {
    setTempStrength(strength);
  }, [strength]);
  
  const handleOnClick = (level: StrengthType) => {
    setStrength(level);
    setOptions({
      lowerCase: level !== 1,
      numbers: true,
      symbols: level >= 3,
      upperCase: level >= 3,
    });
    setCharacterLength(level === 1 ? 30 : level === 2 ? 40 : 60);
  };

  return (
    <div className="bg-[#18171F] md:w-[29.75rem] w-[19.43rem] h-[4rem] md:h-[4.5rem] flex justify-between items-center px-[1rem] py-[1rem] md:px-8 md:py-[1.5rem] my-[2rem]">
      <div className="text-[#817D92] text-[1.125rem] leading-[1.485rem] uppercase">
        Strength
      </div>
      <div className="uppercase text-[#E6E5EA] flex justify-center items-center ">
        <div className="mx-[1rem] text[1.5rem] leading-[2rem] ">
          {strengthCharacteristics(tempStrength)?.title}
        </div>
        {availableStrengths.map((level) => (
          <button
            key={level}
            onClick={() => handleOnClick(level)}
            onMouseEnter={() => setTempStrength(level)}
            onMouseLeave={() => setTempStrength(strength)}
          >
            <Rectangle
              color={
                tempStrength >= level
                  ? strengthCharacteristics(tempStrength)?.color
                  : undefined
              }
            />
          </button>
        ))}
      </div>
    </div>
  );
}
export default Strength;

function strengthCharacteristics(strength: StrengthType) {
  switch (strength) {
    case 1:
      return { title: "Too Weak!", color: "#F64A4A" };
    case 2:
      return { title: "weak", color: "#FB7C58" };

    case 3:
      return { title: "medium", color: "#F8CD65" };
    case 4:
      return { title: "strong", color: "#A4FFAF" };
  }
}

type RectangleProps = { color?: string };
function Rectangle({ color }: RectangleProps) {
  const styles = color
    ? { backgroundColor: color }
    : { borderColor: "E6E5EA", borderWidth: "2px" };
  return <div className="w-[1rem] h-[1rem]" style={styles} />;
}