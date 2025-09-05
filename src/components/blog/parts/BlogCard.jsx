import React from "react";
import styles from "../Blog.module.css";

export default function BlogCard({ post, index, handleImageLoad }) {
  return (
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
        <div className={styles.imagePlaceholder}></div>
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
            <div className={styles.avatarPlaceholder}></div>
            <span>{post.author.name}</span>
          </div>
          <div className={styles.metaInfo}>
            <span>{post.date}</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
