import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@mui/material/Button';
import ResponsiveAppBar from './appBar';
import Footer from './footer';
import Navigation from '../assets/navbar';

function HomePage() {
    return (
     <>
     <ResponsiveAppBar/> 
      <Navigation/>
     <Footer/>
     </>
    );
  }
  
  export default HomePage;