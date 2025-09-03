// AboutUs.jsx
import React, { useEffect, useRef, useState } from "react";
import styles from "./AboutUs.module.css";
import Header from "../home/header/Header";
import Footer from "../home/footer/Footer";

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
      icon: "fas fa-leaf",
    },
    {
      title: "Quality Craftsmanship",
      description:
        "Every piece is handcrafted with attention to detail and precision.",
      icon: "fas fa-hammer",
    },
    {
      title: "Timeless Design",
      description:
        "Our furniture combines classic elegance with modern functionality.",
      icon: "fas fa-palette",
    },
    {
      title: "Customer Satisfaction",
      description: "Your happiness is our priority from selection to delivery.",
      icon: "fas fa-heart",
    },
  ];

  return (
    <>
      <Header />
      <div className={styles.aboutUs}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={`${styles.heroTitle} ${styles.animateOnScroll}`}>
              Design Your <span className={styles.highlight}>Dream Space</span>
            </h1>
            <p className={`${styles.heroSubtitle} ${styles.animateOnScroll}`}>
              Where craftsmanship meets contemporary design to create furniture
              that tells your story
            </p>
            <div className={styles.heroCtaContainer}>
              <a
                href="#"
                className={`${styles.heroCta} ${styles.animateOnScroll}`}
              >
                Explore Collections
              </a>
              <a
                href="#"
                className={`${styles.heroCtaSecondary} ${styles.animateOnScroll}`}
              >
                <i className="fas fa-play"></i> Our Story
              </a>
            </div>
          </div>
          <div className={styles.scrollIndicator}>
            <span>Scroll to explore</span>
            <div className={styles.scrollArrow}></div>
          </div>
        </div>

        {/* Values Section */}
        <section className={styles.valuesSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Our Values</h2>
            <p className={styles.sectionSubtitle}>
              The principles that guide everything we create
            </p>

            <div className={styles.valuesGrid}>
              {values.map((value, index) => (
                <div
                  key={index}
                  className={`${styles.valueCard} ${styles.animateOnScroll}`}
                  onMouseEnter={() => setActiveTab(index)}
                >
                  <div className={styles.valueIcon}>
                    <i className={value.icon}></i>
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section with Interactive Timeline */}
        <section
          ref={(el) => (sectionRefs.current[0] = el)}
          className={styles.storySection}
        >
          <div className={styles.container}>
            <div className={styles.sectionContent}>
              <div className={styles.textContent}>
                <h2 className={styles.sectionTitle}>Our Journey</h2>
                <p className={styles.sectionText}>
                  Founded in 2005, Furni began as a small workshop with a big
                  vision. What started as a one-person operation has grown into
                  a team of dedicated craftspeople, designers, and furniture
                  enthusiasts.
                </p>

                <div className={styles.timeline}>
                  <div className={styles.timelineItem}>
                    <div className={styles.timelineDot}></div>
                    <div className={styles.timelineContent}>
                      <h4>2005</h4>
                      <p>Founded in a small garage workshop</p>
                    </div>
                  </div>
                  <div className={styles.timelineItem}>
                    <div className={styles.timelineDot}></div>
                    <div className={styles.timelineContent}>
                      <h4>2010</h4>
                      <p>Opened first retail showroom</p>
                    </div>
                  </div>
                  <div className={styles.timelineItem}>
                    <div className={styles.timelineDot}></div>
                    <div className={styles.timelineContent}>
                      <h4>2015</h4>
                      <p>Launched sustainable materials initiative</p>
                    </div>
                  </div>
                  <div className={styles.timelineItem}>
                    <div className={styles.timelineDot}></div>
                    <div className={styles.timelineContent}>
                      <h4>2020</h4>
                      <p>Expanded to international markets</p>
                    </div>
                  </div>
                </div>

                <button className={styles.ctaButton}>
                  Read Our Full Story
                  <span className={styles.buttonArrow}>→</span>
                </button>
              </div>
              <div className={styles.imageContent}>
                <div className={styles.imageStack}>
                  <div className={styles.stackImage1}>
                    <img
                      src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=958&q=80"
                      alt="Craftsmanship"
                    />
                  </div>
                  <div className={styles.stackImage2}>
                    <img
                      src="https://images.unsplash.com/photo-1493663284031-b7e3aaa4c4b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                      alt="Furniture making"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section
          ref={(el) => (sectionRefs.current[1] = el)}
          className={`${styles.section} ${styles.stats}`}
        >
          <div className={styles.statsContainer}>
            <div className={styles.stat}>
              <span
                ref={(el) => (statsRef.current[0] = el)}
                className={styles.statNumber}
                data-count="18"
              >
                0
              </span>
              <span className={styles.statLabel}>Years Experience</span>
            </div>
            <div className={styles.stat}>
              <span
                ref={(el) => (statsRef.current[1] = el)}
                className={styles.statNumber}
                data-count="2500"
              >
                0
              </span>
              <span className={styles.statLabel}>Happy Customers</span>
            </div>
            <div className={styles.stat}>
              <span
                ref={(el) => (statsRef.current[2] = el)}
                className={styles.statNumber}
                data-count="15"
              >
                0
              </span>
              <span className={styles.statLabel}>Master Craftsmen</span>
            </div>
            <div className={styles.stat}>
              <span
                ref={(el) => (statsRef.current[3] = el)}
                className={styles.statNumber}
                data-count="98"
              >
                0
              </span>
              <span className={styles.statLabel}>% Satisfaction</span>
            </div>
          </div>
        </section>

        {/* Craftsmanship Gallery */}
        <section className={styles.gallerySection}>
          <h2 className={styles.sectionTitle}>Our Craftsmanship</h2>
          <p className={styles.sectionSubtitle}>
            Each piece tells a story of dedication and artistry
          </p>

          <div className={styles.gallery}>
            <div className={styles.galleryItem}>
              <img
                src="https://images.unsplash.com/photo-1505842381624-c6b0579625a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="Woodworking"
              />
              <div className={styles.galleryOverlay}>
                <h3>Wood Selection</h3>
                <p>Handpicked sustainable hardwoods</p>
              </div>
            </div>
            <div className={styles.galleryItem}>
              <img
                src="https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
                alt="Crafting process"
              />
              <div className={styles.galleryOverlay}>
                <h3>Precision Crafting</h3>
                <p>Meticulous attention to every detail</p>
              </div>
            </div>
            <div className={styles.galleryItem}>
              <img
                src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt="Finished product"
              />
              <div className={styles.galleryOverlay}>
                <h3>Final Finish</h3>
                <p>Eco-friendly stains and protective coatings</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section
          ref={(el) => (sectionRefs.current[2] = el)}
          className={styles.section}
        >
          <div className={styles.container}>
            <h2 className={styles.teamTitle}>Meet Our Artisans</h2>
            <p className={styles.teamSubtitle}>
              The talented individuals behind our beautiful creations
            </p>

            <div className={styles.teamGrid}>
              <div className={styles.teamMember}>
                <div className={styles.memberImage}>
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    alt="Master craftsman"
                  />
                  <div className={styles.imageOverlay}>
                    <div className={styles.socialLinks}>
                      <a href="#" className={styles.socialLink}>
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href="#" className={styles.socialLink}>
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a href="#" className={styles.socialLink}>
                        <i className="fab fa-twitter"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <h3 className={styles.memberName}>Michael Rodriguez</h3>
                <p className={styles.memberRole}>Lead Craftsman & Founder</p>
              </div>

              <div className={styles.teamMember}>
                <div className={styles.memberImage}>
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                    alt="Furniture designer"
                  />
                  <div className={styles.imageOverlay}>
                    <div className={styles.socialLinks}>
                      <a href="#" className={styles.socialLink}>
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href="#" className={styles.socialLink}>
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a href="#" className={styles.socialLink}>
                        <i className="fab fa-twitter"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <h3 className={styles.memberName}>Sarah Johnson</h3>
                <p className={styles.memberRole}>Head Designer</p>
              </div>

              <div className={styles.teamMember}>
                <div className={styles.memberImage}>
                  <img
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    alt="Wood specialist"
                  />
                  <div className={styles.imageOverlay}>
                    <div className={styles.socialLinks}>
                      <a href="#" className={styles.socialLink}>
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href="#" className={styles.socialLink}>
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a href="#" className={styles.socialLink}>
                        <i className="fab fa-twitter"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <h3 className={styles.memberName}>James Wilson</h3>
                <p className={styles.memberRole}>Wood Specialist</p>
              </div>

              <div className={styles.teamMember}>
                <div className={styles.memberImage}>
                  <img
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                    alt="Interior designer"
                  />
                  <div className={styles.imageOverlay}>
                    <div className={styles.socialLinks}>
                      <a href="#" className={styles.socialLink}>
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href="#" className={styles.socialLink}>
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a href="#" className={styles.socialLink}>
                        <i className="fab fa-twitter"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <h3 className={styles.memberName}>Emma Thompson</h3>
                <p className={styles.memberRole}>Interior Designer</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className={styles.testimonialsSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>What Our Customers Say</h2>
            <div className={styles.testimonials}>
              <div className={styles.testimonial}>
                <div className={styles.testimonialContent}>
                  <p>
                    "The quality of Furni's furniture is exceptional. Our dining
                    table is not just furniture, it's a centerpiece that gets
                    compliments from everyone who visits."
                  </p>
                </div>
                <div className={styles.testimonialAuthor}>
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    alt="Customer"
                  />
                  <div>
                    <h4>Michael Chen</h4>
                    <p>Homeowner</p>
                  </div>
                </div>
              </div>
              <div className={styles.testimonial}>
                <div className={styles.testimonialContent}>
                  <p>
                    "I've furnished my entire office with Furni pieces. They're
                    not only beautiful but incredibly durable, standing up to
                    daily use while maintaining their elegance."
                  </p>
                </div>
                <div className={styles.testimonialAuthor}>
                  <img
                    src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80"
                    alt="Customer"
                  />
                  <div>
                    <h4>Sarah Williams</h4>
                    <p>Business Owner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to transform your space?</h2>
            <p className={styles.ctaText}>
              Discover our collections and find the perfect pieces for your
              home.
            </p>
            <div className={styles.ctaButtons}>
              <button className={styles.ctaButtonPrimary}>
                Explore Collections
                <span className={styles.buttonArrow}>→</span>
              </button>
              <button className={styles.ctaButtonSecondary}>
                Book a Consultation
              </button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
