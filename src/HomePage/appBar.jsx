import * as React from "react";
import {
  AppBar, Box, Toolbar, IconButton, Typography, Container, Avatar,
  Tooltip, Drawer, List, ListItem, ListItemText, Button, Divider, InputBase
} from "@mui/material";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Brightness4 as Brightness4Icon,
  Brightness7 as Brightness7Icon,
  Logout as LogoutIcon,
  SupportAgent as SupportAgentIcon
} from "@mui/icons-material";
import { useTheme } from "./darkTheme";

function ResponsiveAppBar() {
  const { darkMode, toggleDarkMode } = useTheme();
  const [showSearch, setShowSearch] = React.useState(false);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleSearchToggle = () => {
    setShowSearch((prev) => !prev);
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#0D51D9" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>

            {/* LOGO E AVATAR */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img
                src="../../Imagens/KnowLedge OG Logo.png"
                alt="Knowledge Logo"
                style={{
                  height: "60px",
                  padding: "4px",
                  transform: "scale(3.4)",
                  marginLeft: "60px",
                }}
              />
              <Tooltip title="Abrir perfil">
                <IconButton sx={{ p: 0, ml: 6 }}>
                  <Avatar
                    alt="Remy Sharp"
                    src="../../Imagens/user-icon-member-login-isolated-vector.jpg"
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

            {/* EXPANSÃO */}
            <Box sx={{ flexGrow: 1 }} />

            {/* AÇÕES À DIREITA */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              {/* BOTÃO DE PESQUISA */}
              <IconButton size="large" onClick={handleSearchToggle}>
                <SearchIcon sx={{ color: "#fff" }} />
              </IconButton>

              {/* CAMPO DE BUSCA */}
              {showSearch && (
                <InputBase
                  placeholder="Pesquisar aula, módulo ou tema"
                  sx={{
                    backgroundColor: "#fff",
                    borderRadius: 1,
                    pl: 2,
                    pr: 2,
                    height: "36px",
                    width: { xs: "100%", sm: 300 },
                  }}
                />
              )}

              {/* MENU HAMBÚGUER */}
              <IconButton size="large" onClick={toggleDrawer(true)}>
                <MenuIcon sx={{ color: "#fff" }} />
              </IconButton>

              {/* DARK MODE TOGGLE */}
              <IconButton size="large" onClick={toggleDarkMode}>
                {darkMode ? (
                  <Brightness7Icon sx={{ color: "#fff" }} />
                ) : (
                  <Brightness4Icon sx={{ color: "#fff" }} />
                )}
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* MENU LATERAL (DRAWER) */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{ sx: { width: 400, padding: 2 } }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1 }}>
          <Avatar
            src="../../Imagens/user-icon-member-login-isolated-vector.jpg"
            sx={{ width: 64, height: 64 }}
          />
          <Typography variant="h6">Nome do Usuário</Typography>
          <Typography variant="body2" color="textSecondary">Matrícula: #123456</Typography>
        </Box>

        <Divider sx={{ my: 2 }} />

        <List>
          <ListItem button component="a" href="/politica-de-privacidade">
            <ListItemText primary="Grupo Telegram" />
          </ListItem>
          <ListItem button component="a" href="/politica-de-privacidade">
            <ListItemText primary="Materiais de estudo" />
          </ListItem>
          <ListItem button component="a" href="/politica-de-privacidade">
            <ListItemText primary="Política de Privacidade" />
          </ListItem>
          <ListItem button component="a" href="/termos-de-uso">
            <ListItemText primary="Termos de Uso" />
          </ListItem>
        </List>

        <Box sx={{ mt: "auto", display: "flex", flexDirection: "column", gap: 2, mt: 4 }}>
          <Button
            variant="contained"
            startIcon={<SupportAgentIcon />}
            sx={{ backgroundColor: "#0D51D9", color: "#fff" }}
          >
            Falar com Suporte
          </Button>
          <Button
            variant="contained"
            startIcon={<LogoutIcon />}
            sx={{ backgroundColor: "#e53935", color: "#fff" }}
          >
            Sair da Conta
          </Button>
        </Box>
      </Drawer>
    </>
  );
}

export default ResponsiveAppBar;
