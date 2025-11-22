import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top immediately whenever the pathname changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}