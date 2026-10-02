import { useEffect, useRef, useState } from "react";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Work from "./Work.jsx";

const projects = [
  {
    title: "BRAND & IDENTITY",
    type: "Logo Design · Brand Strategy · Visual Identity",
    year: "2026",
    image:
      "/work/1201 task 1.jpg",
  },
  {
    title: "UI / UX DESIGN",
    type: "Digital experiences that feel right.",
    year: "2026",
    image:
      "/work/uiux.png",
  },
  {
    title: "SOCIAL MEDIA",
    type: "Content built to stop the scroll.",
    year: "2025",
    image:
      "/work/social.jpg",
  },
  {
    title: "PHOTO & VIDEO",
    type: "Visuals that make people look twice.",
    year: "2026",
    image:
      "/work/photo.jpg",
  },
];

const services = [
  ["01", "Brand Strategy", "Position your brand to mean something."],
  ["02", "Creative Direction", "Build a visual world people remember."],
  ["03", "Social Media", "Turn attention into an active community."],
  ["04", "Digital Marketing", "Reach the right people at the right time."],
  ["05", "Content", "Ideas designed to stop the scroll."],
  ["06", "Web & UI/UX", "Digital experiences built to perform."],
];

const process = [
  ["01", "Discover", "We understand your business, audience and ambition."],
  ["02", "Define", "We turn insights into a clear creative direction."],
  ["03", "Create", "We build the identity, content and experience."],
  ["04", "Launch", "We put the work into the world."],
  ["05", "Grow", "We learn, optimise and scale what works."],
];

function Reveal({ children, className = "" }) {
  return (
    <div className={`reveal ${className}`}>
      {children}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const cursorRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const progress = progressRef.current;

    if (!cursor) return;

    const moveCursor = (e) => {
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    };

    const updateScroll = () => {
      const scrollTop = window.scrollY;
      const height =
        document.documentElement.scrollHeight - window.innerHeight;

      const percent = height > 0 ? (scrollTop / height) * 100 : 0;

      if (progress) {
        progress.style.width = `${percent}%`;
      }

      document.documentElement.style.setProperty(
        "--scroll-progress",
        `${percent}%`
      );
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("scroll", updateScroll, { passive: true });

    updateScroll();

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    document.querySelectorAll(".reveal").forEach((el) => {
      revealObserver.observe(el);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("scroll", updateScroll);
      revealObserver.disconnect();
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site">

      {/* SCROLL PROGRESS */}
      <div className="scroll-progress" ref={progressRef}></div>

      {/* CUSTOM CURSOR */}
      <div className="custom-cursor" ref={cursorRef}></div>

      {/* NAVIGATION */}
      <header className="navbar">

        <a href="#home" className="brand" onClick={closeMenu}>
          ACT<span>2</span>REACT
        </a>

        <nav className={`nav-links ${menuOpen ? "mobile-open" : ""}`}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#process" onClick={closeMenu}>Process</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <a href="#contact" className="nav-cta">
          Start a project <span>↗</span>
        </a>

        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
        </button>

      </header>


      {/* HERO */}
      <main>

        <section id="home" className="hero section-snap">

          <div className="hero-grid">

            <div className="hero-copy">

              <Reveal>
                <div className="eyebrow">
                  INDEPENDENT CREATIVE & DIGITAL STUDIO
                </div>
              </Reveal>

              <Reveal className="delay-1">
                <h1>
                  CREATE
                  <br />
                  <span>REACTION.</span>
                </h1>
              </Reveal>

              <Reveal className="delay-2">
                <p className="hero-text">
                  We build brands, experiences and digital
                  campaigns that turn attention into action.
                </p>
              </Reveal>

              <Reveal className="delay-3">
                <div className="hero-actions">

                  <a href="#work" className="lime-button">
                    Explore our work
                    <span>↗</span>
                  </a>

                  <a href="#about" className="text-link">
                    Discover ACT2REACT
                    <span>↓</span>
                  </a>

                </div>
              </Reveal>

              <div className="hero-meta">

                <div>
                  <span>BASED IN</span>
                  <strong>HYDERABAD / INDIA</strong>
                </div>

                <div>
                  <span>AVAILABLE FOR</span>
                  <strong>SELECT PROJECTS</strong>
                </div>

              </div>

            </div>


            {/* HERO VISUAL */}

            <div className="hero-art">

              <div className="hero-grid-lines"></div>

              <div className="hero-orbit orbit-a"></div>
              <div className="hero-orbit orbit-b"></div>
              <div className="hero-orbit orbit-c"></div>

              <div className="hero-core">

                <div className="core-ring"></div>

                <div className="core-text">
                  ACT
                  <br />
                  <span>2</span>
                  <br />
                  REACT
                </div>

              </div>

              <div className="floating-label label-a">
                STRATEGY
              </div>

              <div className="floating-label label-b">
                CREATIVE
              </div>

              <div className="floating-label label-c">
                GROWTH
              </div>

              <div className="hero-scroll">
                <span></span>
                SCROLL TO EXPLORE
              </div>

            </div>

          </div>

        </section>


        {/* MARQUEE */}

        <section className="marquee-section">

          <div className="marquee">

            <span>BRAND</span>
            <i>✦</i>
            <span>CREATE</span>
            <i>✦</i>
            <span>CONNECT</span>
            <i>✦</i>
            <span>GROW</span>
            <i>✦</i>
            <span>REACT</span>
            <i>✦</i>

            <span>BRAND</span>
            <i>✦</i>
            <span>CREATE</span>
            <i>✦</i>
            <span>CONNECT</span>
            <i>✦</i>
            <span>GROW</span>
            <i>✦</i>
            <span>REACT</span>

          </div>

        </section>


        {/* ABOUT */}

        <section id="about" className="about section-snap">

          <div className="section-number">
            01 / ABOUT
          </div>

          <div className="about-grid">

            <Reveal className="about-image-wrap">

              <div className="about-image">

                <img
                  src="/work/About.png"
                  alt="Creative team"
                />

                <div className="image-dark"></div>

                <div className="image-label">
                  <span>ACT2REACT</span>
                  <span>EST. 2026</span>
                </div>

              </div>

            </Reveal>


            <div className="about-content">

              <Reveal>
                <div className="eyebrow">
                  WE ARE ACT2REACT
                </div>
              </Reveal>

              <Reveal className="delay-1">
                <h2>
                  We create brands
                  <br />
                  <span>that move.</span>
                </h2>
              </Reveal>

             

              <Reveal className="delay-2">
                <p>
                  ACT2REACT is a creative and digital growth
                  studio built for brands that want to move
                  forward.
                  Strategy gives us direction. Design gives
                  us character. Digital gives us reach.
                  Together, they create momentum.
                </p>
              </Reveal>

              <Reveal className="delay-4">

                <a href="#contact" className="circle-link">
                  <span>WORK<br />WITH US</span>
                  <strong>↗</strong>
                </a>

              </Reveal>

            </div>

          </div>


          <div className="stats-row">

            <div>
              <strong>50<span>+</span></strong>
              <p>Brands & Projects</p>
            </div>

            <div>
              <strong>100<span>+</span></strong>
              <p>Creative Deliverables</p>
            </div>

            <div>
              <strong>360<span>°</span></strong>
              <p>Digital Thinking</p>
            </div>

            <div>
              <strong>24<span>/7</span></strong>
              <p>Ideas in Motion</p>
            </div>

          </div>

        </section>


        {/* SERVICES */}

        <section id="services" className="services section-snap">

          <div className="section-number">
            02 / SERVICES
          </div>

          <div className="services-heading">

            <Reveal>
              <div className="eyebrow">
                WHAT WE DO
              </div>
            </Reveal>

            <Reveal className="delay-1">
              <h2>
                Built around
                <br />
                <span>your growth.</span>
              </h2>
            </Reveal>

          </div>


          <div className="services-list">

            {services.map((service, index) => (

              <Reveal
                className={`service-row delay-${Math.min(index + 1, 4)}`}
                key={service[0]}
              >

                <span className="service-number">
                  {service[0]}
                </span>

                <h3>
                  {service[1]}
                </h3>

                <p>
                  {service[2]}
                </p>

                <span className="service-arrow">
                  ↗
                </span>

              </Reveal>

            ))}

          </div>

        </section>


        {/* WORK */}

        <section id="work" className="work section-snap">

          <div className="section-number">
            03 / SELECTED WORK
          </div>

          <div className="work-heading">

            <div>

              <Reveal>
                <div className="eyebrow">
                  SELECTED WORK
                </div>
              </Reveal>

              <Reveal className="delay-1">
                <h2>
                  Ideas made
                  <br />
                  <span>visible.</span>
                </h2>
              </Reveal>

            </div>

            <Reveal>
              <p>
                A selection of identities, campaigns
                and digital experiences created to
                make brands move.
              </p>
            </Reveal>

          </div>


          
                    <div className="projects">

            {projects.map((project, index) => (

              <Reveal
                className="project-card"
                key={project.title}
              >

                <div className="project-image">

                  <img
                    src={project.image}
                    alt={project.title}
                  />

                  <div className="project-overlay">

                    <span>VIEW PROJECT</span>

                    <strong>↗</strong>

                  </div>

                  <div className="project-index">
                    0{index + 1}
                  </div>

                </div>

                <div className="project-info">

                  <div>
                    <h3>{project.title}</h3>
                    <span>{project.type}</span>
                  </div>

                  <span>{project.year}</span>

                </div>

              </Reveal>

            ))}

          </div>


          {/* EXPLORE MORE */}

          <div className="work-more">

            <Reveal>

  

            </Reveal>

          </div>

        </section>

        


        {/* PROCESS */}

        <section id="process" className="process section-snap">

          <div className="section-number">
            04 / PROCESS
          </div>

          <div className="process-grid">

            <div className="process-intro">

              <Reveal>
                <div className="eyebrow">
                  HOW WE WORK
                </div>
              </Reveal>

              <Reveal className="delay-1">
                <h2>
                  Think.
                  <br />
                  Make.
                  <br />
                  <span>Move.</span>
                </h2>
              </Reveal>

              <Reveal className="delay-2">
                <p>
                  No unnecessary layers. No endless
                  meetings. Just a clear process from
                  idea to execution.
                </p>
              </Reveal>

            </div>


            <div className="process-list">

              {process.map((item, index) => (

                <Reveal
                  className={`process-item delay-${Math.min(index + 1, 4)}`}
                  key={item[0]}
                >

                  <span>{item[0]}</span>

                  <div>
                    <h3>{item[1]}</h3>
                    <p>{item[2]}</p>
                  </div>

                  <strong>↗</strong>

                </Reveal>

              ))}

            </div>

          </div>

        </section>


        {/* BIG STATEMENT */}

        <section className="statement">

          <div className="statement-line"></div>

          <Reveal>

            <p>
              GOOD BRANDS GET ATTENTION.
            </p>

            <h2>
              GREAT BRANDS
              <br />
              <span>CREATE REACTION.</span>
            </h2>

          </Reveal>

          <div className="statement-line"></div>

        </section>


        {/* CONTACT */}

<section id="contact" className="contact-new section-snap">

  <div className="contact-new-top">
    <span>05 / CONTACT</span>
    <span>LET'S CREATE SOMETHING THAT MOVES.</span>
  </div>

  <div className="contact-new-content">

    <div className="contact-new-copy">

      <Reveal>
        <div className="eyebrow">
          HAVE AN IDEA?
        </div>
      </Reveal>

      <Reveal className="delay-1">
        <h2>
          HELLO<span>.</span>
        </h2>
      </Reveal>

      <Reveal className="delay-2">
        <p>
          Got a brand, campaign or digital experience
          that deserves attention?
          <br />
          Let's turn the idea into a reaction.
        </p>
      </Reveal>

    </div>


    <Reveal className="delay-2 contact-new-action">

      <a
        href="mailto:hello@act2react.com"
        className="contact-new-card"
      >

        <div className="contact-card-top">
          <span>START A PROJECT</span>
          <span>01 / 01</span>
        </div>

        <div className="contact-card-center">
          <strong>
            LET'S
            <br />
            TALK
          </strong>

          <div className="contact-arrow">
            ↗
          </div>
        </div>

        <div className="contact-card-bottom">
          <span>HELLO.ACT2REACT@GMAIL.COM</span>
          <span>HYDERABAD / INDIA</span>
        </div>

      </a>

    </Reveal>

  </div>


  <div className="contact-new-bottom">

    <div className="contact-mini">

      <span>EMAIL</span>

      <a href="mailto:hello@act2react.com">
        hello.act2react@gmail.com
      </a>
<span>PHONE NO.</span>

      <a href="#">
       +91 9121482525
      </a>
    </div>


    <div className="contact-mini">

      <span>SOCIAL</span>

      <div>
        <a href="https://www.instagram.com/act2.react/" target="blank">Instagram</a>
        <a href="#">LinkedIn</a>
        <a href="https://www.youtube.com/@act2reactstudio" target="blank">YouTube</a>
      </div>

    </div>


    <div className="contact-mini contact-location">

      <span>LOCATION</span>

      <p>Hyderabad, India</p>

    </div>


    <a href="#home" className="contact-back">
      BACK TO TOP ↑
    </a>

  </div>

</section>

      </main>


     

    </div>
  );
}

export default App;