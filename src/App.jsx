import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
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
      alert("⚠️ Please fill in all fields!");
      return;
    }

    alert("✅ Message Sent!");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };


  // Simulate loading for the circular loader
  useEffect(() => {
    let interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setLoading(false);
          return 100;
        }
        return prev + 1;
      });
    }, 30); // ~3 seconds to reach 100%
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* LOADER */}
      {loading && (
        <div className="loader-wrapper">
          <div className="circle-loader">
            <svg>
              <circle cx="50" cy="50" r="45"></circle>
              <circle
                cx="50"
                cy="50"
                r="45"
                style={{ strokeDashoffset: 283 - (283 * progress) / 100 }}
              ></circle>
            </svg>
            <div className="progress-text">{progress}%</div>
          </div>
        </div>
      )}

      {/* PORTFOLIO CONTENT */}
      <div className={`portfolio ${!loading ? "show" : ""}`}>
        {/* NAVBAR */}
        <header className="navbar">
          <div className="container nav-container">
            <div className="logo">
              <span className="logo-icon">ᖴᗩ</span>
            </div>

            <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#tools">Tools</a>
              <a href="#contact">Contact</a>
            </nav>

            <div
              className="menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </div>
          </div>
        </header>

        {/* HERO */}
        <section id="home" className="hero">
          <div className="container hero-grid">
            <div className="hero-text">
              <span className="badge">Hello There!</span>
              <h1>
                I'm <span className="text-ochre">Febie Ann</span>,<br />
                Graphic Designer and UX Writer.
              </h1>
              <p>
                A Graphic Designer and UX Writer who crafts visually striking
                designs and words seamlessly.
              </p>
              <div className="btn-group">
                <a href="#projects" className="btn-dark">
                  View My Projects
                </a>
              </div>
            </div>

            <div className="hero-image">
              <div className="image-wrapper">
                <img src="/febie.jpg" alt="Febie" className="profile-img" />
                <div className="dot-pattern"></div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section bg-light">
          <div className="container">
            <p className="tag">— About</p>
            <div className="services-grid">
              <div className="card">
                <h3>Who I am</h3>
                <p>
                  I am an IT student passionate about graphic design and UX
                  writing. I create visually appealing and user-friendly digital
                  experiences.
                </p>
              </div>
              <div className="card">
                <h3>Education</h3>
                <p>Bachelor of Science in Information Technology (BSIT)</p>
              </div>
            </div>
          </div>
        </section>

        {/* TOOLS */}
        <section id="tools" className="tools">
          <div className="container">
            <p className="tag">— Tools</p>
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
                    <img src={`/${src}`} alt={src.split(".")[0]} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section bg-light">
          <div className="container">
            <h2>My Projects</h2>
            <div className="project-grid">
              {[
                {
                  img: "/music.png",
                  title: "Music App Design",
                  desc: "UI/UX design in Figma",
                  link: "https://www.figma.com/design/F2hWu15yewv8IC4B4x253u/Untitled",
                },
                {
                  img: "/cam.png",
                  title: "Camera App Design",
                  desc: "UI/UX design in Figma",
                  link: "https://www.figma.com/design/ZzujWCNgCzzCi2k5g53oog/Challenge-1",
                },
                {
                  img: "/proj.png",
                  title: "TradeTime Project",
                  desc: "Prototype design",
                  link: "https://www.figma.com/proto/6f84eTidHmfcYpnED6RjkJ",
                },
              ].map((proj, i) => (
                <div className="project-card" key={i}>
                  <img src={proj.img} alt={proj.title} />
                  <div className="overlay">
                    <h3>{proj.title}</h3>
                    <p>{proj.desc}</p>
                    <a href={proj.link} target="_blank" rel="noreferrer">
                      View Here
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer id="contact" className="footer">
           <div className="contact-section">
      <h1 className="contact-title">
        Contact <span>Me</span>
      </h1>

      <form className="contact-card" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="contact-input"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="contact-input"
          value={formData.email}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Message"
          className="contact-textarea"
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit" className="contact-btn">
          Send Message
        </button>
      </form>
    </div>
        </footer>

        {/* NEXT STEPS / SOCIAL */}
        <section id="next-steps">
          <div id="documentation">
            <svg className="icon" role="presentation" aria-hidden="true">
              <use href="/icons.svg#documentation-icon"></use>
            </svg>
            <h2>Documentation</h2>
            <p>Your questions, answered</p>
            <ul>
              <li>
                <a href="https://vite.dev/" target="_blank" rel="noreferrer">
                  <img className="logo" src={viteLogo} alt="" />
                  Explore Vite
                </a>
              </li>
              <li>
                <a href="https://react.dev/" target="_blank" rel="noreferrer">
                  <img className="button-icon" src={reactLogo} alt="" />
                  Learn more
                </a>
              </li>
            </ul>
          </div>

          <div id="social">
            <svg className="icon" role="presentation" aria-hidden="true">
              <use href="/icons.svg#social-icon"></use>
            </svg>
            <h2>Connect with us</h2>
            <p>Join the Vite community</p>
            <ul>
              <li>
                <a href="https://github.com/vitejs/vite" target="_blank" rel="noreferrer">
                  <svg className="button-icon" role="presentation" aria-hidden="true">
                    <use href="/icons.svg#github-icon"></use>
                  </svg>
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://chat.vite.dev/" target="_blank" rel="noreferrer">
                  <svg className="button-icon" role="presentation" aria-hidden="true">
                    <use href="/icons.svg#discord-icon"></use>
                  </svg>
                  Discord
                </a>
              </li>
              <li>
                <a href="https://x.com/vite_js" target="_blank" rel="noreferrer">
                  <svg className="button-icon" role="presentation" aria-hidden="true">
                    <use href="/icons.svg#x-icon"></use>
                  </svg>
                  X.com
                </a>
              </li>
            </ul>
          </div>
        </section>
        <footer className="footer">
  <p>
    © 2026 Febie Ann Mombay | UX Designer | Graphic Designer
  </p>
</footer>
      </div>
    </>
  );
}

export default App;    