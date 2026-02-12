import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainCarousel from '../../components/carousel/MainCarousel';
import ArgenCardComponent from '../../components/common/ArgenCardComponent';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { MapPin, Tag, Phone, MessageCircle, Store, CreditCard, CheckCircle2, Wallet, Gift, Zap, Shield, TrendingUp, Clock, Users, Headphones, ArrowRight } from 'lucide-react';

// Componente Card para opciones rápidas
const QuickOptionCard = ({ title, description, icon: Icon, onClick }) => (
  <motion.div
    whileHover={{ y: -8, scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-slate-100 cursor-pointer overflow-hidden relative"
  >
    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#00A8E8]/20 to-transparent rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform" />
    <div className="relative z-10">
      <div className="w-12 h-12 bg-linear-to-br from-[#00529B]/20 to-[#64BC26]/20 rounded-xl flex items-center justify-center mb-4 group-hover:from-[#00529B]/40 group-hover:to-[#64BC26]/40 transition-all">
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

const Home = () => {
  const navigate = useNavigate();

  // --- LÓGICA DE EFECTO 3D (TILT) SUAVE PARA ARGENCARD ---
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

  const irAlClientes = () => navigate('/clientes');
  const irAlComercios = () => navigate('/comercios');
  const irAlTarjeta = () => navigate('/clientes#tarjeta');
  const irAlArgencard = () => navigate('/clientes#argencard');

  const opccionesRapidas = [
    { 
      title: "Quiero mi Titanio", 
      description: "Solicitá tu tarjeta de crédito exclusiva con beneficios únicos", 
      icon: CreditCard 
    },
    { 
      title: "Mi Argencard", 
      description: "Accede a crédito flexible y promociones especiales", 
      icon: Wallet 
    },
    { 
      title: "Tarjetas Adicionales", 
      description: "Agregá familiares y gestioná múltiples tarjetas", 
      icon: Users 
    },
    { 
      title: "Mis Compras y Pagos", 
      description: "Consultá tu historial de transacciones en tiempo real", 
      icon: TrendingUp 
    },
    { 
      title: "Adelantos en Efectivo", 
      description: "Obtén efectivo rápido cuando lo necesites", 
      icon: Zap 
    },
    { 
      title: "Promociones Vigentes", 
      description: "Descubre ofertas exclusivas en miles de comercios", 
      icon: Gift 
    },
    { 
      title: "Seguro de Compra", 
      description: "Protección total en tus compras con garantía", 
      icon: Shield 
    },
    { 
      title: "Soporte 24/7", 
      description: "Conectate con nosotros en cualquier momento", 
      icon: Headphones 
    }
  ];

  return (
    <div className="bg-[#F1F5F9] min-h-screen">
      <MainCarousel />

      {/* SECCIÓN PORTAL CLIENTES - MEJORADA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="h-16 w-3 bg-gradient-to-b from-[#00529B] to-[#00A8E8] rounded-full" />
            <h2 className="text-5xl md:text-6xl font-black text-[#00529B] uppercase tracking-tighter italic">Portal Clientes</h2>
            <div className="h-16 w-3 bg-gradient-to-b from-[#00A8E8] to-[#64BC26] rounded-full" />
          </div>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium">Accedé a todos tus servicios y beneficios exclusivos en un solo lugar</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {opccionesRapidas.map((opcion, i) => (
            <QuickOptionCard 
              key={i} 
              title={opcion.title} 
              description={opcion.description} 
              icon={opcion.icon}
              onClick={() => {
                if (i === 0) irAlTarjeta();
                else if (i === 1) irAlArgencard();
                else irAlClientes();
              }}
            />
          ))}
        </div>
      </section>

      {/* SECCIÓN ARGENCARD CON EFECTO 3D */}
      <section className="bg-gradient-to-r from-[#00529B] via-[#00A8E8] to-[#00529B] py-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} className="text-white">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic mb-6 text-[#FF4444]">ArgenCard</h2>
              <p className="text-xl opacity-90 mb-10 font-medium">La tarjeta nacional con el respaldo de Titanio. Comprá en cuotas en todo el país con beneficios exclusivos.</p>
              <div className="space-y-4 mb-12">
                {["Cobertura Nacional", "Planes de Financiación", "Seguridad Garantizada", "Tasas Competitivas"].map((li, i) => (
                  <div key={i} className="flex items-center gap-3 font-bold text-lg">
                    <CheckCircle2 size={24} className="text-[#64BC26]" strokeWidth={3} /> {li}
                  </div>
                ))}
              </div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#64BC26] text-[#00529B] px-12 py-5 rounded-2xl font-black text-xl shadow-2xl hover:shadow-green-500/50 transition-all" 
                onClick={irAlClientes}
              >
                SOLICITAR ARGENCARD
              </motion.button>
            </motion.div>

            {/* CONTENEDOR DE LA TARJETA CON PERSPECTIVA - EFECTO 3D MEJORADO */}
            <div 
              onMouseMove={handleMouseMove} 
              onMouseLeave={handleMouseLeave} 
              style={{ perspective: "1200px" }} 
              className="flex justify-center items-center group cursor-pointer h-full"
            >
              <motion.div 
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} 
                className="relative w-full max-w-[480px]"
              >
                {/* Sombra dinámica que reacciona al movimiento */}
                <div className="absolute inset-6 bg-white/30 blur-[70px] rounded-3xl -z-10 group-hover:bg-white/50 transition-colors duration-500"></div>
                
                {/* Sombra de fondo más sólida */}
                <div className="absolute inset-4 bg-gradient-to-b from-black/20 to-black/40 blur-[50px] rounded-3xl -z-10" />
                
                {/* Tarjeta ArgenCard renderizada */}
                <ArgenCardComponent interactive={true} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{ transform: "translateZ(100px)" }} />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN SUCURSALES Y PROMOS (Sin líneas arriba) */}
      <section className="bg-white py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div whileHover={{ y: -10 }} className="bg-slate-50 rounded-[3rem] p-12 flex flex-col justify-center border border-slate-200 shadow-xl transition-all">
             <MapPin className="text-[#64BC26] mb-6" size={56} />
             <h3 className="text-3xl font-black text-[#00529B] mb-4 uppercase italic tracking-tighter">Sucursales</h3>
             <p className="text-slate-500 mb-8 font-medium">Encontranos en San Miguel de Tucumán e Hiper Libertad.</p>
          <button 
            onClick={() => navigate('/empresa#mapa-sucursales')}
            className="bg-white text-[#00A8E8] border-2 border-[#00A8E8] py-4 rounded-2xl font-black hover:bg-[#00A8E8] hover:text-white transition"
            >
              VER MAPA
          </button>
        </motion.div>
          <motion.div whileHover={{ y: -10 }} className="bg-gradient-to-br from-[#64BC26] to-[#4e941d] rounded-[3rem] p-12 text-white flex flex-col justify-center shadow-xl transition-all">
             <Tag className="mb-6" size={56} />
             <h3 className="text-3xl font-black mb-4 uppercase italic tracking-tighter">Promociones</h3>
             <p className="opacity-90 mb-8 font-medium">Aprovechá beneficios exclusivos todos los días.</p>
             <button 
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  className="bg-white text-[#6fe41c] py-4 rounded-2xl font-black hover:scale-105 transition"
>
  CONOCER PROMOS
</button>
          </motion.div>
        </div>
      </section>

      {/* INFORMACIÓN PARA USUARIOS FINANCIEROS - BANCO CENTRAL */}
      <section className="bg-gradient-to-br from-white via-slate-50 to-slate-100 py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-[#002855] mb-4 uppercase tracking-tighter">Información para Usuarios Financieros</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">Accedé a información oficial regulada por el Banco Central de la República Argentina</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <div className="p-8">
                <h3 className="text-2xl font-black text-[#002855] mb-4">Banco Central</h3>
                <p className="text-slate-600 mb-6 font-medium">Accedé a tasas, comisiones y advertencias del Banco Central de la República Argentina.</p>
                <a 
                  href="https://www.bcra.gob.ar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-gradient-to-r from-[#002855] to-[#00529B] text-white py-3 rounded-xl font-black hover:shadow-lg transition-all group/btn"
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
              <div className="p-8">
                <h3 className="text-2xl font-black text-[#64BC26] mb-4">Tasas y Cargos</h3>
                <p className="text-slate-600 mb-6 font-medium">Conocé todas las tasas de interés, comisiones y cargos vigentes de nuestros servicios.</p>
                <button className="w-full bg-gradient-to-r from-[#64BC26] to-[#7ed321] text-white py-3 rounded-xl font-black hover:shadow-lg transition-all group/btn">
                  Ver Detalles <span className="ml-2 group-hover/btn:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </motion.div>

            {/* Card Advertencias */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-slate-200 overflow-hidden group"
            >
              <div className="bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E] h-24 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <svg className="w-12 h-12 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4v2m0 4v2m0-14v2m0-4v2m0-4v2" />
                </svg>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black text-[#FF6B6B] mb-4">Advertencias</h3>
                <p className="text-slate-600 mb-6 font-medium">Información importante sobre fraude y recomendaciones de seguridad para usuarios.</p>
                <button className="w-full bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E] text-white py-3 rounded-xl font-black hover:shadow-lg transition-all group/btn">
                  Leer Más <span className="ml-2 group-hover/btn:translate-x-1 transition-transform">→</span>
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
          <div><MessageCircle className="mx-auto mb-4 text-[#00A8E8]" size={32} /><p className="text-2xl font-black text-[#64BC26]">381 000 0000</p></div>
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