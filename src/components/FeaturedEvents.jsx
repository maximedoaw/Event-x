import { Star, Filter } from "lucide-react";
import EventCard from "./Events/EventCard";
import { useState } from "react";

export const FeaturedEvents = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const events = [
    {
      id: 1,
      title: "Développement Web Moderne avec React",
      category: "Tech",
      date: "15 Jan 2024",
      duration: "4h",
      location: "En ligne",
      attendees: 156,
      rating: 4.8,
      price: "15 000",
      cover: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=80",
      description: "Maîtrisez React, Next.js et Tailwind CSS pour créer des applications modernes."
    },
    {
      id: 2,
      title: "Design UI/UX pour Débutants",
      category: "Design",
      date: "18 Jan 2024",
      duration: "3h",
      location: "Yaoundé",
      attendees: 89,
      rating: 4.9,
      price: "12 000",
      cover: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop&q=80",
      description: "Apprenez les principes fondamentaux du design d'interface utilisateur."
    },
    {
      id: 3,
      title: "Marketing Digital - Les Bases",
      category: "Business",
      date: "20 Jan 2024",
      duration: "2h",
      location: "En ligne",
      attendees: 234,
      rating: 4.7,
      price: "Gratuit",
      cover: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
      description: "Introduction au marketing digital et aux réseaux sociaux."
    },
    {
      id: 4,
      title: "Data Science avec Python",
      category: "Data",
      date: "22 Jan 2024",
      duration: "6h",
      location: "Douala",
      attendees: 67,
      rating: 4.9,
      price: "25 000",
      cover: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
      description: "Découvrez l'analyse de données et le machine learning avec Python."
    },
  ];

  const filters = [
    { id: 'all', label: 'Tous' },
    { id: 'tech', label: 'Tech' },
    { id: 'design', label: 'Design' },
    { id: 'business', label: 'Business' },
    { id: 'data', label: 'Data' },
  ];

  const filteredEvents = activeFilter === 'all' 
    ? events 
    : events.filter(event => event.category.toLowerCase() === activeFilter);

  return (
    <section className="mb-12">
      {/* En-tête */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <div className="p-2 bg-green-100 rounded-lg">
            <Star className="w-5 h-5 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Événements populaires</h2>
        </div>
        <p className="text-gray-600">
          Découvrez nos événements les mieux notés par la communauté
        </p>
      </div>

      {/* Filtres */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <Filter className="w-4 h-4 text-gray-500" />
          <span className="text-sm text-gray-600">Filtrer par catégorie:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeFilter === filter.id
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grille responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredEvents.map(event => (
          <EventCard 
            key={event.id} 
            event={event}
            small={false}
          />
        ))}
      </div>

      {/* Carrousel mobile (alternative) */}
      <div className="sm:hidden mt-6">
        <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory">
          {events.map(event => (
            <div key={event.id} className="snap-start min-w-[280px]">
              <EventCard event={event} small={true} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};