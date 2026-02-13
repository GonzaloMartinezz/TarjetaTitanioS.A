import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, User, Lock, Mail, CreditCard, Phone, AlertCircle, ArrowRight } from 'lucide-react';
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
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: null }));
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
    if (!validate()) return;
    
    if (isLogin) {
      login({
        nombre: 'Usuario',
        apellido: 'Demo',
        email: formData.email || 'usuario@demo.com',
        numeroCuenta: '123456789',
        celular: '381 000 0000'
      });
    } else {
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
    <div className="min-h-screen bg-[#F1F5F9] px-4 pt-32 pb-12 flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-4xl bg-white rounded-[3rem] shadow-2xl border border-slate-100 relative overflow-hidden flex flex-col md:flex-row"
      >
        
        {/* LADO IZQUIERDO: SELECCIÓN (Visible en Desktop) */}
        <div className="hidden md:flex flex-col justify-center items-center w-2/5 bg-gradient-to-br from-[#00529B] to-[#003d75] p-12 text-white relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
           <h2 className="text-4xl font-black mb-6 uppercase italic tracking-tighter relative z-10 text-center">
             {isLogin ? '¡Hola de nuevo!' : 'Unite a Titanio'}
           </h2>
           <p className="text-center opacity-90 mb-8 relative z-10 font-medium">
             {isLogin ? 'Ingresá a tu cuenta para gestionar tus tarjetas y ver tus resúmenes.' : 'Completá tus datos y empezá a disfrutar de beneficios exclusivos.'}
           </p>
           <button 
             onClick={() => setIsLogin(!isLogin)}
             className="bg-white text-[#00529B] px-8 py-3 rounded-2xl font-black shadow-lg hover:scale-105 transition-transform relative z-10"
           >
             {isLogin ? 'CREAR CUENTA' : 'INICIAR SESIÓN'}
           </button>
        </div>

        {/* LADO DERECHO: FORMULARIO */}
        <div className="flex-1 p-8 md:p-12 relative">
          
          {/* Mobile Toggle (Solo visible en celular) */}
          <div className="md:hidden flex bg-slate-100 p-1 rounded-2xl mb-8">
            <button 
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-3 rounded-xl text-xs font-black transition-all ${isLogin ? 'bg-white text-[#00529B] shadow-sm' : 'text-slate-400'}`}
            >
              INGRESAR
            </button>
            <button 
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-3 rounded-xl text-xs font-black transition-all ${!isLogin ? 'bg-white text-[#00529B] shadow-sm' : 'text-slate-400'}`}
            >
              REGISTRARSE
            </button>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-black text-[#00529B] mb-2 uppercase italic tracking-tight">
                {isLogin ? 'Iniciar Sesión' : 'Crear Cuenta'}
            </h2>
            <p className="text-slate-400 font-medium text-sm">
                Ingresá tus datos para continuar
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
                {isLogin ? (
                    <motion.div key="login" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-5">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-[#00529B] uppercase ml-2">DNI</label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                                <input type="text" name="dni" placeholder="Ingresá tu DNI" value={formData.dni} onChange={handleChange} className={`w-full p-4 pl-12 bg-slate-50 rounded-2xl border-2 outline-none font-bold text-slate-700 transition-all ${errors.dni ? 'border-red-500 bg-red-50' : 'border-transparent focus:border-[#00529B] focus:bg-white'}`} />
                            </div>
                            {errors.dni && <p className="text-red-500 text-xs flex items-center gap-1 mt-1 ml-2"><AlertCircle size={12} /> {errors.dni}</p>}
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-[#00529B] uppercase ml-2">Contraseña</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                                <input type="password" name="password" placeholder="••••••••" value={formData.password} onChange={handleChange} className={`w-full p-4 pl-12 bg-slate-50 rounded-2xl border-2 outline-none font-bold text-slate-700 transition-all ${errors.password ? 'border-red-500 bg-red-50' : 'border-transparent focus:border-[#00529B] focus:bg-white'}`} />
                            </div>
                            {errors.password && <p className="text-red-500 text-xs flex items-center gap-1 mt-1 ml-2"><AlertCircle size={12} /> {errors.password}</p>}
                        </div>
                        <div className="text-right">
                            <a href="#" className="text-xs font-bold text-[#00A8E8] hover:underline">¿Olvidaste tu contraseña?</a>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div key="register" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-[#00529B] uppercase ml-2">DNI</label>
                                <input type="text" name="dni" value={formData.dni} onChange={handleChange} className={`w-full p-4 bg-slate-50 rounded-2xl border-2 outline-none font-bold text-slate-700 transition-all ${errors.dni ? 'border-red-500 bg-red-50' : 'border-transparent focus:border-[#00529B] focus:bg-white'}`} placeholder="Sin puntos" />
                                {errors.dni && <p className="text-red-500 text-xs flex items-center gap-1 mt-1 ml-2"><AlertCircle size={12} /> {errors.dni}</p>}
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-[#00529B] uppercase ml-2">Nombre</label>
                                <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} className={`w-full p-4 bg-slate-50 rounded-2xl border-2 outline-none font-bold text-slate-700 transition-all ${errors.nombre ? 'border-red-500 bg-red-50' : 'border-transparent focus:border-[#00529B] focus:bg-white'}`} placeholder="Nombre completo" />
                                {errors.nombre && <p className="text-red-500 text-xs flex items-center gap-1 mt-1 ml-2"><AlertCircle size={12} /> {errors.nombre}</p>}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-[#00529B] uppercase ml-2">N° Cuenta</label>
                            <div className="relative">
                                <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                                <input type="text" name="numeroCuenta" value={formData.numeroCuenta} onChange={handleChange} className={`w-full p-4 pl-12 bg-slate-50 rounded-2xl border-2 outline-none font-bold text-slate-700 transition-all ${errors.numeroCuenta ? 'border-red-500 bg-red-50' : 'border-transparent focus:border-[#00529B] focus:bg-white'}`} placeholder="Tu número de cuenta" />
                            </div>
                            {errors.numeroCuenta && <p className="text-red-500 text-xs flex items-center gap-1 mt-1 ml-2"><AlertCircle size={12} /> {errors.numeroCuenta}</p>}
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-[#00529B] uppercase ml-2">Email</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                                <input type="email" name="email" value={formData.email} onChange={handleChange} className={`w-full p-4 pl-12 bg-slate-50 rounded-2xl border-2 outline-none font-bold text-slate-700 transition-all ${errors.email ? 'border-red-500 bg-red-50' : 'border-transparent focus:border-[#00529B] focus:bg-white'}`} placeholder="correo@ejemplo.com" />
                            </div>
                            {errors.email && <p className="text-red-500 text-xs flex items-center gap-1 mt-1 ml-2"><AlertCircle size={12} /> {errors.email}</p>}
                        </div>

                        <div className="space-y-2">
                             <label className="text-xs font-bold text-[#00529B] uppercase ml-2">Celular</label>
                             <div className="relative">
                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                                <input type="tel" name="celular" value={formData.celular} onChange={handleChange} className={`w-full p-4 pl-12 bg-slate-50 rounded-2xl border-2 outline-none font-bold text-slate-700 transition-all ${errors.celular ? 'border-red-500 bg-red-50' : 'border-transparent focus:border-[#00529B] focus:bg-white'}`} placeholder="381 000 0000" />
                             </div>
                             {errors.celular && <p className="text-red-500 text-xs flex items-center gap-1 mt-1 ml-2"><AlertCircle size={12} /> {errors.celular}</p>}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-5 rounded-2xl font-black text-lg shadow-xl text-white flex items-center justify-center gap-2 mt-8 transition-all ${isLogin ? 'bg-gradient-to-r from-[#00529B] to-[#00A8E8] shadow-blue-200' : 'bg-gradient-to-r from-[#64BC26] to-[#7ed321] shadow-green-200'}`}
            >
              {isLogin ? 'INGRESAR' : 'CREAR CUENTA'} <ArrowRight size={20} />
            </motion.button>
          </form>

          {/* Modal Overlay */}
          <AnimatePresence>
            {showModal && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-white/95 backdrop-blur-sm z-50 flex flex-col items-center justify-center text-center p-8 rounded-[3rem]"
              >
                <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} exit={{ scale: 0.5 }}>
                   <CheckCircle2 size={80} className={isLogin ? "text-[#00529B] mb-4" : "text-[#64BC26] mb-4"} />
                </motion.div>
                <h3 className={`text-3xl font-black mb-2 uppercase italic ${isLogin ? "text-[#00529B]" : "text-[#64BC26]"}`}>
                    {isLogin ? '¡Bienvenido!' : '¡Registro Exitoso!'}
                </h3>
                <p className="text-slate-600 font-medium">
                    {isLogin ? 'Redirigiendo a tu panel...' : 'Tus datos fueron procesados correctamente.'}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </motion.div>
    </div>
  );
};

export default RegisterForm;