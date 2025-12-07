import { EventsGrid } from "../components/Events/EventsGrid";

export default function EventsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Tous les événements</h1>
      <p className="text-gray-600 mb-8">Découvrez tous nos événements à venir</p>
      <EventsGrid />
    </div>
  );
}