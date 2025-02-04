import React from 'react';
import InputField from '../input-field/input-field';

interface TabFormProps {
  inputs: string[]; 
}

const TabForm: React.FC<TabFormProps> = ({ inputs }) => {
  return (
    <form className="space-y-4">
      {inputs.map((input, index) => (
        <InputField key={index} placeholder={input} />
      ))}
    </form>
  );
};

export default TabForm;