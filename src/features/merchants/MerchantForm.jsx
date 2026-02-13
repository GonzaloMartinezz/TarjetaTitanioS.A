import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
  Store, TrendingUp, Users, DollarSign, 
  Shield, Zap, BarChart3, Clock, Settings, CheckCircle,
  Phone, ArrowRight, MessageCircle, CheckCircle2, Percent, FileText, Headphones
} from 'lucide-react';

// Componente Card para opciones rápidas (Versión Verde para Comercios)
const QuickOptionCard = ({ title, description, icon: Icon, onClick }) => (
  <motion.div
    whileHover={{ y: -8, scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-slate-100 cursor-pointer overflow-hidden relative"
  >
    <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-br from-[#64BC26]/20 to-transparent rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform" />
    <div className="relative z-10">
      <div className="w-12 h-12 bg-linear-to-br from-[#64BC26]/20 to-[#E0F200]/20 rounded-xl flex items-center justify-center mb-4 group-hover:from-[#64BC26]/40 group-hover:to-[#E0F200]/40 transition-all">
        <Icon className="text-[#64BC26] group-hover:text-[#4e941d] transition-colors" size={24} />
      </div>
      <h3 className="text-xl font-black text-[#64BC26] mb-2 group-hover:text-[#4e941d] transition-colors">{title}</h3>
      <p className="text-slate-600 mb-4 group-hover:text-slate-700 transition-colors font-medium text-sm">{description}</p>
      <div className="flex items-center text-[#64BC26] font-bold group-hover:translate-x-1 transition-transform">
        Más info <ArrowRight size={16} className="ml-2" />
      </div>
    </div>
  </motion.div>
);

const MerchantLanding = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '', direccion: '', telefono: '', email: '', rubro: '', numeroCuenta: '',
  });

  // --- LÓGICA DE EFECTO 3D SUAVE ---
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-6deg", "6deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const opcionesComercio = [
    { icon: Store, title: "Quiero vender con Titanio", desc: "Adherí tu comercio y empezá a operar hoy mismo", action: () => scrollToSection('formulario') },
    { icon: Percent, title: "Mis Planes Vigentes", desc: "Consultá las tasas, coeficientes y promociones actuales", action: () => scrollToSection('planes') },
    { icon: FileText, title: "Liquidaciones", desc: "Cronograma de pagos y detalle de tus ventas", action: () => scrollToSection('liquidaciones') },
    { icon: Headphones, title: "Atención al Comercio", desc: "Canales exclusivos de soporte para vos", action: () => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }) },
  ];

  const servicios = [
    { icon: Zap, title: "Alta Inmediata", desc: "Empezá a vender en 24hs" },
    { icon: Clock, title: "Pagos Rápidos", desc: "Liquidaciones en 48 horas hábiles" },
    { icon: BarChart3, title: "Panel de Control", desc: "Gestioná tus ventas online" },
    { icon: Shield, title: "Seguridad Total", desc: "Transacciones protegidas" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F1F5F9]">
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 pt-28 md:pt-40 pb-12">
        
        {/* 1. HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="h-16 w-3 bg-linear-to-b from-[#64BC26] to-[#E0F200] rounded-full" />
            <h1 className="text-4xl md:text-6xl font-black text-[#64BC26] uppercase tracking-tighter italic">Portal Comercios</h1>
            <div className="h-16 w-3 bg-linear-to-b from-[#E0F200] to-[#64BC26] rounded-full" />
          </div>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium">Asociá tu negocio a la red Titanio y multiplicá tus ventas hoy mismo.</p>
        </motion.div>

        {/* 2. OPCIONES RÁPIDAS (Grid Principal) */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-20">
          <h2 className="text-2xl md:text-3xl font-black text-[#64BC26] mb-10 text-center uppercase">Gestión Comercial</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {opcionesComercio.map((item, i) => (
              <QuickOptionCard 
                key={i} 
                title={item.title} 
                description={item.desc} 
                icon={item.icon}
                onClick={item.action}
              />
            ))}
          </div>
        </motion.div>

        {/* 3. SECCIÓN PLANES Y LIQUIDACIONES (Reemplaza Posnet) */}
        <div id="planes" className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-24">
          {/* Imagen 3D */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
            <div onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{ perspective: "1200px" }} className="relative flex justify-center lg:justify-start pt-6 group">
              <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className="relative w-full max-w-120">
                <div className="absolute inset-4 bg-[#64BC26]/40 blur-[70px] rounded-3xl -z-10 group-hover:bg-[#E0F200]/50 transition-colors duration-500" />
                {/* Placeholder visual para Planes */}
                <div className="w-full h-80 bg-linear-to-br from-white to-slate-50 rounded-3xl flex flex-col items-center justify-center shadow-2xl border-2 border-[#64BC26]/30" style={{ transform: "translateZ(50px)" }}>
                    <TrendingUp size={100} className="text-[#64BC26] mb-4" />
                    <div className="text-[#00529B] font-black text-3xl tracking-tighter uppercase italic">Unite a Titanio</div>
                    <div className="text-slate-500 font-bold text-lg">crece tu negocio con nosotros</div>
                </div>
                <div className="absolute inset-0 z-20 rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 bg-linear-to-tr from-transparent via-white/50 to-transparent pointer-events-none" />
              </motion.div>
            </div>
          </motion.div>

          {/* Información */}
          <motion.div id="liquidaciones" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} className="space-y-10">
            <div>
              <h3 className="text-4xl font-black text-[#64BC26] mb-6 uppercase tracking-tight">Planes y Liquidaciones</h3>
              <p className="text-slate-600 font-bold text-xl">Operá con las mejores condiciones del mercado y recibí tu dinero rápido.</p>
            </div>
            <div className="space-y-5">
              {[
                { icon: "", title: "Acreditación Rápida", desc: "Acreditación rápida en tu cuenta bancaria" },
                { icon: "📉", title: "Aranceles Competitivos", desc: "Las comisiones más bajas del mercado" },
                { icon: "💳", title: "Planes en Cuotas", desc: "Ofrecé Plan 1, 3, 6 cuotas" },
                { icon: "🎁", title: "Promociones Exclusivas", desc: "Días de descuento a cargo de Titanio" }
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }} className="flex gap-5 p-6 bg-white rounded-2xl border-2 border-slate-200 hover:border-[#64BC26] hover:shadow-lg transition-all group/item">
                  <span className="text-3xl">{item.icon}</span>
                  <div className="flex-1">
                    <p className="font-black text-[#64BC26] text-lg group-hover/item:text-[#4e941d] transition-colors">{item.title}</p>
                    <p className="text-base text-slate-600 font-bold mt-1">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 4. FORMULARIO DE ADHESIÓN (Estilo Verde) */}
        <motion.div id="formulario" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto mb-20">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-linear-to-br from-[#64BC26]/25 via-[#00A8E8]/15 to-transparent rounded-full blur-3xl"></div>
          <div className="relative bg-linear-to-br from-white via-[#F0F8FF] to-[#F0FFF0] backdrop-blur-xl rounded-4xl md:rounded-[2.5rem] shadow-2xl p-6 md:p-14 border-2 border-white/50 overflow-hidden">
             {/* Decorative corners */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#64BC26]/10 rounded-full -mr-20 -mt-20 blur-2xl" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#E0F200]/10 rounded-full -ml-20 -mb-20 blur-2xl" />
            
            {submitted ? (
              <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="text-center py-10">
                <CheckCircle size={80} className="text-[#64BC26] mx-auto mb-6" />
                <h2 className="text-3xl font-black text-[#64BC26] mb-4 tracking-tight">¡SOLICITUD RECIBIDA!</h2>
                <p className="text-slate-600 font-bold mb-8 text-lg">Un asesor de comercios te contactará en las próximas 24 horas.</p>
                <button onClick={() => setSubmitted(false)} className="bg-[#64BC26] text-white px-12 py-4 rounded-2xl font-black hover:scale-105 transition-transform">VOLVER</button>
              </motion.div>
            ) : (
              <>
                <div className="mb-12 text-center relative z-10">
                  <div className="bg-linear-to-br from-[#64BC26]/20 to-[#E0F200]/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                    <Store className="text-[#64BC26]" size={32} />
                  </div>
                  <h2 className="text-2xl md:text-4xl font-black text-[#64BC26] mb-3 tracking-tight">Quiero Vender con Titanio</h2>
                  <p className="text-slate-600 font-bold text-lg">Completá los datos y un asesor te visitará</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div>
                    <label className="text-xs font-bold text-[#64BC26] uppercase tracking-widest ml-2 block mb-3">Nombre del Comercio</label>
                    <input type="text" name="nombre" required placeholder="Ej: Mi Negocio" value={formData.nombre} onChange={handleChange} className="w-full p-4 bg-white/80 backdrop-blur-sm border-2 border-slate-300/50 focus:border-[#64BC26] focus:bg-white focus:shadow-lg focus:shadow-green-200/50 rounded-2xl transition-all outline-none font-bold" />
                  </div>
                  
                  <div>
                    <label className="text-xs font-bold text-[#64BC26] uppercase tracking-widest ml-2 block mb-3">Número de Cuenta</label>
                    <input type="text" name="numeroCuenta" required placeholder="Tu número de cuenta" value={formData.numeroCuenta} onChange={handleChange} className="w-full p-4 bg-white/80 backdrop-blur-sm border-2 border-slate-300/50 focus:border-[#64BC26] focus:bg-white focus:shadow-lg focus:shadow-green-200/50 rounded-2xl transition-all outline-none font-bold" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-xs font-bold text-[#64BC26] uppercase tracking-widest ml-2 block mb-3">Dirección</label>
                      <input type="text" name="direccion" required placeholder="Dirección del local" value={formData.direccion} onChange={handleChange} className="w-full p-4 bg-white/80 backdrop-blur-sm border-2 border-slate-300/50 focus:border-[#64BC26] focus:bg-white focus:shadow-lg focus:shadow-green-200/50 rounded-2xl transition-all outline-none font-bold" />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-[#64BC26] uppercase tracking-widest ml-2 block mb-3">Teléfono</label>
                      <input type="tel" name="telefono" required placeholder="381 000 0000" value={formData.telefono} onChange={handleChange} className="w-full p-4 bg-white/80 backdrop-blur-sm border-2 border-slate-300/50 focus:border-[#64BC26] focus:bg-white focus:shadow-lg focus:shadow-green-200/50 rounded-2xl transition-all outline-none font-bold" />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-[#64BC26] uppercase tracking-widest ml-2 block mb-3">Email</label>
                    <input type="email" name="email" required placeholder="contacto@comercio.com" value={formData.email} onChange={handleChange} className="w-full p-4 bg-white/80 backdrop-blur-sm border-2 border-slate-300/50 focus:border-[#64BC26] focus:bg-white focus:shadow-lg focus:shadow-green-200/50 rounded-2xl transition-all outline-none font-bold" />
                  </div>

                  <div>
                    <label className="text-sm font-black text-[#64BC26] block mb-3">Rubro *</label>
                    <select name="rubro" required value={formData.rubro} onChange={handleChange} className="w-full p-4 bg-white/80 backdrop-blur-sm border-2 border-slate-300/50 focus:border-[#64BC26] focus:bg-white focus:shadow-lg focus:shadow-green-200/50 rounded-2xl transition-all outline-none font-bold text-slate-600">
                      <option value="">Seleccioná Rubro</option>
                      <option value="Gastronomia">Gastronomía</option>
                      <option value="Indumentaria">Indumentaria</option>
                      <option value="Servicios">Servicios</option>
                      <option value="Otros">Otros</option>
                    </select>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-linear-to-r from-[#64BC26] via-[#7ed321] to-[#64BC26] text-white py-6 rounded-2xl font-black text-lg shadow-xl shadow-green-300 hover:shadow-2xl transition-all mt-8 uppercase tracking-tighter"
                  >
                    Enviar Solicitud
                  </motion.button>
                </form>
              </>
            )}
          </div>
        </motion.div>

        {/* 5. SERVICIOS ADICIONALES (Grid inferior) */}
        <div className="mt-20 pt-20 border-t-2 border-slate-200">
          <h2 className="text-3xl font-black text-[#64BC26] mb-12 uppercase text-center italic tracking-tighter">Servicios para tu Negocio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicios.map((s, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 hover:bg-green-50 hover:shadow-lg transition-allrounded-3xl transition-all group">
                <div className="bg-white p-4 rounded-2xl shadow-md group-hover:bg-[#64BC26] transition-colors mb-4">
                  <s.icon className="text-[#64BC26] group-hover:text-white transition-colors" size={32} />
                </div>
                <div>
                  <h4 className="font-black text-[#64BC26] text-lg uppercase tracking-tighter mb-2">{s.title}</h4>
                  <p className="text-sm text-slate-500 font-medium">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
      
      {/* FOOTER */}
      <footer className="bg-[#002855] text-white py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
          <div><Phone className="mx-auto mb-4 text-[#00A8E8]" size={32} /><p className="text-2xl font-black text-[#64BC26]">0810 888 7528</p></div>
          <div><Store className="mx-auto mb-4 text-[#64BC26]" size={32} /><p className="text-2xl font-black text-[#64BC26]">0810 555 1111</p></div>
          <div><MessageCircle className="mx-auto mb-4 text-[#00A8E8]" size={32} /><p className="text-2xl font-black text-[#64BC26]">381 626 1965</p></div>
        </div>
      </footer>
    </div>
  );
};

export default MerchantLanding;
