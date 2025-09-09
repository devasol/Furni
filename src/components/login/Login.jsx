import React, { useState } from "react";
import Header from "../home/header/Header";
import Footer from "../home/footer/Footer";
import styles from "./Login.module.css";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    rememberMe: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert(isLogin ? "Login successful!" : "Account created successfully!");
    }, 1500);
  };

  const toggleFormMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.loginContainer}>
        <div
          className={`${styles.formWrapper} ${
            isLogin ? styles.loginMode : styles.signupMode
          }`}
        >
          <div className={styles.formHeader}>
            <h2 className={styles.title}>
              {isLogin ? "Welcome Back" : "Create Account"}
            </h2>
            <p className={styles.subtitle}>
              {isLogin
                ? "Sign in to access your account"
                : "Join us for exclusive furniture deals"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            {!isLogin && (
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={styles.input}
                />
                <label className={styles.label}>Full Name</label>
                <div className={styles.inputHighlight}></div>
              </div>
            )}

            <div className={styles.inputGroup}>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className={styles.input}
              />
              <label className={styles.label}>Email Address</label>
              <div className={styles.inputHighlight}></div>
            </div>

            <div className={styles.inputGroup}>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                className={styles.input}
              />
              <label className={styles.label}>Password</label>
              <div className={styles.inputHighlight}></div>
            </div>

            {isLogin && (
              <div className={styles.rememberForgot}>
                <label className={styles.rememberMe}>
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                  />
                  <span className={styles.checkmark}></span>
                  Remember me
                </label>
                <a href="#" className={styles.forgotLink}>
                  Forgot Password?
                </a>
              </div>
            )}

            <button
              type="submit"
              className={`${styles.submitButton} ${
                isLoading ? styles.loading : ""
              }`}
              disabled={isLoading}
            >
              {isLoading ? (
                <span className={styles.spinner}></span>
              ) : isLogin ? (
                "Sign In"
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          <div className={styles.switchForm}>
            <p>
              {isLogin
                ? "Don't have an account? "
                : "Already have an account? "}
              <button
                type="button"
                onClick={toggleFormMode}
                className={styles.switchButton}
              >
                {isLogin ? "Sign Up" : "Sign In"}
              </button>
            </p>
          </div>

          <div className={styles.socialLogin}>
            <div className={styles.divider}>
              <span>Or continue with</span>
            </div>

            <div className={styles.socialButtons}>
              <button className={styles.socialButton} type="button">
                <svg className={styles.socialIcon} viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Google
              </button>

              <button className={styles.socialButton} type="button">
                <svg className={styles.socialIcon} viewBox="0 0 24 24">
                  <path
                    d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.441 16.892c-2.102.144-6.784.144-8.883 0-2.276-.156-2.541-1.27-2.558-4.892.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0 2.277.156 2.541 1.27 2.559 4.892-.018 3.629-.285 4.736-2.559 4.892zm-6.441-7.234l4.917 2.338-4.917 2.346v-4.684z"
                    fill="#000"
                  />
                </svg>
                Apple
              </button>
            </div>
          </div>
        </div>

        <div className={styles.decorativeSide}>
          <div className={styles.decorativeContent}>
            <h3>Furni Exclusive</h3>
            <p>
              Access your personalized furniture recommendations, saved items,
              and exclusive offers.
            </p>
            <div className={styles.featuresList}>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>✨</span>
                <span>Wishlist across devices</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>🎯</span>
                <span>Personalized recommendations</span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>📧</span>
                <span>Exclusive member offers</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
