import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertCircle, User, Mail, Phone, FileText } from 'lucide-react';

const SolicitudForm = () => {
  const [formData, setFormData] = useState({
    dni: '',
    nombre: '',
    apellido: '',
    celular: '',
    email: '',
    numeroCuenta: '',
    tipoTrabajo: '',
    categoria: '',
    aceptaTerminos: false
  });

  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    // Validar DNI
    if (!formData.dni) {
      newErrors.dni = 'El DNI es obligatorio';
    } else if (!/^\d{6,8}$/.test(formData.dni)) {
      newErrors.dni = 'DNI inválido (sin puntos, 6-8 dígitos)';
    }

    // Validar nombre
    if (!formData.nombre || formData.nombre.trim() === '') {
      newErrors.nombre = 'El nombre es obligatorio';
    }

    // Validar apellido
    if (!formData.apellido || formData.apellido.trim() === '') {
      newErrors.apellido = 'El apellido es obligatorio';
    }

    // Validar celular
    if (!formData.celular) {
      newErrors.celular = 'El celular es obligatorio';
    } else if (!/^[\d\s\-\+()]+$/.test(formData.celular) || formData.celular.replace(/\D/g, '').length < 10) {
      newErrors.celular = 'Celular inválido';
    }

    // Validar email
    if (!formData.email) {
      newErrors.email = 'El email es obligatorio';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    // Validar número de cuenta
    if (!formData.numeroCuenta) {
      newErrors.numeroCuenta = 'El número de cuenta es obligatorio';
    }

    // Validar tipo de trabajo
    if (!formData.tipoTrabajo) {
      newErrors.tipoTrabajo = 'Selecciona tu situación laboral';
    }

    // Validar categoría
    if (!formData.categoria) {
      newErrors.categoria = 'Selecciona una categoría';
    }

    // Validar términos
    if (!formData.aceptaTerminos) {
      newErrors.aceptaTerminos = 'Debes aceptar los términos y condiciones';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Limpiar error del campo cuando el usuario empieza a escribir
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simular envío
      await new Promise(resolve => setTimeout(resolve, 1500));
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
        setFormData({
          dni: '',
          nombre: '',
          apellido: '',
          celular: '',
          email: '',
          numeroCuenta: '',
          tipoTrabajo: '',
          categoria: '',
          aceptaTerminos: false
        });
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 bg-linear-to-br from-[#00529B] via-[#00A8E8] to-[#00529B] px-4 sm:px-6">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto"
      >
        <div className="bg-white rounded-4xl shadow-2xl overflow-hidden border border-slate-200">
          {/* Header */}
          <div className="bg-linear-to-r from-[#00529B] to-[#00A8E8] p-8 sm:p-12 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <FileText size={32} className="text-white" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-3">SOLICITUD ONLINE</h1>
            <p className="text-white/90 max-w-md mx-auto font-medium">Completá tus datos y será procesada a la brevedad. Nos comunicaremos para confirmar.</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-8 sm:p-12 space-y-8">
            {/* Sección Datos Personales */}
            <div>
              <h2 className="text-2xl font-black text-[#00529B] mb-6 flex items-center gap-3">
                <User size={28} className="text-[#00A8E8]" />
                Datos Personales
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormInput
                  label="DNI"
                  name="dni"
                  placeholder="Ej: 30444555"
                  value={formData.dni}
                  onChange={handleChange}
                  error={errors.dni}
                />
                <FormInput
                  label="Nombre"
                  name="nombre"
                  placeholder="Tu nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  error={errors.nombre}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <FormInput
                  label="Apellido"
                  name="apellido"
                  placeholder="Tu apellido"
                  value={formData.apellido}
                  onChange={handleChange}
                  error={errors.apellido}
                />
                <FormInput
                  label="Celular"
                  name="celular"
                  placeholder="381 000 0000"
                  value={formData.celular}
                  onChange={handleChange}
                  error={errors.celular}
                />
              </div>

              <FormInput
                label="Número de Cuenta"
                name="numeroCuenta"
                placeholder="Tu número de cuenta"
                value={formData.numeroCuenta}
                onChange={handleChange}
                error={errors.numeroCuenta}
              />
            </div>

            {/* Sección Contacto */}
            <div className="border-t pt-8">
              <h2 className="text-2xl font-black text-[#00529B] mb-6 flex items-center gap-3">
                <Mail size={28} className="text-[#00A8E8]" />
                Contacto
              </h2>
              
              <FormInput
                label="Email"
                name="email"
                type="email"
                placeholder="correo@ejemplo.com"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
              />
            </div>

            {/* Sección Situación Laboral */}
            <div className="border-t pt-8">
              <label className="text-xl font-black text-[#00529B] block mb-6">Situación Laboral</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Público', 'Privado', 'Monotributista', 'Jubilado'].map(op => (
                  <label 
                    key={op}
                    className={`p-4 rounded-2xl border-2 cursor-pointer transition-all font-bold text-center ${
                      formData.tipoTrabajo === op
                        ? 'bg-linear-to-r from-[#00529B] to-[#00A8E8] border-[#00529B] text-white shadow-lg'
                        : 'bg-slate-50 border-slate-300 text-slate-700 hover:border-[#00A8E8]'
                    }`}
                  >
                    <input 
                      type="radio" 
                      name="tipoTrabajo" 
                      value={op}
                      checked={formData.tipoTrabajo === op}
                      onChange={handleChange}
                      className="hidden"
                    />
                    {op}
                  </label>
                ))}
              </div>
              {errors.tipoTrabajo && <p className="text-red-500 text-sm mt-2 flex items-center gap-2"><AlertCircle size={16} /> {errors.tipoTrabajo}</p>}
            </div>

            {/* Sección Categoría */}
            <div className="border-t pt-8">
              <label className="text-xl font-black text-[#00529B] block mb-6">Categoría de Cliente</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Particular', 'Empresario', 'Asesor Fiscal', 'Otro'].map(op => (
                  <label 
                    key={op}
                    className={`p-4 rounded-2xl border-2 cursor-pointer transition-all font-bold text-center ${
                      formData.categoria === op
                        ? 'bg-linear-to-r from-[#64BC26] to-[#7ed321] border-[#64BC26] text-white shadow-lg'
                        : 'bg-slate-50 border-slate-300 text-slate-700 hover:border-[#64BC26]'
                    }`}
                  >
                    <input 
                      type="radio" 
                      name="categoria" 
                      value={op}
                      checked={formData.categoria === op}
                      onChange={handleChange}
                      className="hidden"
                    />
                    {op}
                  </label>
                ))}
              </div>
              {errors.categoria && <p className="text-red-500 text-sm mt-2 flex items-center gap-2"><AlertCircle size={16} /> {errors.categoria}</p>}
            </div>

            {/* Términos y Condiciones */}
            <div className="border-t pt-8">
              <label className="flex items-start gap-4 cursor-pointer">
                <input 
                  type="checkbox"
                  name="aceptaTerminos"
                  checked={formData.aceptaTerminos}
                  onChange={handleChange}
                  className="mt-1 w-5 h-5 accent-[#00A8E8] cursor-pointer"
                />
                <span className="text-sm text-slate-600">
                  Acepto los <strong className="text-[#00529B]">Términos y Condiciones</strong> y la <strong className="text-[#00529B]">Política de Privacidad</strong> de Tarjeta Titanio S.A.
                </span>
              </label>
              {errors.aceptaTerminos && <p className="text-red-500 text-sm mt-3 flex items-center gap-2"><AlertCircle size={16} /> {errors.aceptaTerminos}</p>}
            </div>

            {/* Botón Enviar */}
            <div className="border-t pt-8">
              <motion.button
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-linear-to-r from-[#64BC26] to-[#7ed321] text-white py-6 rounded-2xl font-black text-xl shadow-xl shadow-green-300 hover:shadow-2xl disabled:opacity-70 transition-all"
              >
                {isSubmitting ? '⏳ PROCESANDO...' : '✓ ENVIAR SOLICITUD'}
              </motion.button>
            </div>
          </form>
        </div>
      </motion.div>

      {/* Modal de Éxito */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showModal ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4 ${showModal ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        <motion.div
          initial={{ scale: 0.8, y: 20 }}
          animate={{ scale: showModal ? 1 : 0.8, y: showModal ? 0 : 20 }}
          className="bg-white rounded-3xl p-8 sm:p-12 max-w-md w-full shadow-2xl text-center"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-20 h-20 bg-linear-to-br from-[#64BC26] to-[#7ed321] rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle2 size={48} className="text-white" strokeWidth={2} />
          </motion.div>
          
          <h3 className="text-3xl font-black text-[#00529B] mb-3">¡Solicitud Confirmada!</h3>
          <p className="text-slate-600 mb-6 font-medium">Tu solicitud fue registrada exitosamente. Nos comunicaremos contigo en breve.</p>
          
          <div className="bg-blue-50 border-2 border-[#00A8E8] rounded-2xl p-4 mb-6">
            <p className="text-sm font-bold text-slate-700">📧 {formData.email}</p>
            <p className="text-sm font-bold text-slate-700 mt-2">📱 {formData.celular}</p>
          </div>

          <p className="text-xs text-slate-500 italic">Redirigiéndote en segundos...</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

// Componente reutilizable para inputs
const FormInput = ({ label, name, placeholder, type = "text", value, onChange, error }) => (
  <div className="flex flex-col space-y-2">
    <label className="text-sm font-bold text-[#00529B] uppercase tracking-widest">{label} {error && '*'}</label>
    <input 
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`bg-white border-2 rounded-2xl p-4 transition-all outline-none font-medium ${
        error 
          ? 'border-red-500 focus:bg-red-50 focus:border-red-600' 
          : 'border-slate-300 focus:border-[#00A8E8] focus:bg-blue-50'
      }`}
    />
    {error && <p className="text-red-500 text-xs flex items-center gap-2"><AlertCircle size={14} /> {error}</p>}
  </div>
);

export default SolicitudForm;