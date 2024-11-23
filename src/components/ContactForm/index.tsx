import React, { useRef, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { FormField } from './FormField';
import { SubmitButton } from './SubmitButton';
import { useContactForm } from './useContactForm';
import { FORM_FIELDS } from './config';

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const { formData, isSubmitting, handleSubmit, handleChange } = useContactForm();

  return (
    <section id="contatti" className="py-24 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8">
              <h2 className="text-3xl font-display font-bold text-center mb-2">Contattaci</h2>
              <p className="text-gray-600 text-center mb-8">Siamo qui per aiutarti a realizzare la tua app</p>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {FORM_FIELDS.map((field) => (
                  <FormField
                    key={field.id}
                    {...field}
                    value={formData[field.name]}
                    onChange={handleChange}
                  />
                ))}

                <FormField
                  id="message"
                  label="Messaggio"
                  type="textarea"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />

                <SubmitButton isSubmitting={isSubmitting} />
              </form>
            </div>
          </div>
        </div>
      </div>
      <Toaster position="top-center" />
    </section>
  );
}