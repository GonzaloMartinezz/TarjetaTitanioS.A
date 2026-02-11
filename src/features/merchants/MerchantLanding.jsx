import React from 'react';
import { motion } from 'framer-motion';
import { Store, TrendingUp, Users, Smartphone, DollarSign, Shield, Zap, BarChart3, Clock, Settings } from 'lucide-react';

export default function MerchantLanding() {
  const beneficios = [
    { icon: TrendingUp, title: "Aumentá tus Ventas", desc: "Llega a más clientes con opciones de pago flexible" },
    { icon: Users, title: "Más Clientes", desc: "Atrae clientes que prefieren comprar con tarjeta" },
    { icon: DollarSign, title: "Mejores Ingresos", desc: "Incrementa tus ingresos mensuales hasta 40%" },
    { icon: Shield, title: "Seguridad Garantizada", desc: "Transacciones 100% seguras y certificadas" },
  ];

  const servicios = [
    { icon: Smartphone, title: "Posnet Virtual", desc: "Acepta pagos desde tu celular en cualquier lugar" },
    { icon: Clock, title: "Liquidación Rápida", desc: "Recibe tu dinero en 24 a 48 horas" },
    { icon: BarChart3, title: "Reportes Detallados", desc: "Controla todas tus ventas en tiempo real" },
    { icon: Settings, title: "Soporte Técnico", desc: "Equipo de soporte disponible las 24 horas" },
    { icon: Zap, title: "Integración Fácil", desc: "Instalación rápida y sin complicaciones" },
    { icon: Store, title: "Múltiples Planes", desc: "Elige el plan que mejor se adapte a tu negocio" },
  ];

  return (
    <div className="min-h-screen pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 bg-[#F1F5F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#00529B] mb-3 sm:mb-4 uppercase tracking-tighter">Portal Comercios</h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium">Multiplica tus ventas con nuestras soluciones de pago para tu negocio</p>
        </motion.div>

        {/* Beneficios principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {beneficios.map((item, i) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                <div className="w-14 h-14 bg-[#00529B]/10 rounded-xl flex items-center justify-center mb-4">
                  <IconComponent className="text-[#00529B]" size={28} />
                </div>
                <h3 className="text-lg font-black text-[#00529B] mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Posnet Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16 bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-slate-100"
        >
          <h2 className="text-3xl sm:text-4xl font-black text-[#00529B] mb-8 text-center">Nuestros Posnet</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                nombre: "Posnet Básico",
                imagen: "📱",
                caracteristicas: ["Conexión Wi-Fi", "Pantalla XGA", "Batería 4h", "Compatible 4G"],
                precio: "Plan Económico"
              },
              {
                nombre: "Posnet Premium",
                imagen: "💳",
                caracteristicas: ["Doble conectividad", "Pantalla HD", "Batería 8h", "Chip integrado"],
                precio: "Plan Standard"
              },
              {
                nombre: "Posnet Pro",
                imagen: "⚡",
                caracteristicas: ["4G LTE", "Pantalla Full HD", "Batería 12h", "Sistema avanzado"],
                precio: "Plan Premium"
              }
            ].map((posnet, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-linear-to-br from-[#F1F5F9] to-white border-2 border-slate-200 rounded-2xl p-8 text-center hover:border-[#00A8E8] transition-all"
              >
                <div className="text-6xl mb-4">{posnet.imagen}</div>
                <h3 className="text-2xl font-black text-[#00529B] mb-4">{posnet.nombre}</h3>
                <ul className="space-y-2 mb-6">
                  {posnet.caracteristicas.map((car, idx) => (
                    <li key={idx} className="text-sm text-slate-600 flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#64BC26] rounded-full"></span>
                      {car}
                    </li>
                  ))}
                </ul>
                <p className="text-lg font-bold text-[#00A8E8]">{posnet.precio}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Servicios Adicionales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-black text-[#00529B] mb-12 text-center">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicios.map((item, i) => {
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-linear-to-r from-[#00529B] to-[#00A8E8] rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-black mb-4">¿Listo para Crecer?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-md mx-auto">Únete a miles de comercios que ya confían en Titanio</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#64BC26] text-[#00529B] px-10 py-4 rounded-2xl font-black text-lg hover:scale-105 transition-transform shadow-lg"
          >
            SOLICITA TU POSNET HOY
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}