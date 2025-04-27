import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import SearchIcon from '@mui/icons-material/Search';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';


const pages = ['Suporte'];
const settings = ['Perfil', 'Conta', 'Suporte', 'Sair'];

function ResponsiveAppBar() {

//Mudar a cor do site
    const [darkMode, setDarkMode] = React.useState(false); // Falso por padrão, modo claro
    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
      };
      
  

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: darkMode ? '#333' : '#A78BFA' }}>
      <Container maxWidth="xl">
      <Toolbar disableGutters>
  {/* Lado esquerdo: AdbIcon, Knowledge e Avatar */}
  <Box sx={{ display: 'flex', alignItems: 'center' }}>
  <img 
  src="../../Imagens/Knowledge Logo (2)-Photoroom.png" 
  alt="Knowledge Logo" 
  style={{
    height: '60px',             
    padding: '4px',          
    transform: 'scale(3.4)',     // <<< Aumenta visualmente a imagem sem alterar o layout
  }}
/>
    <Tooltip title="Open settings">
      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
        <Avatar alt="Remy Sharp" src="../../Imagens\user-icon-member-login-isolated-vector.jpg"  style={{marginLeft: '90px'}}/>
      </IconButton>
    </Tooltip>
    <Typography
    variant="subtitle1"
    sx={{ color: '#5C334F', fontWeight: 500, margin: '15px', fontFamily: 'Garamond, serif', fontSize: "18px" }}
  >
    Hello, User!
  </Typography>

  </Box>

  {/* Espaçador */}
  <Box sx={{ flexGrow: 1 }} />

  {/* Lado direito: Botões, Search, Menu */}
 <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
  {/* SearchIcon primeiro */}
  <IconButton size="large" color="#5C334F">
    <SearchIcon />
  </IconButton>

  {/* Botões do pages.map */}
  {pages.map((page) => (
    <Button
      key={page}
      onClick={handleCloseNavMenu}
      sx={{ my: 2, color: '#5C334F', display: 'block', fontSize: "15px" }}
    >
      {page}
    </Button>
  ))}

  {/* MenuIcon */}
  <IconButton
    size="large"
    aria-label="menu"
    aria-controls="menu-appbar"
    aria-haspopup="true"
    onClick={handleOpenNavMenu}
    color="#5C334F"
  >
    <MenuIcon />
  </IconButton>

  <IconButton
  size="large"
  aria-label="toggle dark mode"
  onClick={toggleDarkMode}
  color="#5C334F"
>
  {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
</IconButton>

</Box>

</Toolbar>

      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
