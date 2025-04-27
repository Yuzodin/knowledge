import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@mui/material/Button';
import HomePage from './HomePage/homePage';

createRoot(document.getElementById('root')).render(
    <>
      <HomePage/>
    </>
)
