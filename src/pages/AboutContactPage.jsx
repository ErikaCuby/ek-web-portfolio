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
        <div className="hero-image" />
        <div className="hero-intro">
          <h1>Erika Kubickova</h1>
          <p>
            Front-End Developer. Illustrator. Marathon Enthusiast. Emotionally
            caffeinated.
          </p>
        </div>
      </section>

      <section className="intro">
        <p>
          Hi, I’m Erika. Front-end developer. Illustrator. And someone who runs
          marathons on purpose. Not for the medals (they are cool though). Not
          for the wellness aesthetic. I do it because it’s the only time my
          brain shuts up and lets me daydream… until kilometer 32, when I start
          questioning everything, including my shoe choices and life path.
        </p>

        <p>
          Building in React feels oddly similar. It starts off dreamy, clean
          files, cozy components. Then map begins its passive-aggressive
          nonsense, and suddenly I’m debugging like I’m in a toxic relationship
          with my own app. But it loads eventually. And I act like I knew what I
          was doing all along.
        </p>

        <p>
          I like things tidy. My folders. My Figma boards. My energy. I rename
          files only when necessary. I write commit messages like they’re love
          notes to future me. No chaos. No “final-final-really-this-time” lies.
          Just thoughtful breadcrumbs from one semi-stable version of myself to
          another.
        </p>

        <p>
          Some days, the code flows. Some days, my eyeliner does. Rarely both.
          I’ve seen my mascara wage war with midnight coding sessions, trying to
          figure out which one of us will stay fresh the longest. Spoiler: it’s
          never me.
        </p>

        <p>
          When I have a good hair day, everything gets done faster. When I’m
          running late and still hit alignment on the first try? I feel
          unstoppable. I bring that same energy to every project — stubborn,
          soft, slightly sarcastic, and powered by caffeine and curiosity.
        </p>

        <p>
          My world lives somewhere between design grids, running shoes, and 2AM
          code that “definitely just needs a few tweaks.” Whether it’s pixels,
          pen strokes, or pacing, I finish what I start — usually with smudged
          mascara and dramatic pride. If you’ve made it this far, I’m guessing
          we’d work well together. So say hi. Let’s build something weird,
          smart, beautiful… and maybe a little sweaty.
        </p>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <div className="skill-icons">
          <span>React</span>
          <span>JavaScript</span>
          <span>HTML/CSS</span>
          <span>Figma</span>
          <span>Illustration</span>
          <span>Consistency™</span>
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
