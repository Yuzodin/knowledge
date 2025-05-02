import { Search, PlusCircle, Heart, User } from "lucide-react";
import ForumIcon from "@mui/icons-material/Forum";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import "./Footer.css"; 

export default function Footer() {
  return (
    <footer className="footer">
      <div className="icon-container">
        <ForumIcon
          style={{ fontSize: 45, color: "#FFFFFF", marginTop: "20px" }}
          className="icon"
        />
        <p className="icon-name">Chat</p>
      </div>
      <div className="icon-container">
        <SportsEsportsIcon
          style={{ fontSize: 45, color: "#FFFFFF", marginTop: "20px" }}
          className="icon"
        />
        <p className="icon-name">Games</p>
      </div>
      <div className="icon-container">
        <PlusCircle className="icon special" style={{ marginTop: "20px" }} />
        <p className="icon-name">Mais Opções</p>
      </div>
      <div className="icon-container">
        <MusicNoteIcon
          style={{ fontSize: 45, color: "#FFFFFF", marginTop: "20px" }}
          className="icon"
        />
        <p className="icon-name">Música</p>
      </div>
      <div className="icon-container">
        <VideoLibraryIcon
          style={{ fontSize: 45, color: "#FFFFFF", marginTop: "20px" }}
          className="icon"
        />
        <p className="icon-name">Mídia</p>
      </div>
    </footer>
  );
}
