import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

import "./ServicePage.css";

function ServicePage({
  number,
  title,
  titleAccent,
  description,
  intro,
  services,
}) {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    if (!cursor) return;

    const moveCursor = (e) => {
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    mass: 0.4,
  });

  const heroY = useTransform(
    smoothProgress,
    [0, 1],
    [0, 180]
  );

  const heroScale = useTransform(
    smoothProgress,
    [0, 1],
    [1, 0.88]
  );

  const heroOpacity = useTransform(
    smoothProgress,
    [0, 0.8],
    [1, 0]
  );

  const lineWidth = useTransform(
    smoothProgress,
    [0, 0.7],
    ["0%", "100%"]
  );

  return (
    <main className="service-page">

      {/* =====================================================
          SERVICE NAVBAR
          ===================================================== */}

      <nav className="service-navbar">

        {/* LOGO → HOME */}

       <Link
  to="/"
  className="service-navbar-logo"
  aria-label="ACT2REACT Home"
>
  ACT<span>2</span>REACT
</Link>


        {/* HOME → HOME */}

        <Link
          to="/"
          className="service-navbar-home"
          aria-label="Back to home"
        >
          <span>←</span>
          <span>HOME</span>
        </Link>

      </nav>


      {/* CUSTOM CURSOR */}

      <div
        className="service-cursor"
        ref={cursorRef}
      ></div>


      {/* =====================================================
          HERO
          ===================================================== */}

      <section
        className="service-hero"
        ref={heroRef}
      >

        <motion.div
          className="service-hero-inner"
          style={{
            y: heroY,
            scale: heroScale,
            opacity: heroOpacity,
          }}
        >

          <motion.div
            className="service-number"
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {number} / SERVICES
          </motion.div>


          <motion.h1
            initial={{
              opacity: 0,
              y: 80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            {title}

            <br />

            <span>{titleAccent}</span>

          </motion.h1>


          <motion.div
            className="service-line"
            initial={{
              width: 0,
            }}
            animate={{
              width: "100%",
            }}
            transition={{
              duration: 1.2,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
          />


          <motion.p
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.55,
            }}
          >
            {description}
          </motion.p>

        </motion.div>


        <motion.div
          className="scroll-indicator"
          style={{
            opacity: heroOpacity,
          }}
        >
          SCROLL TO EXPLORE
          <span>↓</span>
        </motion.div>

      </section>


      {/* =====================================================
          INTRO
          ===================================================== */}

      <section className="service-intro">

        <motion.div
          className="intro-label"
          initial={{
            opacity: 0,
            x: -40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          WHAT WE DO
        </motion.div>


        <motion.h2
          initial={{
            opacity: 0,
            y: 80,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {intro}
        </motion.h2>

      </section>


      {/* =====================================================
          SERVICES
          ===================================================== */}

      <section className="service-capabilities">

        <div className="capabilities-header">
          <span>CAPABILITIES</span>
          <span>{number} / 06</span>
        </div>


        <div className="capabilities-list">

          {services.map((service, index) => (

            <motion.div
              className="capability"
              key={service}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              <span>
                0{index + 1}
              </span>

              <h3>
                {service}
              </h3>

              <strong>
                ↗
              </strong>

            </motion.div>

          ))}

        </div>

      </section>


      {/* =====================================================
          CTA
          ===================================================== */}

      <section className="service-cta">

        <motion.div
          className="cta-inner"
          initial={{
            opacity: 0,
            y: 80,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          <span>
            HAVE A PROJECT IN MIND?
          </span>

          <h2>
            Let's build
            <br />
            <em>something great.</em>
          </h2>


          <a
            href="mailto:hello.act2react@gmail.com"
            className="service-cta-button"
          >
            <span>START A PROJECT</span>
            <strong>↗</strong>
          </a>

        </motion.div>

      </section>

    </main>
  );
}

export default ServicePage;