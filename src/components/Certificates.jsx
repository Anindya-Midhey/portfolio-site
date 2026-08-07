import { certificates } from "../data/cv";
import Reveal from "./Reveal";

export default function Certificates() {
  return (
    <section className="section" id="certificates">
      <div className="container">
        <Reveal>
          <p className="section-label">
            <span className="mono">certificates.</span>
          </p>
          <h2 className="section-title">Certificates</h2>
        </Reveal>
        <div className="cert-grid">
          {certificates.map((cert, i) => (
            <Reveal key={cert.title} className="cert-card">
              {cert.image ? (
                <img
                  className="cert-image"
                  src={cert.image}
                  alt={`${cert.title} certificate`}
                  loading="lazy"
                />
              ) : (
                <div className="cert-image cert-image--placeholder">
                  <svg
                    viewBox="0 0 100 60"
                    className="cert-placeholder-svg"
                    aria-hidden="true"
                  >
                    <rect
                      x="4"
                      y="4"
                      width="92"
                      height="52"
                      rx="3"
                      fill="none"
                      stroke="#22d3ee"
                      strokeOpacity="0.55"
                    />
                    <rect
                      x="9"
                      y="9"
                      width="82"
                      height="42"
                      rx="2"
                      fill="rgba(34,211,238,0.06)"
                      stroke="rgba(34,211,238,0.25)"
                    />
                    <text
                      x="50"
                      y="31"
                      textAnchor="middle"
                      fontSize="12"
                      fill="#22d3ee"
                      fontFamily="'JetBrains Mono', monospace"
                    >
                      CERT
                    </text>
                    <text
                      x="50"
                      y="43"
                      textAnchor="middle"
                      fontSize="6"
                      fill="#5b6b8c"
                      fontFamily="'JetBrains Mono', monospace"
                    >
                      image: /certificates/… (drop file)
                    </text>
                  </svg>
                </div>
              )}
              <div className="cert-body">
                <h3 className="cert-title">
                  <span className="cert-index mono">
                    [{String(i + 1).padStart(2, "0")}]
                  </span>
                  {cert.title}
                </h3>
                <p className="cert-meta">
                  {cert.issuer}
                  {cert.year ? ` · ${cert.year}` : ""}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
