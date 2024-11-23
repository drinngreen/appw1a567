import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <header className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-amber-50 via-white to-amber-50/30 overflow-hidden">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-amber-100"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div 
              className="text-2xl font-display font-bold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              ZoliApp
            </motion.div>
            <div className="hidden md:flex gap-8 items-center">
              <NavLink href="#funzionalita">Funzionalità</NavLink>
              <NavLink href="#prezzi">Prezzi</NavLink>
              <NavLink href="#contatti">Contatti</NavLink>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-6 py-2.5 rounded-full font-medium hover:bg-amber-900 transition-colors"
              >
                Prova Gratuita
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="max-w-6xl mx-auto px-4 pt-20">
        <div className="text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-amber-100 px-4 py-2 rounded-full mb-8"
          >
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span className="text-amber-800 font-medium">Novità: Piano unico a soli €399</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-display font-bold mb-8 bg-gradient-to-r from-gray-900 via-amber-950 to-amber-800 bg-clip-text text-transparent"
          >
            Crea la Tua App 
            <br />
            dei Sogni con ZoliApp
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto"
          >
            Sviluppo professionale di app a basso costo. 
            Trasforma le tue idee in realtà con il nostro builder intuitivo.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col md:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto bg-gradient-to-r from-amber-600 to-amber-700 text-white px-8 py-4 rounded-full text-lg font-medium hover:from-amber-700 hover:to-amber-800 transition-all shadow-lg hover:shadow-xl"
            >
              Inizia Ora
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto border-2 border-amber-600 text-amber-600 px-8 py-4 rounded-full text-lg font-medium hover:bg-amber-50 transition-all"
            >
              Guarda Demo
            </motion.button>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute top-1/4 -left-64 w-96 h-96 bg-amber-200 rounded-full blur-3xl opacity-30"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute bottom-1/4 -right-64 w-96 h-96 bg-amber-300 rounded-full blur-3xl opacity-30"
        />
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-amber-600" />
        </motion.div>
      </motion.div>
    </header>
  );
}

// Navigation Link Component
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      className="text-gray-600 hover:text-amber-600 transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
}