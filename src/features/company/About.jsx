import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Globe, Zap, MapPin, Phone, Mail, Briefcase, Store, MessageCircle } from 'lucide-react';

const About = () => {
  const values = [
    { icon: Award, title: "Solvencia", desc: "Garantía y confiabilidad en todas nuestras operaciones" },
    { icon: Users, title: "Comunidad", desc: "Amplia trayectoria comercial reconocida en la región" },
    { icon: Globe, title: "Accesibilidad", desc: "Las mejores tasas de interés del mercado" },
    { icon: Zap, title: "Innovación", desc: "Servicios financieros de última generación" },
  ];

  const sucursales = [
    {
      nombre: "Casa Central",
      direccion: "San Martín 853",
      telefono: "(0381) 430 3703",
      codigo: "T4000CVR",
      ciudad: "San Miguel de Tucumán, Tucumán"
    },
    {
      nombre: "Sucursal Hipermercado Libertad",
      direccion: "Av. Nestor Kirchner (ex Av. Roca) 3450 Local 310",
      telefono: "(0381) 483 0555",
      codigo: "4000",
      ciudad: "San Miguel de Tucumán, Tucumán"
    }
  ];

  return (
    <div className="bg-[#F1F5F9] min-h-screen flex flex-col">
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 pt-24 md:pt-32 pb-12 md:pb-20">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="h-16 w-3 bg-gradient-to-b from-[#00529B] to-[#00A8E8] rounded-full" />
            <h1 className="text-4xl md:text-6xl font-black text-[#00529B] uppercase tracking-tighter italic">Nuestra Empresa</h1>
            <div className="h-16 w-3 bg-gradient-to-b from-[#00A8E8] to-[#64BC26] rounded-full" />
          </div>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-medium">
            Tarjeta Titanio: Tu socio financiero de confianza en Tucumán
          </p>
        </motion.div>

        {/* ¿Quiénes Somos? */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl mb-16 border border-slate-100 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#00A8E8]/10 to-transparent rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none" />
          <h2 className="text-3xl sm:text-4xl font-black text-[#00529B] mb-8 uppercase tracking-tight relative z-10">¿Quiénes Somos?</h2>
          <div className="space-y-6 relative z-10 font-medium text-slate-700 text-lg leading-relaxed">
            <p>
              La Empresa <span className="font-black text-[#00529B]">TARJETA TITANIO S.A.</span> está conformada por una familia de amplia y reconocida trayectoria comercial en San Miguel de Tucumán. <span className="font-black text-[#64BC26]">Solvencia, garantía y amplio conocimiento del mercado</span> son nuestros principios en la actividad crediticia que han sido absolutamente respetados en el diseño del producto que hoy utilizás.
            </p>
            <p>
              Tarjeta Titanio es un servicio de créditos creado para la exigencia y realidad actual del mercado, con la <span className="font-black text-[#00A8E8]">tasa de interés más baja de la plaza</span>, créditos amplios y financiaciones acordes a tus necesidades.
            </p>
            <p>
              Tarjeta Titanio es una nueva oportunidad que conjuga los mejores planes crediticios, servicios de préstamos y financiación, promociones de compras, consultas telefónicas las 24 horas, con nuestra <span className="font-black text-[#00529B]">Casa Central ubicada estratégicamente en el centro de la ciudad</span> y un local en el HiperLibertad, para brindarte atención personalizada, mayor comodidad, conveniencia y bienestar.
            </p>
          </div>
        </motion.div>

        {/* Misión y Visión */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Misión */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white rounded-[2.5rem] p-10 shadow-xl border-l-8 border-[#00529B] hover:shadow-2xl transition-all group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#00529B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            <div className="flex items-center gap-6 mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-[#00529B] to-[#003d75] rounded-3xl flex items-center justify-center shrink-0 shadow-lg">
                <Award className="text-white" size={40} />
              </div>
              <h2 className="text-4xl font-black text-[#00529B] uppercase tracking-tight">Misión</h2>
            </div>
            <p className="text-slate-700 leading-relaxed text-lg font-medium">
              Somos una tarjeta de Crédito que brinda <span className="font-black text-[#00529B]">servicios financieros de compra y crédito</span> enfocándonos en la satisfacción de nuestros usuarios y de los comercios adheridos, a través de una <span className="font-black text-[#00A8E8]">atención diferenciada</span>.
            </p>
          </motion.div>

          {/* Visión */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-gradient-to-br from-[#64BC26] to-[#4e941d] rounded-[2.5rem] p-10 shadow-xl text-white hover:shadow-2xl transition-all group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            <div className="flex items-center gap-6 mb-8">
              <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center shrink-0 shadow-lg backdrop-blur-sm">
                <Globe className="text-white" size={40} />
              </div>
              <h2 className="text-4xl font-black uppercase tracking-tight">Visión</h2>
            </div>
            <p className="leading-relaxed text-lg font-medium opacity-95">
              Queremos ser una <span className="font-black text-white">empresa de servicios financieros reconocida en la provincia de Tucumán</span> por su confiabilidad y dinamismo, buscando una mayor calidad organizacional para optimizar y fortalecer la estructura operacional.
            </p>
          </motion.div>
        </div>

        {/* Nuestros Valores */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-black text-[#00529B] mb-12 text-center uppercase tracking-tight">Nuestros Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-[2rem] p-8 text-center shadow-lg hover:shadow-xl transition-all group border-b-8 border-[#00A8E8] hover:border-[#64BC26] relative overflow-hidden"
                >
                   <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  <div className="w-20 h-20 bg-gradient-to-br from-[#00A8E8]/20 to-[#00529B]/20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:from-[#64BC26]/20 group-hover:to-[#E0F200]/20 transition-all shadow-sm">
                    <IconComponent className="text-[#00A8E8] group-hover:text-[#64BC26] transition-colors" size={40} />
                  </div>
                  <h3 className="text-2xl font-black text-[#00529B] mb-3 group-hover:text-[#64BC26] transition-colors uppercase tracking-tight">{value.title}</h3>
                  <p className="text-slate-600 font-medium relative z-10">{value.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Carta de Bienvenida */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-[#00529B] to-[#003d75] rounded-[2.5rem] p-10 md:p-16 shadow-2xl mb-20 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00A8E8]/20 rounded-full -mr-48 -mt-48 blur-3xl pointer-events-none" />
          <h2 className="text-3xl sm:text-5xl font-black mb-8 uppercase tracking-tight relative z-10">Carta de Bienvenida</h2>
          <div className="space-y-6 relative z-10 font-medium text-lg leading-relaxed opacity-95">
            <p>
              Bienvenido al Sistema Integral de Tarjeta Titanio, te esperábamos. Si sos poseedor de una tarjeta de crédito Titanio, ésta te permitirá realizar tus compras utilizando los <span className="font-black text-[#64BC26]">exclusivos planes que la misma brinda</span>.
            </p>
            <p>
              Deseamos que tu relación con nosotros sea lo más <span className="font-black text-[#00A8E8]">franca, abierta y sincera posible</span>, por eso no dudes en comunicarte para cualquier consulta técnica o comercial.
            </p>
            <p>
              Con Tarjeta Titanio también podrás acceder a <span className="font-black text-white">Servicios tales como Adelantos en Efectivo, Promociones y Descuentos Exclusivos, amplia opciones de Débitos Automáticos, Tarjetas Adicionales Sin Cargo</span>. Además, también podés presenciar los exclusivos shows que sólo Titanio Eventos puede brindarte.
            </p>
            <p className="font-bold text-xl mt-8 text-[#64BC26]">
              Queremos agradecerte por confiar en el Sistema Integral de Tarjeta Titanio y esperamos que nuestra relación sea fructífera y duradera.
            </p>
          </div>
        </motion.div>

        {/* Sucursales */}
        <motion.div
          id="mapa-sucursales"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-black text-[#00529B] mb-12 text-center uppercase tracking-tight">Nuestras Sucursales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            {sucursales.map((sucursal, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[2.5rem] p-10 shadow-xl border-l-8 border-[#64BC26] hover:shadow-2xl transition-all group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#64BC26]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <h3 className="text-2xl font-black text-[#00529B] mb-8 uppercase tracking-tight relative z-10">{sucursal.nombre}</h3>
                <div className="space-y-6 relative z-10">
                  <div className="flex gap-5 items-start">
                    <div className="w-12 h-12 bg-[#00A8E8]/10 rounded-2xl flex items-center justify-center shrink-0">
                       <MapPin className="text-[#00A8E8]" size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-black text-[#00529B] uppercase tracking-widest mb-1">DIRECCIÓN</p>
                      <p className="text-slate-700 font-bold text-lg">{sucursal.direccion}</p>
                    </div>
                  </div>
                  <div className="flex gap-5 items-start">
                     <div className="w-12 h-12 bg-[#64BC26]/10 rounded-2xl flex items-center justify-center shrink-0">
                        <Phone className="text-[#64BC26]" size={24} />
                     </div>
                    <div>
                      <p className="text-xs font-black text-[#00529B] uppercase tracking-widest mb-1">TELÉFONO</p>
                      <p className="text-slate-700 font-bold text-lg">{sucursal.telefono}</p>
                    </div>
                  </div>
                  <div className="flex gap-5 items-start">
                    <div className="w-12 h-12 bg-[#00529B]/10 rounded-2xl flex items-center justify-center shrink-0">
                       <Briefcase className="text-[#00529B]" size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-black text-[#00529B] uppercase tracking-widest mb-1">CÓDIGO POSTAL</p>
                      <p className="text-slate-700 font-bold text-lg">{sucursal.codigo}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mapa */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.102370978592!2d-65.20742292538217!3d-26.83669609003272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3ad7f30f1d%3A0xf8606cd659b8e3e4!2sSan%20Mart%C3%ADn%20853%2C%20T4000%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses!2sar!4v1709328000000!5m2!1ses!2sar"
              width="100%"
              height="550"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[550px]"
            ></iframe>
          </motion.div>
        </motion.div>

        {/* Contáctenos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-[#00529B] via-[#00A8E8] to-[#00529B] rounded-[3rem] p-12 md:p-16 text-white mb-20 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />
          <h2 className="text-4xl sm:text-5xl font-black mb-12 text-center uppercase tracking-tight relative z-10">Contáctenos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div className="text-center md:border-r-2 md:border-white/20 md:pr-12">
              <Phone className="mx-auto mb-4 text-[#64BC26]" size={40} />
              <p className="text-sm font-black uppercase tracking-widest opacity-80 mb-2">ATENCIÓN A CLIENTES</p>
              <p className="text-4xl font-black">0810 888 7528</p>
            </div>
            <div className="text-center md:pl-12">
              <Store className="mx-auto mb-4 text-[#64BC26]" size={40} />
              <p className="text-sm font-black uppercase tracking-widest opacity-80 mb-2">ATENCIÓN A COMERCIOS</p>
              <p className="text-4xl font-black">0810 555 1111</p>
            </div>
          </div>
          <div className="mt-12 pt-12 border-t-2 border-white/20 text-center relative z-10">
            <Mail className="mx-auto mb-4 text-[#64BC26]" size={40} />
            <p className="text-sm font-black uppercase tracking-widest opacity-80 mb-2">CORREO ELECTRÓNICO</p>
            <p className="text-2xl font-bold">contacto@titaniocard.com.ar</p>
          </div>
        </motion.div>

        {/* Trabajá con Nosotros */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[3rem] p-12 md:p-16 shadow-2xl border border-slate-100 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#64BC26]/10 rounded-full -mr-48 -mt-48 blur-3xl pointer-events-none" />
          <div className="flex items-center gap-6 mb-10 relative z-10">
            <div className="w-20 h-20 bg-[#64BC26] rounded-3xl flex items-center justify-center shrink-0 shadow-lg">
              <Briefcase className="text-white" size={40} />
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#00529B] uppercase tracking-tight">Trabajá con Nosotros</h2>
          </div>
          <div className="space-y-8 relative z-10 font-medium text-lg text-slate-700 leading-relaxed">
            <p>
              <span className="font-black text-[#00529B]">TARJETA TITANIO S.A.</span> está en constante desarrollo. Si tenés un perfil dinámico y emprendedor, ¡queremos conocerte!
            </p>
            <p>
              Si querés <span className="font-black text-[#64BC26]">formar parte del Staff y crecer en un ambiente laboral propicio con proyección</span>, esta es tu oportunidad.
            </p>
            <div className="bg-gradient-to-r from-[#F1F5F9] to-white rounded-[2rem] p-8 md:p-10 border-l-8 border-[#00A8E8] shadow-md">
              <p className="text-lg font-bold text-[#00529B] mb-4">
                Envianos tu Currículum Vitae con foto actualizada:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-600 mb-6 ml-4">
                <li>Contanos por qué deseás unirte al equipo.</li>
                <li>Detallá tus aptitudes principales.</li>
                <li>Indica el área en la que te gustaría desempeñarte.</li>
              </ul>
              <p className="text-base font-bold flex items-center gap-3 bg-white p-4 rounded-xl w-fit shadow-sm border border-slate-100">
                <Mail className="text-[#00A8E8]" size={24} />
                <span className="text-slate-500">Email:</span> 
                <span className="font-black text-[#00529B] text-xl">rrhh@titaniocard.com.ar</span>
              </p>
            </div>
          </div>
        </motion.div>
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

export default About;