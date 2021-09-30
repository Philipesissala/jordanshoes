import React from "react";

import Header from "./Header";
import "./global.css";
import Card from "./Card";
import Footer from "./Footer";

import shoes1 from "./assets/air-jordan-1-high-zoom-cmft-tropical-twist-1-400.svg";
import shoes2 from "./assets/air-jordan-1-mid-black-noble-red-w-1-1000.svg";
import shoes3 from "./assets/air-jordan-1-mid-bright-citrus-1-1000 1.svg";
import shoes4 from "./assets/air-jordan-1-mid-carbon-fiber-1-1000 1.svg";
import shoes5 from "./assets/air-jordan-1-mid-dutch-green-1-400.svg";
import shoes6 from "./assets/air-jordan-1-mid-grey-camo-1-1000 1.svg";
import shoes7 from "./assets/air-jordan-1-mid-light-smoke-grey-gs-1-1000.svg";
import shoes8 from "./assets/air-jordan-1-retro-high-court-purple-w-1-400.svg";

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
        <Card img={shoes1} />
        <Card img={shoes2} />
        <Card img={shoes3} />
        <Card img={shoes4} />
        <Card img={shoes5} />
        <Card img={shoes6} />
        <Card img={shoes7} />
        <Card img={shoes8} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
