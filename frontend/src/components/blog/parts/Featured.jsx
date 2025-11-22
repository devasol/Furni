import React from "react";
import styles from "../Blog.module.css";

export default function Featured({ sectionRef, imageLoaded, handleImageLoad }) {
  return (
    <section className={styles.featured} ref={sectionRef}>
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
            defining interior design this year and how to incorporate them into
            your home.
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
  );
}
