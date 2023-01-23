import React from "react";
import { init } from 'ityped'
import { useEffect, useRef } from "react";

import "./portfolio-intro.scss"

export default function PortfolioIntro() {

  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 500,
      strings: ["Check out my GitHub Repositories!"],
    });


  }, []);

  return (
    <div className="portfolio-intro">

      <h1 ref={textRef}> </h1>

    </div>
  )

}