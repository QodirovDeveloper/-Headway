import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { PlayerProvider } from './player/PlayerContext';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PlayerProvider>
      <App />
    </PlayerProvider>
  </StrictMode>,
);
