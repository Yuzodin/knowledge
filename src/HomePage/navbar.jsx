import React, { useState } from 'react';
import './Navigation.css'; // Certifique-se de criar esse arquivo CSS

export default function Navigation() {
  const [activeTab, setActiveTab] = useState('Meu Aprendizado');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const opçoes = ['Meu Aprendizado', 'Atividades Extras', 'Tirar Duvidas'];

  return (
    <div className="navigation-container">
      <h2 className="navigation-title">O deseja fazer?</h2>
      <div className="tab-container">
        {opçoes.map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}
