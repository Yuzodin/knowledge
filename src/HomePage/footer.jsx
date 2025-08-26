import { Search, PlusCircle, Heart, User } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Gamepad2 } from "lucide-react";
import { Music } from "lucide-react";
import { Monitor } from "lucide-react";
import "./Footer.css";
import { useTheme } from "./darkTheme";

export default function Footer() {
  const { darkMode } = useTheme();

  return (
    <footer className="footer">
      <div className="icon-container">
        <MessageCircle
          size={45}
          color="#FFFFFF"
          style={{ marginTop: "20px" }}
          className="icon"
        />
        <p className={`icon-name ${darkMode ? "dark" : "light"}`}>
          Conversação
        </p>
      </div>
      <div className="icon-container">
        <Gamepad2
          size={45}
          color="#FFFFFF"
          style={{ marginTop: "20px" }}
          className="icon"
        />
        <p className={`icon-name ${darkMode ? "dark" : "light"}`}>Games</p>
      </div>
      <div className="icon-container">
        <PlusCircle className="icon special" style={{ marginTop: "20px" }} />
        <p className={`icon-name ${darkMode ? "dark" : "light"}`}>
          Mais Opções
        </p>
      </div>
      <div className="icon-container">
        <Music
          size={45}
          color="#FFFFFF"
          style={{ marginTop: "20px" }}
          className="icon"
        />
        <p className={`icon-name ${darkMode ? "dark" : "light"}`}>Música</p>
      </div>
      <div className="icon-container">
        <Monitor
          size={45}
          color="#FFFFFF"
          style={{ marginTop: "20px" }}
          className="icon"
        />
        <p className={`icon-name ${darkMode ? "dark" : "light"}`}>Mídia</p>
      </div>
    </footer>
  );
}
