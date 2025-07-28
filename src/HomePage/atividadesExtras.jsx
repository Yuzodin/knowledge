import React from 'react';
import { 
  Play, Music, Film, Gamepad2, Monitor, Zap,
  CreditCard, MessageCircle, BookOpen, Users,
  PenTool, Book, FileText, Languages, GraduationCap
} from 'lucide-react';
import './AtividadesExtras.css'; // Arquivo CSS separado

export default function AtividadesExtras() {
  const [darkMode, setDarkMode] = React.useState(false);

  const sections = [
    {
      title: "Mídia",
      activities: [
        { id: 1, titulo: "Séries", descricao: "Aprenda com suas séries favoritas", icon: <Monitor size={24} />, link: "#" },
        { id: 2, titulo: "Filmes", descricao: "Pratique inglês assistindo filmes", icon: <Film size={24} />, link: "#" },
        { id: 3, titulo: "Video Games", descricao: "Aprenda com seus jogos favoritos", icon: <Gamepad2 size={24} />, link: "#" },
        { id: 4, titulo: "Músicas", descricao: "Melhore seu inglês com música", icon: <Music size={24} />, link: "#" }
      ]
    },
    {
      title: "Jogos",
      activities: [
        { id: 5, titulo: "Games", descricao: "Jogos interativos para aprender", icon: <Zap size={24} />, link: "#" },
        { id: 6, titulo: "FlashCards", descricao: "Cartões para memorização", icon: <CreditCard size={24} />, link: "#" }
      ]
    },
    {
      title: "Conversação",
      activities: [
        { id: 7, titulo: "Conversação", descricao: "Pratique sua fala e escuta", icon: <MessageCircle size={24} />, link: "#" },
        { id: 8, titulo: "Vocabulário", descricao: "Expanda seu vocabulário", icon: <BookOpen size={24} />, link: "#" },
        { id: 9, titulo: "Bate-Papo", descricao: "Converse com outros usuários", icon: <Users size={24} />, link: "#" }
      ]
    },
    {
      title: "Escrita e Leitura",
      activities: [
        { id: 10, titulo: "Diário", descricao: "Escreva seu diário em inglês", icon: <PenTool size={24} />, link: "#" },
        { id: 11, titulo: "Simulados", descricao: "Teste seus conhecimentos", icon: <GraduationCap size={24} />, link: "#" },
        { id: 12, titulo: "Tradução", descricao: "Pratique traduzindo textos", icon: <Languages size={24} />, link: "#" },
        { id: 13, titulo: "Livros", descricao: "Leia livros em inglês", icon: <Book size={24} />, link: "#" }
      ]
    }
  ];

  return (
    <section className={`atividades-extras-container ${darkMode ? 'dark' : 'light'}`}>
      <div className="container">
        <header className="header-section">
          <h1 className="atividades-title">English With:</h1>
          <div className="title-underline"></div>
          <p className="description">Pratique ainda mais com essas atividades complementares!</p>
        </header>

        {sections.map((section, sectionIndex) => (
          <div key={section.title}>
            <h2 className="section-title">{section.title}</h2>
            <div className="atividades-grid">
              {section.activities.map((atividade, index) => (
                <div
                  key={atividade.id}
                  className="atividade-card"
                  style={{ animationDelay: `${0.1 * (sectionIndex * 4 + index + 1)}s` }}
                >
                  <div className="atividade-icon">{atividade.icon}</div>
                  <h3>{atividade.titulo}</h3>
                  <p>{atividade.descricao}</p>
                  <a href={atividade.link} className="btn-acessar" aria-label={`Acessar ${atividade.titulo}`}>
                    Acessar →
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
