import { useState, useEffect } from "react";
import "./CursoModulosAvancados.css";
import { CiLock } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import { useTheme } from "./darkTheme";
import { Link } from "react-router-dom";

export default function CursoModulosAvancados() {
  const [hoveredModule, setHoveredModule] = useState(null);
  const [nivel, setNivel] = useState("Básico");
  const [showDropdown, setShowDropdown] = useState(false);
  const [modulos, setModulos] = useState([]);
  const { darkMode } = useTheme();

  const modulosPorNivel = {
    Básico: [
      {
        id: 1,
        titulo: "Modulo 01",
        progresso: 100,
        totalAulas: 8,
        icon: "https://flagcdn.com/w40/gb.png",
      },
      {
        id: 2,
        titulo: "Modulo 02",
        progresso: 50,
        totalAulas: 10,
        icon: "https://flagcdn.com/w40/gb.png",
      },
      {
        id: 3,
        titulo: "Modulo 03",
        progresso: 0,
        totalAulas: 12,
        icon: "https://flagcdn.com/w40/gb.png",
      },
      {
        id: 4,
        titulo: "Modulo 04",
        progresso: 0,
        totalAulas: 8,
        icon: "https://flagcdn.com/w40/gb.png",
      },
      {
        id: 5,
        titulo: "Modulo 05",
        progresso: 0,
        totalAulas: 9,
        icon: "https://flagcdn.com/w40/gb.png",
      },
      {
        id: 6,
        titulo: "Modulo 06",
        progresso: 0,
        totalAulas: 7,
        icon: "https://flagcdn.com/w40/gb.png",
      },
      {
        id: 7,
        titulo: "Modulo 07",
        progresso: 0,
        totalAulas: 11,
        icon: "https://flagcdn.com/w40/gb.png",
      },
      { id: 8, titulo: "Modulo 08", progresso: 0, totalAulas: 6, icon: "🏆" },
    ],
    Médio: [
      {
        id: 1,
        titulo: "Modulo 01",
        progresso: 0,
        totalAulas: 10,
        icon: "https://flagcdn.com/w40/gb.png",
      },
      {
        id: 2,
        titulo: "Modulo 02",
        progresso: 0,
        totalAulas: 12,
        icon: "https://flagcdn.com/w40/gb.png",
      },
      {
        id: 3,
        titulo: "Modulo 03",
        progresso: 0,
        totalAulas: 8,
        icon: "https://flagcdn.com/w40/gb.png",
      },
      {
        id: 4,
        titulo: "Modulo 04",
        progresso: 0,
        totalAulas: 10,
        icon: "https://flagcdn.com/w40/gb.png",
      },
      {
        id: 5,
        titulo: "Modulo 05",
        progresso: 0,
        totalAulas: 7,
        icon: "https://flagcdn.com/w40/gb.png",
      },
      {
        id: 6,
        titulo: "Modulo 06",
        progresso: 0,
        totalAulas: 9,
        icon: "https://flagcdn.com/w40/gb.png",
      },
      {
        id: 7,
        titulo: "Modulo 07",
        progresso: 0,
        totalAulas: 10,
        icon: "https://flagcdn.com/w40/gb.png",
      },
      { id: 8, titulo: "Modulo 08", progresso: 0, totalAulas: 6, icon: "🏆" },
    ],
    Avançado: [
      {
        id: 1,
        titulo: "Modulo 01",
        progresso: 0,
        totalAulas: 15,
        icon: "https://flagcdn.com/w40/gb.png",
      },
      {
        id: 2,
        titulo: "Modulo 02",
        progresso: 0,
        totalAulas: 13,
        icon: "https://flagcdn.com/w40/gb.png",
      },
      {
        id: 3,
        titulo: "Modulo 03",
        progresso: 0,
        totalAulas: 14,
        icon: "https://flagcdn.com/w40/gb.png",
      },
      {
        id: 4,
        titulo: "Modulo 04",
        progresso: 0,
        totalAulas: 11,
        icon: "https://flagcdn.com/w40/gb.png",
      },
      {
        id: 5,
        titulo: "Modulo 05",
        progresso: 0,
        totalAulas: 10,
        icon: "https://flagcdn.com/w40/gb.png",
      },
      {
        id: 6,
        titulo: "Modulo 06",
        progresso: 0,
        totalAulas: 12,
        icon: "https://flagcdn.com/w40/gb.png",
      },
      {
        id: 7,
        titulo: "Modulo 07",
        progresso: 0,
        totalAulas: 8,
        icon: "https://flagcdn.com/w40/gb.png",
      },
      { id: 8, titulo: "Modulo 08", progresso: 0, totalAulas: 6, icon: "🏆" },
    ],
  };

  useEffect(() => {
    setModulos(modulosPorNivel[nivel]);
  }, [nivel]);

  const handleNivelChange = (novoNivel) => {
    setNivel(novoNivel);
    setShowDropdown(false);
  };

  const niveis = ["Básico", "Médio", "Avançado"];

  const CardsHome = (progresso) => {
    if (progresso === 100) return "completed";
    if (progresso > 0) return "in-progress";
    return "locked";
  };

  const isModuloBloqueado = (index, modulos) => {
    if (index === 0) return false;
    return modulos[index - 1].progresso < 100;
  };

  return (
    <div className={`curso-modulos-container ${darkMode ? "dark" : "light"}`}>
      <div className="header" style={{ position: "relative" }}>
        <h1 className="titleNivel">
          Nível: {nivel}
          <FaAngleDown
            style={{
              fontSize: "30px",
              marginLeft: "8px",
              cursor: "pointer",
              color: "#1A202C",
            }}
            onClick={() => setShowDropdown(!showDropdown)}
          />
        </h1>

        {showDropdown && (
          <ul className={`dropdown ${darkMode ? "dark" : "light"}`}>
            {niveis.map((n) => (
              <li key={n} onClick={() => handleNivelChange(n)}>
                {n}
              </li>
            ))}
          </ul>
        )}

        <div className="divider"></div>
        <p className="description">
          Complete os módulos na ordem para desbloquear conteúdos avançados
        </p>
      </div>

      <div className="modulos-grid">
        {modulos.map((modulo, index) => {
          const bloqueado = isModuloBloqueado(index, modulos);

          return (
            <div
              key={modulo.id}
              className={`modulo-card ${
                hoveredModule === modulo.id ? "hovered" : ""
              } ${CardsHome(modulo.progresso)}`}
              onMouseEnter={() => setHoveredModule(modulo.id)}
              onMouseLeave={() => setHoveredModule(null)}
            >
              {modulo.progresso === 100 && (
                <div className="status-badge completed">Concluído</div>
              )}
              {modulo.progresso > 0 && modulo.progresso < 100 && (
                <div className="status-badge in-progress">Em progresso</div>
              )}

              <div className="card-content">
                <div className="icon-title">
                  <div className="card-icon">
                    {modulo.icon.includes("http") ? (
                      <img
                        src={modulo.icon}
                        alt="ícone"
                        width="24"
                        height="16"
                      />
                    ) : (
                      modulo.icon
                    )}
                  </div>

                  <h2 className={`module-title ${bloqueado ? "locked" : ""}`}>
                    {modulo.titulo}
                  </h2>
                </div>

                <div className="module-info">
                  <div className="module-details">
                    <span>{modulo.totalAulas} aulas</span>
                    <span>{modulo.progresso}% completo</span>
                  </div>

                  <div className="progress-bar">
                    <div
                      className={`progress ${
                        modulo.progresso === 100 ? "completed" : "in-progress"
                      }`}
                      style={{ width: `${modulo.progresso}%` }}
                    ></div>
                  </div>
                </div>

                <div className="button-container">
                  {bloqueado ? (
                    <span className="access-button blocked">
                      <CiLock /> Bloqueado
                    </span>
                  ) : (
                    <Link to="/paginaaula" className="access-button">
                      <span className="access-text">Acessar &#9205;</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
