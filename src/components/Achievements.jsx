import { achievements } from "../data/cv";
import Reveal from "./Reveal";

export default function Achievements() {
  return (
    <section className="section" id="achievements">
      <div className="container">
        <Reveal>
          <p className="section-label">
            <span className="mono">achievements.</span>
          </p>
          <h2 className="section-title">Achievements</h2>
        </Reveal>
        <div className="achievement-grid">
          {achievements.map((a, i) => (
            <Reveal key={a.title} className="achievement-card">
              <div className="achievement-card-head">
                <span className="achievement-marker">
                  [{String(i + 1).padStart(2, "0")}]
                </span>
                <span className="achievement-flag">/award</span>
              </div>
              <h3 className="achievement-title">{a.title}</h3>
              {a.remark && <p className="achievement-remark">{a.remark}</p>}
              <p className="achievement-detail">{a.detail}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
