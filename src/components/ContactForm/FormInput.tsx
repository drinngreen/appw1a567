import React from 'react';

interface FormInputProps {
  label: string;
  id: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  readOnly?: boolean;
}

export function FormInput({
  label,
  id,
  name,
  type = 'text',
  value,
  onChange,
  required = false,
  readOnly = false
}: FormInputProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        readOnly={readOnly}
        className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent ${
          readOnly ? 'bg-gray-50 text-gray-500 cursor-not-allowed' : ''
        }`}
      />
    </div>
  );
}