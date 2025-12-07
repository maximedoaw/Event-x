import { Outlet, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useState, useEffect } from "react";
import { NavBar } from "../NavBar";
import { useAuth } from "../../hooks/useAuth";
import "react-toastify/dist/ReactToastify.css";

export default function Layout() {
  const { user, loading, logout } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* NavBar toujours présente */}
      <NavBar user={user} onSignOut={handleSignOut} loading={loading} />
      
      {/* Contenu des pages avec animation de transition */}
      <div className="pt-16 animate-fadeIn">
        <Outlet /> {/* Les pages s'affichent ici */}
      </div>
      
      {/* ToastContainer personnalisé - position en haut au centre */}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        style={{
          top: "80px", // Sous la navbar
          zIndex: 9999,
        }}
        toastStyle={{
          borderRadius: "12px",
          fontFamily: "'Inter', sans-serif",
          fontSize: "14px",
          fontWeight: 500,
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          minHeight: "56px",
          display: "flex",
          alignItems: "center",
          padding: "12px 20px",
        }}
        progressStyle={{
          height: "3px",
        }}
        // Style spécifique pour les différents types de toast
        bodyStyle={{
          margin: "0",
          padding: "0",
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      />
      
      {/* Pied de page optionnel */}
      <footer className="mt-12 py-6 border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold text-gray-900">EventX</h3>
              <p className="text-gray-600 text-sm mt-1">
                Votre plateforme d'événements préférée
              </p>
            </div>
            <div className="flex space-x-6">
              <a 
                href="#" 
                className="text-gray-500 hover:text-green-600 transition-colors text-sm"
              >
                Conditions d'utilisation
              </a>
              <a 
                href="#" 
                className="text-gray-500 hover:text-green-600 transition-colors text-sm"
              >
                Politique de confidentialité
              </a>
              <a 
                href="#" 
                className="text-gray-500 hover:text-green-600 transition-colors text-sm"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="mt-6 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} EventX. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}