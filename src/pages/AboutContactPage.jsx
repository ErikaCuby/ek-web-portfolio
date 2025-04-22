import React, { useEffect } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./AboutContactPage.css";

const AboutContactPage = () => {
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      const targetId = hash.replace("#", "");
      if (targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          setTimeout(() => {
            const offset = -80; // Adjust this if your navbar is a different height
            const elementPosition =
              targetElement.getBoundingClientRect().top +
              window.scrollY +
              offset;
            window.scrollTo({ top: elementPosition, behavior: "smooth" });
          }, 100);
        }
      }
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  return (
    <div className="about-contact-page" id="intro">
      <section className="hero">
        <div className="hero-image">
          <img
            src="/images/profile-photo.jpg"
            alt="Erika Kubickova"
            className="hero-photo"
          />
        </div>
        <div className="hero-intro">
          <h1>Erika Kubíčková</h1>
          <p>
            Front-End Developer. Illustrator. Marathon Enthusiast. Emotionally
            caffeinated.
          </p>
        </div>
      </section>

      <section className="intro">
        <p>
          Hi, I’m Erika, Front-End Developer, Illustrator, and Marathon
          enthusiast from Slovakia, currently navigating life (and icy
          sidewalks) in Oslo, Norway. I run because it's the only time my brain
          shuts up long enough to think clearly… until kilometer 32, when I
          start questioning everything from my shoe choice to my entire
          existence. Building things in React feels oddly similar. Start strong,
          look cute, then spend 4 hours debugging a `map()` like it's
          gaslighting me. But hey, the UI loads eventually, and I pretend I
          planned it all.
        </p>

        <p>
          My vibe? Organized chaos with good lighting. I rename files only when
          I must, write commit messages like polite notes to future me, and yes,
          code sometimes with smudged mascara and stubborn determination.
          Whether I’m pushing a new component, layering an illustration, or
          sprinting uphill in a storm, I finish what I start. If you're into
          clean code, honest design, and a slightly dramatic dev who runs on
          filter coffee, pain au chocolat and negronies (yum yum) — we’ll get
          along just fine.
        </p>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <div className="skill-icons">
          <span>React</span>
          <span>JavaScript</span>
          <span>Python</span>
          <span>Figma</span>
          <span>Illustration</span>
          <span>Consistency™</span>
          <span>Adobe Photoshop</span>
        </div>
      </section>

      <section className="timeline">
        <h2>My Journey</h2>
        <div className="timeline-items">
          <div className="timeline-item">
            <span className="year">2023</span>
            <p>
              Got tired of just being creative. Learned to code and made the
              internet prettier.
            </p>
          </div>
          <div className="timeline-item">
            <span className="year">2024</span>
            <p>
              Built my first portfolio. Realized I’m not a mess — I’m just
              multitasking too hard.
            </p>
          </div>
          <div className="timeline-item">
            <span className="year">2025</span>
            <p>
              Training for a marathon. Coding through DOM manipulation and leg
              cramps.
            </p>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <h2>Contact</h2>
        <p>Let's collaborate, caffeinate, or code together.</p>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/erikakubickova"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/ErikaCuby"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
        <form
          className="contact-form"
          action="https://formspree.io/f/mldbedkz"
          method="POST"
        >
          {/* 💬 Anti-bot and redirect magic */}
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_next"
            value="https://yourdomain.com/thank-you"
          />

          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" placeholder="Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </section>
    </div>
  );
};

export default AboutContactPage;
