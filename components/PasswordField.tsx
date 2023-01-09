import React, { useState } from "react";

interface PasswordFieldProps {
  password: string;
}

const PasswordField: React.FC<PasswordFieldProps> = ({ password }) => {
  const [hidden, setHidden] = useState(true);

  return (
    <div className="flex items-center justify-center mt-4">
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        type={hidden ? "password" : "text"}
        value={password}
        readOnly
      />
      <button
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full"
        type="button"
        onClick={() => setHidden(!hidden)}
      >
        {hidden ? "Show" : "Hide"}
      </button>
    </div>
  );
};
