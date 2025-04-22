// This component is responsible to scroll to the top of the page when the route changes. It uses the `useLocation` hook from `react-router-dom` to get the current location and the `useEffect` hook to perform the scroll action. The `hash` is checked to prevent scrolling if there is a hash in the URL.

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
