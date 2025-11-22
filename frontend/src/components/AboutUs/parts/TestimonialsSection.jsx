import React from "react";
import styles from "../AboutUs.module.css";

export default function TestimonialsSection() {
  return (
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
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfDB8fHx8&auto=format&fit=crop&w=687&q=80"
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
                "I've furnished my entire office with Furni pieces. They're not
                only beautiful but incredibly durable, standing up to daily use
                while maintaining their elegance."
              </p>
            </div>
            <div className={styles.testimonialAuthor}>
              <img
                src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfDB8fHx8&auto=format&fit=crop&w=1167&q=80"
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
  );
}
