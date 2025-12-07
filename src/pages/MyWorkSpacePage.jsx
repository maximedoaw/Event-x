import { useState } from "react";
import EventForm from "../components/Events/EventForm";
import UserEventsList from "../components/Events/UserEventsList";
import EventAttendees from "../components/Events/EventAttendees";
import { Plus, List, ArrowLeft } from "lucide-react";

const MyWorkSpacePage = () => {
  const [view, setView] = useState("create"); // 'create', 'list', 'attendees'
  const [editingEvent, setEditingEvent] = useState(null);
  const [selectedEventForAttendees, setSelectedEventForAttendees] = useState(null);

  const handleEdit = (event) => {
    setEditingEvent(event);
    setView("create");
  };

  const handleViewAttendees = (event) => {
    setSelectedEventForAttendees(event);
    setView("attendees");
  };

  const handleSuccess = () => {
    setEditingEvent(null);
    setView("list");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Mon Espace de Travail</h1>
            <p className="mt-2 text-gray-600">Gérez vos événements et suivez vos inscriptions.</p>
          </div>

          <div className="flex bg-white p-1 rounded-xl shadow-sm border border-gray-200 self-end sm:self-auto">
            <button
              onClick={() => {
                setView("create");
                setEditingEvent(null);
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all
                ${view === "create"
                  ? "bg-emerald-500 text-white shadow-sm"
                  : "text-gray-600 hover:bg-gray-50"}`}
            >
              <Plus className="w-4 h-4" />
              {editingEvent ? "Modifier" : "Créer"}
            </button>
            <button
              onClick={() => setView("list")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all
                ${view === "list" || view === "attendees"
                  ? "bg-emerald-500 text-white shadow-sm"
                  : "text-gray-600 hover:bg-gray-50"}`}
            >
              <List className="w-4 h-4" />
              Mes Événements
            </button>
          </div>
        </div>

        <div className="transition-all duration-300">
          {view === "create" && (
            <EventForm
              eventToEdit={editingEvent}
              onSuccess={handleSuccess}
            />
          )}

          {view === "list" && (
            <UserEventsList
              onEdit={handleEdit}
              onViewAttendees={handleViewAttendees}
            />
          )}

          {view === "attendees" && selectedEventForAttendees && (
            <div className="space-y-6">
              <button
                onClick={() => setView("list")}
                className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Retour à la liste
              </button>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-100">
                <h2 className="text-xl font-bold text-gray-800 mb-1">
                  Participants : {selectedEventForAttendees.title}
                </h2>
                <p className="text-gray-500 text-sm mb-6">
                  Liste des personnes inscrites à cet événement.
                </p>
                <EventAttendees eventId={selectedEventForAttendees._id} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyWorkSpacePage;