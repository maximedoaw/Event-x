import  MyBookings  from "../components/Bookings/MyBookings";

export default function BookingsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Mes réservations</h1>
      <p className="text-gray-600 mb-8">Gérez vos billets et réservations</p>
      <MyBookings />
    </div>
  );
}