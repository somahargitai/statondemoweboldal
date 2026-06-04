import { useEffect, useRef } from 'react';

/**
 * Adds `is-visible` to the element (and any `.reveal` descendants) once it
 * scrolls into view. Pure IntersectionObserver — no animation library needed
 * for the scroll reveals, keeping the bundle lean.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  stagger = 90,
  // changes to `trigger` re-scan for `.reveal` nodes — needed when content
  // arrives after mount (e.g. async-loaded project cards).
  trigger?: unknown,
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const targets = node.classList.contains('reveal')
      ? [node, ...node.querySelectorAll<HTMLElement>('.reveal')]
      : Array.from(node.querySelectorAll<HTMLElement>('.reveal'));

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const index = targets.indexOf(el);
            el.style.transitionDelay = `${Math.max(index, 0) * stagger}ms`;
            el.classList.add('is-visible');
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [stagger, trigger]);

  return ref;
}
