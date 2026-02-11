const Footer = () => {
  return (
    <footer className="bg-titanio-dark text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-xl font-bold mb-4">TITANIO</h4>
          <p className="text-gray-400 text-sm">Innovación en servicios financieros para la región.</p>
        </div>
        <div>
          <h5 className="font-bold mb-4">Servicios</h5>
          <ul className="text-gray-400 space-y-2 text-sm">
            <li>Préstamos Personales</li>
            <li>Adhesión de Comercios</li>
            <li>Pagos Online</li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold mb-4">Ayuda</h5>
          <ul className="text-gray-400 space-y-2 text-sm">
            <li>Preguntas Frecuentes</li>
            <li>Contacto</li>
            <li>Sucursales</li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold mb-4">Legal</h5>
          <ul className="text-gray-400 space-y-2 text-sm">
            <li>Términos y condiciones</li>
            <li>Privacidad</li>
          </ul>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-500 text-xs">
        © 2026 Tarjeta Titanio. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;