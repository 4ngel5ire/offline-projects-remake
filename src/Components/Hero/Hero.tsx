import React, { useEffect, useState } from "react";
import "./Hero.css";
import data from "./Data.json";
import { HeroElement, Heros } from "./Data";

interface HeroProps {
  element: HeroElement | undefined;
}

function Hero(props: HeroProps) {
  function renderImage() {
    if (props.element?.img) {
      return <img src={props.element.img} alt="" />;
    }
    return <></>;
  }

  return (
    <div className="hero">
      <div className="hero__text__ctn">
        <div className="hero__text__title">{props.element?.artist}</div>
        <div className="hero__text__subctn">
          <div className="hero__text__subtitle">{props.element?.title}</div>
          <div className="hero__text__p__ctn">
            <div className="hero__text__p__title">
              {props.element?.subHeading}
            </div>
            <div className="hero__text__p__content">
              {props.element?.paragraph}
            </div>
          </div>
        </div>
      </div>
      {renderImage()}
      <div className="hero__img"></div>
    </div>
  );
}

export default Hero;
