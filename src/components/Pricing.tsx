import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, Info } from 'lucide-react';

export default function Pricing() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="prezzi" className="py-24 bg-gradient-to-b from-amber-50 to-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif mb-4">Prezzo Trasparente</h2>
          <p className="text-xl text-gray-600">Un unico piano completo per tutte le tue esigenze</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8"
          >
            <div className="relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-amber-600 text-white px-4 py-1 rounded-bl-lg">
                Offerta Limitata
              </div>
              <div className="p-8 text-center border-b">
                <h3 className="text-2xl font-semibold mb-2">Pacchetto Completo</h3>
                <div className="flex justify-center items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold">€399</span>
                  <span className="text-gray-500 line-through">€599</span>
                </div>
                <p className="text-gray-600 mb-6">Offerta valida fino a fine anno</p>
                <button className="w-full bg-amber-600 text-white py-3 rounded-full hover:bg-amber-700 transition">
                  Inizia Ora
                </button>
              </div>
              <div className="p-8">
                <h4 className="font-semibold mb-4">Include:</h4>
                <ul className="space-y-3">
                  {[
                    "Sviluppo app iOS e Android",
                    "7 giorni di prova gratuita",
                    "Supporto pubblicazione negli store",
                    "Personalizzazione illimitata",
                    "Aggiornamenti gratuiti",
                    "Supporto tecnico dedicato"
                  ].map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <Check className="w-5 h-5 text-amber-600 flex-shrink-0" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Additional Costs Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gray-50 rounded-xl p-6 border border-gray-200"
          >
            <div className="flex items-start gap-3 mb-4">
              <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
              <h4 className="font-semibold text-lg">Costi aggiuntivi per la distribuzione</h4>
            </div>
            <div className="space-y-4 text-gray-600">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h5 className="font-semibold mb-2">App Store (iOS)</h5>
                  <p>€99/anno</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h5 className="font-semibold mb-2">Google Play Store</h5>
                  <p>€25 una tantum</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h5 className="font-semibold mb-2">Setup App</h5>
                  <p>€59 una tantum</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Nota: I costi degli store sono richiesti direttamente da Apple e Google per la distribuzione delle app sulle rispettive piattaforme.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}