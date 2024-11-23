import React from 'react';
import { Send } from 'lucide-react';

interface SubmitButtonProps {
  isSubmitting: boolean;
}

export function SubmitButton({ isSubmitting }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="w-full flex justify-center items-center px-6 py-3 rounded-md bg-amber-600 text-white hover:bg-amber-700 disabled:opacity-50"
    >
      {isSubmitting ? (
        <>
          <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2" />
          <span>Invio in corso...</span>
        </>
      ) : (
        <>
          Invia
          <Send className="ml-2 h-5 w-5" />
        </>
      )}
    </button>
  );
}