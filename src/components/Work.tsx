import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "HISN",
    category: "Hybrid Intelligent Security for Networks",
    tools: "CTI Integration, IoT Coverage, AI Threat Detection, Auto IP Blocking",
    image: "/images/placeholder.webp",
    link: "https://www.linkedin.com/in/zuberiii/",
  },
  {
    title: "CTI-Based IDS/IPS",
    category: "Intrusion Detection and Prevention System",
    tools: "Python, Suricata, Snort, IoT, TCP/IP, CIDR Filtering",
    image: "/images/placeholder.webp",
    link: "https://www.linkedin.com/in/zuberiii/",
  },
  {
    title: "Bullying Detection System",
    category: "Multi-modal ML Behavioral Analysis",
    tools: "TensorFlow, YOLO, NLP, Computer Vision, OpenCV",
    image: "/images/placeholder.webp",
    link: "https://www.linkedin.com/in/zuberiii/",
  },
  {
    title: "SheSafe",
    category: "Women Safety IoT System",
    tools: "Android, Firebase, GPS, IoT Monitoring, SMS Alerts",
    image: "/images/placeholder.webp",
    link: "https://www.linkedin.com/in/zuberiii/",
  },
  {
    title: "Smart Home Surveillance",
    category: "AI-based Computer Vision Security",
    tools: "Python, OpenCV, RTSP Streaming, Motion Detection",
    image: "/images/placeholder.webp",
    link: "https://www.linkedin.com/in/zuberiii/",
  },
  {
    title: "HuMotion Prosthetic Arm",
    category: "Embedded Systems and Robotics",
    tools: "EMG Sensors, Microcontrollers, Real-time Control, Embedded AI",
    image: "/images/placeholder.webp",
    link: "https://www.linkedin.com/in/zuberiii/",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex = currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">{project.category}</p>
                        <div className="carousel-tools">
                          <span className="tools-label">Stack &amp; Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage image={project.image} alt={project.title} link={project.link} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
