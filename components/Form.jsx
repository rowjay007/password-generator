import React from "react";
import { useForm } from "react-hook-form";

export const FormProps = { onGenerate: (length, characterTypes) => {} };

function Form({ onGenerate }) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    onGenerate(data.length, data.characterTypes);
  };

  return (
    <form className="w-full max-w-xs" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="length"
          >
            Password length
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="length"
            id="length"
            type="number"
            placeholder="8"
            ref={register()}
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="characterTypes"
          >
            Character types
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="characterTypes"
              id="characterTypes"
              ref={register()}
            >
              <option>All</option>
              <option>Uppercase letters</option>
              <option>Lowercase letters</option>
              <option>Numbers</option>
              <option>Special characters</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <button className="btn-submit" type="submit">
        Submit Form
      </button>
    </form>
  );
}
export default Form;
