import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import SearchIcon from "@mui/icons-material/Search";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useTheme } from './darkTheme'

const pages = ["Suporte"];
const settings = ["Perfil", "Conta", "Suporte", "Sair"];

function ResponsiveAppBar() {
  const { darkMode, toggleDarkMode } = useTheme();

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
    <AppBar
      position="static"
      sx={{ backgroundColor: "#0D51D9" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src="../../Imagens/KnowLedge OG Logo.png"
              alt="Knowledge Logo"
              style={{
                height: "60px",
                padding: "4px",
                transform: "scale(3.4)",
                marginLeft: "60px"
              }}
            />
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  src="../../Imagens/user-icon-member-login-isolated-vector.jpg"
                  style={{ marginLeft: "90px" }}
                />
              </IconButton>
            </Tooltip>
            <Typography
              variant="subtitle1"
              sx={{
                color: "#FFFFFF",
                fontWeight: 500,
                margin: "15px",
                fontFamily: "Open Sans, sans-serif",
                fontSize: "14px",
              }}
            >
              Hello, User!
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <IconButton size="large">
              <SearchIcon style={{color: "#FFFFFF",}}/>
            </IconButton>

            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "#FFFFFF",
                  fontFamily: "'Open Sans', sans-serif",
                  display: "block",
                  fontSize: "14px",
                }}
              >
                {page}
              </Button>
            ))}

            <IconButton
              size="large"
              aria-label="menu"
              onClick={handleOpenNavMenu}
              style={{color: "#FFFFFF",}}
            >
              <MenuIcon style={{color: "#FFFFFF",}}/>
            </IconButton>

            <IconButton
              size="large"
              aria-label="toggle dark mode"
              onClick={toggleDarkMode}
              style={{color: "#FFFFFF",}}
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
