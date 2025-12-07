import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import UserSync from "./components/UserSync";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import BookingsPage from "./pages/BookingsPage";
import ProfilePage from "./pages/ProfilePage";
import AdminPage from "./pages/AdminPage";
import EventDetailPage from "./pages/EventDetailPage";
import DeployTicketPage from "./pages/DeployTicketPage";
import MyWorkSpacePage from "./pages/MyWorkSpacePage";
import MyTicketsPage from "./pages/MyTicketsPage";
import "./App.css";
import { useAuth } from "./hooks/useAuth";

// Composant de protection de route avec Convex
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-green-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Vérification en cours...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
};

// Route admin protégée avec Convex
const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-green-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Vérification en cours...</p>
        </div>
      </div>
    );
  }

  // Vérifie si l'utilisateur est admin
  // Dans Convex, vous pourriez avoir un champ `role` dans votre schéma utilisateur
  const isAdmin = user?.email === import.meta.env.VITE_ADMIN_EMAIL ||
    user?.email?.endsWith("@admin.eventx") ||
    user?.role === "admin";

  if (!user || !isAdmin) {
    return <Navigate to="/" replace />;
  }

  return children;
};

function App() {
  return (
    <Router>
      <UserSync />
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Routes publiques */}
          <Route index element={<HomePage />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="event/:id" element={<EventDetailPage />} />
          <Route path="deploy" element={<DeployTicketPage />} />

          {/* Routes protégées - nécessite authentification */}
          <Route path="my-bookings" element={
            <ProtectedRoute>
              <BookingsPage />
            </ProtectedRoute>
          } />
          <Route path="my-workspace" element={
            <ProtectedRoute>
              <MyWorkSpacePage />
            </ProtectedRoute>
          } />

          <Route path="profile" element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          } />

          <Route path="my-tickets" element={
            <ProtectedRoute>
              <MyTicketsPage />
            </ProtectedRoute>
          } />

          <Route path="events/:id" element={<EventDetailPage />} />

          {/* Routes admin - nécessite authentification ET rôle admin */}
          <Route path="admin" element={
            <AdminRoute>
              <AdminPage />
            </AdminRoute>
          } />

          {/* Route 404 */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;