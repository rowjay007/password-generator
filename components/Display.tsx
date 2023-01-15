import tw from "twin.macro";

interface DisplayProps {
  password: string;
  onClick: () => void;
}

const Display: React.FC<DisplayProps> = ({ password, onClick }) => {
  return (
    <div css={[tw`bg-white p-4 rounded-lg text-center`]}>
      <p css={[tw`text-lg`]}>{password}</p>
      <button
        css={[tw`bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg`]}
        onClick={onClick}
      >
        Copy to clipboard
      </button>
    </div>
  );
};
