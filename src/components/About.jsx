import { profile } from "../data/cv";
import Reveal from "./Reveal";
import CountUp from "./CountUp";

const stats = [
  { value: "5", suffix: "+", label: "Projects" },
  { value: "2", suffix: "", label: "Degrees" },
  { value: "10", suffix: "+", label: "Courseworks" },
  { value: "3", suffix: "", label: "Achievements" },
];

function statusLines(status) {
  const lines = [];
  if (status.study) {
    lines.push({
      text: `Studying · ${status.study.degree} @ ${status.study.institution}`,
      active: true,
    });
  }
  if (status.work) {
    lines.push({
      text: `Working · ${status.work.role} @ ${status.work.company}`,
      active: true,
    });
  }
  if (lines.length === 0) {
    lines.push({ text: "Exploring opportunities", active: false });
  }
  return lines;
}

export default function About() {
  const lines = statusLines(profile.status);

  return (
    <section className="section" id="about">
      <div className="container">
        <Reveal>
          <p className="section-label">
            <span className="mono">about.</span>
          </p>
          <h2 className="section-title">About Me</h2>
        </Reveal>
        <div className="about-grid">
          <Reveal>
            <div className="about-text">
              {profile.summary.map((para, i) => (
                <p key={i}>
                  {i === 0 ? (
                    <>
                      My experience combines a strong foundation in{" "}
                      <strong>Mathematics</strong>, <strong>Data Science</strong> and{" "}
                      <strong>Artificial Intelligence</strong> with hands-on work in
                      Machine Learning, Deep Learning, Computer Vision, and
                      Reinforcement Learning.
                    </>
                  ) : (
                    para
                  )}
                </p>
              ))}
            </div>
          </Reveal>
          <div className="about-side">
            <Reveal>
              <div className="about-status">
                <div className="about-status-head">
                  <h3 className="about-status-title">
                    <span className="mono">Current Status</span>
                  </h3>
                  <span
                    className={`about-open ${profile.status.openToWork ? "is-open" : ""}`}
                  >
                    {profile.status.openToWork ? "OPEN TO WORK" : "NOT OPEN"}
                  </span>
                </div>
                <ul className="about-status-list">
                  {lines.map((line, i) => (
                    <li key={i} className="about-status-item">
                      <span
                        className={`about-status-dot ${line.active ? "is-active" : ""}`}
                      />
                      {line.text}
                    </li>
                  ))}
                </ul>
                <div className="about-status-field">
                  <span className="about-status-key mono">location</span>
                  <span>{profile.status.location}</span>
                </div>
                <div className="about-status-field">
                  <span className="about-status-key mono">background</span>
                  <span>{profile.status.background}</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
        <Reveal>
          <div className="about-stats">
            {stats.map((stat) => (
              <div className="stat" key={stat.label}>
                <div className="stat-value">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
