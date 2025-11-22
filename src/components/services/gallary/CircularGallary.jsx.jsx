import React, { useState, useEffect, useRef } from "react";

const FurnitureGallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [loadedImages, setLoadedImages] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const observerRef = useRef(null);

  // Updated with working Unsplash image URLs with optimized parameters
  const defaultItems = [
    {
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVybml0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=80",
      text: "Modern Living Room Setup",
      category: "living",
    },
    {
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZnVybml0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=80",
      text: "Elegant Dining Area",
      category: "dining",
    },
    {
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnVybml0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=80",
      text: "Cozy Bedroom Ambiance",
      category: "bedroom",
    },
    {
      image:
        "https://images.unsplash.com/photo-1496664444929-8c75efb9546f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Sleek Office Desk",
      category: "office",
    },
    {
      image:
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=80",
      text: "Minimalist Workspace",
      category: "office",
    },
    {
      image:
        "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=80",
      text: "Contemporary Living Room",
      category: "living",
    },
    {
      image:
        "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=80",
      text: "Stylish Dining Room",
      category: "dining",
    },
    {
      image:
        "https://images.unsplash.com/photo-1505693314120-0d443867891c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=80",
      text: "Modern Bedroom Design",
      category: "bedroom",
    },
    {
      image:
        "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=80",
      text: "Chic Office Space",
      category: "office",
    },
    {
      image:
        "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=80",
      text: "Compact Living Area",
      category: "living",
    },
    {
      image:
        "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=80",
      text: "Functional Dining Setup",
      category: "dining",
    },
    {
      image:
        "https://images.unsplash.com/photo-1598928636135-d146006ff4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=80",
      text: "Inviting Bedroom Corner",
      category: "bedroom",
    },
  ];

  const categories = [
    { id: "all", name: "All Rooms" },
    { id: "living", name: "Living Room" },
    { id: "bedroom", name: "Bedroom" },
    { id: "dining", name: "Dining Room" },
    { id: "office", name: "Office" },
  ];

  const filteredItems =
    activeCategory === "all"
      ? defaultItems
      : defaultItems.filter((item) => item.category === activeCategory);

  // Preload images
  useEffect(() => {
    setIsLoading(true);
    const imagePromises = defaultItems.map((item) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          setLoadedImages((prev) => ({ ...prev, [item.image]: true }));
          resolve();
        };
        img.onerror = reject;
        img.src = item.image;
      });
    });

    Promise.all(imagePromises)
      .then(() => setIsLoading(false))
      .catch(() => setIsLoading(false));
  }, []);

  // Set up Intersection Observer for lazy loading
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            observerRef.current.unobserve(img);
          }
        });
      },
      { threshold: 0.1 }
    );

    const images = document.querySelectorAll(".lazy-image");
    images.forEach((img) => observerRef.current.observe(img));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [filteredItems]);

  return (
    <div
      style={{
        padding: "2rem",
        fontFamily: "'Inter', 'Segoe UI', sans-serif",
        maxWidth: "1200px",
        margin: "0 auto",
        minHeight: "100vh",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          color: "#3a2c1e",
          marginBottom: "1rem",
        }}
      >
        Furni Services
      </h2>
      <p
        style={{
          textAlign: "center",
          color: "#6a5d4d",
          marginBottom: "2.5rem",
          fontSize: "1.1rem",
        }}
      >
        Browse our collection of beautifully designed spaces
      </p>

      {/* Loading indicator */}
      {isLoading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "300px",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              width: "50px",
              height: "50px",
              border: "5px solid #f3f3f3",
              borderTop: "5px solid #3a2c1e",
              borderRadius: "50%",
              animation: "spin 1s linear infinite",
              marginBottom: "1rem",
            }}
          ></div>
          <p style={{ color: "#6a5d4d" }}>Loading beautiful furniture...</p>
        </div>
      )}

      {/* Category Filters */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "1rem",
          marginBottom: "3rem",
          opacity: isLoading ? 0.5 : 1,
          pointerEvents: isLoading ? "none" : "auto",
        }}
      >
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            style={{
              padding: "0.75rem 1.5rem",
              borderRadius: "50px",
              border: "none",
              background:
                activeCategory === category.id ? "#3a2c1e" : "#f5f2ee",
              color: activeCategory === category.id ? "white" : "#3a2c1e",
              cursor: "pointer",
              fontWeight: "600",
              transition: "all 0.3s ease",
            }}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "1.5rem",
          opacity: isLoading ? 0.7 : 1,
          transition: "opacity 0.3s ease",
        }}
      >
        {filteredItems.map((item, index) => (
          <div
            key={index}
            style={{
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
              background: "#f9f9f9",
              minHeight: "250px",
            }}
            className="gallery-item"
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow =
                "0 15px 40px rgba(0, 0, 0, 0.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 10px 30px rgba(0, 0, 0, 0.08)";
            }}
          >
            <div
              style={{
                height: "200px",
                overflow: "hidden",
                position: "relative",
                background: "#e4d5c3",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {!loadedImages[item.image] ? (
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    border: "3px solid #f3f3f3",
                    borderTop: "3px solid #3a2c1e",
                    borderRadius: "50%",
                    animation: "spin 1s linear infinite",
                  }}
                ></div>
              ) : null}
              <img
                data-src={item.image}
                alt={item.text}
                className="lazy-image"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.5s ease, opacity 0.5s ease",
                  opacity: loadedImages[item.image] ? 1 : 0,
                }}
                onLoad={(e) => {
                  e.target.style.opacity = 1;
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)";
                }}
              />
            </div>
            <div
              style={{
                padding: "1.5rem",
                background: "white",
              }}
            >
              <h3
                style={{
                  margin: "0 0 0.5rem 0",
                  color: "#3a2c1e",
                  fontSize: "1.2rem",
                }}
              >
                {item.text}
              </h3>
              <p
                style={{
                  margin: "0",
                  color: "#8a7866",
                  fontSize: "0.9rem",
                  textTransform: "capitalize",
                }}
              >
                {item.category} •{" "}
                <span style={{ color: "#c9a992" }}>View Details</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div
        style={{
          textAlign: "center",
          marginTop: "4rem",
          padding: "3rem",
          background: "linear-gradient(135deg, #f9f5f0 0%, #e4d5c3 100%)",
          borderRadius: "16px",
          opacity: isLoading ? 0.7 : 1,
        }}
      >
        <h3
          style={{
            color: "#3a2c1e",
            marginBottom: "1rem",
            fontSize: "1.8rem",
          }}
        >
          Need Custom Furniture?
        </h3>
        <p
          style={{
            color: "#6a5d4d",
            marginBottom: "2rem",
            fontSize: "1.1rem",
          }}
        >
          Our designers can create pieces tailored to your space and style
        </p>
        <button
          style={{
            background: "#3a2c1e",
            color: "white",
            border: "none",
            padding: "1rem 2.5rem",
            borderRadius: "50px",
            fontSize: "1.1rem",
            fontWeight: "600",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-3px)";
            e.currentTarget.style.boxShadow =
              "0 8px 25px rgba(58, 44, 30, 0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          Schedule a Consultation
        </button>
      </div>

      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          .gallery-item {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
        `}
      </style>
    </div>
  );
};

export default FurnitureGallery;
