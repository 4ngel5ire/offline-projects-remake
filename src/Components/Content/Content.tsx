import React, { useEffect, useState } from "react";
import { Heros } from "../Hero/Data";
import Hero from "../Hero/Hero";
import "./Content.css";
import data from "../Hero/Data.json";

function Content() {
  const [heroData, setHeroData] = useState<Heros>();

  useEffect(() => {
    setHeroData(data);
  }, []);

  function renderHeros() {
    return (
      <>
        <Hero element={heroData?.heros[0]} />
        <Hero element={heroData?.heros[1]} />
        <Hero element={heroData?.heros[1]} />
      </>
    );
  }

  return (
    <div className="content">
      <div className="navbar">
        <div className="navbar__main">
          <div className="navbar__title">Filters</div>
          <a className="navbar__links">All</a>
          <div className="navbar__links__after">/</div>
          <a className="navbar__links">Creative Direction</a>
          <div className="navbar__links__after">/</div>
          <a className="navbar__links">Branding</a>
          <div className="navbar__links__after">/</div>
          <a className="navbar__links">Experiential</a>
          <div className="navbar__links__after">/</div>
          <a className="navbar__links">Live</a>
          <div className="navbar__links__after">/</div>
          <a className="navbar__links">Film</a>
          <div className="navbar__links__after">/</div>
          <a className="navbar__links__final">Digital</a>
        </div>
        <div className="navbar__final">+</div>
      </div>

      <div className="content__page">{renderHeros()}</div>
    </div>
  );
}

export default Content;
