import tw from "twin.macro";

interface CheckBoxProps {
  id: string;
  label: string;
  isChecked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckBox: React.FC<CheckBoxProps> = ({
  id,
  label,
  isChecked,
  onChange,
}) => {
  return (
    <div css={[tw`flex items-center`]}>
      <input type="checkbox" id={id} checked={isChecked} onChange={onChange} />
      <label css={[tw`ml-2`]} htmlFor={id}>
        {label}
      </label>
    </div>
  );
};
