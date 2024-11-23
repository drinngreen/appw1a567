import React from 'react';
import { FormData } from './types';

interface FormFieldProps {
  id: string;
  label: string;
  type: string;
  name: keyof FormData;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
}

export function FormField({
  id,
  label,
  type,
  name,
  value,
  onChange,
  required = false
}: FormFieldProps) {
  const isTextArea = type === 'textarea';
  const Component = isTextArea ? 'textarea' : 'input';

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium">
        {label}
      </label>
      <Component
        id={id}
        name={name}
        type={isTextArea ? undefined : type}
        value={value}
        onChange={onChange}
        required={required}
        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
        {...(isTextArea ? { rows: 4 } : {})}
      />
    </div>
  );
}