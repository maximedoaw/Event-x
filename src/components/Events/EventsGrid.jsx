import EventCard from "./EventCard";

export const EventsGrid = () => {
  const events = [
    { id: 1, title: "Conférence IA", date: "22 Jan", cover: "/img1.jpg" },
    { id: 2, title: "Hackathon ENSPY", date: "25 Jan", cover: "/img2.jpg" },
    { id: 3, title: "Expo Universitaire", date: "28 Jan", cover: "/img3.jpg" },
  ];

  return (
    <section className="mt-6">
      <h3 className="text-lg font-semibold mb-4">Tous les événements</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
}
