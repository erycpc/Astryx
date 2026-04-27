import { useEffect, useState, useRef } from "react";

export default function SplashScreen({ onComplete }) {
  const [fadeOut, setFadeOut] = useState(false);
  const frameRef = useRef(null);
  const countRef = useRef(1);

  useEffect(() => {
    // Animate frame counter
    frameRef.current = setInterval(() => {
      const el = document.getElementById("frame-counter");
      if (el) el.textContent = String(countRef.current++).padStart(4, "0");
    }, 80);

    const fade = setTimeout(() => setFadeOut(true), 2800);
    const done = setTimeout(() => onComplete(), 3500);

    return () => {
      clearInterval(frameRef.current);
      clearTimeout(fade);
      clearTimeout(done);
    };
  }, [onComplete]);

  return (
    <div className={`splash ${fadeOut ? "splash--fade" : ""}`}>
      {/* Cinematic bars */}
      <div className="splash__bar splash__bar--top">
        <div className="splash__perfs">
          {Array.from({ length: 16 }).map((_, i) => <div key={i} className="splash__perf" />)}
        </div>
      </div>
      <div className="splash__bar splash__bar--bottom">
        <div className="splash__perfs">
          {Array.from({ length: 16 }).map((_, i) => <div key={i} className="splash__perf" />)}
        </div>
      </div>

      {/* Scrolling ticker */}
      <div className="splash__ticker-wrap">
        <div className="splash__ticker">
          <span>ASTRYX FILM PRODUCTIONS · SCENE 01 · TAKE 01 · CAMERA A · </span>
          <span>ASTRYX FILM PRODUCTIONS · SCENE 01 · TAKE 01 · CAMERA A · </span>
        </div>
      </div>

      {/* Film scratch */}
      <div className="splash__scratch" />

      {/* Center logo */}
      <div className="splash__center">
        <svg className="splash__reel" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
          <circle cx="28" cy="28" r="24" strokeWidth="1.5" fill="none"/>
          <circle cx="28" cy="28" r="6"  strokeWidth="1.5" fill="none"/>
          <circle cx="28" cy="12" r="4"  strokeWidth="1"   fill="rgba(201,168,76,0.13)"/>
          <circle cx="40.8" cy="20" r="4" strokeWidth="1"  fill="rgba(201,168,76,0.13)"/>
          <circle cx="40.8" cy="36" r="4" strokeWidth="1"  fill="rgba(201,168,76,0.13)"/>
          <circle cx="28" cy="44" r="4"  strokeWidth="1"   fill="rgba(201,168,76,0.13)"/>
          <circle cx="15.2" cy="36" r="4" strokeWidth="1"  fill="rgba(201,168,76,0.13)"/>
          <circle cx="15.2" cy="20" r="4" strokeWidth="1"  fill="rgba(201,168,76,0.13)"/>
        </svg>

        <div className="splash__logo">
          <span className="splash__logo-a">A</span>
          <span className="splash__logo-rest">STRYX</span>
        </div>
        <div className="splash__line" />
        <p className="splash__tagline">film production</p>
      </div>

      <div className="splash__frame-counter" id="frame-counter">0001</div>
    </div>
  );
}