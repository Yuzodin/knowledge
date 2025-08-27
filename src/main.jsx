import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // ⬅️ Importar BrowserRouter
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@mui/material/Button';
import HomePage from './HomePage/homePage';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  </StrictMode>
);
