import React from "react";
import { Link } from "react-router-dom";
import "./ThankYouNotFound.css";

const ThankYouPage = () => {
  return (
    <div className="thank-you-not-found-page">
      <div className="thank-you-not-found-container">
        <h1>Thank you for your message</h1>
        <p>
          And more importantly... thank you for your trust. Your words just
          landed in my inbox, and I truly appreciate you reaching out.
        </p>
        <p>
          I’ll get back to you as soon as I’ve taken off my running shoes and
          had a sip of my freshly brewed filter coffee. In the meantime, feel
          free to wander around the site, it's always open.
        </p>
        <Link to="/" className="button button-primary">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYouPage;
// chceck it out at http://localhost:5173/thank-you