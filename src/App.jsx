import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './store/AuthContext.jsx'; // Importante para el login
import Navbar from './components/layout/Navbar.jsx';
import ScrollToTop from './components/common/ScrollToTop.jsx'; // Botón scroll to top
import Home from './features/company/Home.jsx';
import RegisterForm from './features/clients/RegisterForm.jsx';
import ClientDashboard from './features/clients/ClientDashboard.jsx';
import MerchantForm from './features/merchants/MerchantForm.jsx';
import About from './features/company/About.jsx';
import SolicitudForm from './features/clients/SolicitudForm.jsx'; // El formulario pro
import WhatsAppButton from './components/common/WhatsAppButton.jsx'; // El botón con pulso

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="grow">
            <Routes>
              {/* Ruta Principal con todos los items */}
              <Route path="/" element={<Home />} />
              
              {/* Formulario donde van todos los items de Clientes/Comercios */}
              <Route path="/solicitud" element={<SolicitudForm />} />
              
              <Route path="/clientes" element={<ClientDashboard />} />
              <Route path="/login" element={<RegisterForm />} />
              <Route path="/comercios" element={<MerchantForm />} />
              <Route path="/empresa" element={<About />} />
              
              {/* Ruta de seguridad para errores de escritura */}
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          {/* Botón flotante presente en toda la web */}
          <WhatsAppButton />
          <ScrollToTop />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;