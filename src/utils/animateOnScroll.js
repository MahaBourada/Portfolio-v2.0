// Small helper to add `in-view` class to elements with `data-animate`
const DEFAULT_OPTIONS = { threshold: 0.15 };

const ENABLE_LOG =
  typeof window !== "undefined" &&
  (/localhost|127\.0\.0\.1/.test(window.location.hostname) ||
    window.location.hostname === "" ||
    window.location.port);

function observe() {
  if (typeof window === "undefined" || !window.IntersectionObserver) return;
  const observer = new IntersectionObserver((entries, obs) => {
    if (ENABLE_LOG)
      console.debug(
        "[animateOnScroll] observer callback, entries:",
        entries.map((e) => ({
          target: e.target.id || (e.target.dataset && e.target.dataset.animate),
          isIntersecting: e.isIntersecting,
          ratio: e.intersectionRatio,
        }))
      );

    entries.forEach((entry) => {
      const el = entry.target;
      if (ENABLE_LOG) {
        console.debug("[animateOnScroll] entry:", {
          element: el,
          id: el.id,
          dataset: el.dataset,
          isIntersecting: entry.isIntersecting,
          intersectionRatio: entry.intersectionRatio,
          boundingClientRect: entry.boundingClientRect,
          rootBounds: entry.rootBounds,
        });
      }

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        el.classList.add("in-view");
        // If element is marked once, unobserve to avoid re-trigger
        if (el.dataset.animateLifetime !== "infinite") obs.unobserve(el);
      }
    });
  }, DEFAULT_OPTIONS);

  const els = Array.from(document.querySelectorAll("[data-animate]"));
  if (ENABLE_LOG)
    console.debug(
      "[animateOnScroll] elements to observe:",
      els.map((e) => ({ id: e.id, dataset: e.dataset }))
    );
  els.forEach((el) => observer.observe(el));

  // Fallback: ensure animations are not stuck hidden.
  setTimeout(() => {
    const stillHidden = els.filter((el) => !el.classList.contains("in-view"));
    if (stillHidden.length && ENABLE_LOG)
      console.warn(
        "[animateOnScroll] fallback: forcing in-view on",
        stillHidden.map((e) => e.id || e.dataset)
      );
    els.forEach((el) => {
      if (!el.classList.contains("in-view")) el.classList.add("in-view");
    });
  }, 700);
}

// auto-init when imported on client
if (typeof window !== "undefined") {
  // init on next tick so React can render first
  window.requestAnimationFrame(() => {
    observe();
  });
}

export default observe;
