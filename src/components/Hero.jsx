import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate()

  return (
    <section className="mt-6 mb-10">
      {/* Badge d'accueil */}
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
        </svg>
        Bienvenue sur EventX
      </div>

      {/* Titre principal avec effet de dégradé */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
        <span className="block">Des événements</span>
        <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
          inoubliables
        </span>
        <span className="block">vous attendent</span>
      </h1>

      {/* Description */}
      <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
        Découvrez, réservez et gérez vos événements favoris en toute simplicité.  
        <span className="block mt-2 text-gray-700 font-medium">
          Organisateurs : créez et partagez vos événements avec notre plateforme intuitive.
        </span>
      </p>

      {/* Call-to-action avec icône */}
      <div className="flex flex-wrap gap-4 items-center">
        {/* Bouton secondaire */}
        <button 
        className="px-6 py-3 border-2 border-green-600 text-green-600 rounded-xl hover:bg-green-50 transition-colors font-medium"
        onClick={() => navigate("/my-workspace")}
        >
          Créer un événement
        </button>
      </div>

      {/* Statistiques ou badges */}
      <div className="mt-10 flex flex-wrap gap-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="text-gray-700 font-medium">+500 événements</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
          <span className="text-gray-700 font-medium">98% de satisfaction</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
          <span className="text-gray-700 font-medium">Support 24/7</span>
        </div>
      </div>
    </section>
  );
};