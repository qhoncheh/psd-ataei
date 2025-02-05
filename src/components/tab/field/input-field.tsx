import React from 'react';

interface InputFieldProps {
  placeholder: string;
}

const InputField: React.FC<InputFieldProps> = ({ placeholder }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};

export default InputField;