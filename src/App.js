import React from "react";

import Header from "./Header";
import "./global.css";
import Card from "./Card";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header />
      <div className="title-content">
        <h1>Detalhes</h1>
        <p>
          O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o
          jogador Michael Jordan.
        </p>
      </div>
      <div className="content-card">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </div>
  );
}

export default App;
