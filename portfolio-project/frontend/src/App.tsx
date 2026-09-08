import { useState } from "react";
import "./App.css";
import portrait from "./assets/orlando.jpg";
import {
  profile,
  projects,
  academicProjects,
  skillGroups,
  education,
  experience,
} from "./data/profile";

const API_URL = import.meta.env.VITE_API_URL as string | undefined;

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className={`site-header ${open ? "open" : ""}`}>
      <div className="page">
        <a className="wordmark" href="#top">
          {profile.firstName}.
        </a>
        <nav className="site-nav-links" aria-label="Primary">
          <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
          <a href="#work" onClick={() => setOpen(false)}>Work</a>
          <a href="#education" onClick={() => setOpen(false)}>Education</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </nav>
        <div className="nav-end">
          <a className="nav-cv" href={profile.cvFile} target="_blank" rel="noreferrer">
            Download CV
          </a>
          <button
            className="nav-toggle"
            aria-label="Toggle navigation"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="page">
        <div>
          <p className="hero-eyebrow">
            {profile.role} — {profile.location}
          </p>
          <h1>
            {profile.tagline.split(" ").slice(0, -3).join(" ")}{" "}
            <em>{profile.tagline.split(" ").slice(-3).join(" ")}</em>
          </h1>
          <p className="lede">{profile.intro}</p>
          <div className="hero-actions">
            <a className="btn btn-solid" href="#contact">
              Start a project
            </a>
            <a className="btn" href="#work">
              See the work
            </a>
          </div>
        </div>
        <figure className="hero-portrait">
          <img src={portrait} alt={`Portrait of ${profile.fullName}`} />
          <figcaption>
            {profile.fullName} — {profile.location}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about">
      <div className="page">
        <div className="section-head">
          <span className="index">01</span>
          <h2>About</h2>
        </div>
        <div className="section-body">
          <span />
          <div className="about-grid">
            <div className="about-copy">
              {profile.aboutParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="fact-panel">
              <div className="fact-row">
                <span>Based in</span>
                <span>{profile.location}</span>
              </div>
              <div className="fact-row">
                <span>Studying at</span>
                <span>{education.school}</span>
              </div>
              <div className="fact-row">
                <span>Focus</span>
                <span>Web dev for local business</span>
              </div>
              <div className="fact-row">
                <span>Available for</span>
                <span>New projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work">
      <div className="page">
        <div className="section-head">
          <span className="index">02</span>
          <h2>Selected work</h2>
        </div>
        <div className="section-body">
          <span />
          <div>
            <div className="work-list">
              {projects
                .filter((p) => p.featured)
                .map((p, i) => (
                  <div className="work-row" key={p.name}>
                    <span className="work-index">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 className="work-name">
                        {p.href ? (
                          <a href={p.href} target="_blank" rel="noreferrer">
                            {p.name}
                          </a>
                        ) : (
                          p.name
                        )}
                      </h3>
                      <p className="work-meta">
                        {p.client} · {p.sector} · {p.year}
                      </p>
                      <p className="work-desc">{p.description}</p>
                    </div>
                    <div className="work-stack">
                      {p.stack.map((s) => (
                        <span className="tag" key={s}>{s}</span>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
            <p className="also-built">
              <strong>Also built:</strong>{" "}
              {projects
                .filter((p) => !p.featured)
                .map((p) => `${p.name} (${p.sector})`)
                .join(" · ")}
              , across phased builds of discovery, design, and delivery.
            </p>
            {academicProjects.length > 0 && (
              <div className="work-list" style={{ marginTop: 40 }}>
                <p className="mono-label" style={{ marginBottom: 8 }}>
                  Academic
                </p>
                {academicProjects.map((p) => (
                  <div className="work-row" key={p.name} style={{ gridTemplateColumns: "70px 1fr 220px" }}>
                    <span className="work-index">—</span>
                    <div>
                      <h3 className="work-name">{p.name}</h3>
                      <p className="work-meta">
                        {p.client} · {p.year}
                      </p>
                      <p className="work-desc">{p.description}</p>
                    </div>
                    <div className="work-stack">
                      {p.stack.map((s) => (
                        <span className="tag" key={s}>{s}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills">
      <div className="page">
        <div className="section-head">
          <span className="index">03</span>
          <h2>Skills &amp; stack</h2>
        </div>
        <div className="section-body">
          <span />
          <div className="skills-grid">
            {skillGroups.map((g) => (
              <div className="skill-group" key={g.label}>
                <p className="skill-group-label">{g.label}</p>
                <ul>
                  {g.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function EducationExperience() {
  return (
    <section id="education">
      <div className="page">
        <div className="section-head">
          <span className="index">04</span>
          <h2>Education &amp; experience</h2>
        </div>
        <div className="section-body">
          <span />
          <div>
            <div className="timeline-row">
              <span className="timeline-period">{education.period}</span>
              <div>
                <p className="timeline-role">{education.program}</p>
                <p className="timeline-org">
                  {education.school} — {education.location}
                </p>
                <ul className="timeline-notes">
                  {education.notes.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>
              </div>
            </div>
            {experience.map((e) => (
              <div className="timeline-row" key={e.role}>
                <span className="timeline-period">{e.period}</span>
                <div>
                  <p className="timeline-role">{e.role}</p>
                  <p className="timeline-org">{e.org}</p>
                  <ul>
                    {e.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!API_URL) {
      window.location.href = `mailto:${profile.email}?subject=Project inquiry from ${form.name}&body=${encodeURIComponent(
        form.message
      )}`;
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="contact-section">
      <div className="page">
        <div className="section-head">
          <span className="index">05</span>
          <h2>Let's build something</h2>
        </div>
        <div className="contact-grid">
          <div>
            <p style={{ maxWidth: "48ch" }}>
              Have a business that needs a website that actually does its job — bookings, checkout,
              donations, or just a clean front door online? Tell me about it.
            </p>
            <div className="contact-links">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <a href={`tel:${profile.phone}`}>{profile.phone}</a>
              <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="message">Project details</label>
              <textarea
                id="message"
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>
            <button type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Send message"}
            </button>
            {status === "sent" && <p className="form-status">Sent — I'll reply soon.</p>}
            {status === "error" && (
              <p className="form-status">Something went wrong — email me directly instead.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="page">
        <span>
          © {new Date().getFullYear()} {profile.fullName}
        </span>
        <span>Built with React, TypeScript &amp; Spring Boot</span>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Work />
      <Skills />
      <EducationExperience />
      <Contact />
      <Footer />
    </>
  );
}
