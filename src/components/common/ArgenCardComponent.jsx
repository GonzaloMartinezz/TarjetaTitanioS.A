import React from 'react';
import { motion } from 'framer-motion';

const ArgenCardComponent = ({ interactive = false, onMouseMove, onMouseLeave, style }) => {
  return (
    <motion.div
      style={style}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="relative w-full max-w-[480px] group"
    >
      <svg
        viewBox="0 0 600 380"
        className="w-full h-auto drop-shadow-2xl rounded-[1.5rem] overflow-hidden"
      >
        {/* Fondo de la tarjeta */}
        <defs>
          <linearGradient id="cardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#f5f5f5', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#FFE500', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#B8CF00', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#00A8E8', stopOpacity: 1 }} />
          </linearGradient>
        </defs>

        {/* Rectángulo base redondeado */}
        <rect x="0" y="0" width="600" height="380" rx="30" fill="url(#cardGradient)" />

        {/* Línea decorativa superior - Amarillo a Verde */}
        <path
          d="M 80 80 Q 200 40, 350 60 T 550 80"
          stroke="#FFE500"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
        />

        {/* Línea decorativa media - Verde */}
        <path
          d="M 50 160 Q 150 120, 300 150 T 550 180"
          stroke="#B8CF00"
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
        />

        {/* Línea decorativa baja - Azul */}
        <path
          d="M 30 240 Q 180 200, 350 240 T 550 280"
          stroke="#00A8E8"
          strokeWidth="12"
          fill="none"
          strokeLinecap="round"
        />

        {/* Elemento gráfico azul - Iconos de pago */}
        <g transform="translate(80, 200)">
          {/* Icono de tarjeta 1 */}
          <rect x="10" y="10" width="35" height="25" rx="4" fill="#00A8E8" opacity="0.9" />
          <line x1="10" y1="22" x2="45" y2="22" stroke="#fff" strokeWidth="1" opacity="0.5" />

          {/* Icono de tarjeta 2 */}
          <rect x="55" y="15" width="35" height="25" rx="4" fill="#0078B8" opacity="0.9" />
          <line x1="55" y1="27" x2="90" y2="27" stroke="#fff" strokeWidth="1" opacity="0.5" />
        </g>

        {/* Texto "Titanio" - Principal */}
        <text x="100" y="110" fontSize="72" fontWeight="900" fill="#0078B8" fontFamily="Arial, sans-serif" letterSpacing="2">
          Titanio
        </text>

        {/* Subtexto */}
        <text x="100" y="310" fontSize="16" fontWeight="bold" fill="#666" fontFamily="Arial, sans-serif">
          CRÉDITO INMEDIATO
        </text>

        {/* Logo ArgenCard - Lado derecho */}
        <g transform="translate(450, 100)">
          {/* Fondo blanco para el logo */}
          <rect x="0" y="0" width="120" height="120" rx="12" fill="white" stroke="#e0e0e0" strokeWidth="2" />

          {/* Letra "A" en rojo estilizada */}
          <path
            d="M 30 40 L 60 80 L 90 40 M 45 65 L 75 65"
            stroke="#E53935"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Texto ArgenCard */}
          <text x="60" y="105" fontSize="12" fontWeight="bold" fill="#333" fontFamily="Arial, sans-serif" textAnchor="middle">
            ArgenCard
          </text>
        </g>

        {/* Chip de seguridad */}
        <g transform="translate(100, 270)">
          <rect x="0" y="0" width="40" height="32" rx="4" fill="#FFD700" stroke="#DAA520" strokeWidth="1" />
          <circle cx="10" cy="8" r="2" fill="#DAA520" />
          <circle cx="20" cy="8" r="2" fill="#DAA520" />
          <circle cx="30" cy="8" r="2" fill="#DAA520" />
          <circle cx="10" cy="16" r="2" fill="#DAA520" />
          <circle cx="20" cy="16" r="2" fill="#DAA520" />
          <circle cx="30" cy="16" r="2" fill="#DAA520" />
          <circle cx="10" cy="24" r="2" fill="#DAA520" />
          <circle cx="20" cy="24" r="2" fill="#DAA520" />
          <circle cx="30" cy="24" r="2" fill="#DAA520" />
        </g>

        {/* Número de tarjeta */}
        <text x="170" y="280" fontSize="20" fontWeight="bold" fill="#00A8E8" fontFamily="monospace" letterSpacing="3">
          •••• •••• •••• ••••
        </text>

        {/* Nombre titular */}
        <text x="170" y="320" fontSize="12" fontWeight="bold" fill="#666" fontFamily="Arial, sans-serif">
          TITULAR DE LA TARJETA
        </text>

        {/* Fecha de vencimiento */}
        <text x="470" y="325" fontSize="11" fontWeight="bold" fill="#666" fontFamily="Arial, sans-serif" textAnchor="end">
          VENCE: 12/28
        </text>

        {/* CVV */}
        <text x="540" y="280" fontSize="10" fontWeight="bold" fill="#999" fontFamily="Arial, sans-serif" textAnchor="end">
          CVV
        </text>
      </svg>

      {/* Reflejo de luz al pasar el mouse */}
      {interactive && (
        <div className="absolute inset-0 z-20 rounded-[1.5rem] opacity-0 group-hover:opacity-30 transition-opacity duration-300 bg-gradient-to-tr from-transparent via-white/50 to-transparent pointer-events-none" />
      )}
    </motion.div>
  );
};

export default ArgenCardComponent;
