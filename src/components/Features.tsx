import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sparkles, Lock, Code, Smartphone, Gift, Zap } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: "Builder Intuitivo",
    description: "Crea app professionali con la nostra interfaccia drag-and-drop"
  },
  {
    icon: Lock,
    title: "Piattaforma Sicura",
    description: "I tuoi dati sono protetti con sicurezza di livello enterprise"
  },
  {
    icon: Code,
    title: "Sviluppo Personalizzato",
    description: "Massima flessibilità per personalizzare le funzionalità della tua app"
  },
  {
    icon: Smartphone,
    title: "Multi-piattaforma",
    description: "Sviluppa per iOS e Android con un unico strumento"
  },
  {
    icon: Gift,
    title: "Prova Gratuita",
    description: "7 giorni di accesso completo a tutte le funzionalità"
  },
  {
    icon: Zap,
    title: "Supporto Pubblicazione",
    description: "Ti aiutiamo a pubblicare la tua app sugli store"
  }
];

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="funzionalita" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif mb-4">Perché Scegliere ZoliApp?</h2>
          <p className="text-xl text-gray-600">Tutto ciò di cui hai bisogno per creare app di successo</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-amber-100 rounded-full">
                <feature.icon className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}