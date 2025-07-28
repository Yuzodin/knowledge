import React from 'react';
import './AtividadesExtras.css';
import { useTheme } from './darkTheme';

export default function AtividadesExtras() {
  const { darkMode } = useTheme();

  const atividades = [
    {
      id: 1,
      titulo: "Mídia",
      descricao: "Vídeos, músicas, filmes, jogos e séries",
      link: "#",
    },
    {
      id: 2,
      titulo: "Games",
      descricao: "Flash cards ou jogos interativos",
      link: "#",
    },
    {
      id: 3,
      titulo: "Conversação",
      descricao: "Conversação, bate-papo e vocabulário",
      link: "#",
    },
    {
      id: 4,
      titulo: "Escrita e Leitura",
      descricao: "Diário, traduções, simulados e livros",
      link: "#",
    },

     {
      id: 1,
      titulo: "Mídia",
      descricao: "Vídeos, músicas, filmes, jogos e séries",
      link: "#",
    },
    {
      id: 2,
      titulo: "Games",
      descricao: "Flash cards ou jogos interativos",
      link: "#",
    },
    {
      id: 3,
      titulo: "Conversação",
      descricao: "Conversação, bate-papo e vocabulário",
      link: "#",
    },
    {
      id: 4,
      titulo: "Escrita e Leitura",
      descricao: "Diário, traduções, simulados e livros",
      link: "#",
    }
  ];

  return (
    <section className={`atividades-extras-container ${darkMode ? 'dark' : 'light'}`}>
      <div className="container">
        <header className="header-section">
          <h1 className="atividades-title">English With:</h1>
          <div className="title-underline"></div>
          <p className="atividades-subtitle">
            Pratique ainda mais com essas atividades complementares!
          </p>
        </header>

        <div className="atividades-grid">
          {atividades.map((atividade, index) => (
            <div key={atividade.id} className="atividade-card" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
              <h2>{atividade.titulo}</h2>
              <p>{atividade.descricao}</p>
              {atividade.link && (
                <a href={atividade.link} className="btn-acessar" aria-label={`Acessar ${atividade.titulo}`}>
                  Acessar
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="footer-cta">
          <div className="cta-badge">
            Continue praticando e se divertindo com o inglês! 🚀
          </div>
        </div>
      </div>
    </section>
  );
}
