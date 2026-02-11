import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Store, TrendingUp, Users, Smartphone, DollarSign, 
  Shield, Zap, BarChart3, Clock, Settings, CheckCircle,
  MapPin, Phone, Mail 
} from 'lucide-react';

const MerchantLanding = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '', direccion: '', telefono: '', email: '', rubro: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const beneficios = [
    { icon: TrendingUp, title: "Aumentá tus Ventas", desc: "Llega a más clientes con opciones de pago flexible" },
    { icon: Users, title: "Más Clientes", desc: "Atrae a los miles de usuarios de Tarjeta Titanio" },
    { icon: DollarSign, title: "Mejores Ingresos", desc: "Incrementa tu facturación mensual significativamente" },
    { icon: Shield, title: "Seguridad", desc: "Transacciones 100% seguras y certificadas" },
  ];

  const servicios = [
    { icon: Smartphone, title: "Posnet Virtual", desc: "Acepta pagos desde tu celular en cualquier lugar" },
    { icon: Clock, title: "Liquidación Rápida", desc: "Recibe tu dinero en 24 a 48 horas" },
    { icon: BarChart3, title: "Reportes", desc: "Controla todas tus ventas en tiempo real" },
    { icon: Settings, title: "Soporte Técnico", desc: "Equipo disponible las 24 horas" },
    { icon: Zap, title: "Integración", desc: "Instalación rápida y sin complicaciones" },
    { icon: Store, title: "Planes a Medida", desc: "Elige el plan que mejor se adapte a tu rubro" },
  ];

  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-20 bg-[#F1F5F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* 1. HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-black text-[#00529B] mb-4 uppercase tracking-tighter italic">Portal Comercios</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">Asociá tu negocio a la red Titanio y multiplicá tus ventas hoy mismo.</p>
        </motion.div>

        {/* 2. BENEFICIOS PRINCIPALES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {beneficios.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl p-8 shadow-xl border border-white text-center group transition-all"
            >
              <div className="w-16 h-16 bg-[#64BC26]/10 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-[#64BC26] transition-colors">
                <item.icon className="text-[#64BC26] group-hover:text-white transition-colors" size={32} />
              </div>
              <h3 className="text-xl font-black text-[#00529B] mb-3">{item.title}</h3>
              <p className="text-sm text-slate-500 font-bold leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* 3. GRID: FORMULARIO + INFO POSNET */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-24">
          
          {/* LADO IZQUIERDO: Catálogo de Posnets */}
          <div className="space-y-8">
            <h2 className="text-3xl font-black text-[#00529B] uppercase italic tracking-tighter">Nuestra Tecnología</h2>
            <div className="grid grid-cols-1 gap-4">
              {[
                { name: "Posnet Standard", img: "📱", feature: "Conexión Wi-Fi / 4G" },
                { name: "Posnet Pro Touch", img: "⚡", feature: "Pantalla HD + Batería 12h" }
              ].map((pos, i) => (
                <div key={i} className="flex items-center gap-6 p-6 bg-white rounded-3xl shadow-lg border border-white">
                  <span className="text-5xl">{pos.img}</span>
                  <div>
                    <h4 className="text-xl font-black text-[#00529B]">{pos.name}</h4>
                    <p className="text-[#64BC26] font-bold">{pos.feature}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Imagen decorativa de comercio o terminal */}
            <div className="bg-[#00529B] rounded-[2.5rem] p-8 text-white shadow-2xl relative overflow-hidden">
               <div className="relative z-10">
                 <h3 className="text-2xl font-black mb-2">Liquidación en 48hs</h3>
                 <p className="opacity-80 font-medium">Contá con tu dinero de forma rápida y segura en tu cuenta bancaria.</p>
               </div>
               <DollarSign className="absolute -right-10 -bottom-10 opacity-10" size={200} />
            </div>
          </div>

          {/* LADO DERECHO: Formulario de Adhesión */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} className="relative">
            {submitted ? (
              <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="bg-white rounded-[2.5rem] p-12 shadow-2xl text-center border-4 border-[#64BC26]/20">
                <CheckCircle size={80} className="text-[#64BC26] mx-auto mb-6" />
                <h2 className="text-3xl font-black text-[#00529B] mb-4 tracking-tight">¡SOLICITUD RECIBIDA!</h2>
                <p className="text-slate-600 font-bold mb-8 text-lg">Un asesor de comercios te contactará en las próximas 24 horas.</p>
                <button onClick={() => setSubmitted(false)} className="bg-[#00529B] text-white px-12 py-4 rounded-2xl font-black hover:scale-105 transition-transform">VOLVER</button>
              </motion.div>
            ) : (
              <div className="bg-white/95 backdrop-blur-md rounded-[2.5rem] shadow-2xl p-8 md:p-12 border border-white relative">
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-[#64BC26] rounded-2xl flex items-center justify-center shadow-xl rotate-12">
                  <Zap className="text-white" size={32} />
                </div>
                <h2 className="text-3xl font-black text-[#00529B] mb-2 uppercase italic">Asociá tu Comercio</h2>
                <p className="text-slate-500 font-bold mb-8 uppercase text-xs tracking-widest">Completá los datos y nos contactamos</p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input type="text" name="nombre" required placeholder="Nombre del Comercio" className="w-full p-4 bg-slate-100 border-2 border-transparent focus:border-[#64BC26] rounded-2xl outline-none font-bold" />
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" name="direccion" required placeholder="Dirección" className="w-full p-4 bg-slate-100 border-2 border-transparent focus:border-[#64BC26] rounded-2xl outline-none font-bold" />
                    <input type="tel" name="telefono" required placeholder="Teléfono" className="w-full p-4 bg-slate-100 border-2 border-transparent focus:border-[#64BC26] rounded-2xl outline-none font-bold" />
                  </div>
                  <input type="email" name="email" required placeholder="Email de contacto" className="w-full p-4 bg-slate-100 border-2 border-transparent focus:border-[#64BC26] rounded-2xl outline-none font-bold" />
                  <select name="rubro" required className="w-full p-4 bg-slate-100 border-2 border-transparent focus:border-[#64BC26] rounded-2xl outline-none font-bold text-slate-500">
                    <option value="">Seleccioná Rubro</option>
                    <option value="Gastronomia">Gastronomía</option>
                    <option value="Indumentaria">Indumentaria</option>
                    <option value="Servicios">Servicios</option>
                    <option value="Otros">Otros</option>
                  </select>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#64BC26] text-white py-5 rounded-2xl font-black text-xl shadow-lg shadow-green-600/30 mt-4 uppercase tracking-tighter"
                  >
                    Enviar Solicitud
                  </motion.button>
                </form>
              </div>
            )}
          </motion.div>
        </div>

        {/* 4. SERVICIOS ADICIONALES (Grilla inferior) */}
        <div className="mt-20 pt-20 border-t-2 border-slate-200">
          <h2 className="text-3xl font-black text-[#00529B] mb-12 uppercase text-center italic tracking-tighter">Servicios para tu Negocio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicios.map((s, i) => (
              <div key={i} className="flex gap-5 items-start p-4 hover:bg-white rounded-3xl transition-all group">
                <div className="bg-white p-4 rounded-2xl shadow-md group-hover:bg-[#00529B] transition-colors">
                  <s.icon className="text-[#00529B] group-hover:text-white transition-colors" size={24} />
                </div>
                <div>
                  <h4 className="font-black text-[#00529B] text-lg uppercase tracking-tighter">{s.title}</h4>
                  <p className="text-sm text-slate-500 font-medium">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default MerchantLanding;