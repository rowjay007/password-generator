import React, { useState } from "react";

interface DarkModeSwitchProps {
  onToggle: (darkMode: boolean) => void;
}

const DarkModeSwitch: React.FC<DarkModeSwitchProps> = ({ onToggle }) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <div>
        <span className="rounded-md shadow-sm">
          <button
            type="button"
            className={`inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out`}
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "Dark" : "Light"}
          </button>
        </span>
      </div>
    </div>
  );
};


export default DarkModeSwitch;