import * as React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ContactForm() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://server.fillout.com/embed/v1/';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src="https://server.fillout.com/embed/v1/"]');
      if (existingScript && document.body.contains(existingScript)) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <section id="form" className="py-24 bg-gradient-to-b from-white to-amber-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8">
              <h2 className="text-3xl font-display font-bold text-center mb-2">Contattaci</h2>
              <p className="text-gray-600 text-center mb-8">Siamo qui per aiutarti a realizzare la tua app</p>

              <div
                style={{ width: '100%', minHeight: '500px' }}
                data-fillout-id="98UHWLrzKXus"
                data-fillout-embed-type="standard"
                data-fillout-inherit-parameters
                data-fillout-dynamic-resize
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}