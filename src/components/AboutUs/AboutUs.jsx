// AboutUs.jsx
import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeaf,
  faHammer,
  faPalette,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./AboutUs.module.css";
import Header from "../home/header/Header";
import Footer from "../home/footer/Footer";
import HeroSection from "./parts/HeroSection";
import ValuesSection from "./parts/ValuesSection";
import StorySection from "./parts/StorySection";
import StatsSection from "./parts/StatsSection";
import GallerySection from "./parts/GallerySection";
import TestimonialsSection from "./parts/TestimonialsSection";
import CtaSection from "./parts/CtaSection";

const AboutUs = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const sectionRefs = useRef([]);
  const statsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Add animation class to each section with a delay

    document.title = "AboutUs | Furni";

    sectionRefs.current.forEach((section, index) => {
      if (section) {
        setTimeout(() => {
          section.classList.add(styles.visible);
        }, 300 * index);
      }
    });

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animateIn);

            // Animate stats counting
            if (entry.target.classList.contains(styles.stats)) {
              statsRef.current.forEach((stat, index) => {
                if (stat) {
                  const target = parseInt(stat.getAttribute("data-count"));
                  const duration = 2000;
                  const increment = target / (duration / 16);
                  let current = 0;

                  const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                      clearInterval(timer);
                      current = target;
                    }
                    stat.textContent = Math.floor(current);
                  }, 16);
                }
              });
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all animated elements
    const animatedElements = document.querySelectorAll(
      `.${styles.animateOnScroll}`
    );
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      title: "Sustainability",
      description:
        "We use ethically sourced materials and eco-friendly practices.",
      icon: "🌿",
    },
    {
      title: "Quality Craftsmanship",
      description:
        "Every piece is handcrafted with attention to detail and precision.",
      icon: "🔨",
    },
    {
      title: "Timeless Design",
      description:
        "Our furniture combines classic elegance with modern functionality.",
      icon: "🎨",
    },
    {
      title: "Customer Satisfaction",
      description: "Your happiness is our priority from selection to delivery.",
      icon: "❤️",
    },
  ];

  return (
    <>
      <Header />
      <div className={styles.aboutUs}>
        <HeroSection />
        <ValuesSection setActiveTab={setActiveTab} />
        <StorySection sectionRef={(el) => (sectionRefs.current[0] = el)} />
        <StatsSection
          sectionRef={(el) => (sectionRefs.current[1] = el)}
          statsRef={statsRef}
        />
        <GallerySection />
        <TestimonialsSection />
        <CtaSection />

        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
