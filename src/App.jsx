import { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.name.trim() === "" ||
      formData.email.trim() === "" ||
      formData.message.trim() === ""
    ) {
      alert("Please fill in all fields!");
      return;
    }

    alert("Message Sent!");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="portfolio">
      <header className="navbar">
        <div className="container nav-container">

          <a href="#home" className="logo">
            <span className="logo-icon">ᖴᗩ</span>
            <span className="logo-name">Febie.</span>
          </a>

          <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>

            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>

            <a href="#tools" onClick={() => setMenuOpen(false)}>
              Tools
            </a>

            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Projects
            </a>

            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </nav>

          <a href="#contact" className="nav-talk">
            Let's Talk
          </a>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            type="button"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>
      </header>

      <main>

        <section id="home" className="hero">
          <div className="container">

            <div className="hero-top">
              <div className="hero-badge">
                Backend Developer & UI/UX Designer
              </div>
            </div>

            <div className="hero-title-area">
              <h1>
                I'm <span>Febie Ann</span>
                <br />
                Backend Developer
                <br />
                <em>& UX Writer.</em>
              </h1>

              <div className="hero-sticker">
                <span>✦</span>
                <strong>CREATIVE</strong>
                <small>DESIGNER</small>
                <span>→</span>
              </div>
            </div>

            <div className="hero-description">
              <p>
                A Backend Developer and UI/UX Designer who crafts visually
                striking designs and words seamlessly.
              </p>
            </div>

            <div className="hero-main">

              <div className="hero-social">

                <div className="hero-rating">
                  <strong>3+</strong>
                  <span>Projects</span>
                  <small>
                    Creative works & digital experiences
                  </small>
                </div>
              </div>

              <div className="hero-image">

                <div className="hero-shape shape-one"></div>

                <div className="image-wrapper">
                  <img
                    src="/febie.jpg"
                    alt="Febie Ann"
                    className="profile-img"
                  />
                </div>

                <div className="hero-floating-card card-left">
                  <span>✦</span>
                  UI/UX Design
                </div>

                <div className="hero-floating-card card-right">
                  <span>✦</span>
                  Backend Developer
                </div>

              </div>

              <div className="hero-quote">
                <span className="quote-mark">“</span>

                <p>
                  Designing experiences that are simple,
                  creative, and meaningful.
                </p>
              </div>

            </div>

            <div className="hero-buttons">
              <a href="#projects" className="btn-primary">
                View My Projects
                <span>→</span>
              </a>

              <a href="#contact" className="btn-secondary">
                Hire Me
                <span>→</span>
              </a>
            </div>

          </div>
        </section>

        <div className="moving-text">
          <div className="moving-track">
            <span>BACKEND DEVELOPER</span>
            <b>✦</b>
            <span>UI/UX DESIGN</span>
            <b>✦</b>
            <span>BACKEND DEVELOPER</span>
            <b>✦</b>
            <span>UI/UX DESIGN</span>
            <b>✦</b>
            <span>BACKEND DEVELOPER</span>
            <b>✦</b>
            <span>UI/UX DESIGN</span>
            <b>✦</b>
            <span>BACKEND DEVELOPER</span>
          </div>
        </div>

        <section id="about" className="section about-section">
          <div className="container">

            <div className="section-heading">

              <div>
                <p className="tag">
                  <span></span>
                  About Me
                </p>

                <h2>
                  Who <span>Am I?</span>
                </h2>
              </div>

              <p className="heading-description">
                A creative IT student passionate about combining
                design, technology, and meaningful user experiences.
              </p>

            </div>

            <div className="about-grid">

              <div className="about-image-card">
                <div className="about-decoration"></div>

                <img
                  src="/febie.jpg"
                  alt="Febie Ann"
                />

                <div className="about-image-label">
                  <strong>Febie Ann</strong>
                  <span>Designer & UX Writer</span>
                </div>
              </div>

              <div className="about-content">

                <div className="about-card dark-card">
                  <div className="number">01</div>

                  <div>
                    <h3>About Me</h3>

                    <p>
                      I am an IT student passionate about graphic design
                      and UX writing. I create visually appealing and
                      user-friendly digital experiences.
                    </p>
                  </div>

                  <span className="round-arrow">→</span>
                </div>

                <div className="about-card white-card">
                  <div className="number">02</div>

                  <div>
                    <h3>Education</h3>

                    <p>
                      Bachelor of Science in Information Technology
                      (BSIT)
                    </p>
                  </div>

                  <span className="round-arrow orange-arrow">→</span>
                </div>

              </div>

            </div>

          </div>
        </section>

        <section id="tools" className="tools">
          <div className="container">

            <div className="section-heading tools-heading">

              <div>
                <p className="tag">
                  <span></span>
                  My Tools
                </p>

                <h2>
                  Tools I <span>Work With.</span>
                </h2>
              </div>

              <p className="heading-description">
                The tools I use to turn ideas into practical,
                creative, and engaging digital experiences.
              </p>

            </div>

            <div className="marquee-container">
              <div className="scroll-track">

                {[
                  "htmllogo.webp",
                  "css.png",
                  "figma.webp",
                  "mysql.png",
                  "github.webp",
                  "htmllogo.webp",
                  "css.png",
                  "figma.webp",
                  "mysql.png",
                  "github.webp",
                ].map((src, i) => (
                  <div className="tool-box" key={i}>
                    <img
                      src={`/${src}`}
                      alt={src.split(".")[0]}
                    />
                  </div>
                ))}

              </div>
            </div>

          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="container">

            <div className="section-heading">

              <div>
                <p className="tag">
                  <span></span>
                  My Projects
                </p>

                <h2>
                  Selected <span>Works.</span>
                </h2>
              </div>

              <a href="#contact" className="view-all">
                Let's Work Together
                <span>→</span>
              </a>

            </div>

            <div className="project-grid">

              {[
                {
                  img: "/music.png",
                  title: "Music App Design",
                  desc: "UI/UX design in Figma",
                  category: "UI / UX DESIGN",
                  link:
                    "https://www.figma.com/design/F2hWu15yewv8IC4B4x253u/Untitled",
                },
                {
                  img: "/cam.png",
                  title: "Camera App Design",
                  desc: "UI/UX design in Figma",
                  category: "APP DESIGN",
                  link:
                    "https://www.figma.com/design/ZzujWCNgCzzCi2k5g53oog/Challenge-1",
                },
                {
                  img: "/proj.png",
                  title: "TradeTime Project",
                  desc: "Prototype design",
                  category: "PROTOTYPE",
                  link:
                    "https://www.figma.com/proto/6f84eTidHmfcYpnED6RjkJ",
                },
              ].map((proj, i) => (
                <div className="project-card" key={i}>

                  <div className="project-image">

                    <img
                      src={proj.img}
                      alt={proj.title}
                    />

                    <div className="project-number">
                      0{i + 1}
                    </div>

                    <div className="project-overlay">
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        View Project ↗
                      </a>
                    </div>

                  </div>

                  <div className="project-info">
                    <span>{proj.category}</span>
                    <h3>{proj.title}</h3>
                    <p>{proj.desc}</p>
                  </div>

                </div>
              ))}

            </div>

          </div>
        </section>

        <footer id="contact" className="footer">

          <div className="contact-section">

            <div className="container contact-container">

              <div className="contact-intro">

                <p className="tag">
                  <span></span>
                  Contact Me
                </p>

                <h2>
                  Let's Bring Your
                  <span> Ideas to Life.</span>
                </h2>

                <p className="contact-description">
                  Have a project in mind? Let's create something
                  meaningful, useful, and visually engaging together.
                </p>

                <div className="contact-details">

                  <div>
                    <span>Email</span>
                    <strong>
                      mombayfebieann@gmail.com
                    </strong>
                  </div>

                  <div>
                    <span>Role</span>
                    <strong>
                      Backend Developer & UI/UX Designer
                    </strong>
                  </div>

                </div>

              </div>

              <form
                className="contact-card"
                onSubmit={handleSubmit}
              >

                <div className="form-heading">
                  <span>Let's Talk</span>
                  <span>✦</span>
                </div>

                <label>Full Name</label>

                <input
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  className="contact-input"
                  value={formData.name}
                  onChange={handleChange}
                />

                <label>Email</label>

                <input
                  type="email"
                  name="email"
                  placeholder="Your email address"
                  className="contact-input"
                  value={formData.email}
                  onChange={handleChange}
                />

                <label>Message</label>

                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  className="contact-textarea"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>

                <button
                  type="submit"
                  className="contact-btn"
                >
                  Send Message
                </button>

              </form>

            </div>

          </div>

          <div className="footer-bottom">
            <p>
              © 2026 Febie Ann Mombay | UI/UX Designer | Backend Developer
            </p>

            <a href="#home">
              Back to top ↑
            </a>
          </div>

        </footer>

      </main>
    </div>
  );
}
export default App