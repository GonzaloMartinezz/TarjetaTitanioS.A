import { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Mail, Lock, User, Eye, EyeOff, CheckCircle2 } from 'lucide-react';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    nombre: '',
    confirmPassword: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ email: '', password: '', nombre: '', confirmPassword: '' });
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex items-center justify-center px-4 relative overflow-hidden">
        {/* Animated Blur Background */}
        <div className="absolute inset-0 bg-linear-to-br from-[#00529B]/5 via-[#00A8E8]/5 to-[#64BC26]/5" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#00A8E8]/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#64BC26]/20 rounded-full blur-3xl" />

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="relative z-10 bg-white/95 backdrop-blur-xl rounded-3xl p-8 sm:p-12 shadow-2xl max-w-md w-full border border-white/50 text-center"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5 }}
            className="mb-6 flex justify-center"
          >
            <CheckCircle2 size={80} className="text-[#64BC26]" />
          </motion.div>
          <h2 className="text-3xl font-black text-[#00529B] mb-2">¡Bienvenido!</h2>
          <p className="text-slate-600 mb-6">Tu solicitud ha sido registrada correctamente</p>
          <div className="space-y-2 text-sm text-slate-600">
            <p>✓ Verificación de correo enviada</p>
            <p>✓ Asesor se contactará pronto</p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated Blur Background */}
      <div className="absolute inset-0 bg-linear-to-br from-[#00529B]/5 via-[#00A8E8]/5 to-[#64BC26]/5" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#00A8E8]/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#64BC26]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Card Container */}
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/50">
          
          {/* Header with gradient */}
          <div className="bg-linear-to-r from-[#00529B] to-[#00A8E8] p-8 sm:p-10 text-white text-center">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mb-4 flex justify-center"
            >
              <CreditCard size={48} />
            </motion.div>
            <h1 className="text-3xl font-black mb-2">Titanio 2026</h1>
            <p className="text-white/80 text-sm">Tu acceso seguro a beneficios</p>
          </div>

          {/* Tabs */}
          <div className="px-6 sm:px-8 pt-6">
            <div className="flex bg-slate-100 p-1.5 rounded-xl mb-8">
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-2.5 rounded-lg font-bold text-sm transition ${
                  isLogin
                    ? 'bg-white text-[#00529B] shadow-md'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                Ingresar
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-2.5 rounded-lg font-bold text-sm transition ${
                  !isLogin
                    ? 'bg-white text-[#00529B] shadow-md'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                Registrarse
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="pb-8">
              <div className="space-y-4">
                {/* Name Field - Only for Register */}
                {!isLogin && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <label className="text-xs font-bold text-[#00529B] uppercase tracking-widest block mb-2">
                      Nombre Completo
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-3.5 text-[#00A8E8]" size={20} />
                      <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        placeholder="Juan Pérez"
                        className="w-full pl-12 pr-4 py-3 bg-linear-to-r from-slate-50 to-slate-100 border-2 border-slate-200 rounded-xl focus:border-[#00A8E8] focus:ring-4 focus:ring-[#00A8E8]/20 transition-all outline-none"
                      />
                    </div>
                  </motion.div>
                )}

                {/* Email Field */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <label className="text-xs font-bold text-[#00529B] uppercase tracking-widest block mb-2">
                    Correo Electrónico
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-3.5 text-[#00A8E8]" size={20} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="correo@ejemplo.com"
                      required
                      className="w-full pl-12 pr-4 py-3 bg-linear-to-r from-slate-50 to-slate-100 border-2 border-slate-200 rounded-xl focus:border-[#00A8E8] focus:ring-4 focus:ring-[#00A8E8]/20 transition-all outline-none"
                    />
                  </div>
                </motion.div>

                {/* Password Field */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="text-xs font-bold text-[#00529B] uppercase tracking-widest block mb-2">
                    Contraseña
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-3.5 text-[#00A8E8]" size={20} />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="••••••••"
                      required
                      className="w-full pl-12 pr-12 py-3 bg-linear-to-r from-slate-50 to-slate-100 border-2 border-slate-200 rounded-xl focus:border-[#00A8E8] focus:ring-4 focus:ring-[#00A8E8]/20 transition-all outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-3.5 text-slate-400 hover:text-[#00A8E8] transition"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </motion.div>

                {/* Confirm Password - Only for Register */}
                {!isLogin && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <label className="text-xs font-bold text-[#00529B] uppercase tracking-widest block mb-2">
                      Confirmar Contraseña
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-3.5 text-[#00A8E8]" size={20} />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="••••••••"
                        required
                        className="w-full pl-12 pr-4 py-3 bg-linear-to-r from-slate-50 to-slate-100 border-2 border-slate-200 rounded-xl focus:border-[#00A8E8] focus:ring-4 focus:ring-[#00A8E8]/20 transition-all outline-none"
                      />
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Remember Me / Forgot Password */}
              {isLogin && (
                <div className="flex justify-between items-center mt-4 text-xs">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded accent-[#00A8E8]" />
                    <span className="text-slate-600">Recuérdame</span>
                  </label>
                  <button type="button" className="text-[#00A8E8] hover:text-[#00529B] font-bold">
                    ¿Olvidaste tu contraseña?
                  </button>
                </div>
              )}

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full mt-8 py-3.5 bg-linear-to-r from-[#00529B] to-[#00A8E8] text-white rounded-xl font-black text-lg shadow-xl shadow-blue-500/30 hover:shadow-2xl transition-all"
              >
                {isLogin ? 'Iniciar Sesión' : 'Crear Cuenta'}
              </motion.button>

              {/* Terms */}
              <p className="text-center text-xs text-slate-500 mt-4">
                Al continuar, aceptas nuestros{' '}
                <button type="button" className="text-[#00A8E8] font-bold hover:underline">
                  términos y condiciones
                </button>
              </p>
            </form>
          </div>

          {/* Footer */}
          <div className="bg-slate-50/50 px-6 sm:px-8 py-4 text-center border-t border-slate-200">
            <p className="text-sm text-slate-600">
              {isLogin ? '¿No tienes cuenta?' : '¿Ya tienes cuenta?'}{' '}
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-[#00A8E8] font-bold hover:text-[#00529B] transition"
              >
                {isLogin ? 'Regístrate' : 'Inicia sesión'}
              </button>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthPage;