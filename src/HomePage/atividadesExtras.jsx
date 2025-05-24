import React from 'react';
import './AtividadesExtras.css';
import { useTheme } from './darkTheme';

export default function AtividadesExtras() {
  const { darkMode } = useTheme();

  const atividades = [
    {
      id: 1,
      titulo: "Mídia",
      descricao: "Videos, musicas, filmes, jogos e séries",
      link: "#",
    },
    {
      id: 2,
      titulo: "Games",
      descricao: "Flash cards ou jogos iterativos",
      link: "#",
    },
    {
      id: 3,
      titulo: "Conversação",
      descricao: "Conversção bate papo e vocabulario",
      link: "#",
    },
    {
      id: 4,
      titulo: "Escrita e Leitura",
      descricao: "Diário, traduções, simulados e Livros"
    }
  ];

  return (
    <div className={`atividades-extras-container ${darkMode ? 'dark' : 'light'}`}>
      <h1 className="atividades-title">English With:</h1>
      <p className="atividades-subtitle">Pratique ainda mais com essas atividades complementares!</p>

      <div className="atividades-grid">
        {atividades.map((atividade) => (
          <div key={atividade.id} className="atividade-card">
            <h2>{atividade.titulo}</h2>
            <p>{atividade.descricao}</p>
            <a href={atividade.link} className="btn-acessar">Acessar</a>
          </div>
        ))}
      </div>
    </div>
  );
}
