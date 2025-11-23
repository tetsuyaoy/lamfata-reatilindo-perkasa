import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop.jsx
 * - Langsung scroll ke atas setiap kali pathname berubah
 * - behavior: "instant" agar tidak ada delay / smooth yang terasa seperti loading
 */

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instant scroll to top (no smooth)
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
