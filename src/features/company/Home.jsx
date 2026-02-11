import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainCarousel from '../../components/carousel/MainCarousel';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { MapPin, Tag, Phone, MessageCircle, Store, CreditCard, CheckCircle2 } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  // --- LÓGICA DE EFECTO 3D (TILT) PARA ARGENCARD ---
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

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

  const itemsClientes = [
    { title: "Quiero mi Titanio", desc: "Pedila hoy, disfrutala todos los días", img: "/public/logo.jpeg" },
    { title: "Quiero mi Argencard", desc: "Para comprar en todo el país y online", img: "/public/1.7.png" },
    { title: "Adicionales para vos", desc: "Todas las que quieras, sin cargo", img: "/public/logo.jpeg" },
    { title: "Catálogo Super Titanio Shop", desc: "Todo lo que querés para tu hogar", img: "/public/1.3.png" },
    { title: "Promos actuales", desc: "Ingresá y conocé dónde ahorrar", img: "/public/1.3.png" },
    { title: "Listado de comercios", desc: "Dónde disfrutar tu tarjeta", img: "/public/1.3.png" }
  ];

  return (
    <div className="bg-[#F1F5F9] min-h-screen">
      <MainCarousel />

      {/* SECCIÓN CLIENTES (Sin línea superior) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-12 w-3 bg-[#00529B] rounded-full" />
          <h2 className="text-3xl md:text-4xl font-black text-[#00529B] uppercase tracking-tighter italic">Portal Clientes</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {itemsClientes.map((item, i) => (
            <ServiceCard key={i} item={item} onClick={irAlClientes} />
          ))}
        </div>
      </section>

      {/* SECCIÓN ARGENCARD CON EFECTO 3D */}
      <section className="bg-gradient-to-r from-[#00529B] via-[#00A8E8] to-[#00529B] py-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} className="text-white">
              <div className="flex items-center gap-4 mb-6">
                <CreditCard size={56} className="text-[#64BC26]" />
                {/* Aquí podés poner un <img> con el logo de Argencard si lo tenés */}
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic">Argencard</h2>
              </div>
              <p className="text-xl opacity-90 mb-10 font-medium">La tarjeta nacional con el respaldo de Titanio. Comprá en cuotas en todo el país.</p>
              <div className="space-y-4 mb-12">
                {["Cobertura Nacional", "Planes de Financiación", "Seguridad Garantizada"].map((li, i) => (
                  <div key={i} className="flex items-center gap-3 font-bold text-lg">
                    <CheckCircle2 size={24} className="text-[#64BC26]" strokeWidth={3} /> {li}
                  </div>
                ))}
              </div>
              <button className="bg-[#64BC26] text-[#00529B] px-12 py-5 rounded-2xl font-black text-xl shadow-2xl hover:scale-105 transition-transform" onClick={irAlClientes}>SOLICITAR ARGENCARD</button>
            </motion.div>

            {/* CONTENEDOR DE LA TARJETA CON PERSPECTIVA */}
            <div 
              onMouseMove={handleMouseMove} 
              onMouseLeave={handleMouseLeave} 
              style={{ perspective: "1000px" }} 
              className="flex justify-center items-center group cursor-pointer"
            >
              <motion.div 
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} 
                className="relative w-full max-w-[480px]"
              >
                {/* Sombra de fondo */}
                <div className="absolute inset-4 bg-black/40 blur-[50px] rounded-3xl -z-10" />
                
                {/* Imagen de la tarjeta */}
                <img 
                  src="/1.7.png" 
                  alt="Argencard" 
                  className="w-full h-auto object-contain rounded-[1.5rem] drop-shadow-2xl" 
                  style={{ transform: "translateZ(80px)" }} 
                />

                {/* Reflejo de luz al pasar el mouse */}
                <div className="absolute inset-0 z-20 rounded-[1.5rem] opacity-0 group-hover:opacity-20 transition-opacity bg-gradient-to-tr from-transparent via-white to-transparent pointer-events-none" />
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