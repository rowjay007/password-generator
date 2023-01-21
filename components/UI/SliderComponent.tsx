interface IProps {
  value: number;
  max: number;
  min: number;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const SliderComponent = ({ value, max }: IProps) => {
  return (
    <div className="relative rounded-full h-8 cursor-pointer focus:outline-none">
      <div className="bg-very-dark-grey h-full w-full">
        <div
          className="bg-neon-green h-full w-full"
          style={{ width: `${(value / +max) * 100 + "%"}` }}
        />
      </div>
      <div className="absolute top-50 transform-y-1/2 rounded-full h-16 w-16 bg-almost-white border-2 border-almost-white"></div>
    </div>
  );
};
