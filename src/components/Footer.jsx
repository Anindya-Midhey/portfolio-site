import { profile, contactMethods } from "../data/cv";

const icons = {
  Email: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 6 10-6" />
    </svg>
  ),
  Phone: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.25h4.52V23H.24V8.25zM8.4 8.25h4.33v2h.06c.6-1.14 2.07-2.34 4.27-2.34 4.57 0 5.41 3 5.41 6.91V23h-4.52v-7.08c0-1.69-.03-3.86-2.35-3.86-2.35 0-2.71 1.84-2.71 3.74V23H8.4V8.25z" />
    </svg>
  ),
  GitHub: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.04-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22 0 1.61-.01 2.9-.01 3.29 0 .32.22.7.83.58A12 12 0 0 0 24 12C24 5.37 18.63 0 12 0z" />
    </svg>
  ),
};

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-contact">
          <p className="section-label">
            <span className="mono">contact.</span>
          </p>
          <h2 className="section-title">Get in Touch</h2>
          <p className="contact-text">
            Open to research collaborations, internships, and opportunities in
            Machine Learning, Deep Learning, and Data Science.
          </p>
          <div className="contact-buttons">
            {contactMethods.map((method) => (
              <a
                key={method.label}
                className={`btn btn-ghost contact-btn ${method.disabled ? "is-disabled" : ""}`}
                href={method.disabled ? undefined : method.href}
                target={method.href?.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-disabled={method.disabled || undefined}
                onClick={method.disabled ? (e) => e.preventDefault() : undefined}
              >
                {icons[method.label]}
                <span>{method.label}</span>
                {method.disabled && <span className="contact-btn-hint">add link</span>}
              </a>
            ))}
          </div>
        </div>
        <div className="footer-bar">
          <span className="footer-text">
            {profile.name} — {profile.title}
          </span>
          <span className="footer-text">
            &copy; {new Date().getFullYear()} · Built with React &amp; Vite
          </span>
        </div>
      </div>
    </footer>
  );
}
