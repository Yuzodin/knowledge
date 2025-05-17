import React, { useState } from 'react';
import { useTheme } from './darkTheme'; // IMPORTANTE
import './Navigation.css';

export default function Navigation() {
  const [activeTab, setActiveTab] = useState('Meu Aprendizado');
  const { darkMode } = useTheme(); // CORRETO

  const opcoes = ['Meu Aprendizado', 'Atividades Extras', 'Tirar Duvidas'];

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
    </div>
  );
}
