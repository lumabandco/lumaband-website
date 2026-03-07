'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function GSAPAnimations() {
  const pathname = usePathname();

  useGSAP(() => {
    // Kill existing ScrollTriggers on route change
    ScrollTrigger.getAll().forEach(t => t.kill());

    // Allow DOM to settle
    setTimeout(() => {
      // 1. Navbar Scroll Effect (handled via CSS in layout or keep simple ScrollTrigger)
      // Background Orbs Parallax
      gsap.to(".orb-1", {
          yPercent: 30,
          xPercent: -20,
          ease: "none",
          scrollTrigger: {
              trigger: "body",
              start: "top top",
              end: "bottom bottom",
              scrub: 1.5
          }
      });

      gsap.to(".orb-2", {
          yPercent: -20,
          xPercent: 30,
          ease: "none",
          scrollTrigger: {
              trigger: "body",
              start: "top top",
              end: "bottom bottom",
              scrub: 2
          }
      });

      gsap.to(".orb-3", {
          yPercent: 40,
          xPercent: 20,
          scale: 1.5,
          ease: "none",
          scrollTrigger: {
              trigger: "body",
              start: "top top",
              end: "bottom bottom",
              scrub: 2.5
          }
      });

      // Floating Shapes Parallax
      gsap.to(".shape", {
          y: -100,
          ease: "none",
          scrollTrigger: {
              trigger: "body",
              start: "top top",
              end: "bottom bottom",
              scrub: 1
          }
      });

      // Hero Animations
      if (document.querySelector(".hero")) {
          const heroTl = gsap.timeline();
          
          heroTl.from(".hero-badge", {
              y: 20,
              opacity: 0,
              duration: 0.8,
              ease: "power3.out",
              delay: 0.2
          })
          .from(".hero h1", {
              y: 40,
              opacity: 0,
              duration: 1,
              ease: "power3.out"
          }, "-=0.6")
          .from(".hero p", {
              y: 30,
              opacity: 0,
              duration: 1,
              ease: "power3.out"
          }, "-=0.8")
          .from(".btn-hero-cta", {
              y: 20,
              opacity: 0,
              duration: 0.8,
              ease: "power3.out",
              stagger: 0.1,
              clearProps: "all"
          }, "-=0.8")
          .from(".hero-visual", {
              y: 60,
              opacity: 0,
              duration: 1.2,
              ease: "power3.out"
          }, "-=0.6");
          
          if (document.querySelector(".band-mockup")) {
              heroTl.from(".band-mockup", {
                  scale: 0.8,
                  opacity: 0,
                  rotation: 0,
                  duration: 1.5,
                  ease: "elastic.out(1, 0.5)"
              }, "-=1");

              // Hero Product Parallax (Scroll overlap effect)
              gsap.to(".band-mockup", {
                  yPercent: -40,
                  ease: "none",
                  scrollTrigger: {
                      trigger: ".hero",
                      start: "top top",
                      end: "bottom top",
                      scrub: 1
                  }
              });

              gsap.to(".hero-content", {
                  yPercent: 40,
                  ease: "none",
                  scrollTrigger: {
                      trigger: ".hero",
                      start: "top top",
                      end: "bottom top",
                      scrub: 1
                  }
              });
          }
      }

      // Scroll Animations for Stats
      if (document.querySelector(".stat-card")) {
          gsap.from(".stat-card", {
              scrollTrigger: {
                  trigger: ".stats-section",
                  start: "top 80%",
                  once: true
              },
              y: 50,
              autoAlpha: 0,
              duration: 0.8,
              stagger: 0.2,
              ease: "power2.out",
              clearProps: "all"
          });
      }

      // Scroll Animations for Features
      if (document.querySelector(".feature-card")) {
          gsap.from(".feature-card", {
              scrollTrigger: {
                  trigger: ".features-grid",
                  start: "top 80%",
                  once: true
              },
              y: 40,
              autoAlpha: 0,
              duration: 0.8,
              stagger: 0.15,
              ease: "power2.out",
              clearProps: "all"
          });
      }

      // Split Sections Animations
      const splitSections = document.querySelectorAll(".split-section");
      splitSections.forEach((section, index) => {
          const visual = section.querySelector(".split-visual");
          const content = section.querySelector(".split-content");
          if (content) {
            const q = gsap.utils.selector(content);
            
            if (visual) {
              gsap.from(visual, {
                  scrollTrigger: {
                      trigger: section,
                      start: "top 75%"
                  },
                  x: index % 2 === 0 ? -60 : 60,
                  opacity: 0,
                  duration: 1,
                  ease: "power3.out"
              });
            }
            
            const elements = q("h2, p, ul li, .btn, .tech-badge, .check-item, div");
            if (elements.length > 0) {
              gsap.from(elements, {
                  scrollTrigger: {
                      trigger: section,
                      start: "top 75%"
                  },
                  x: index % 2 === 0 ? 40 : -40,
                  opacity: 0,
                  duration: 0.8,
                  stagger: 0.05,
                  ease: "power3.out"
              });
            }
          }
      });

      // Values Grid
      if (document.querySelector(".value-item")) {
          gsap.from(".value-item", {
              scrollTrigger: {
                  trigger: ".values-section",
                  start: "top 75%",
                  once: true
              },
              scale: 0.9,
              y: 30,
              autoAlpha: 0,
              duration: 0.8,
              stagger: 0.15,
              ease: "back.out(1.5)",
              clearProps: "all"
          });
      }

      // CTA Box Parallax
      if (document.querySelector(".cta-box")) {
          gsap.from(".cta-box", {
              scrollTrigger: {
                  trigger: ".cta-section",
                  start: "top bottom",
                  end: "bottom bottom",
                  scrub: 1
              },
              yPercent: 30,
              ease: "none"
          });
      }

      ScrollTrigger.refresh();
    }, 100);

  }, { dependencies: [pathname], revertOnUpdate: true });

  return null;
}
