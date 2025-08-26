import React, { useState } from 'react';
import { useTheme } from './darkTheme'; 
import './Navigation.css';

// Componentes a serem exibidos
import CursoModulosAvancados from './cards';
import AtividadesExtras from './atividadesExtras';
import TirarDuvidas from './Faq';

export default function Navigation() {
  const [activeTab, setActiveTab] = useState('Meu Aprendizado');
  const { darkMode } = useTheme(); 

  const opcoes = ['Meu Aprendizado', 'Atividades Extras', 'Tirar Duvidas'];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Meu Aprendizado':
        return <CursoModulosAvancados />;
      case 'Atividades Extras':
        return <AtividadesExtras />;
      case 'Tirar Duvidas':
        return <TirarDuvidas />;
      default:
        return null;
    }
  };

  return (
    <div className={`navigation-container ${darkMode ? 'dark' : 'light'}`}>
      <h2 className="navigation-title">O que deseja fazer?</h2>
      <div className="tab-container">
        {opcoes.map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? 'active' : ''} ${darkMode ? 'dark' : 'light'}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="tab-content">
        {renderTabContent()}
      </div>
    </div>
  );
}
