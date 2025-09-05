import React, { useState, useEffect, useRef } from "react";
import styles from "./Blog.module.css";
import Header from "../home/header/Header";
import Footer from "../home/footer/Footer";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState({});
  const sectionRefs = useRef([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Set loaded to true after component mounts to trigger animations
    setLoaded(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Animate sections on scroll
      sectionRefs.current.forEach((section, index) => {
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight * 0.85;

        if (isInViewport) {
          section.classList.add(styles.visible);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleImageLoad = (id) => {
    setImageLoaded((prev) => ({ ...prev, [id]: true }));
  };

  const blogPosts = [
    {
      id: 1,
      title: "10 Modern Living Room Ideas for 2023",
      excerpt:
        "Discover the latest trends in living room design that combine comfort with contemporary style.",
      category: "living",
      date: "May 15, 2023",
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=735&h=500&auto=format&fit=crop",
      author: {
        name: "Sarah Johnson",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&auto=format&fit=crop",
      },
    },
    {
      id: 2,
      title: "How to Choose the Perfect Sofa for Your Space",
      excerpt:
        "A comprehensive guide to selecting a sofa that fits your room dimensions and personal style.",
      category: "living",
      date: "April 28, 2023",
      readTime: "7 min read",
      image:
        "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=500&h=333&auto=format&fit=crop",
      author: {
        name: "Michael Chen",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&auto=format&fit=crop",
      },
    },
    {
      id: 3,
      title: "The Art of Mixing Vintage and Modern Furniture",
      excerpt:
        "Learn how to blend antique pieces with contemporary designs for a unique interior aesthetic.",
      category: "styling",
      date: "April 12, 2023",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1505842381624-c6b0579625a5?w=500&h=333&auto=format&fit=crop",
      author: {
        name: "Emma Rodriguez",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&auto=format&fit=crop",
      },
    },
    {
      id: 4,
      title: "Sustainable Furniture: Eco-Friendly Choices for Your Home",
      excerpt:
        "Explore environmentally conscious furniture options that don't compromise on style or quality.",
      category: "sustainability",
      date: "March 30, 2023",
      readTime: "8 min read",
      image:
        "https://images.unsplash.com/photo-1493663284031-b7e3aaa4c4b1?w=500&h=333&auto=format&fit=crop",
      author: {
        name: "David Wilson",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&auto=format&fit=crop",
      },
    },
    {
      id: 5,
      title: "Small Space Solutions: Maximizing Your Apartment",
      excerpt:
        "Clever furniture arrangements and multi-functional pieces for compact living spaces.",
      category: "small-spaces",
      date: "March 18, 2023",
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=500&h=333&auto=format&fit=crop",
      author: {
        name: "Lisa Thompson",
        avatar:
          "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=50&h=50&auto=format&fit=crop",
      },
    },
    {
      id: 6,
      title: "The Psychology of Color in Furniture Selection",
      excerpt:
        "How different hues affect mood and perception in your living environment.",
      category: "design",
      date: "March 5, 2023",
      readTime: "9 min read",
      image:
        "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500&h=333&auto=format&fit=crop",
      author: {
        name: "Robert Kim",
        avatar:
          "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=50&h=50&auto=format&fit=crop",
      },
    },
  ];

  const categories = [
    { id: "all", name: "All Articles" },
    { id: "living", name: "Living Room" },
    { id: "bedroom", name: "Bedroom" },
    { id: "design", name: "Design Tips" },
    { id: "sustainability", name: "Sustainability" },
    { id: "small-spaces", name: "Small Spaces" },
  ];

  const filteredPosts =
    activeCategory === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <>
      <div className={styles.header}>
        <Header />
      </div>

      <div className={`${styles.blogPage} ${loaded ? styles.loaded : ""}`}>
        {/* Hero Section */}
        <section
          className={styles.hero}
          ref={(el) => (sectionRefs.current[0] = el)}
        >
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Furni Blog</h1>
            <p className={styles.heroSubtitle}>
              Inspiration, tips, and trends for creating your perfect space
            </p>
            <div className={styles.searchBox}>
              <input type="text" placeholder="Search articles..." />
              <button>Search</button>
            </div>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.imageContainer}>
              <img
                src="https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Featured post"
                onLoad={() => handleImageLoad("hero")}
              />
              {!imageLoaded["hero"] && (
                <div className={styles.imagePlaceholder}></div>
              )}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section
          className={styles.featured}
          ref={(el) => (sectionRefs.current[1] = el)}
        >
          <div className={styles.featuredContent}>
            <div className={styles.featuredImage}>
              <img
                src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=80"
                alt="Featured post"
                onLoad={() => handleImageLoad("featured")}
              />
              {!imageLoaded["featured"] && (
                <div className={styles.imagePlaceholder}></div>
              )}
            </div>
            <div className={styles.featuredText}>
              <span className={styles.featuredBadge}>Featured</span>
              <h2>
                Transforming Spaces: The 2023 Furniture Trends You Need to Know
              </h2>
              <p>
                Discover the emerging styles, materials, and colors that are
                defining interior design this year and how to incorporate them
                into your home.
              </p>
              <div className={styles.postMeta}>
                <img
                  src="https://images.unsplash.com/photo-1567532939604-b6b5b0db1604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                  alt="Author"
                  onLoad={() => handleImageLoad("author")}
                />
                {!imageLoaded["author"] && (
                  <div className={styles.avatarPlaceholder}></div>
                )}
                <div>
                  <span>Jennifer Adams</span>
                  <span>June 2, 2023 · 10 min read</span>
                </div>
              </div>
              <button className={styles.readMore}>Read Article</button>
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <section className={styles.blogContent}>
          {/* Category Filters */}
          <div className={styles.categoryFilters}>
            {categories.map((category) => (
              <button
                key={category.id}
                className={activeCategory === category.id ? styles.active : ""}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className={styles.blogGrid}>
            {filteredPosts.map((post, index) => (
              <article
                key={post.id}
                className={styles.blogCard}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.cardImage}>
                  <img
                    src={post.image}
                    alt={post.title}
                    onLoad={() => handleImageLoad(post.id)}
                  />
                  {!imageLoaded[post.id] && (
                    <div className={styles.imagePlaceholder}></div>
                  )}
                  <div className={styles.categoryTag}>{post.category}</div>
                </div>
                <div className={styles.cardContent}>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className={styles.cardMeta}>
                    <div className={styles.author}>
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        onLoad={() => handleImageLoad(`avatar-${post.id}`)}
                      />
                      {!imageLoaded[`avatar-${post.id}`] && (
                        <div className={styles.avatarPlaceholder}></div>
                      )}
                      <span>{post.author.name}</span>
                    </div>
                    <div className={styles.metaInfo}>
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className={styles.loadMore}>
            <button>Load More Articles</button>
          </div>
        </section>

        {/* Newsletter Section */}
        <section
          className={styles.newsletter}
          ref={(el) => (sectionRefs.current[2] = el)}
        >
          <div className={styles.newsletterContent}>
            <h2>Stay Updated with Furni</h2>
            <p>
              Subscribe to our newsletter for the latest articles, product
              updates, and exclusive offers.
            </p>
            <form className={styles.newsletterForm}>
              <input type="email" placeholder="Your email address" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
