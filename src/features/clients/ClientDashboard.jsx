import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { CreditCard as CreditCardIcon, CheckCircle2, Wallet, Gift, Zap, Shield, TrendingUp, Clock, Users, Headphones } from 'lucide-react';

const ClientDashboard = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ dni: '', nombre: '', celular: '', email: '', empleo: '' });

  // --- LÓGICA DE EFECTO 3D ---
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Suavizado del movimiento
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  // Transformación de coordenadas a rotación (Inclinación de 15 grados)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  // ---------------------------

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 bg-[#F1F5F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="my-12 border-t-2 border-slate-300/50"
        />
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#00529B] mb-3 sm:mb-4 uppercase tracking-tighter italic">Portal Clientes</h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium">Solicitá tu tarjeta Titanio hoy y comenzá a disfrutar de beneficios exclusivos</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          
          {/* LADO IZQUIERDO: Imagen con Efecto 3D Increíble */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div 
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ perspective: "1000px" }} // Profundidad de la escena
              className="relative flex justify-center lg:justify-start pt-6 group"
            >
              <motion.div
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="relative w-full max-w-[480px]"
              >
                {/* Sombra dinámica que reacciona al movimiento */}
                <div className="absolute inset-4 bg-[#00529B]/30 blur-[60px] rounded-3xl -z-10 group-hover:bg-[#00A8E8]/40 transition-colors duration-500" />
                
                {/* Imagen de la Tarjeta con relieve */}
                <img 
                  src="/public/titanio-card.svg" 
                  alt="Tarjeta Titanio" 
                  className="w-full h-auto object-contain drop-shadow-2xl rounded-[1.5rem]"
                  style={{ transform: "translateZ(75px)" }} // Saca la tarjeta hacia afuera
                />

                {/* Efecto de Brillo (Glint) que aparece al pasar el mouse */}
                <div className="absolute inset-0 z-20 rounded-[1.5rem] opacity-0 group-hover:opacity-40 transition-opacity duration-300 bg-linear-to-tr from-transparent via-white/40 to-transparent pointer-events-none" />
              </motion.div>
            </div>

            {/* Lista de Beneficios */}
            <div className="space-y-6">
              <h3 className="text-2xl font-black text-[#00529B] uppercase tracking-tight">¿Por qué elegir Titanio?</h3>
              <div className="grid grid-cols-1 gap-3">
                {["Cuotas sin interés en compras", "Cashback en comercios adheridos", "Acceso a promociones exclusivas", "Sin costo anual de tarjeta", "Mi Titanio digital disponible"].map((benefit, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-white/60 border border-white rounded-2xl shadow-sm hover:shadow-md transition-all hover:bg-white"
                  >
                    <div className="bg-[#64BC26]/10 p-1.5 rounded-full">
                      <CheckCircle2 className="text-[#64BC26] shrink-0" size={20} strokeWidth={3} />
                    </div>
                    <span className="font-bold text-slate-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* LADO DERECHO: Formulario (Mismo estilo anterior) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#00A8E8]/10 rounded-full blur-3xl" />
            <div className="relative bg-white/95 backdrop-blur-md rounded-[2.5rem] shadow-2xl p-8 md:p-12 border border-white">
              <div className="mb-8">
                <div className="bg-[#00529B]/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <CreditCardIcon className="text-[#00529B]" size={32} />
                </div>
                <h2 className="text-3xl font-black text-[#00529B] mb-2 tracking-tight">Solicitá tu Titanio</h2>
                <p className="text-slate-500 font-medium">Completá el formulario y recibí tu tarjeta en días</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" name="dni" required placeholder="DNI" className="w-full p-4 bg-slate-100 border-2 border-transparent focus:border-[#00A8E8] rounded-2xl transition-all outline-none font-bold" />
                  <input type="text" name="nombre" required placeholder="Nombre Completo" className="w-full p-4 bg-slate-100 border-2 border-transparent focus:border-[#00A8E8] rounded-2xl transition-all outline-none font-bold" />
                </div>
                <input type="tel" name="celular" required placeholder="Celular" className="w-full p-4 bg-slate-100 border-2 border-transparent focus:border-[#00A8E8] rounded-2xl transition-all outline-none font-bold" />
                <input type="email" name="email" required placeholder="Email" className="w-full p-4 bg-slate-100 border-2 border-transparent focus:border-[#00A8E8] rounded-2xl transition-all outline-none font-bold" />
                
                <div className="grid grid-cols-2 gap-2">
                    {['Público', 'Privado', 'Monotributo', 'Jubilado'].map(opt => (
                      <label key={opt} className={`flex items-center justify-center p-3 rounded-xl cursor-pointer border-2 transition-all font-bold text-sm ${formData.empleo === opt ? 'bg-[#00529B] border-[#00529B] text-white' : 'bg-slate-50 border-slate-200 text-slate-500'}`}>
                        <input type="radio" name="empleo" value={opt} className="hidden" onChange={handleChange} />
                        {opt}
                      </label>
                    ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-linear-to-r from-[#00529B] to-[#00A8E8] text-white py-5 rounded-[1.5rem] font-black text-lg shadow-xl"
                >
                  {submitted ? '✓ ¡ENVIADO!' : 'SOLICITAR AHORA'}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Servicios Adicionales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 pt-20 border-t-2 border-slate-300/50"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#00529B] mb-4 uppercase tracking-tighter text-center">Servicios Adicionales</h2>
          <p className="text-center text-slate-600 mb-12 text-lg">Accedé a beneficios exclusivos con tu Tarjeta Titanio</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Wallet, title: "Adelantos en Efectivo", desc: "Obtén efectivo rápido y seguro cuando lo necesites" },
              { icon: Gift, title: "Descuentos Exclusivos", desc: "Beneficiáte con promociones en miles de comercios" },
              { icon: Zap, title: "Débitos Automáticos", desc: "Pagá tus gastos de forma automática y segura" },
              { icon: Shield, title: "Tarjetas Adicionales", desc: "Agrega familiares sin costo adicional" },
              { icon: TrendingUp, title: "Mi Titanio Digital", desc: "Consulta tu saldo desde cualquier dispositivo" },
              { icon: Clock, title: "Atención 24/7", desc: "Comunicate con nosotros en todo momento" },
              { icon: Users, title: "Titanio Eventos", desc: "Acceso exclusivo a shows y eventos especiales" },
              { icon: Headphones, title: "Soporte Premium", desc: "Asistencia personalizada para tu tranquilidad" }
            ].map((item, i) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all border border-slate-100 cursor-pointer"
                >
                  <div className="w-14 h-14 bg-linear-to-br from-[#00529B]/10 to-[#00A8E8]/10 rounded-xl flex items-center justify-center mb-4 group-hover:from-[#64BC26]/20 group-hover:to-[#00A8E8]/20 transition-all">
                    <IconComponent className="text-[#00529B] group-hover:text-[#00A8E8] transition-colors" size={28} />
                  </div>
                  <h3 className="text-lg font-black text-[#00529B] mb-2 group-hover:text-[#00A8E8] transition-colors">{item.title}</h3>
                  <p className="text-sm text-slate-600 group-hover:text-slate-700 transition-colors">{item.desc}</p>
                </motion.div>
                
              );
            })}
          </div>
        </motion.div>
        

        {/* Argencard Section */}
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 pt-20 border-t-2 border-slate-300/50"
        >
        </motion.div>

              <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1B5E9E] mb-2 uppercase tracking-tighter text-center">Argencard</h2>
          <p className="text-center text-slate-600 mb-12 text-lg">Tu complemento financiero perfecto</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex justify-center lg:justify-end pt-6"
            >
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotateZ: [-1, 1, -1]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="w-full max-w-[480px] drop-shadow-[0_35px_35px_rgba(27,94,158,0.25)]"
              >
                <img 
                  src="/argencard.svg" 
                  alt="Tarjeta ArgenCard" 
                  className="w-full h-auto object-contain"
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h3 className="text-2xl sm:text-3xl font-black text-[#1B5E9E] mb-6 uppercase">ArgenCard</h3>
              <div className="space-y-4">
                {["Acceso a crédito flexible", "Tasas competitivas del mercado", "Promociones en compras", "Servicio al cliente 24/7", "Consulta digital tu estado de cuenta"].map((benefit, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-white/60 border border-white rounded-2xl shadow-sm hover:shadow-md transition-all hover:bg-white"
                  >
                    <div className="bg-[#1B5E9E]/10 p-1.5 rounded-full">
                      <CheckCircle2 className="text-[#1B5E9E] shrink-0" size={20} strokeWidth={3} />
                    </div>
                    <span className="font-bold text-slate-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
  
    </div>
  );
};

export default ClientDashboard;