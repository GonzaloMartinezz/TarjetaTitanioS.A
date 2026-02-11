import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Facebook, Instagram } from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

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
            <div className="h-16 w-16 sm:h-20 sm:w-50 rounded-full overflow-hidden border-1 border-green-300 shadow-sm transition-transform group-hover:scale-105">
              <img
                src="/1.4.png"
                alt="Tarjeta Titanio"
                className="h-full w-full object-cover"
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

          {/* 3. Acciones Derecha - Mi Cuenta y Redes */}
          <div className="flex items-center gap-6">
            {/* Botón Mi Cuenta - Más compacto y elegante */}
            <Link
              to="/login"
              className="hidden sm:block bg-[#00529B] text-white px-6 py-2 rounded-full text-[11px] font-black shadow-md hover:bg-[#003d75] transition-all active:scale-95"
            >
              MI CUENTA
            </Link>

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
              <Link
                to="/login"
                className="bg-[#00529B] text-white py-4 rounded-2xl font-black text-center shadow-lg"
                onClick={() => setMobileOpen(false)}
              >
                MI CUENTA
              </Link>
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
