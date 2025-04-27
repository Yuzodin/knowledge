import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@mui/material/Button';
import ResponsiveAppBar from './appBar';
import Footer from './footer';
import Navigation from './navbar';
import CardsHome from './cards'

function HomePage() {
    return (
     <>
     <ResponsiveAppBar/> 
      <Navigation/>
      <CardsHome/>
     <Footer/>
     </>
    );
  }
  
  export default HomePage;