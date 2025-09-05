import React from "react";
import BlogCard from "./BlogCard";
import styles from "../Blog.module.css";

export default function BlogList({
  categories,
  activeCategory,
  setActiveCategory,
  posts,
  handleImageLoad,
}) {
  return (
    <section className={styles.blogContent}>
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

      <div className={styles.blogGrid}>
        {posts.map((post, index) => (
          <BlogCard
            key={post.id}
            post={post}
            index={index}
            handleImageLoad={handleImageLoad}
          />
        ))}
      </div>

      <div className={styles.loadMore}>
        <button>Load More Articles</button>
      </div>
    </section>
  );
}
