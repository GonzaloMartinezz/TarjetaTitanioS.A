import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Facebook, Instagram, LogOut, User, Settings, CreditCard, Wallet, DollarSign } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../../store/AuthContext";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setProfileOpen(false);
    navigate('/');
  };

  // Estilo común para el efecto de subrayado animado
  const navLinkStyle =
    "relative group text-sm font-black transition-colors duration-300 uppercase tracking-wider";
  const underlineStyle =
    "absolute left-0 bottom-[-4px] w-0 h-[3px] transition-all duration-300 group-hover:w-full";

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex justify-between items-center">
          {/* 1. Logo - Más grande e imponente */}
          <Link to="/" className="shrink-0 group">
            <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full overflow-hidden shadow-sm transition-transform group-hover:scale-105">
              <img
                src="/1.4.png"
                alt="Tarjeta Titanio"
                className="h-full w-full object-contain"
              />
            </div>
          </Link>

          {/* 2. Menú Central - Centrado absoluto con efecto de subrayado */}
          <div className="hidden md:flex items-center justify-center flex-1 gap-14">
            <Link
              to="/clientes"
              className={`${navLinkStyle} text-[#00529B] hover:text-[#00A8E8]`}
            >
              Soy Cliente
              <span className={`${underlineStyle} bg-[#00A8E8]`}></span>
            </Link>

            <Link
              to="/comercios"
              className={`${navLinkStyle} text-[#64BC26] hover:text-[#4e941d]`}
            >
              Soy Comercio
              <span className={`${underlineStyle} bg-[#64BC26]`}></span>
            </Link>

            <Link
              to="/empresa"
              className={`${navLinkStyle} text-[#00529B] hover:text-[#00A8E8]`}
            >
              Nuestra Empresa
              <span className={`${underlineStyle} bg-[#00A8E8]`}></span>
            </Link>
          </div>

          {/* 3. Acciones Derecha - Mi Cuenta / Perfil Usuario y Redes */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Perfil de Usuario Logueado O Botón MI CUENTA */}
            {user ? (
              <div className="relative">
                <motion.button
                  onClick={() => setProfileOpen(!profileOpen)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="hidden sm:flex items-center gap-3 bg-linear-to-r from-[#00529B] to-[#00A8E8] text-white px-5 py-2 rounded-full text-[11px] font-black shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <User size={16} />
                  </div>
                  <span className="truncate max-w-30">{user.nombre || 'Usuario'}</span>
                </motion.button>

                {/* Dropdown Menu - Right to Left Slide */}
                <AnimatePresence>
                  {profileOpen && (
                    <>
                      {/* Backdrop */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setProfileOpen(false)}
                        className="fixed inset-0 z-40"
                      />
                      
                      {/* Dropdown */}
                      <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-50"
                      >
                        {/* Header */}
                        <div className="bg-linear-to-r from-[#00529B] to-[#00A8E8] p-6 text-white">
                          <h3 className="font-black text-lg mb-1">{user.nombre || 'Usuario'}</h3>
                          <p className="text-sm text-white/80">{user.apellido || ''}</p>
                          <p className="text-xs text-white/70 mt-2">📧 {user.email}</p>
                          <p className="text-xs text-white/70 mt-1">📱 {user.celular}</p>
                        </div>

                        {/* Body: Márgenes y Créditos */}
                        <div className="p-5 space-y-5 max-h-[60vh] overflow-y-auto">
                          {/* Titanio */}
                          <div>
                            <h4 className="text-sm font-black text-[#00529B] flex items-center gap-2 mb-3 uppercase tracking-wider">
                              <CreditCard size={16} className="text-[#00A8E8]" /> Titanio
                            </h4>
                            <div className="grid grid-cols-2 gap-3">
                              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                                <p className="text-[10px] font-bold text-slate-500 uppercase mb-1">Mensual</p>
                                <p className="text-base font-black text-[#00529B]">$ 450.000</p>
                              </div>
                              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                                <p className="text-[10px] font-bold text-slate-500 uppercase mb-1">Crédito</p>
                                <p className="text-base font-black text-[#00529B]">$ 900.000</p>
                              </div>
                            </div>
                          </div>

                          {/* Argencard */}
                          <div>
                            <h4 className="text-sm font-black text-[#FF4444] flex items-center gap-2 mb-3 uppercase tracking-wider">
                              <Wallet size={16} className="text-[#FF6B6B]" /> ArgenCard
                            </h4>
                            <div className="grid grid-cols-2 gap-3">
                              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                                <p className="text-[10px] font-bold text-slate-500 uppercase mb-1">Mensual</p>
                                <p className="text-base font-black text-[#FF4444]">$ 300.000</p>
                              </div>
                              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                                <p className="text-[10px] font-bold text-slate-500 uppercase mb-1">Crédito</p>
                                <p className="text-base font-black text-[#FF4444]">$ 600.000</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Footer: Logout */}
                        <div className="p-2 border-t border-slate-100 bg-slate-50/50">
                          <motion.button
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.05 }}
                            onClick={handleLogout}
                            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl hover:bg-red-50 transition-colors font-black text-red-600 text-sm uppercase tracking-wide"
                          >
                            <LogOut size={18} />
                            <span>Cerrar Sesión</span>
                          </motion.button>
                        </div>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>

                {/* Mobile Profile Button */}
                <motion.button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="sm:hidden flex items-center justify-center w-10 h-10 rounded-full bg-linear-to-r from-[#00529B] to-[#00A8E8] text-white font-black text-sm"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {user.nombre ? user.nombre[0].toUpperCase() : 'U'}
                </motion.button>
              </div>
            ) : (
              <Link
                to="/login"
                className="hidden sm:block bg-[#00529B] text-white px-6 py-2 rounded-full text-[11px] font-black shadow-md hover:bg-[#003d75] transition-all active:scale-95"
              >
                MI CUENTA
              </Link>
            )}

            {/* Redes Sociales - Al final */}
            <div className="hidden lg:flex items-center gap-4 border-l border-slate-200 pl-6">
              <a
                href="https://www.facebook.com/TarjetaTitanioTucuman?locale=es_LA"
                target="_blank"
                rel="noreferrer"
                className="text-[#00529B] hover:text-[#00A8E8] transition-transform hover:scale-110"
              >
                <Facebook size={20} fill="currentColor" />
              </a>
              <a
                href="https://instagram.com/tarjetatitanio"
                target="_blank"
                rel="noreferrer"
                className="text-[#E4405F] hover:scale-110 transition-transform"
              >
                <Instagram size={20} />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition"
            >
              {mobileOpen ? (
                <X size={28} className="text-[#00529B]" />
              ) : (
                <Menu size={28} className="text-[#00529B]" />
              )}
            </button>
          </div>
        </div>

        {/* Menú Móvil */}
        {mobileOpen && (
          <div className="md:hidden mt-4 pb-6 space-y-4 border-t border-slate-100 pt-6 animate-in slide-in-from-top">
            <Link
              to="/clientes"
              className="block text-xl font-black text-[#00529B]"
              onClick={() => setMobileOpen(false)}
            >
              SOY CLIENTE
            </Link>
            <Link
              to="/comercios"
              className="block text-xl font-black text-[#64BC26]"
              onClick={() => setMobileOpen(false)}  
            >
              SOY COMERCIO
            </Link>
            <Link
              to="/empresa"
              className="block text-xl font-black text-slate-600"
              onClick={() => setMobileOpen(false)}
            >
              NUESTRA EMPRESA
            </Link>
            <div className="pt-4 flex flex-col gap-4">
              {user ? (
                <>
                  <div className="bg-linear-to-r from-[#00529B] to-[#00A8E8] text-white p-4 rounded-2xl">
                    <p className="font-black text-base">{user.nombre} {user.apellido}</p>
                    <p className="text-xs text-white/80 mt-1">{user.email}</p>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="bg-red-600 text-white py-4 rounded-2xl font-black text-center shadow-lg flex items-center justify-center gap-2"
                  >
                    <LogOut size={20} /> CERRAR SESIÓN
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  className="bg-[#00529B] text-white py-4 rounded-2xl font-black text-center shadow-lg"
                  onClick={() => setMobileOpen(false)}
                >
                  MI CUENTA
                </Link>
              )}
              <div className="flex justify-center gap-10 py-4 border-t border-slate-100 mt-2">
                <Facebook size={30} className="text-[#00529B]" />
                <Instagram size={30} className="text-[#E4405F]" />
              </div>
            </div>
          </div>
        )}
      </div>

    </nav>
  );
};

export default Navbar;
