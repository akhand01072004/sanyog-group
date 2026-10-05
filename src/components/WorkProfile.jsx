import React, { useEffect, useState } from "react";
import "./WorkProfile.css";

const workImages = [
  {
    src: "/images/building.jpeg",
    title: "Building Construction",
  },
  {
    src: "/images/civil-work.jpeg",
    title: "Civil Work",
  },
  {
    src: "/images/electrical-work.jpeg",
    title: "Electrical Work",
  },
  {
    src: "/images/electrical.jpeg",
    title: "Electrical Infrastructure",
  },
  {
    src: "/images/jal-jeevan-work.jpeg",
    title: "Jal Jeevan Mission",
  },
  {
    src: "/images/jal-jeevan.jpeg",
    title: "Water Infrastructure",
  },
  {
    src: "/images/metro-work.jpeg",
    title: "Metro Infrastructure",
  },
  {
    src: "/images/metro.jpeg",
    title: "Metro Work",
  },
  {
    src: "/images/optical-fiber-work.jpeg",
    title: "Optical Fiber Work",
  },
  {
    src: "/images/optical-fiber.jpeg",
    title: "Optical Fiber Infrastructure",
  },
  {
    src: "/images/road-construction.jpeg",
    title: "Road Construction",
  },
  {
    src: "/images/road-pwd.jpeg",
    title: "Road & PWD Work",
  },
];

const WorkProfile = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Next image
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === workImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Previous image
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? workImages.length - 1 : prevIndex - 1
    );
  };

  // Automatic sliding
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="work-profile" id="work-profile">

      <div className="work-profile-container">

        {/* Heading */}
        <div className="work-heading">
          <span>OUR WORK PROFILE</span>
          <h2>Building Infrastructure for a Better Future</h2>
          <p>
            Our expertise covers civil construction, roads, metro,
            electrical infrastructure, water projects and optical fiber works.
          </p>
        </div>

        {/* Image Slider */}
        <div className="work-slider">

          {/* Previous Button */}
          <button
            className="slider-btn left-btn"
            onClick={prevSlide}
            aria-label="Previous image"
          >
            &#10094;
          </button>

          {/* Image */}
          <div className="work-image-wrapper">

            <img
              src={workImages[currentIndex].src}
              alt={workImages[currentIndex].title}
              className="work-image"
            />

            {/* Bottom Left Title */}
            <div className="image-title">
              {workImages[currentIndex].title}
            </div>

          </div>

          {/* Next Button */}
          <button
            className="slider-btn right-btn"
            onClick={nextSlide}
            aria-label="Next image"
          >
            &#10095;
          </button>

        </div>

        {/* Dots */}
        <div className="slider-dots">
          {workImages.map((_, index) => (
            <button
              key={index}
              className={`dot ${
                currentIndex === index ? "active-dot" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>

    </section>
  );
};

export default WorkProfile;