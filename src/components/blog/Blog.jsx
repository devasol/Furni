import React, { useState, useEffect, useRef } from "react";
import styles from "./Blog.module.css";
import Header from "../home/header/Header";
import Footer from "../home/footer/Footer";
import Hero from "./parts/Hero";
import Featured from "./parts/Featured";
import BlogList from "./parts/BlogList";
import Newsletter from "./parts/Newsletter";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [imageLoaded, setImageLoaded] = useState({});
  const sectionRefs = useRef([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);

    const handleScroll = () => {
      sectionRefs.current.forEach((section) => {
        if (!section) return;
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          section.classList.add(styles.visible);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
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
        <Hero
          sectionRef={(el) => (sectionRefs.current[0] = el)}
          imageLoaded={imageLoaded}
          handleImageLoad={handleImageLoad}
        />

        <Featured
          sectionRef={(el) => (sectionRefs.current[1] = el)}
          imageLoaded={imageLoaded}
          handleImageLoad={handleImageLoad}
        />

        <BlogList
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          posts={filteredPosts}
          handleImageLoad={handleImageLoad}
        />

        <Newsletter sectionRef={(el) => (sectionRefs.current[2] = el)} />
      </div>
      <Footer />
    </>
  );
};

export default Blog;
