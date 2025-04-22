import React from "react";
import { Link } from "react-router-dom";
import "./ThankYouNotFound.css";


const NotFoundPage = () => {
  return (
    <div className="thank-you-not-found-page">
      <div className="thank-you-not-found-container">
        <h1>Oops. Page not found</h1>
        <p>
          The page you’re looking for doesn’t exist — or maybe it’s just hiding
          behind a rogue media query.
        </p>
        <p>
          Either way, let’s get you back to something that does exist (like the
          homepage).
        </p>
        <Link to="/" className="button button-primary">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
