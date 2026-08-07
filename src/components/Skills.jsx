import { skills, coursework } from "../data/cv";
import Reveal from "./Reveal";

function TickerRow() {
  const items = [...coursework, ...coursework];
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {items.map((item, i) => (
          <span className="ticker-item" key={`${item}-${i}`}>
            <span className="ticker-bracket">{"[ "}</span>
            {item}
            <span className="ticker-bracket">{" ]"}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="section" id="skills">
      <TickerRow />
      <div className="container">
        <Reveal>
          <p className="section-label">
            <span className="mono">skills.</span>
          </p>
          <h2 className="section-title">Technical Skills</h2>
        </Reveal>
        <div className="skills-grid">
          {skills.map((group) => (
            <Reveal key={group.group} className="skill-card">
              <h3>{group.group}</h3>
              <div className="skill-tags">
                {group.items.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="coursework">
          <p className="coursework-title">Relevant Coursework</p>
          <div className="coursework-tags">
            {coursework.map((c) => (
              <span className="tag" key={c}>
                {c}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
