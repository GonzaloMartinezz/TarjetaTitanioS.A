import React, { useState } from 'react';
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

  const [prismaOK, setPrismaOK] = useState(true);

  return (
    <div className="min-h-screen pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 bg-[#F1F5F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="h-16 w-3 bg-linear-to-b from-[#64BC26] to-[#E0F200] rounded-full" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#64BC26] uppercase tracking-tighter italic">Portal Comercios</h1>
            <div className="h-16 w-3 bg-linear-to-b from-[#E0F200] to-[#64BC26] rounded-full" />
          </div>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium">Multiplica tus ventas con nuestras soluciones de pago para tu negocio</p>
        </motion.div>

        {/* Beneficios principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {beneficios.map((beneficio, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-linear-to-br from-[#F1F5F9] to-white border-2 border-slate-200 rounded-2xl p-8 transition-all"
            >
              <div className="text-6xl mb-4"><beneficio.icon /></div>
              <h3 className="text-2xl font-black text-[#00529B] mb-4">{beneficio.title}</h3>
              <p className="text-sm text-slate-600">{beneficio.desc}</p>
            </motion.div>
          ))}
        </div>        
        {/* Sección de Posnet */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-linear-to-br from-[#F1F5F9] to-white border-2 border-slate-200 rounded-2xl p-8 transition-all"
        >
                <h2 className="text-3xl sm:text-4xl font-black text-[#64BC26] mb-8 text-center">Nuestros Posnet</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 grid grid-cols-1 gap-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="bg-linear-to-br from-[#F1F5F9] to-white border-2 border-slate-200 rounded-2xl p-8 transition-all">
                      <div className="text-6xl mb-4">📱</div>
                      <h3 className="text-2xl font-black text-[#00529B] mb-4">Posnet Básico</h3>
                      <ul className="space-y-2 mb-6 text-sm text-slate-600">
                        <li className="flex items-center gap-2"><span className="w-2 h-2 bg-[#64BC26] rounded-full"></span>Conexión Wi-Fi</li>
                        <li className="flex items-center gap-2"><span className="w-2 h-2 bg-[#64BC26] rounded-full"></span>Pantalla XGA</li>
                        <li className="flex items-center gap-2"><span className="w-2 h-2 bg-[#64BC26] rounded-full"></span>Batería 4h</li>
                        <li className="flex items-center gap-2"><span className="w-2 h-2 bg-[#64BC26] rounded-full"></span>Compatible 4G</li>
                      </ul>
                      <p className="text-lg font-bold text-[#00A8E8]">Plan Económico</p>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="bg-linear-to-br from-[#F1F5F9] to-white border-2 border-slate-200 rounded-2xl p-8 transition-all">
                      <div className="text-6xl mb-4">💳</div>
                      <h3 className="text-2xl font-black text-[#00529B] mb-4">Posnet Premium</h3>
                      <ul className="space-y-2 mb-6 text-sm text-slate-600">
                        <li className="flex items-center gap-2"><span className="w-2 h-2 bg-[#64BC26] rounded-full"></span>Doble conectividad</li>
                        <li className="flex items-center gap-2"><span className="w-2 h-2 bg-[#64BC26] rounded-full"></span>Pantalla HD</li>
                        <li className="flex items-center gap-2"><span className="w-2 h-2 bg-[#64BC26] rounded-full"></span>Batería 8h</li>
                        <li className="flex items-center gap-2"><span className="w-2 h-2 bg-[#64BC26] rounded-full"></span>Chip integrado</li>
                      </ul>
                      <p className="text-lg font-bold text-[#00A8E8]">Plan Standard</p>
                    </motion.div>
                  </div>

                  <div className="grid grid-cols-1 gap-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="bg-linear-to-br from-[#F1F5F9] to-white border-2 border-slate-200 rounded-2xl p-8 transition-all">
                      <div className="text-6xl mb-4">⚡</div>
                      <h3 className="text-2xl font-black text-[#00529B] mb-4">Posnet Pro</h3>
                      <ul className="space-y-2 mb-6 text-sm text-slate-600">
                        <li className="flex items-center gap-2"><span className="w-2 h-2 bg-[#64BC26] rounded-full"></span>4G LTE</li>
                        <li className="flex items-center gap-2"><span className="w-2 h-2 bg-[#64BC26] rounded-full"></span>Pantalla Full HD</li>
                        <li className="flex items-center gap-2"><span className="w-2 h-2 bg-[#64BC26] rounded-full"></span>Batería 12h</li>
                        <li className="flex items-center gap-2"><span className="w-2 h-2 bg-[#64BC26] rounded-full"></span>Sistema avanzado</li>
                      </ul>
                      <p className="text-lg font-bold text-[#00A8E8]">Plan Premium</p>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="bg-linear-to-br from-[#F1F5F9] to-white border-2 border-slate-200 rounded-2xl p-8 transition-all">
                      <div className="text-6xl mb-4">🎯</div>
                      <h3 className="text-2xl font-black text-[#00529B] mb-4">Posnet Studio</h3>
                      <ul className="space-y-2 mb-6 text-sm text-slate-600">
                        <li className="flex items-center gap-2"><span className="w-2 h-2 bg-[#64BC26] rounded-full"></span>5G Ultra rápido</li>
                        <li className="flex items-center gap-2"><span className="w-2 h-2 bg-[#64BC26] rounded-full"></span>Pantalla Touch 4K</li>
                        <li className="flex items-center gap-2"><span className="w-2 h-2 bg-[#64BC26] rounded-full"></span>Batería 16h</li>
                        <li className="flex items-center gap-2"><span className="w-2 h-2 bg-[#64BC26] rounded-full"></span>IA integrada</li>
                      </ul>
                      <p className="text-lg font-bold text-[#00A8E8]">Plan Platinum</p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* PRISMA Banner Section (use uploaded banner image, full width inside container) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="mb-20 rounded-3xl overflow-hidden relative"
              >
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                  <div className="bg-linear-to-r from-[#B8E441] via-[#E0F200] to-[#A3D83E] rounded-2xl p-4 shadow-xl flex items-center justify-center">
                    {prismaOK ? (
                      <img
                        src="/prisma-banner.png"
                        alt="PRISMA"
                        className="w-full h-auto max-h-105 object-cover rounded-lg"
                        onError={() => setPrismaOK(false)}
                      />
                    ) : (
                      <div className="w-full max-h-105 flex items-center justify-center rounded-lg p-8 bg-linear-to-r from-[#B8E441] via-[#E0F200] to-[#A3D83E] text-[#083344] font-black">
                        <div className="text-center">
                          <p className="text-xl">PRISMA banner no encontrado</p>
                          <p className="text-sm mt-2 opacity-80">Subir <span className="font-mono">/public/prisma-banner.png</span> para mostrarlo</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48"></div>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Texto */}
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}>
              <h3 className="text-4xl font-black text-slate-800 mb-6 uppercase tracking-tight">MUY IMPORTANTE</h3>
              <p className="text-slate-800 font-bold text-lg mb-4">Les informamos a los comercios adheridos que desde ahora podrán operar normalmente con Tarjeta Titanio en sus Terminales LAPOS.</p>
              <p className="text-slate-800 font-bold text-lg mb-6">En el caso que posean terminales PAYWAY-NEWLAND deberán comunicarse con el Servicio Técnico Oficial de PRISMA para que reprograme e incluya el código de comercio Titanio en sus terminales.</p>
              <div className="inline-block bg-white px-8 py-4 rounded-2xl">
                <p className="text-sm font-black text-slate-600 uppercase">Contacto Técnico PRISMA</p>
              </div>
            </motion.div>
            {/* Imagen Teléfono */}
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} className="flex justify-center">
              <img src="https://via.placeholder.com/300x400/E0F200/333333?text=Terminal+LAPOS" alt="Terminal LAPOS" className="max-w-full h-auto rounded-2xl shadow-2xl" />
            </motion.div>
          </div>
        </div>

        {/* Beneficios para tu Negocio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-[#64BC26] mb-4 text-center uppercase italic">Beneficios para tu Negocio</h2>
          <div className="h-1 w-40 bg-linear-to-r from-[#64BC26] to-[#E0F200] mx-auto mb-16"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beneficios.map((item, i) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="group bg-linear-to-br from-white to-[#F0FFF0] rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-all border-2 border-[#64BC26]/30 hover:border-[#64BC26] cursor-pointer overflow-hidden relative"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#E0F200]/20 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform"></div>
                  <div className="w-16 h-16 bg-linear-to-br from-[#64BC26]/20 to-[#E0F200]/20 rounded-xl flex items-center justify-center mb-4 group-hover:from-[#64BC26]/40 group-hover:to-[#E0F200]/40 transition-all relative z-10">
                    <IconComponent className="text-[#64BC26] group-hover:text-[#4e941d] transition-colors" size={32} />
                  </div>
                  <h3 className="text-xl font-black text-[#64BC26] mb-2 group-hover:text-[#4e941d] transition-colors">{item.title}</h3>
                  <p className="text-slate-600 mb-4 group-hover:text-slate-700 transition-colors font-medium text-sm">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Servicios para tu Negocio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-[#64BC26] mb-4 text-center uppercase italic">Servicios para tu Negocio</h2>
          <div className="h-1 w-40 bg-linear-to-r from-[#64BC26] to-[#E0F200] mx-auto mb-16"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicios.map((item, i) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="group bg-linear-to-br from-white to-[#F0FFF0] rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-all border-2 border-[#64BC26]/30 hover:border-[#64BC26] cursor-pointer overflow-hidden relative"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#E0F200]/20 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform"></div>
                  <div className="w-16 h-16 bg-linear-to-br from-[#64BC26]/20 to-[#E0F200]/20 rounded-xl flex items-center justify-center mb-4 group-hover:from-[#64BC26]/40 group-hover:to-[#E0F200]/40 transition-all relative z-10">
                    <IconComponent className="text-[#64BC26] group-hover:text-[#4e941d] transition-colors" size={32} />
                  </div>
                  <h3 className="text-xl font-black text-[#00529B] mb-3 group-hover:text-[#64BC26] transition-colors relative z-10">{item.title}</h3>
                  <p className="text-base text-slate-700 group-hover:text-slate-800 font-medium relative z-10">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Formulario Asocia tu Comercio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-r from-[#64BC26]/30 via-[#E0F200]/20 to-[#64BC26]/30 blur-3xl rounded-3xl"></div>
            <div className="relative bg-linear-to-br from-white via-[#FFFEF0] to-[#F0FFF0] backdrop-blur-xl rounded-3xl p-10 md:p-16 shadow-2xl border-2 border-[#64BC26]/50 overflow-hidden">
              {/* Decorative corners */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#E0F200]/20 rounded-full -mr-20 -mt-20 blur-2xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#64BC26]/10 rounded-full -ml-20 -mb-20 blur-2xl" />
              
              <div className="relative z-10 text-center mb-14">
                <h2 className="text-4xl md:text-5xl font-black text-[#64BC26] mb-4 uppercase">Asociá tu Comercio</h2>
                <p className="text-xl text-slate-700 font-bold">Completa el formulario y nos comunicaremos contigo para activar tu cuenta</p>
              </div>

              <form className="space-y-8 relative z-10">
                {/* Datos principales */}
                <div>
                  <h3 className="text-2xl font-black text-[#00529B] mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-linear-to-br from-[#64BC26] to-[#E0F200] rounded-full flex items-center justify-center text-white font-black text-sm">1</span>
                    Datos del Comercio
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-black text-[#00529B] uppercase tracking-widest mb-3 block">Nombre del Comercio</label>
                      <input type="text" placeholder="Ej: Mi Negocio SRL" className="w-full p-4 bg-white/80 border-2 border-[#64BC26]/30 focus:border-[#64BC26] focus:bg-white rounded-2xl transition-all outline-none font-bold shadow-sm" />
                    </div>
                    <div>
                      <label className="text-sm font-black text-[#00529B] uppercase tracking-widest mb-3 block">CUIT</label>
                      <input type="text" placeholder="20-12345678-9" className="w-full p-4 bg-white/80 border-2 border-[#64BC26]/30 focus:border-[#64BC26] focus:bg-white rounded-2xl transition-all outline-none font-bold shadow-sm" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="text-sm font-black text-[#00529B] uppercase tracking-widest mb-3 block">Número de Cuenta</label>
                      <input type="text" placeholder="Nro de Cuenta" className="w-full p-4 bg-white/80 border-2 border-[#64BC26]/30 focus:border-[#64BC26] focus:bg-white rounded-2xl transition-all outline-none font-bold shadow-sm" />
                    </div>
                  </div>
                </div>

                {/* Contacto */}
                <div>
                  <h3 className="text-2xl font-black text-[#00529B] mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-linear-to-br from-[#64BC26] to-[#E0F200] rounded-full flex items-center justify-center text-white font-black text-sm">2</span>
                    Datos de Contacto
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-black text-[#00529B] uppercase tracking-widest mb-3 block">Nombre Representante</label>
                      <input type="text" placeholder="Juan Pérez" className="w-full p-4 bg-white/80 border-2 border-[#64BC26]/30 focus:border-[#64BC26] focus:bg-white rounded-2xl transition-all outline-none font-bold shadow-sm" />
                    </div>
                    <div>
                      <label className="text-sm font-black text-[#00529B] uppercase tracking-widest mb-3 block">Teléfono</label>
                      <input type="tel" placeholder="381 000 0000" className="w-full p-4 bg-white/80 border-2 border-[#64BC26]/30 focus:border-[#64BC26] focus:bg-white rounded-2xl transition-all outline-none font-bold shadow-sm" />
                    </div>
                  </div>
                </div>

                {/* Ubicación */}
                <div>
                  <h3 className="text-2xl font-black text-[#00529B] mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-linear-to-br from-[#64BC26] to-[#E0F200] rounded-full flex items-center justify-center text-white font-black text-sm">3</span>
                    Ubicación del Local
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="text-sm font-black text-[#00529B] uppercase tracking-widest mb-3 block">Dirección</label>
                      <input type="text" placeholder="Calle San Martín 853" className="w-full p-4 bg-white/80 border-2 border-[#64BC26]/30 focus:border-[#64BC26] focus:bg-white rounded-2xl transition-all outline-none font-bold shadow-sm" />
                    </div>
                    <div>
                      <label className="text-sm font-black text-[#00529B] uppercase tracking-widest mb-3 block">Ciudad</label>
                      <input type="text" placeholder="San Miguel de Tucumán" className="w-full p-4 bg-white/80 border-2 border-[#64BC26]/30 focus:border-[#64BC26] focus:bg-white rounded-2xl transition-all outline-none font-bold shadow-sm" />
                    </div>
                    <div>
                      <label className="text-sm font-black text-[#00529B] uppercase tracking-widest mb-3 block">Código Postal</label>
                      <input type="text" placeholder="4000" className="w-full p-4 bg-white/80 border-2 border-[#64BC26]/30 focus:border-[#64BC26] focus:bg-white rounded-2xl transition-all outline-none font-bold shadow-sm" />
                    </div>
                  </div>
                </div>

                {/* Tipo de Negocio */}
                <div>
                  <h3 className="text-2xl font-black text-[#00529B] mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-linear-to-br from-[#64BC26] to-[#E0F200] rounded-full flex items-center justify-center text-white font-black text-sm">4</span>
                    Tipo de Negocio
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {['Comercio Minorista', 'Restaurante/Bar', 'Servicios', 'Otro'].map(tipo => (
                      <label key={tipo} className="flex items-center p-4 bg-white border-2 border-[#64BC26]/20 hover:border-[#64BC26] rounded-2xl cursor-pointer transition-all group">
                        <input type="radio" name="tipo" className="w-5 h-5 accent-[#64BC26]" />
                        <span className="ml-3 font-bold text-slate-700 group-hover:text-[#64BC26] transition-colors">{tipo}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Botón Submit */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-linear-to-r from-[#64BC26] via-[#E0F200] to-[#64BC26] text-[#00529B] py-6 rounded-2xl font-black text-xl shadow-xl shadow-green-400/40 hover:shadow-2xl transition-all"
                >
                  ASOCIATE AHORA
                </motion.button>
              </form>
            </div>
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
  );
};