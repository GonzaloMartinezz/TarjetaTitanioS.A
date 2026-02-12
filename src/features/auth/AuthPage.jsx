import { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Mail, Lock, User, Eye, EyeOff, CheckCircle2, ArrowRight, Shield } from 'lucide-react';
import { useAuth } from '../../store/AuthContext';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    nombre: '',
    apellido: '',
    celular: '',
    confirmPassword: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const { login } = useAuth();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Aquí puedes validar los datos según necesites
    if (!isLogin && formData.password !== formData.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    // Guardar usuario en contexto
    const userData = {
      nombre: formData.nombre,
      apellido: formData.apellido,
      email: formData.email,
      celular: formData.celular
    };

    login(userData);
    setSubmitted(true);
    
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ email: '', password: '', nombre: '', apellido: '', celular: '', confirmPassword: '' });
      // Opcionalmente redirigir a home o dashboard
      // navigate('/clientes');
    }, 5000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex items-center justify-center px-4 relative overflow-hidden bg-linear-to-br from-[#00529B]/10 via-[#00A8E8]/5 to-[#64BC26]/10">
        {/* Animated Blur Background */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#00A8E8]/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#00529B]/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-[#64BC26]/20 rounded-full blur-3xl" />

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="relative z-10 bg-white/98 backdrop-blur-xl rounded-[3rem] p-12 shadow-2xl max-w-md w-full border-2 border-white text-center"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-r from-[#64BC26] to-[#7ed321] blur-2xl opacity-50" />
              <CheckCircle2 size={100} className="text-[#64BC26] relative" strokeWidth={1.5} />
            </div>
          </motion.div>
          <h2 className="text-4xl font-black text-[#00529B] mb-3">¡Bienvenido!</h2>
          <p className="text-slate-600 mb-8 text-lg font-bold">Tu cuenta ha sido creada exitosamente</p>
          <div className="space-y-3 text-sm text-slate-700 mb-8">
            <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="flex items-center justify-center gap-2 font-bold">
              <span className="text-[#64BC26]">✓</span> Cuenta activada
            </motion.p>
            <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="flex items-center justify-center gap-2 font-bold">
              <span className="text-[#64BC26]">✓</span> Verificación de correo enviada
            </motion.p>
            <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="flex items-center justify-center gap-2 font-bold">
              <span className="text-[#64BC26]">✓</span> Asesor se contactará pronto
            </motion.p>
          </div>
          <p className="text-xs text-slate-500 italic">Redirigiéndote en segundos...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20 flex items-center justify-center px-4 relative overflow-hidden bg-linear-to-br from-[#00529B]/15 via-slate-50 to-[#00A8E8]/15">
      {/* Animated Blur Background */}
      <div className="absolute -top-96 -right-96 w-150 h-150 bg-linear-to-br from-[#00A8E8]/40 to-transparent rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-96 -left-96 w-150 h-150 bg-linear-to-tr from-[#00529B]/40 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#64BC26]/20 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-3xl"
      >
        {/* Card Container - LARGER */}
        <div className="bg-white/97 backdrop-blur-2xl rounded-[3.5rem] shadow-2xl overflow-hidden border-2 border-white relative">
          
          {/* Gradient Background Corners */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-br from-[#00A8E8]/30 to-transparent rounded-full -mr-48 -mt-48 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-linear-to-tr from-[#00529B]/30 to-transparent rounded-full -ml-48 -mb-48 pointer-events-none" />
          
          {/* Header with gradient - LARGER */}
          <div className="bg-linear-to-r from-[#00529B] via-[#1B5E9E] to-[#00A8E8] p-12 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -ml-20 -mt-20" />
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full -mr-20 -mb-20" />
            </div>
            <motion.div
              animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="mb-6 flex justify-center relative z-10"
            >
              <CreditCard size={56} strokeWidth={1.5} />
            </motion.div>
            <h1 className="text-5xl font-black mb-2 drop-shadow-lg">TITANIO 2026</h1>
            <p className="text-white/90 text-base font-bold drop-shadow">Accede a tu cuenta exclusiva de beneficios premium</p>
          </div>

          {/* Tabs - LARGER */}
          <div className="px-10 pt-10">
            <div className="flex gap-3 bg-slate-100/80 p-2 rounded-2xl mb-10">
              <motion.button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-4 rounded-xl font-black text-base transition-all ${
                  isLogin
                    ? 'bg-linear-to-r from-[#00529B] to-[#00A8E8] text-white shadow-xl shadow-blue-500/30'
                    : 'text-slate-600 hover:text-slate-800'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Iniciar Sesión
              </motion.button>
              <motion.button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-4 rounded-xl font-black text-base transition-all ${
                  !isLogin
                    ? 'bg-linear-to-r from-[#64BC26] to-[#7ed321] text-white shadow-xl shadow-green-500/30'
                    : 'text-slate-600 hover:text-slate-800'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Registrarse
              </motion.button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="pb-10 px-2">
              <div className="space-y-5">
                {/* Name Field - Only for Register */}
                {!isLogin && (
                  <>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                    >
                      <label className="text-sm font-black text-[#00529B] uppercase tracking-widest block mb-3">
                        Nombre
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-4 text-[#00A8E8]" size={22} />
                        <input
                          type="text"
                          name="nombre"
                          value={formData.nombre}
                          onChange={handleChange}
                          placeholder="Juan"
                          required
                          className="w-full pl-14 pr-6 py-4 bg-linear-to-br from-slate-50 to-slate-100 border-2 border-slate-300 rounded-2xl focus:border-[#00A8E8] focus:ring-4 focus:ring-[#00A8E8]/30 focus:bg-white transition-all outline-none font-bold text-base"
                        />
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 }}
                    >
                      <label className="text-sm font-black text-[#00529B] uppercase tracking-widest block mb-3">
                        Apellido
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-4 text-[#00A8E8]" size={22} />
                        <input
                          type="text"
                          name="apellido"
                          value={formData.apellido}
                          onChange={handleChange}
                          placeholder="Pérez"
                          required
                          className="w-full pl-14 pr-6 py-4 bg-linear-to-br from-slate-50 to-slate-100 border-2 border-slate-300 rounded-2xl focus:border-[#00A8E8] focus:ring-4 focus:ring-[#00A8E8]/30 focus:bg-white transition-all outline-none font-bold text-base"
                        />
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <label className="text-sm font-black text-[#00529B] uppercase tracking-widest block mb-3">
                        Celular
                      </label>
                      <div className="relative">
                        <CreditCard className="absolute left-4 top-4 text-[#00A8E8]" size={22} />
                        <input
                          type="tel"
                          name="celular"
                          value={formData.celular}
                          onChange={handleChange}
                          placeholder="381 000 0000"
                          required
                          className="w-full pl-14 pr-6 py-4 bg-linear-to-br from-slate-50 to-slate-100 border-2 border-slate-300 rounded-2xl focus:border-[#00A8E8] focus:ring-4 focus:ring-[#00A8E8]/30 focus:bg-white transition-all outline-none font-bold text-base"
                        />
                      </div>
                    </motion.div>
                  </>
                )}

                {/* Email Field */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: !isLogin ? 0.15 : 0.05 }}
                >
                  <label className="text-sm font-black text-[#00529B] uppercase tracking-widest block mb-3">
                    Correo Electrónico
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-4 text-[#00A8E8]" size={22} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      required
                      className="w-full pl-14 pr-6 py-4 bg-linear-to-br from-slate-50 to-slate-100 border-2 border-slate-300 rounded-2xl focus:border-[#00A8E8] focus:ring-4 focus:ring-[#00A8E8]/30 focus:bg-white transition-all outline-none font-bold text-base"
                    />
                  </div>
                </motion.div>

                {/* Password Field */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: !isLogin ? 0.2 : 0.1 }}
                >
                  <label className="text-sm font-black text-[#00529B] uppercase tracking-widest block mb-3">
                    Contraseña
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-4 text-[#00A8E8]" size={22} />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="••••••••••••"
                      required
                      className="w-full pl-14 pr-14 py-4 bg-linear-to-br from-slate-50 to-slate-100 border-2 border-slate-300 rounded-2xl focus:border-[#00A8E8] focus:ring-4 focus:ring-[#00A8E8]/30 focus:bg-white transition-all outline-none font-bold text-base"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-4 text-slate-400 hover:text-[#00A8E8] transition"
                    >
                      {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
                    </button>
                  </div>
                </motion.div>

                {/* Confirm Password - Only for Register */}
                {!isLogin && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 }}
                  >
                    <label className="text-sm font-black text-[#00529B] uppercase tracking-widest block mb-3">
                      Confirmar Contraseña
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-4 text-[#00A8E8]" size={22} />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="••••••••••••"
                        required
                        className="w-full pl-14 pr-6 py-4 bg-linear-to-br from-slate-50 to-slate-100 border-2 border-slate-300 rounded-2xl focus:border-[#00A8E8] focus:ring-4 focus:ring-[#00A8E8]/30 focus:bg-white transition-all outline-none font-bold text-base"
                      />
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Remember Me / Forgot Password */}
              {isLogin && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }} className="flex justify-between items-center mt-6 text-sm">
                  <label className="flex items-center gap-3 cursor-pointer font-bold text-slate-700">
                    <input type="checkbox" className="w-5 h-5 rounded accent-[#00A8E8]" />
                    <span>Recuérdame</span>
                  </label>
                  <button type="button" className="text-[#00A8E8] hover:text-[#00529B] font-black transition">
                    ¿Olvidaste?
                  </button>
                </motion.div>
              )}

              {/* Submit Button - LARGER */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className={`w-full mt-10 py-5 rounded-2xl font-black text-lg shadow-xl transition-all flex items-center justify-center gap-2 ${
                  isLogin
                    ? 'bg-linear-to-r from-[#00529B] via-[#1B5E9E] to-[#00A8E8] text-white shadow-blue-500/40 hover:shadow-2xl'
                    : 'bg-linear-to-r from-[#64BC26] via-[#7ed321] to-[#64BC26] text-white shadow-green-500/40 hover:shadow-2xl'
                }`}
              >
                {isLogin ? 'INICIAR SESIÓN' : 'CREAR CUENTA'} <ArrowRight size={20} />
              </motion.button>

              {/* Terms */}
              <p className="text-center text-xs text-slate-500 mt-5 font-bold">
                Al continuar, aceptas nuestros{' '}
                <button type="button" className="text-[#00A8E8] font-black hover:underline">
                  términos y condiciones
                </button>
              </p>
            </form>
          </div>

          {/* Footer */}
          <div className="bg-linear-to-r from-slate-100/50 to-slate-50/50 px-10 py-6 text-center border-t-2 border-slate-200">
            <p className="text-base text-slate-700 font-bold">
              {isLogin ? '¿No tienes cuenta?' : '¿Ya tienes cuenta?'}{' '}
              <motion.button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-[#00A8E8] font-black hover:text-[#00529B] transition inline-flex items-center gap-1"
                whileHover={{ scale: 1.05 }}
              >
                {isLogin ? 'Regístrate aquí' : 'Inicia sesión aquí'} <ArrowRight size={16} />
              </motion.button>
            </p>
          </div>
        </div>

        {/* Security Badge */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/50 backdrop-blur-md rounded-full border border-slate-200">
            <Shield size={18} className="text-[#64BC26]" />
            <span className="text-sm font-bold text-slate-700">Conexión segura y encriptada</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AuthPage;