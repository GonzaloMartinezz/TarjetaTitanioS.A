import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { CreditCard as CreditCardIcon, CheckCircle2, Wallet, Gift, Zap, Shield, TrendingUp, Clock, Users, Headphones, ArrowRight, Phone, Store, MessageCircle } from 'lucide-react';

// Componente de Card para opciones rápidas
const QuickOptionCard = ({ title, description, icon: Icon, onClick }) => (
  <motion.div
    whileHover={{ y: -8, scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-slate-100 cursor-pointer overflow-hidden relative"
  >
    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#00A8E8]/20 to-transparent rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform" />
    <div className="relative z-10">
      <div className="w-12 h-12 bg-gradient-to-br from-[#00529B]/20 to-[#64BC26]/20 rounded-xl flex items-center justify-center mb-4 group-hover:from-[#00529B]/40 group-hover:to-[#64BC26]/40 transition-all">
        <Icon className="text-[#00529B] group-hover:text-[#00A8E8] transition-colors" size={24} />
      </div>
      <h3 className="text-xl font-black text-[#00529B] mb-2 group-hover:text-[#00A8E8] transition-colors">{title}</h3>
      <p className="text-slate-600 mb-4 group-hover:text-slate-700 transition-colors font-medium text-sm">{description}</p>
      <div className="flex items-center text-[#00A8E8] font-bold group-hover:translate-x-1 transition-transform">
        Más info <ArrowRight size={16} className="ml-2" />
      </div>
    </div>
  </motion.div>
);

const ClientDashboard = () => {
  const [submitted, setSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ dni: '', nombre: '', apellido: '', celular: '', email: '', numeroCuenta: '', tipoTrabajo: '', publico: '' });

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
    if (!formData.dni || !formData.nombre || !formData.apellido || !formData.celular || !formData.email || !formData.numeroCuenta || !formData.tipoTrabajo || !formData.publico) {
      alert('Por favor completa todos los campos');
      return;
    }
    setShowModal(true);
    setSubmitted(true);
    setTimeout(() => {
      setShowModal(false);
      setSubmitted(false);
      setFormData({ dni: '', nombre: '', apellido: '', celular: '', email: '', numeroCuenta: '', tipoTrabajo: '', publico: '' });
    }, 5000);
  };

  const navigate = useNavigate();

  const goToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    navigate(`/clientes#${id}`);
  };

  const handleQuickClick = (title) => {
    const t = (title || '').toLowerCase();
    if (t.includes('tarjeta') || t.includes('titanio')) return goToSection('tarjeta');
    if (t.includes('argen') || t.includes('argencard')) return goToSection('argencard');
    // Rutas simuladas o reales según tu router
    if (t.includes('estado')) return navigate('/clientes/estado');
    if (t.includes('pagar') || t.includes('deuda')) return navigate('/clientes/pagos');
    if (t.includes('cambiar') || t.includes('límite')) return navigate('/clientes/limite');
    if (t.includes('reportar') || t.includes('problemas') || t.includes('fraude')) return navigate('/clientes/reportes');
    if (t.includes('promoc') || t.includes('promoción')) return navigate('/clientes/promociones');
    if (t.includes('adicional') || t.includes('tarjetas')) return navigate('/clientes/tarjetas');
    if (t.includes('adelanto')) return navigate('/clientes/adelantos');
    if (t.includes('contacto') || t.includes('atención') || t.includes('contacto directo')) return navigate('/contacto');

    navigate('/clientes');
  };

  const opccionesRapidas = [
    { title: "Mi Estado de Cuenta", description: "Revisá tu saldo, movimientos y estados de tu tarjeta", icon: TrendingUp },
    { title: "Pagar mi Deuda", description: "Realizá pagos en línea de forma segura e inmediata", icon: CreditCardIcon },
    { title: "Cambiar Límite de Crédito", description: "Solicitá un ajuste en tu límite de crédito disponible", icon: Gift },
    { title: "Reportar Problemas", description: "Notificá fraude, transacciones no autorizadas o daños", icon: Shield },
    { title: "Consulta de Promociones", description: "Consulta promociones y beneficios vigentes exclusivos", icon: Wallet },
    { title: "Gestión de Tarjetas Adicionales", description: "Administrá, bloquea o solicita tarjetas adicionales", icon: Users },
    { title: "Solicitar Adelanto", description: "Solicita adelantos de efectivo con tasas especiales", icon: Zap },
    { title: "Contacto Directo", description: "Conecta con nuestro equipo de atención al cliente", icon: Headphones }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F1F5F9]">
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 pt-28 md:pt-40 pb-12">
        
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="h-16 w-3 bg-gradient-to-b from-[#00529B] to-[#00A8E8] rounded-full" />
            <h1 className="text-4xl md:text-6xl font-black text-[#00529B] uppercase tracking-tighter italic">Portal Cliente</h1>
            <div className="h-16 w-3 bg-gradient-to-b from-[#00A8E8] to-[#64BC26] rounded-full" />
          </div>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium">Accedé a todos tus servicios y beneficios exclusivos en un solo lugar</p>
        </motion.div>

        {/* Opciones Rápidas */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-20">
          <h2 className="text-2xl md:text-3xl font-black text-[#00529B] mb-10 text-center uppercase">¿Qué necesitás?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {opccionesRapidas.map((opcion, i) => (
              <QuickOptionCard key={i} title={opcion.title} description={opcion.description} icon={opcion.icon} onClick={() => handleQuickClick(opcion.title)} />
            ))}
          </div>
        </motion.div>

        {/* ================= SECCIÓN TARJETA TITANIO (AZUL) ================= */}
        <div id="tarjeta" className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-24">
          {/* Tarjeta 3D */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
            <div onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{ perspective: "1200px" }} className="relative flex justify-center lg:justify-start pt-6 group">
              <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className="relative w-full max-w-120">
                <div className="absolute inset-4 bg-[#00529B]/40 blur-[70px] rounded-3xl -z-10 group-hover:bg-[#00A8E8]/50 transition-colors duration-500" />
                <img src="/titanio-card.svg" alt="Tarjeta Titanio" className="w-full h-auto object-contain drop-shadow-2xl rounded-3xl group-hover:drop-shadow-[0_40px_40px_rgba(0,168,232,0.4)] transition-all duration-300" style={{ transform: "translateZ(100px)" }} />
                <div className="absolute inset-0 z-20 rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 bg-gradient-to-tr from-transparent via-white/50 to-transparent pointer-events-none" />
              </motion.div>
            </div>
          </motion.div>

          {/* Información Titanio */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} className="space-y-10">
            <div>
              <h3 className="text-4xl font-black text-[#00529B] mb-6 uppercase tracking-tight">Tarjeta Titanio</h3>
              <p className="text-slate-600 font-bold text-xl">Tu tarjeta de crédito premium con los mejores beneficios del mercado.</p>
            </div>
            <div className="space-y-5">
              {[
                { icon: "💳", title: "Cuotas sin Interés", desc: "En todas tus compras" },
                { icon: "🎁", title: "Cashback Automático", desc: "Recupera dinero en tus compras habituales" },
                { icon: "🏆", title: "Beneficios Exclusivos", desc: "Acceso a promociones y ofertas especiales" },
                { icon: "🛡️", title: "Seguro de Compra", desc: "Protección en todas tus transacciones" },
                { icon: "📱", title: "Mi Titanio Digital", desc: "Controla tu tarjeta desde tu celular" },
                { icon: "⏰", title: "Atención 24/7", desc: "Soporte al cliente permanente" }
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }} className="flex gap-5 p-6 bg-white rounded-2xl border-2 border-slate-200 hover:border-[#00A8E8] hover:shadow-xl transition-all group/item">
                  <span className="text-3xl">{item.icon}</span>
                  <div className="flex-1">
                    <p className="font-black text-[#00529B] text-lg group-hover/item:text-[#00A8E8] transition-colors">{item.title}</p>
                    <p className="text-base text-slate-600 font-bold mt-1">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* FORMULARIO TITANIO (Color Azul) */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto mb-20">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-[#00A8E8]/25 via-[#64BC26]/15 to-transparent rounded-full blur-3xl"></div>
          <div className="relative bg-gradient-to-br from-white via-[#F0F8FF] to-[#F0FFF0] backdrop-blur-xl rounded-3xl md:rounded-[2.5rem] shadow-2xl p-6 md:p-14 border-2 border-white/50 overflow-hidden">
            {/* Esquinas decorativas azules */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#00A8E8]/10 rounded-full -mr-20 -mt-20 blur-2xl" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#64BC26]/10 rounded-full -ml-20 -mb-20 blur-2xl" />
            
            <div className="mb-12 text-center relative z-10">
              <div className="bg-gradient-to-br from-[#00529B]/20 to-[#64BC26]/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <CreditCardIcon className="text-[#00529B]" size={32} />
              </div>
              <h2 className="text-2xl md:text-4xl font-black text-[#00529B] mb-3 tracking-tight">Solicitá tu Tarjeta Ahora</h2>
              <p className="text-slate-600 font-bold text-lg">Completá el formulario y recibirás aprobación al instante</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              {/* Inputs Titanio (Azules) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-bold text-[#00529B] uppercase tracking-widest ml-2 block mb-3">DNI</label>
                  <input type="text" name="dni" required placeholder="Ej: 30444555" value={formData.dni} onChange={handleChange} className="w-full p-4 bg-white/80 backdrop-blur-sm border-2 border-slate-300/50 focus:border-[#00A8E8] focus:bg-white focus:shadow-lg focus:shadow-blue-200/50 rounded-2xl transition-all outline-none font-bold" />
                </div>
                <div>
                  <label className="text-xs font-bold text-[#00529B] uppercase tracking-widest ml-2 block mb-3">Nombre</label>
                  <input type="text" name="nombre" required placeholder="Tu nombre" value={formData.nombre} onChange={handleChange} className="w-full p-4 bg-white/80 backdrop-blur-sm border-2 border-slate-300/50 focus:border-[#00A8E8] focus:bg-white focus:shadow-lg focus:shadow-blue-200/50 rounded-2xl transition-all outline-none font-bold" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-bold text-[#00529B] uppercase tracking-widest ml-2 block mb-3">Apellido</label>
                  <input type="text" name="apellido" required placeholder="Tu apellido" value={formData.apellido} onChange={handleChange} className="w-full p-4 bg-white/80 backdrop-blur-sm border-2 border-slate-300/50 focus:border-[#00A8E8] focus:bg-white focus:shadow-lg focus:shadow-blue-200/50 rounded-2xl transition-all outline-none font-bold" />
                </div>
                <div>
                  <label className="text-xs font-bold text-[#00529B] uppercase tracking-widest ml-2 block mb-3">Celular</label>
                  <input type="tel" name="celular" required placeholder="381 000 0000" value={formData.celular} onChange={handleChange} className="w-full p-4 bg-white/80 backdrop-blur-sm border-2 border-slate-300/50 focus:border-[#00A8E8] focus:bg-white focus:shadow-lg focus:shadow-blue-200/50 rounded-2xl transition-all outline-none font-bold" />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-[#00529B] uppercase tracking-widest ml-2 block mb-3">Email</label>
                <input type="email" name="email" required placeholder="correo@ejemplo.com" value={formData.email} onChange={handleChange} className="w-full p-4 bg-white/80 backdrop-blur-sm border-2 border-slate-300/50 focus:border-[#00A8E8] focus:bg-white focus:shadow-lg focus:shadow-blue-200/50 rounded-2xl transition-all outline-none font-bold" />
              </div>

              <div>
                <label className="text-xs font-bold text-[#00529B] uppercase tracking-widest ml-2 block mb-3">Número de Cuenta</label>
                <input type="text" name="numeroCuenta" required placeholder="Tu número de cuenta" value={formData.numeroCuenta} onChange={handleChange} className="w-full p-4 bg-white/80 backdrop-blur-sm border-2 border-slate-300/50 focus:border-[#00A8E8] focus:bg-white focus:shadow-lg focus:shadow-blue-200/50 rounded-2xl transition-all outline-none font-bold" />
              </div>

              <div>
                <label className="text-sm font-black text-[#00529B] block mb-3">Tipo de Trabajo *</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['Público', 'Privado', 'Monotributista', 'Jubilado'].map(opt => (
                    <label key={opt} className={`p-4 rounded-xl cursor-pointer border-2 transition-all font-bold text-center text-sm ${formData.tipoTrabajo === opt ? 'bg-gradient-to-r from-[#00529B] to-[#00A8E8] border-[#00529B] text-white shadow-lg shadow-blue-500/30' : 'bg-white/70 border-slate-300/50 text-slate-700 hover:border-[#00A8E8] hover:bg-white'}`}>
                      <input type="radio" name="tipoTrabajo" value={opt} className="hidden" onChange={handleChange} />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-black text-[#00529B] block mb-3">Categoría de Cliente *</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['Particular', 'Empresario', 'Asesor Fiscal', 'Otro'].map(opt => (
                    <label key={opt} className={`p-4 rounded-xl cursor-pointer border-2 transition-all font-bold text-center text-sm ${formData.publico === opt ? 'bg-gradient-to-r from-[#64BC26] to-[#7ed321] border-[#64BC26] text-white shadow-lg shadow-green-500/30' : 'bg-white/70 border-slate-300/50 text-slate-700 hover:border-[#64BC26] hover:bg-white'}`}>
                      <input type="radio" name="publico" value={opt} className="hidden" onChange={handleChange} />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>

              {/* Botón Titanio (Azul) */}
              <motion.button 
                whileHover={{ scale: 1.02 }} 
                whileTap={{ scale: 0.98 }} 
                type="submit" 
                className="w-full bg-gradient-to-r from-[#00529B] via-[#00A8E8] to-[#00529B] text-white py-6 rounded-2xl font-black text-lg shadow-xl shadow-blue-300 hover:shadow-2xl transition-all mt-8"
              >
                {submitted ? '✓ ¡SOLICITUD ENVIADA!' : 'SOLICITAR TITANIO'}
              </motion.button>
              <p className="text-xs text-center text-slate-500 font-medium">Los campos marcados con * son obligatorios</p>
            </form>
          </div>
        </motion.div>

        {/* ================= SECCIÓN ARGENCARD (ROJO) ================= */}
        <motion.div id="argencard" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="mt-20 pt-12">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#FF4444] mb-6 uppercase tracking-tighter text-center drop-shadow-lg">ArgenCard</h2>
          <p className="text-center text-slate-700 mb-20 text-xl font-bold">Tu solución de crédito flexible y segura con cobertura nacional</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Imagen Argencard 3D */}
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}>
              <div onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{ perspective: "1200px" }} className="relative flex justify-center lg:justify-start pt-6 group">
                <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className="relative w-full max-w-120">
                  <div className="absolute inset-4 bg-gradient-to-br from-[#FF6666]/40 to-[#00A8E8]/20 blur-[70px] rounded-3xl -z-10 group-hover:from-[#FF4444]/50 group-hover:to-[#00A8E8]/40 transition-colors duration-500" />
                  <img src="/argencard.svg" alt="ArgenCard" className="w-full h-auto object-contain drop-shadow-2xl rounded-3xl group-hover:drop-shadow-[0_60px_60px_rgba(255,68,68,0.3)] transition-all duration-300" style={{ transform: "translateZ(100px)" }} />
                  <div className="absolute inset-0 z-20 rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 bg-gradient-to-b from-transparent via-white/50 to-transparent pointer-events-none" />
                </motion.div>
              </div>
            </motion.div>

            {/* Información Argencard */}
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-10">
              <div>
                <h3 className="text-4xl font-black text-[#FF4444] mb-6 uppercase tracking-tight"> Tarjeta ArgenCard</h3>
                <p className="text-slate-700 font-bold text-xl">Tu tarjeta nacional con respaldo total. Acceso a compras digitales y beneficios exclusivos.</p>
              </div>
              <div className="space-y-4">
                {[
                  { icon: "🛒", title: "Compras Online", desc: "Realiza compras desde cualquier lugar" },
                  { icon: "💰", title: "En 1 pago Sin interes", desc: "Podes financiarlo en tu resumen de cuenta" },
                  { icon: "🌎", title: "Accesible fuera de la provincia", desc: "Usala en todo el país" },
                  { icon: "🎁", title: "Promociones Vigentes", desc: "Ofertas exclusivas en comercios afiliados" },
                  { icon: "📱", title: "Control Digital", desc: "Consulta tu estado de cuenta 24/7" }
                ].map((benefit, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="flex items-center gap-4 p-5 bg-white rounded-2xl border-2 border-slate-200 hover:border-[#FF4444] hover:shadow-lg transition-all group/item">
                    <span className="text-3xl">{benefit.icon}</span>
                    <div className="flex-1">
                      <p className="font-black text-[#FF4444] text-lg group-hover/item:text-red-600 transition-colors">{benefit.title}</p>
                      <p className="text-sm text-slate-600 font-bold mt-1">{benefit.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              {/* Botón Argencard (Rojo) */}
              <motion.button 
                onClick={() => goToSection('argencard')} 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }} 
                className="w-full bg-gradient-to-r from-[#FF4444] to-[#FF6666] text-white py-6 rounded-2xl font-black text-lg shadow-xl shadow-red-400/50 hover:shadow-2xl hover:bg-[#D32F2F] transition-all mt-10 mb-8"
              >
                SOLICITAR ARGENCARD AHORA
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Modal de Éxito */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: showModal ? 1 : 0 }} transition={{ duration: 0.3 }} className={`fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 ${showModal ? 'pointer-events-auto' : 'pointer-events-none'}`}>
          <motion.div initial={{ scale: 0.8, y: 20 }} animate={{ scale: showModal ? 1 : 0.8, y: showModal ? 0 : 20 }} className="bg-white rounded-3xl p-12 max-w-md w-full mx-4 shadow-2xl text-center">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: "spring" }} className="w-20 h-20 bg-gradient-to-br from-[#64BC26] to-[#7ed321] rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={48} className="text-white" strokeWidth={2} />
            </motion.div>
            <h3 className="text-3xl font-black text-[#00529B] mb-3">¡Solicitud Enviada!</h3>
            <p className="text-slate-600 mb-4 font-medium">Gracias por tu solicitud. Nos comunicaremos contigo pronto.</p>
            <div className="bg-blue-50 border-2 border-[#00A8E8] rounded-2xl p-4 mb-6">
              <p className="text-sm font-bold text-slate-700">📧 Email: {formData.email}</p>
              <p className="text-sm font-bold text-slate-700 mt-2">📱 Celular: {formData.celular}</p>
            </div>
            <p className="text-sm text-slate-500 italic">Redirigiéndote en segundos...</p>
          </motion.div>
        </motion.div>
      </div>

      {/* FOOTER */}
      <footer className="bg-[#002855] text-white py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
          <div>
            <Phone className="mx-auto mb-4 text-[#00A8E8]" size={32} />
            <p className="text-2xl font-black text-[#64BC26]">0810 888 7528</p>
          </div>
          <div>
            <Store className="mx-auto mb-4 text-[#64BC26]" size={32} />
            <p className="text-2xl font-black text-[#64BC26]">0810 555 1111</p>
          </div>
          <div>
            <MessageCircle className="mx-auto mb-4 text-[#00A8E8]" size={32} />
            <p className="text-2xl font-black text-[#64BC26]">381 626 1965</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ClientDashboard;