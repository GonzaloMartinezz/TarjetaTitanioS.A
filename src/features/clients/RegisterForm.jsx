// src/features/clients/RegisterForm.jsx
import React from 'react';

const RegisterForm = () => (
  <div className="max-w-2xl mx-auto bg-white rounded-[40px] shadow-2xl p-12 border border-slate-50">
    <h2 className="text-3xl font-black text-[#00529B] mb-2 text-center">¡SOLICITALA AHORA!</h2>
    <p className="text-center text-slate-400 mb-10">Es simple, rápido y 100% online.</p>
    
    <form className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input type="text" placeholder="DNI (Sin puntos)" className="w-full p-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-[#00A8E8] transition" />
        <input type="text" placeholder="Nombre y Apellido" className="w-full p-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-[#00A8E8] transition" />
      </div>
      <input type="email" placeholder="Correo electrónico" className="w-full p-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-[#00A8E8] transition" />
      <button className="w-full bg-[#64BC26] text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-green-200 hover:scale-[1.02] transition-transform">
        ENVIAR SOLICITUD
      </button>
    </form>
  </div>
);

export default RegisterForm;