import { education } from "../data/cv";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <Reveal>
          <p className="section-label">
            <span className="mono">education.</span>
          </p>
          <h2 className="section-title">Education</h2>
        </Reveal>
        <Reveal>
          <div className="timeline">
            <div className="timeline-line" aria-hidden="true" />
            {education.map((edu, i) => (
              <Reveal
                key={edu.degree}
                className={`timeline-row ${i % 2 ? "timeline-row--right" : ""}`}
              >
                <span
                  className={`timeline-node ${
                    edu.ongoing ? "timeline-node--ongoing" : ""
                  }`}
                  aria-hidden="true"
                />
                <article className="timeline-card">
                  <div className="timeline-head">
                    <div className="timeline-period mono">{edu.period}</div>
                    {edu.ongoing && (
                      <span className="ongoing-tag">
                        <span className="ongoing-dot" />
                        ONGOING
                      </span>
                    )}
                  </div>
                  <h3 className="timeline-degree">{edu.degree}</h3>
                  <p className="timeline-inst">{edu.institution}</p>
                  <p className="timeline-detail mono">{edu.detail}</p>
                  <ul className="timeline-points">
                    {edu.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
