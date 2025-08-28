import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@mui/material/Button';
import { ThemeProvider, useTheme } from './darkTheme';
import ResponsiveAppBar from './appBar';
import Footer from './footer';
import Navigation from './navbar';
import PaginaAula from './PaginaAula';
// import CardsHome from './cards';
import './homePage.css';
import LoadingOverlay from './loading';


function HomePageContent() {
  const { loading } = useTheme();

  return (
    <>
      {loading && <LoadingOverlay />}
      <ResponsiveAppBar />
      <Navigation />
      <PaginaAula />
      <Footer />
    </>
  );
}

function HomePage() {
  return (
    <ThemeProvider>
      <HomePageContent />
    </ThemeProvider>
  );
}

export default HomePage;
