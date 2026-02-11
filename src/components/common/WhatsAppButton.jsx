import React from 'react';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  // Podés usar la URL de la imagen oficial de WhatsApp o el logo que prefieras
  const whatsappIcon = "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg";

  return (
    <motion.a
      href="https://wa.me/3816261965" // Reemplazá con el número real de la empresa
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[100] flex items-center justify-center"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      {/* Efecto de Pulso (Círculos verdes que se expanden) */}
      <motion.div
        className="absolute inset-0 bg-[#25D366] rounded-full"
        animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Contenedor de la Imagen */}
      <div className="relative z-10 bg-[#25D366] p-4 rounded-full shadow-2xl flex items-center justify-center">
        <img 
          src={whatsappIcon} 
          alt="WhatsApp" 
          className="w-8 h-8 md:w-10 md:h-10"
        />
      </div>
    </motion.a>
  );
};

export default WhatsAppButton;