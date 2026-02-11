import React from 'react';
import { motion } from 'framer-motion';

const SolicitudForm = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-linear-to-br from-[#00529B] to-[#00A8E8] px-6">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto bg-white rounded-4xl shadow-2xl overflow-hidden"
      >
        <div className="bg-[#F8FAFC] p-12 text-center border-b border-slate-100">
          <h1 className="text-4xl font-black text-[#00529B] mb-4">GESTIÓN ONLINE</h1>
          <p className="text-slate-500 max-w-md mx-auto">Completá tus datos y un asesor se comunicará con vos a la brevedad.</p>
        </div>

        <form className="p-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <InputGroup label="DNI (Sin puntos)" placeholder="Ej: 30444555" />
          <InputGroup label="Nombre Completo" placeholder="Como figura en el DNI" />
          <InputGroup label="Celular" placeholder="381 000 0000" />
          <InputGroup label="Email" placeholder="correo@ejemplo.com" type="email" />
          
          <div className="md:col-span-2 space-y-4">
            <label className="text-xs font-bold text-[#00529B] uppercase tracking-widest ml-2">¿Cuál es tu situación laboral?</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['Público', 'Privado', 'Monotributista', 'Jubilado', 'Otros'].map(op => (
                <div key={op} className="flex items-center gap-3 bg-slate-50 p-4 rounded-2xl cursor-pointer hover:bg-slate-100 transition">
                  <input type="radio" name="empleo" className="accent-[#64BC26]" />
                  <span className="text-sm font-medium">{op}</span>
                </div>
              ))}
            </div>
          </div>

          <button className="md:col-span-2 bg-[#64BC26] text-white py-6 rounded-3xl font-black text-xl shadow-xl shadow-green-200 hover:scale-[1.02] active:scale-[0.98] transition-all">
            ENVIAR SOLICITUD
          </button>
        </form>
      </motion.div>
    </div>
  );
};

const InputGroup = ({ label, placeholder, type = "text" }) => (
  <div className="flex flex-col space-y-2">
    <label className="text-xs font-bold text-[#00529B] uppercase tracking-widest ml-2">{label}</label>
    <input 
      type={type}
      placeholder={placeholder}
      className="bg-slate-50 border-none rounded-3xl p-5 focus:ring-4 focus:ring-[#00A8E8]/10 transition-all outline-none"
    />
  </div>
);

export default SolicitudForm;