import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 col-span-2"
          >
            <h3 className="text-3xl font-display font-bold">Zoli Web</h3>
            <p className="text-gray-300 text-lg leading-relaxed font-light">
              Trasformiamo le tue idee in realtà digitali di successo
            </p>
            <a 
              href="https://zoliweb.cloud" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center space-x-2 text-amber-500 hover:text-amber-400 transition-colors"
            >
              <span className="font-display font-bold">ZoliWeb Agency</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Servizi */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="font-display font-bold text-xl mb-6">Servizi</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-300 hover:text-amber-500 transition-colors">
                  App Native
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-amber-500 transition-colors">
                  Progressive Web App
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-amber-500 transition-colors">
                  Siti Web
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-amber-500 transition-colors">
                  Gestionali
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contatti */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h4 className="font-display font-bold text-xl mb-6">Contatti</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5" />
                <span>info@zoliqua.com</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5" />
                <span>011 074 1112</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5" />
                <span>Corso Unione Sovietica 612/15/B<br />Torino</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col space-y-4"
        >
          <p className="text-gray-400 text-sm text-center">
            © 2024 Zoli Web. Tutti i diritti riservati.
          </p>
          <p className="text-gray-400 text-sm text-center">
            ZOLIWEB, ZOLIQUA e ZOLIAPP sono marchi di proprietà di Drinn Green s.c.s
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">
              Termini
            </a>
            <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">
              Cookie
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}