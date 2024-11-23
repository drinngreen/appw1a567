import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle } from 'lucide-react';

interface StatusMessageProps {
  status: 'success' | 'error';
}

export function StatusMessage({ status }: StatusMessageProps) {
  const isSuccess = status === 'success';
  const Icon = isSuccess ? CheckCircle : XCircle;
  const message = isSuccess
    ? 'Messaggio inviato con successo!'
    : 'Errore nell\'invio del messaggio. Riprova più tardi.';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex items-center gap-2 ${isSuccess ? 'text-green-600' : 'text-red-600'}`}
    >
      <Icon className="w-5 h-5" />
      <span>{message}</span>
    </motion.div>
  );
}