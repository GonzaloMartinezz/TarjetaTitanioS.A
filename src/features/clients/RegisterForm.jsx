// src/features/clients/RegisterForm.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, User, Lock, Mail, CreditCard, Phone, AlertCircle } from 'lucide-react';
import { useAuth } from '../../store/AuthContext';

const RegisterForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    dni: '',
    password: '',
    nombre: '',
    numeroCuenta: '',
    email: '',
    celular: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (isLogin) {
      if (!formData.dni) newErrors.dni = 'El DNI es obligatorio.';
      if (!formData.password) newErrors.password = 'La contraseña es obligatoria.';
    } else {
      if (!formData.dni) newErrors.dni = 'El DNI es obligatorio.';
      if (!formData.nombre) newErrors.nombre = 'El nombre es obligatorio.';
      if (!formData.numeroCuenta) newErrors.numeroCuenta = 'El número de cuenta es obligatorio.';
      if (!formData.email) {
        newErrors.email = 'El email es obligatorio.';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Formato de email inválido.';
      }
      if (!formData.celular) {
        newErrors.celular = 'El celular es obligatorio.';
      } else if (!/^[\d\s\-\+()]+$/.test(formData.celular) || formData.celular.replace(/\D/g, '').length < 10) {
        newErrors.celular = 'Formato de celular inválido (mín. 10 dígitos).';
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }
    
    if (isLogin) {
      // Simular login
      login({
        nombre: 'Usuario',
        apellido: 'Demo',
        email: formData.email || 'usuario@demo.com',
        numeroCuenta: '123456789',
        celular: '381 000 0000'
      });
    } else {
      // Simular registro
      const [nombre, ...apellidoParts] = formData.nombre.split(' ');
      
      login({
        nombre: nombre || 'Usuario',
        apellido: apellidoParts.join(' ') || '',
        email: formData.email,
        numeroCuenta: formData.numeroCuenta,
        celular: formData.celular
      });
    }

    setShowModal(true);
    setTimeout(() => setShowModal(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#F1F5F9] px-4 pt-40 pb-12">
      <div className="w-full max-w-6xl mx-auto bg-white rounded-[40px] shadow-2xl p-8 md:p-12 border border-slate-100 relative overflow-hidden">
      
      {/* Header / Toggle */}
      <div className="flex justify-center mb-10 bg-slate-100 p-1 rounded-2xl max-w-md mx-auto">
        <button 
          onClick={() => setIsLogin(true)}
          className={`flex-1 py-3 rounded-xl text-sm font-black transition-all ${isLogin ? 'bg-white text-[#00529B] shadow-md' : 'text-slate-400 hover:text-slate-600'}`}
        >
          INICIAR SESIÓN
        </button>
        <button 
          onClick={() => setIsLogin(false)}
          className={`flex-1 py-3 rounded-xl text-sm font-black transition-all ${!isLogin ? 'bg-white text-[#00529B] shadow-md' : 'text-slate-400 hover:text-slate-600'}`}
        >
          REGISTRARSE
        </button>
      </div>

      <div className="text-center mb-8">
        <h2 className="text-3xl font-black text-[#00529B] mb-2">
            Titanio 2026
        </h2>
        <p className="text-slate-400">
            Accedé a tu cuenta exclusiva de beneficios premium
        </p>
      </div>
      
      <form className="space-y-6 max-w-2xl mx-auto" onSubmit={handleSubmit}>
        <AnimatePresence mode="wait">
            {isLogin ? (
                <motion.div key="login" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-[#00529B] uppercase ml-2">DNI</label>
                        <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                            <input type="text" name="dni" placeholder="Ingresá tu DNI" value={formData.dni} onChange={handleChange} className={`w-full p-4 pl-12 bg-slate-50 rounded-2xl border-2 transition-all outline-none font-bold text-slate-700 ${errors.dni ? 'border-red-500 focus:bg-red-50' : 'border-transparent focus:border-[#00A8E8] focus:bg-white'}`} />
                        </div>
                        {errors.dni && <p className="text-red-500 text-xs flex items-center gap-1 mt-1 ml-2"><AlertCircle size={14} /> {errors.dni}</p>}
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-[#00529B] uppercase ml-2">Contraseña</label>
                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                            <input type="password" name="password" placeholder="••••••••" value={formData.password} onChange={handleChange} className={`w-full p-4 pl-12 bg-slate-50 rounded-2xl border-2 transition-all outline-none font-bold text-slate-700 ${errors.password ? 'border-red-500 focus:bg-red-50' : 'border-transparent focus:border-[#00A8E8] focus:bg-white'}`} />
                        </div>
                        {errors.password && <p className="text-red-500 text-xs flex items-center gap-1 mt-1 ml-2"><AlertCircle size={14} /> {errors.password}</p>}
                    </div>
                    <div className="text-right">
                        <a href="#" className="text-sm font-bold text-[#00A8E8] hover:underline">¿Olvidaste tu contraseña?</a>
                    </div>
                </motion.div>
            ) : (
                <motion.div key="register" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-[#00529B] uppercase ml-2">DNI</label>
                            <input type="text" name="dni" placeholder="Sin puntos" value={formData.dni} onChange={handleChange} className={`w-full p-4 bg-slate-50 rounded-2xl border-2 transition-all outline-none font-bold text-slate-700 ${errors.dni ? 'border-red-500 focus:bg-red-50' : 'border-transparent focus:border-[#00A8E8] focus:bg-white'}`} />
                            {errors.dni && <p className="text-red-500 text-xs flex items-center gap-1 mt-1"><AlertCircle size={14} /> {errors.dni}</p>}
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-[#00529B] uppercase ml-2">Nombre Completo</label>
                            <input type="text" name="nombre" placeholder="Nombre y Apellido" value={formData.nombre} onChange={handleChange} className={`w-full p-4 bg-slate-50 rounded-2xl border-2 transition-all outline-none font-bold text-slate-700 ${errors.nombre ? 'border-red-500 focus:bg-red-50' : 'border-transparent focus:border-[#00A8E8] focus:bg-white'}`} />
                            {errors.nombre && <p className="text-red-500 text-xs flex items-center gap-1 mt-1"><AlertCircle size={14} /> {errors.nombre}</p>}
                        </div>

                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-[#00529B] uppercase ml-2">Número de Cuenta</label>
                        <div className="relative">
                            <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                            <input type="text" name="numeroCuenta" placeholder="Tu número de cuenta" value={formData.numeroCuenta} onChange={handleChange} className={`w-full p-4 pl-12 bg-slate-50 rounded-2xl border-2 transition-all outline-none font-bold text-slate-700 ${errors.numeroCuenta ? 'border-red-500 focus:bg-red-50' : 'border-transparent focus:border-[#00A8E8] focus:bg-white'}`} />
                        </div>
                        {errors.numeroCuenta && <p className="text-red-500 text-xs flex items-center gap-1 mt-1 ml-2"><AlertCircle size={14} /> {errors.numeroCuenta}</p>}
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-[#00529B] uppercase ml-2">Email</label>
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                            <input type="email" name="email" placeholder="correo@ejemplo.com" value={formData.email} onChange={handleChange} className={`w-full p-4 pl-12 bg-slate-50 rounded-2xl border-2 transition-all outline-none font-bold text-slate-700 ${errors.email ? 'border-red-500 focus:bg-red-50' : 'border-transparent focus:border-[#00A8E8] focus:bg-white'}`} />
                        </div>
                        {errors.email && <p className="text-red-500 text-xs flex items-center gap-1 mt-1 ml-2"><AlertCircle size={14} /> {errors.email}</p>}
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-[#00529B] uppercase ml-2">Celular</label>
                        <div className="relative">
                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                            <input type="tel" name="celular" placeholder="381 000 0000" value={formData.celular} onChange={handleChange} className={`w-full p-4 pl-12 bg-slate-50 rounded-2xl border-2 transition-all outline-none font-bold text-slate-700 ${errors.celular ? 'border-red-500 focus:bg-red-50' : 'border-transparent focus:border-[#00A8E8] focus:bg-white'}`} />
                        </div>
                        {errors.celular && <p className="text-red-500 text-xs flex items-center gap-1 mt-1 ml-2"><AlertCircle size={14} /> {errors.celular}</p>}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>

        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-linear-to-r from-[#64BC26] to-[#7ed321] text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-green-200 transition-transform mt-6"
        >
          {isLogin ? 'INGRESAR' : 'CREAR CUENTA'}
        </motion.button>
      </form>

      {/* Modal de Éxito Verde */}
      <AnimatePresence>
        {showModal && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-[40px] flex flex-col items-center justify-center z-20 p-8 text-center"
          >
            <CheckCircle2 size={80} className="text-[#64BC26] mb-4" />
            <h3 className="text-3xl font-black text-[#64BC26] mb-2">
                {isLogin ? '¡BIENVENIDO!' : '¡REGISTRO EXITOSO!'}
            </h3>
            <p className="text-slate-600 font-medium">
                {isLogin ? 'Has iniciado sesión correctamente.' : 'Tus datos han sido procesados correctamente.'}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </div>
  );
};

export default RegisterForm;