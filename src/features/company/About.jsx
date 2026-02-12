import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Globe, Zap, MapPin, Phone, Mail, Briefcase } from 'lucide-react';

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
    <div className="bg-[#F1F5F9] min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl sm:text-5xl font-black text-[#00529B] mb-4 uppercase">Nuestra Empresa</h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
            Tarjeta Titanio: Tu socio financiero de confianza en Tucumán
          </p>
        </motion.div>

        {/* ¿Quiénes Somos? */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-12 border border-slate-100"
        >
          <h2 className="text-3xl sm:text-4xl font-black text-[#00529B] mb-6">¿Quiénes Somos?</h2>
          <p className="text-slate-700 leading-relaxed mb-6 text-base sm:text-lg">
            La Empresa <span className="font-bold text-[#00529B]">TARJETA TITANIO S.A.</span> está conformada por una familia de amplia y reconocida trayectoria comercial en San Miguel de Tucumán. <span className="font-bold">Solvencia, garantía y amplio conocimiento del mercado</span> son nuestros principios en la actividad crediticia que han sido absolutamente respetados en el diseño del producto que hoy utilizás.
          </p>
          <p className="text-slate-700 leading-relaxed mb-6 text-base sm:text-lg">
            Tarjeta Titanio es un servicio de créditos creado para la exigencia y realidad actual del mercado, con la <span className="font-bold">tasa de interés más baja de la plaza</span>, créditos amplios y financiaciones acordes a tus necesidades.
          </p>
          <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
            Tarjeta Titanio es una nueva oportunidad que conjuga los mejores planes crediticios, servicios de préstamos y financiación, promociones de compras, consultas telefónicas las 24 horas, con nuestra <span className="font-bold">Casa Central ubicada estratégicamente en el centro de la ciudad</span> y un local en el HiperLibertad, para brindarte atención personalizada, mayor comodidad, conveniencia y bienestar.
          </p>
        </motion.div>

        {/* Misión y Visión */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-slate-100"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-[#00529B]/10 rounded-2xl flex items-center justify-center shrink-0">
                <Award className="text-[#00529B]" size={28} />
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#00529B]">Misión</h2>
            </div>
            <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
              Somos una tarjeta de Crédito que brinda <span className="font-bold">servicios financieros de compra y crédito</span> enfocándonos en la satisfacción de nuestros usuarios y de los comercios adheridos, a través de una <span className="font-bold">atención diferenciada</span>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-linear-to-br from-[#64BC26] to-[#4e941d] rounded-3xl p-8 md:p-10 shadow-lg text-white"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center shrink-0">
                <Globe className="text-white" size={28} />
              </div>
              <h2 className="text-2xl sm:text-3xl font-black">Visión</h2>
            </div>
            <p className="leading-relaxed text-base sm:text-lg">
              Queremos ser una <span className="font-bold">empresa de servicios financieros reconocida en la provincia de Tucumán</span> por su confiabilidad y dinamismo, buscando una mayor calidad organizacional para optimizar y fortalecer la estructura operacional.
            </p>
          </motion.div>
        </div>

        {/* Nuestros Valores */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-black text-[#00529B] mb-12 text-center">Nuestros Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition group"
                >
                  <div className="w-16 h-16 bg-[#00A8E8]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#64BC26]/10 transition">
                    <IconComponent className="text-[#00A8E8] group-hover:text-[#64BC26] transition" size={32} />
                  </div>
                  <h3 className="text-xl font-black text-[#00529B] mb-2">{value.title}</h3>
                  <p className="text-slate-600 text-sm">{value.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Carta de Bienvenida */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-12 border border-slate-100"
        >
          <h2 className="text-3xl sm:text-4xl font-black text-[#00529B] mb-6">Carta de Bienvenida</h2>
          <p className="text-slate-700 leading-relaxed mb-6 text-base sm:text-lg">
            Bienvenido al Sistema Integral de Tarjeta Titanio, te esperábamos. Si sos poseedor de una tarjeta de crédito Titanio, ésta te permitirá realizar tus compras utilizando los <span className="font-bold">exclusivos planes que la misma brinda</span>.
          </p>
          <p className="text-slate-700 leading-relaxed mb-6 text-base sm:text-lg">
            Deseamos que tu relación con nosotros sea lo más <span className="font-bold">franca, abierta y sincera posible</span>, por eso no dudes en comunicarte para cualquier consulta técnica o comercial.
          </p>
          <p className="text-slate-700 leading-relaxed mb-6 text-base sm:text-lg">
            Con Tarjeta Titanio también podrás acceder a <span className="font-bold">Servicios tales como Adelantos en Efectivo, Promociones y Descuentos Exclusivos, amplia opciones de Débitos Automáticos, Tarjetas Adicionales Sin Cargo</span>. Además, también podés presenciar los exclusivos shows que sólo Titanio Eventos puede brindarte.
          </p>
          <p className="leading-relaxed font-semibold text-base sm:text-lg text-[#00529B]">
            Queremos agradecerte por confiar en el Sistema Integral de Tarjeta Titanio y esperamos que nuestra relación sea fructífera y duradera.
          </p>
        </motion.div>

        {/* Sucursales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-black text-[#00529B] mb-12 text-center">Nuestras Sucursales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {sucursales.map((sucursal, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#00529B]"
              >
                <h3 className="text-2xl font-black text-[#00529B] mb-6">{sucursal.nombre}</h3>
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <MapPin className="text-[#00A8E8] shrink-0 mt-1" size={24} />
                    <div>
                      <p className="text-sm text-slate-500 font-semibold">DIRECCIÓN</p>
                      <p className="text-slate-700">{sucursal.direccion}</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <Phone className="text-[#64BC26] shrink-0 mt-1" size={24} />
                    <div>
                      <p className="text-sm text-slate-500 font-semibold">TELÉFONO</p>
                      <p className="text-slate-700">{sucursal.telefono}</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <Briefcase className="text-[#00529B] shrink-0 mt-1" size={24} />
                    <div>
                      <p className="text-sm text-slate-500 font-semibold">CÓDIGO POSTAL</p>
                      <p className="text-slate-700">{sucursal.codigo}</p>
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
            className="rounded-3xl overflow-hidden shadow-lg"
          >
            <h3 className="text-2xl font-black text-[#00529B] mb-6 text-center mt-8">Ubicación en el Mapa</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.5234567890!2d-65.2145678901234!3d-26.8161234567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225db1a2b3c4d5%3A0x1234567890abcdef!2sCalle%20San%20Mart%C3%ADn%20853%2C%20T4000%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses!2sar!4v1699564800100"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-3xl"
            ></iframe>
          </motion.div>
        </motion.div>

        {/* Contactenos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-linear-to-r from-[#00529B] to-[#00A8E8] rounded-3xl p-8 md:p-12 text-white mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-black mb-8 text-center">Contáctenos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center md:border-r md:border-white/30 md:pr-8">
              <p className="text-sm opacity-75 mb-2 font-semibold">ATENCIÓN A CLIENTES</p>
              <p className="text-3xl font-black">0810 888 7528</p>
            </div>
            <div className="text-center md:pl-8">
              <p className="text-sm opacity-75 mb-2 font-semibold">ATENCIÓN A COMERCIOS</p>
              <p className="text-3xl font-black">0810 555 1111</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/30 text-center">
            <p className="text-sm opacity-75 mb-2 font-semibold">CORREO ELECTRÓNICO</p>
            <p className="text-lg font-bold">contacto@titaniocard.com.ar</p>
          </div>
        </motion.div>

        {/* Trabajá con Nosotros */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-slate-100"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-[#64BC26]/10 rounded-2xl flex items-center justify-center shrink-0">
              <Briefcase className="text-[#64BC26]" size={32} />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#00529B]">Trabajá con Nosotros</h2>
          </div>
          <p className="text-slate-700 leading-relaxed mb-6 text-base sm:text-lg">
            <span className="font-bold text-[#00529B]">TARJETA TITANIO S.A.</span> está en constante desarrollo por eso si tenés un perfil dinámico y emprendedor no dudés en enviar tu currículum a nuestra base de datos.
          </p>
          <p className="text-slate-700 leading-relaxed mb-6 text-base sm:text-lg">
            Si querés <span className="font-bold">formar parte del Staff Tarjeta Titanio S.A. y crecer en un ambiente laboral propicio y con proyección</span>, ésta es tu oportunidad.
          </p>
          <div className="bg-[#F1F5F9] rounded-2xl p-6 md:p-8 border-l-4 border-[#00A8E8]">
            <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
              Envia tu <span className="font-bold">Currículum Vitae con una foto actualizada</span>, contándonos por qué deseás formar parte de nuestro equipo, cuáles son tus aptitudes y en que área deseás desempeñarte.
            </p>
            <p className="text-slate-600 mt-4 text-sm">
              📧 Envíanos tu CV a: <span className="font-bold text-[#00529B]">rrhh@titaniocard.com.ar</span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;