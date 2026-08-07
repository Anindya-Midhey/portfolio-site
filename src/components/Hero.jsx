import { useEffect, useRef } from "react";
import { profile } from "../data/cv";
import Typing from "./Typing";

const ROLL_DISTANCE = 0.85;

export default function Hero() {
  const photoRef = useRef(null);

  useEffect(() => {
    const el = photoRef.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let presence = 0;
    let raf;
    const startAt = performance.now() + 250;

    const apply = (p) => {
      const gone = 1 - p;
      el.style.transform = `translateY(${-gone * 36}px) scale(${1 - gone * 0.6})`;
      el.style.opacity = String(p);
      el.style.pointerEvents = p < 0.98 ? "none" : "auto";
    };

    const scrollProgress = () =>
      Math.min(window.scrollY / (window.innerHeight * ROLL_DISTANCE), 1);

    const loop = (now) => {
      if (now < startAt) {
        apply(0);
        raf = requestAnimationFrame(loop);
        return;
      }
      const target = 1 - scrollProgress();
      presence += (target - presence) * 0.07;
      if (Math.abs(target - presence) < 0.001) presence = target;
      apply(presence);
      raf = requestAnimationFrame(loop);
    };

    apply(0);
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  const monogram = `${profile.firstName[0]}${profile.lastName[0]}`;

  return (
    <header className="hero" id="top">
      <div className="hero-blob hero-blob--1" aria-hidden="true" />
      <div className="hero-blob hero-blob--2" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-text">
          <span className="hero-badge">
            <span className="dot" />
            {profile.title} &middot; {profile.institution}
          </span>
          <p className="hero-greeting">// Hi there, I am</p>
          <h1 className="hero-name glitch" data-text={profile.name}>
            {profile.name}
          </h1>
          <p className="hero-role">
            <span className="mono">~/ </span>
            <Typing words={profile.roles} />
            <span className="caret">_</span>
          </p>
          <p className="hero-tagline">{profile.tagline}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              View Projects
            </a>
            <a className="btn btn-ghost" href="#contact">
              Get in Touch
            </a>
          </div>
        </div>

        <div className="hero-photo" ref={photoRef}>
          <div className="hero-arc hero-arc--a" aria-hidden="true">
            <svg viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="47"
                fill="none"
                stroke="rgba(34, 211, 238, 0.7)"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeDasharray="35 65"
                transform="rotate(-90 50 50)"
              />
            </svg>
          </div>
          <div className="hero-arc hero-arc--b" aria-hidden="true">
            <svg viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="47"
                fill="none"
                stroke="rgba(129, 140, 248, 0.7)"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeDasharray="35 65"
                transform="rotate(-90 50 50)"
              />
            </svg>
          </div>
          <div className="hero-photo-ring" aria-hidden="true" />
          <div className="hero-photo-disc">
            {profile.image ? (
              <img src={profile.image} alt={profile.name} />
            ) : (
              <div className="hero-photo-placeholder">
                <span className="hero-photo-monogram">{monogram}</span>
                <span className="hero-photo-hint">add photo in cv.js</span>
              </div>
            )}
          </div>
        </div>
      </div>
      <a className="hero-scroll" href="#about" aria-label="Scroll to about">
        <span className="hero-scroll-track">
          <span className="hero-scroll-thumb" />
        </span>
        <span className="mono">scroll</span>
      </a>
    </header>
  );
}
