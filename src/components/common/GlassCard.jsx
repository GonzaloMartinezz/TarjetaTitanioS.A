const GlassCard = ({ children, className }) => {
  return (
    <div 
      className={`bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
};

export default GlassCard;