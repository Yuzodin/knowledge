import React from "react";
import { Link } from "react-router-dom"; // Adicione esta linha
import "./Pagina404.css";

export default function NotFound() {
  return (
    <div className="pagina404-wrapper">
      <h1 className="titulo-erro">Erro</h1>
      <section className="error-container">
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
        <span className="zero">
          <span className="screen-reader-text">0</span>
        </span>
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
      </section>
      <p className="zoom-area">
        <b>Pagina não encontrada</b>
      </p>
      <div className="link-container">
        <Link to="/" className="more-link">
          Voltar para a Home
        </Link>
      </div>
    </div>
  );
}
