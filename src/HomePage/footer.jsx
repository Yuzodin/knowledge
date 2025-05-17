import { Search, PlusCircle, Heart, User } from "lucide-react";
import ForumIcon from "@mui/icons-material/Forum";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import "./Footer.css"; 
import { useTheme } from './darkTheme'

export default function Footer() {
  const { darkMode } = useTheme();

  return (
    <footer className="footer">
      <div className="icon-container">
        <ForumIcon
          style={{ fontSize: 45, color: "#FFFFFF", marginTop: "20px" }}
          className="icon"
        />
        <p className={`icon-name ${darkMode ? 'dark' : 'light'}`}>Conversação</p>
      </div>
      <div className="icon-container">
        <SportsEsportsIcon
          style={{ fontSize: 45, color: "#FFFFFF", marginTop: "20px" }}
          className="icon"
        />
        <p className={`icon-name ${darkMode ? 'dark' : 'light'}`}>Games</p>
      </div>
      <div className="icon-container">
        <PlusCircle className="icon special" style={{ marginTop: "20px" }} />
        <p className={`icon-name ${darkMode ? 'dark' : 'light'}`}>Mais Opções</p>
      </div>
      <div className="icon-container">
        <MusicNoteIcon
          style={{ fontSize: 45, color: "#FFFFFF", marginTop: "20px" }}
          className="icon"
        />
        <p className={`icon-name ${darkMode ? 'dark' : 'light'}`}>Música</p>
      </div>
      <div className="icon-container">
        <VideoLibraryIcon
          style={{ fontSize: 45, color: "#FFFFFF", marginTop: "20px" }}
          className="icon"
        />
        <p className={`icon-name ${darkMode ? 'dark' : 'light'}`}>Mídia</p>
      </div>
    </footer>
  );
}
