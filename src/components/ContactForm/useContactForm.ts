import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { FormData } from './types';
import { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY, INITIAL_FORM_DATA } from './config';

export function useContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.from_name,
        from_email: formData.from_email,
        reply_to: formData.from_email,
        to_email: formData.to_email,
        phone: formData.phone,
        message: formData.message,
        service: formData.service
      };

      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      if (result.status === 200) {
        toast.success('Messaggio inviato con successo! Ti ricontatteremo presto.');
        setFormData(INITIAL_FORM_DATA);
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      toast.error('Si è verificato un errore. Per favore riprova più tardi.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    isSubmitting,
    handleSubmit,
    handleChange
  };
}