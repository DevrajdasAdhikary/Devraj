import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { MouseProvider } from './context/MouseContext.tsx';
import { MenuProvider } from './context/MenuContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MouseProvider>
      <MenuProvider>
        <App />
      </MenuProvider>
    </MouseProvider>
  </StrictMode>
);