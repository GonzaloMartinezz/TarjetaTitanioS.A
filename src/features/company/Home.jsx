import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainCarousel from '../../components/carousel/MainCarousel';
import { motion } from 'framer-motion';
import { MapPin, Tag, Phone, MessageCircle, Store, CheckCircle2, Wallet, TrendingUp, Users, ArrowRight, FileText, DollarSign, RefreshCw, AlertTriangle, LogIn, UserPlus, UserMinus, Shield, CreditCard } from 'lucide-react';

// Componente Card para opciones rápidas
const QuickOptionCard = ({ title, description, icon: Icon, onClick }) => (
  <motion.div
    whileHover={{ y: -8, scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-slate-100 cursor-pointer overflow-hidden relative h-full flex flex-col justify-between"
  >
    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#64BC26]/10 to-transparent rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform" />
    <div className="relative z-10">
      <div className="w-12 h-12 bg-gradient-to-br from-[#00529B]/10 to-[#64BC26]/10 rounded-xl flex items-center justify-center mb-4 group-hover:from-[#00529B]/20 group-hover:to-[#64BC26]/20 transition-all">
        <Icon className="text-[#00529B] group-hover:text-[#64BC26] transition-colors" size={24} />
      </div>
      <h3 className="text-lg font-black text-[#00529B] mb-2 group-hover:text-[#64BC26] transition-colors leading-tight">{title}</h3>
      <p className="text-slate-600 mb-4 group-hover:text-slate-700 transition-colors font-medium text-sm">{description}</p>
      <div className="flex items-center text-[#00A8E8] font-bold text-sm group-hover:translate-x-1 transition-transform mt-auto">
        Más info <ArrowRight size={16} className="ml-2" />
      </div>
    </div>
  </motion.div>
);

const Home = () => {
  const navigate = useNavigate();

  const irAlClientes = () => navigate('/clientes');
  const irAMiTitanio = () => navigate('/login');

  const opccionesRapidas = [
    { 
      title: "Quiero mi Titanio", 
      description: "Pedí tu tarjeta y accedé a beneficios", 
      icon: Wallet
    },
    { 
      title: "Quiero mi ArgenCard", 
      description: "Para comprar en todo el país", 
      icon: DollarSign 
    },
    { 
      title: "Adicionales para vos", 
      description: "Pedilas sin cargo extra", 
      icon: Users
    },
    { 
      title: "Activar Tarjeta", 
      description: "Habilitá tu plástico ahora", 
      icon: Wallet 
    },
    { 
      title: "Resumen de Cuenta", 
      description: "Descargá y visualizá tu resumen", 
      icon: FileText
    },
    { 
      title: "Paga tu Resumen", 
      description: "Pagá online de forma segura", 
      icon: CheckCircle2
    },
    { 
      title: "Mi Margen", 
      description: "Consultá tus límites disponibles", 
      icon: TrendingUp
    },
    { 
      title: "Saldos y Cierres", 
      description: "Conocé tus fechas de vencimiento", 
      icon: Users
    },
    { 
      title: "Recargas", 
      description: "Cargá crédito en tu celular", 
      icon: RefreshCw
    },
    { 
      title: "Mis Movimientos", 
      description: "Seguí tus compras en tiempo real", 
      icon: AlertTriangle
    }
  ];

  return (
    <div className="bg-[#F1F5F9] min-h-screen">
      <MainCarousel />

      {/* SECCIÓN PORTAL CLIENTES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 pb-16 md:pt-12 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-8 md:mb-12"
        >
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="h-16 w-3 bg-gradient-to-b from-[#64BC26] to-[#00529B] rounded-full" />
            <h2 className="text-4xl md:text-6xl font-black text-[#00529B] uppercase tracking-tighter italic">Portal Clientes</h2>
            <div className="h-16 w-3 bg-gradient-to-b from-[#00529B] to-[#64BC26] rounded-full" />
          </div>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium">Accedé a todos tus servicios y beneficios exclusivos en un solo lugar</p>
        </motion.div>

        {/* ACCESO LOGIN / REGISTRO */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl md:rounded-[2.5rem] shadow-2xl p-6 md:p-12 mb-12 md:mb-16 border border-slate-100 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#64BC26] via-[#00A8E8] to-[#00529B]" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-black text-[#00529B] mb-2">Mi Titanio</h3>
              <p className="text-slate-500 font-medium text-lg">Gestioná tu tarjeta de forma simple y segura.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
              <motion.button 
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                onClick={irAMiTitanio}
                className="flex-1 sm:flex-none bg-[#00529B] text-white px-8 py-4 rounded-xl font-black text-lg flex items-center justify-center gap-3 shadow-lg hover:bg-[#004280] transition-colors min-w-[200px]"
              >
                <LogIn size={24} /> INGRESAR
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                onClick={irAMiTitanio}
                className="flex-1 sm:flex-none bg-white text-[#00529B] border-2 border-[#00529B] px-8 py-4 rounded-xl font-black text-lg flex items-center justify-center gap-3 hover:bg-slate-50 transition-colors min-w-[200px]"
              >
                <UserPlus size={24} /> REGISTRARSE
              </motion.button>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {opccionesRapidas.map((opcion, i) => (
            <QuickOptionCard 
              key={i} 
              title={opcion.title} 
              description={opcion.description} 
              icon={opcion.icon}
              onClick={irAMiTitanio}
            />
          ))}
        </div>
      </section>

      {/* SECCIÓN ARGENCARD CON EFECTO 3D Y COLOR ROJO TRASLÚCIDO */}
      <section className="bg-gradient-to-br from-[#7f1d1d] via-[#b91c1c] to-[#7f1d1d] py-16 md:py-24 px-4 sm:px-6 relative overflow-hidden">
        {/* Decoración de fondo */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Texto Contenedor Traslúcido */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              className="bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-12 rounded-[2.5rem] shadow-2xl text-white"
            >
              <div className="flex items-center gap-4 mb-6">
                 <CreditCard size={48} className="text-white" />
                 <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic text-white drop-shadow-md">ArgenCard</h2>
              </div>
              
              <p className="text-xl opacity-90 mb-10 font-medium">La tarjeta nacional con el respaldo de Titanio. Comprá en cuotas en todo el país con beneficios exclusivos.</p>
              
              <div className="space-y-4 mb-12">
                {["Cobertura Nacional", "Planes de Financiación", "Seguridad Garantizada", "Tasas Competitivas"].map((li, i) => (
                  <div key={i} className="flex items-center gap-3 font-bold text-lg">
                    <CheckCircle2 size={24} className="text-white" strokeWidth={3} /> {li}
                  </div>
                ))}
              </div>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-white text-[#b91c1c] px-8 py-4 md:px-12 md:py-6 rounded-2xl font-black text-xl md:text-3xl shadow-xl hover:shadow-2xl transition-all uppercase tracking-tight" 
                onClick={irAlClientes}
              >
                SOLICITAR ARGENCARD
              </motion.button>
            </motion.div>

            {/* IMAGEN ARGENCARD (1.7.png) */}
            <div className="flex justify-center items-center h-full">
              <motion.img 
                src="/1.7.png" 
                alt="ArgenCard" 
                className="w-full max-w-lg drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN SUCURSALES Y PROMOS */}
      <section className="bg-white py-12 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Card Sucursales (Azul) */}
          <motion.div whileHover={{ y: -5 }} className="bg-slate-50 rounded-3xl md:rounded-[3rem] p-8 md:p-12 flex flex-col justify-center border border-slate-200 shadow-xl transition-all">
             <MapPin className="text-[#00529B] mb-6" size={56} />
             <h3 className="text-3xl font-black text-[#00529B] mb-4 uppercase italic tracking-tighter">Sucursales</h3>
             <p className="text-slate-500 mb-8 font-medium">Encontranos en San Miguel de Tucumán e Hiper Libertad.</p>
             <button 
               onClick={() => navigate('/empresa#mapa-sucursales')}
               className="bg-gradient-to-r from-[#00529B] to-[#00A8E8] text-white py-4 rounded-2xl font-black hover:shadow-lg hover:shadow-blue-200 transition-all"
             >
               VER MAPA
             </button>
          </motion.div>

          {/* Card Promociones (Verde) */}
          <motion.div whileHover={{ y: -5 }} className="bg-gradient-to-br from-[#64BC26] to-[#4e941d] rounded-3xl md:rounded-[3rem] p-8 md:p-12 text-white flex flex-col justify-center shadow-xl transition-all">
             <Tag className="mb-6" size={56} />
             <h3 className="text-3xl font-black mb-4 uppercase italic tracking-tighter">Promociones</h3>
             <p className="opacity-90 mb-8 font-medium">Aprovechá beneficios exclusivos todos los días.</p>
             <button 
               onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
               className="bg-white text-[#64BC26] py-4 rounded-2xl font-black hover:scale-105 transition shadow-lg"
             >
               CONOCER PROMOS
             </button>
          </motion.div>

        </div>
      </section>

      {/* INFORMACIÓN PARA USUARIOS FINANCIEROS - BANCO CENTRAL */}
      <section className="bg-gradient-to-br from-white via-slate-50 to-slate-100 py-12 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-10 md:mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-black text-[#002855] mb-4 uppercase tracking-tighter">Información para Usuarios Financieros</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">Accedé a información oficial regulada por el Banco Central de la República Argentina</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {/* Card BCRA Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-slate-200 overflow-hidden group"
            >
              <div className="bg-gradient-to-r from-[#002855] to-[#00529B] h-24 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#00A8E8]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="text-white font-black text-2xl relative z-10">BCRA</p>
              </div>
              <div className="p-8 flex flex-col h-full">
                <h3 className="text-2xl font-black text-[#002855] mb-4">Banco Central</h3>
                <p className="text-slate-600 mb-6 font-medium">Accedé a tasas, comisiones y advertencias del Banco Central de la República Argentina.</p>
                <a 
                  href="https://www.bcra.gob.ar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-center w-full bg-gradient-to-r from-[#002855] to-[#00529B] text-white py-3 rounded-xl font-black hover:shadow-lg transition-all group/btn"
                >
                  Ir al BCRA <span className="ml-2 group-hover/btn:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </motion.div>

            {/* Card Tasas y Cargos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-slate-200 overflow-hidden group"
            >
              <div className="bg-gradient-to-r from-[#64BC26] to-[#7ed321] h-24 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <svg className="w-12 h-12 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="p-8 flex flex-col h-full">
                <h3 className="text-2xl font-black text-[#64BC26] mb-4">Tasas y Cargos</h3>
                <p className="text-slate-600 mb-6 font-medium">Conocé todas las tasas de interés, comisiones y cargos vigentes de nuestros servicios.</p>
                <button className="mt-auto w-full bg-gradient-to-r from-[#64BC26] to-[#7ed321] text-white py-3 rounded-xl font-black hover:shadow-lg transition-all group/btn">
                  Ver Detalles <span className="ml-2 group-hover/btn:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </motion.div>

            {/* Card Botón de Baja */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-slate-200 overflow-hidden group"
            >
              <div className="bg-gradient-to-r from-[#FF4444] to-[#FF6B6B] h-24 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <UserMinus className="w-12 h-12 text-white relative z-10" />
              </div>
              <div className="p-8 flex flex-col h-full">
                <h3 className="text-2xl font-black text-[#FF4444] mb-4">Botón de Baja</h3>
                <p className="text-slate-600 mb-6 font-medium">Solicitá la baja de tu tarjeta o servicios de forma online, simple y rápida.</p>
                <button className="mt-auto w-full bg-gradient-to-r from-[#FF4444] to-[#FF6B6B] text-white py-3 rounded-xl font-black hover:shadow-lg transition-all group/btn">
                  Solicitar Baja <span className="ml-2 group-hover/btn:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Fila Inferior Centrada */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Card Contrato de Adhesión */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-slate-200 overflow-hidden group"
            >
              <div className="bg-gradient-to-r from-[#00529B] to-[#00A8E8] h-24 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <FileText className="w-12 h-12 text-white relative z-10" />
              </div>
              <div className="p-8 flex flex-col h-full">
                <h3 className="text-2xl font-black text-[#00529B] mb-4">Contrato de Adhesión</h3>
                <p className="text-slate-600 mb-6 font-medium">Descargá y leé los términos y condiciones de contratación de nuestros productos.</p>
                <button className="mt-auto w-full bg-gradient-to-r from-[#00529B] to-[#00A8E8] text-white py-3 rounded-xl font-black hover:shadow-lg transition-all group/btn">
                  Ver Contrato <span className="ml-2 group-hover/btn:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </motion.div>

            {/* Card Servicios de Usuario */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-slate-200 overflow-hidden group"
            >
              <div className="bg-gradient-to-r from-[#00A8E8] to-[#64BC26] h-24 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <Shield className="w-12 h-12 text-white relative z-10" />
              </div>
              <div className="p-8 flex flex-col h-full">
                <h3 className="text-2xl font-black text-[#00A8E8] mb-4">Servicios de Usuario</h3>
                <p className="text-slate-600 mb-6 font-medium">Conocé tus derechos y obligaciones como usuario de servicios financieros.</p>
                <button className="mt-auto w-full bg-gradient-to-r from-[#00A8E8] to-[#64BC26] text-white py-3 rounded-xl font-black hover:shadow-lg transition-all group/btn">
                  Más Información <span className="ml-2 group-hover/btn:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Información Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-16 bg-white rounded-3xl p-8 md:p-12 border-2 border-slate-200 shadow-lg"
          >
            <h3 className="text-2xl font-black text-[#002855] mb-6">Obligaciones Regulatorias</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Términos y Condiciones", icon: "📋" },
                { title: "Política de Privacidad", icon: "🔐" },
                { title: "Derechos del Consumidor", icon: "👤" },
                { title: "Contacto BCRA", icon: "📞" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4 }}
                  className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 hover:bg-blue-50 transition-colors cursor-pointer group"
                >
                  <span className="text-4xl mb-3 group-hover:scale-110 transition-transform">{item.icon}</span>
                  <p className="font-black text-slate-700 group-hover:text-[#00529B] transition-colors">{item.title}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

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

const ServiceCard = ({ item, onClick }) => (
  <motion.div 
    whileHover={{ y: -15, scale: 1.02 }}
    onClick={onClick}
    className="bg-white rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all cursor-pointer overflow-hidden border border-white group"
  >
    <div className="h-52 overflow-hidden"><img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" /></div>
    <div className="p-8">
      <h3 className="text-xl font-black mb-2 uppercase tracking-tighter italic text-[#00529B]">{item.title}</h3>
      <p className="text-slate-400 text-sm font-bold leading-relaxed">{item.desc}</p>
    </div>
  </motion.div>
);

export default Home;