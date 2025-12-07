import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ConvexProvider, ConvexReactClient } from 'convex/react';
import { ClerkProvider } from '@clerk/clerk-react';

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL);
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ConvexProvider client={convex}>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <App />
      </ClerkProvider>
    </ConvexProvider>
  </StrictMode>,
)