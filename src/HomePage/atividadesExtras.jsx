import React from 'react';
import './AtividadesExtras.css';
import { useTheme } from './darkTheme';

export default function AtividadesExtras() {
  const { darkMode } = useTheme();

  const atividades = [
    {
      id: 1,
      titulo: "Quiz de Vocabulário",
      descricao: "Teste seu vocabulário com quizzes interativos.",
      link: "#",
    },
    {
      id: 2,
      titulo: "Desafio de Escrita",
      descricao: "Escreva um pequeno texto usando expressões novas.",
      link: "#",
    },
    {
      id: 3,
      titulo: "Vídeo com Perguntas",
      descricao: "Assista a um vídeo e responda às perguntas ao final.",
      link: "#",
    },
  ];

  return (
    <div className={`atividades-extras-container ${darkMode ? 'dark' : 'light'}`}>
      <h1 className="atividades-title">Atividades Extras</h1>
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
