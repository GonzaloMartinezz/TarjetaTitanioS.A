import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, User, ChevronDown, Mail, Phone, CreditCard, Wallet, LogOut, Facebook, Instagram } from 'lucide-react';
import { useAuth } from '../../store/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setProfileOpen(false);
  }, [location]);

  const handleLogout = () => {
    setProfileOpen(false);
    logout();
  };

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Soy Cliente', path: '/clientes' },
    { name: 'Soy Comercio', path: '/comercios' },
    { name: 'Empresa', path: '/empresa' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          
          {/* 1. LOGO */}
          <Link to="/" className="flex items-center gap-2 group">
            <img 
              src="/1.4.png" 
              alt="Tarjeta Titanio" 
              className="h-14 sm:h-16 w-auto object-contain p-1 bg-white rounded-xl border border-slate-100 shadow-sm group-hover:shadow-md transition-all" 
            />
          </Link>

          {/* 2. LINKS DE NAVEGACIÓN (Desktop con lógica de color) */}
          <div className="hidden lg:flex items-center gap-1 bg-white/80 backdrop-blur-sm px-2 py-1.5 rounded-full shadow-sm border border-slate-100/50">
            {navLinks.map((link) => {
              // Lógica para detectar si es el link de comercios
              const isMerchant = link.path === '/comercios';
              
              // Definir clases basadas en si es comercio o no
              const activeClass = isMerchant 
                ? 'bg-[#64BC26] text-white shadow-green-200 shadow-md' 
                : 'bg-[#00529B] text-white shadow-md'; 
                
              const inactiveClass = isMerchant
                ? 'text-slate-500 hover:text-[#64BC26] hover:bg-green-50' 
                : 'text-slate-500 hover:text-[#00529B] hover:bg-slate-50'; 

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-5 py-2 rounded-full text-sm font-black transition-all ${
                    location.pathname === link.path ? activeClass : inactiveClass
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* 3. ACCIONES DERECHA - REDES Y MI CUENTA */}
          <div className="flex items-center gap-4 sm:gap-6">
            
            {/* NUEVO: Redes Sociales (Visibles en Desktop) */}
            <div className="hidden lg:flex items-center gap-3 pr-4 border-r-2 border-slate-200/60">
              <a 
                href="https://www.facebook.com/TarjetaTitanioTucuman" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-[#1877F2] hover:scale-110 transition-all bg-white p-2 rounded-full shadow-sm hover:shadow-md"
              >
                <Facebook size={20} fill="currentColor" className="stroke-none" />
              </a>
              <a 
                href="https://www.instagram.com/tarjetatitanio/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-[#E1306C] hover:scale-110 transition-all bg-white p-2 rounded-full shadow-sm hover:shadow-md"
              >
                <Instagram size={20} />
              </a>
            </div>

            {/* Perfil de Usuario Logueado O Botón MI CUENTA */}
            {user ? (
              <div className="relative">
                <motion.button
                  onClick={() => setProfileOpen(!profileOpen)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="hidden sm:flex items-center gap-3 bg-gradient-to-r from-[#00529B] to-[#00A8E8] text-white px-5 py-2 rounded-full text-[13px] font-black shadow-lg hover:shadow-blue-300/50 transition-all border border-white/20"
                >
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm border border-white/30">
                    <User size={16} className="text-white" />
                  </div>
                  <div className="flex flex-col items-start leading-tight">
                    <span className="text-[10px] font-medium opacity-80 uppercase tracking-wider">Hola,</span>
                    <span className="truncate max-w-[100px]">
                      {user.nombre || "Usuario"}
                    </span>
                  </div>
                  <motion.div animate={{ rotate: profileOpen ? 180 : 0 }}>
                     <ChevronDown size={14} className="opacity-70" />
                  </motion.div>
                </motion.button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {profileOpen && (
                    <>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setProfileOpen(false)}
                        className="fixed inset-0 z-40 cursor-default"
                      />
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, type: "spring", stiffness: 300, damping: 20 }}
                        className="absolute right-0 mt-3 w-80 sm:w-96 bg-white rounded-3xl shadow-2xl shadow-slate-400/50 border border-slate-100 overflow-hidden z-50 ring-4 ring-slate-50"
                      >
                        {/* Header Dropdown */}
                        <div className="bg-gradient-to-br from-[#00529B] to-[#00A8E8] p-6 text-white relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl pointer-events-none" />
                          <div className="flex items-center gap-4 relative z-10">
                            <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-2xl font-black shadow-lg">
                              {user.nombre ? user.nombre.charAt(0).toUpperCase() : "U"}
                            </div>
                            <div>
                              <h3 className="font-black text-xl leading-tight">
                                {user.nombre} {user.apellido}
                              </h3>
                              <p className="text-xs font-medium text-blue-100 mt-1 flex items-center gap-1">
                                <Mail size={12} /> {user.email}
                              </p>
                              {user.celular && (
                                  <p className="text-xs font-medium text-blue-100 flex items-center gap-1">
                                  <Phone size={12} /> {user.celular}
                                  </p>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Body Dropdown */}
                        <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto bg-slate-50/50">
                          {/* Titanio */}
                          <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                            <h4 className="text-xs font-black text-[#00529B] flex items-center gap-2 mb-4 uppercase tracking-widest border-b border-slate-100 pb-2">
                              <CreditCard size={16} className="text-[#00A8E8]" />
                              Límites Titanio
                            </h4>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="bg-blue-50/50 p-3 rounded-xl border border-blue-100 text-center">
                                <p className="text-[10px] font-bold text-slate-400 uppercase mb-1 tracking-wider">Compra Mensual</p>
                                <p className="text-lg font-black text-[#00529B]">$ 450.000</p>
                              </div>
                              <div className="bg-blue-50/50 p-3 rounded-xl border border-blue-100 text-center">
                                <p className="text-[10px] font-bold text-slate-400 uppercase mb-1 tracking-wider">Límite Crédito</p>
                                <p className="text-lg font-black text-[#00529B]">$ 900.000</p>
                              </div>
                            </div>
                          </div>

                          {/* Argencard */}
                          <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                            <h4 className="text-xs font-black text-[#FF4444] flex items-center gap-2 mb-4 uppercase tracking-widest border-b border-slate-100 pb-2">
                              <Wallet size={16} className="text-[#FF6B6B]" />
                              Límites ArgenCard
                            </h4>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="bg-red-50/50 p-3 rounded-xl border border-red-100 text-center">
                                <p className="text-[10px] font-bold text-slate-400 uppercase mb-1 tracking-wider">Compra Mensual</p>
                                <p className="text-lg font-black text-[#FF4444]">$ 300.000</p>
                              </div>
                              <div className="bg-red-50/50 p-3 rounded-xl border border-red-100 text-center">
                                <p className="text-[10px] font-bold text-slate-400 uppercase mb-1 tracking-wider">Límite Crédito</p>
                                <p className="text-lg font-black text-[#FF4444]">$ 600.000</p>
                              </div>
                            </div>
                          </div>

                          {/* Logout */}
                          <button 
                            onClick={handleLogout}
                            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl hover:bg-red-50 transition-colors font-black text-red-600 text-xs uppercase tracking-wide border border-transparent hover:border-red-100"
                          >
                            <LogOut size={16} /> Cerrar Sesión
                          </button>
                        </div>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>

                {/* Mobile Profile Icon */}
                <motion.button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="sm:hidden flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-[#00529B] to-[#00A8E8] text-white font-black text-sm shadow-md"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {user.nombre ? user.nombre[0].toUpperCase() : <User size={20} />}
                </motion.button>
              </div>
            ) : (
              <Link
                to="/login"
                className="hidden sm:flex bg-[#00529B] text-white px-6 py-2.5 rounded-full text-xs font-black shadow-md hover:bg-[#003d75] hover:shadow-lg transition-all active:scale-95 items-center gap-2"
              >
                <User size={16} />
                MI CUENTA
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-[#00529B] hover:bg-slate-100 rounded-full transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 shadow-xl overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navLinks.map((link) => {
                // Lógica de color para menú móvil
                const isMerchant = link.path === '/comercios';
                const activeMobile = isMerchant ? 'bg-[#64BC26] text-white' : 'bg-[#00529B] text-white';
                const inactiveMobile = isMerchant 
                  ? 'text-slate-600 hover:bg-green-50 hover:text-[#64BC26]' 
                  : 'text-slate-600 hover:bg-slate-50 hover:text-[#00529B]';

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-4 py-3 rounded-xl text-base font-bold text-center transition-colors ${
                      location.pathname === link.path ? activeMobile : inactiveMobile
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              
              {/* Botón Ingresar Móvil (solo si no está logueado) */}
              {!user && (
                <Link
                  to="/login"
                  className="block w-full mt-4 bg-[#64BC26] text-white px-4 py-3 rounded-xl text-center font-black"
                >
                  INGRESAR
                </Link>
              )}

              {/* Redes Sociales en Móvil (Opcional, para que no falten) */}
              <div className="flex justify-center gap-6 mt-6 pt-4 border-t border-slate-100">
                 <a href="#" className="text-slate-400 hover:text-[#1877F2]"><Facebook size={24} /></a>
                 <a href="#" className="text-slate-400 hover:text-[#E1306C]"><Instagram size={24} /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;