import { useState, useCallback } from "react";
import "./styles/Work.css";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const ProjectSVGs = {
  HISN: (
    <svg viewBox="0 0 340 220" xmlns="http://www.w3.org/2000/svg" className="project-svg">
      <polygon points="170,20 230,50 230,110 170,140 110,110 110,50" fill="none" stroke="#00f5d4" strokeWidth="1.5" opacity="0.8"/>
      <polygon points="170,38 215,62 215,105 170,128 125,105 125,62" fill="none" stroke="#00f5d4" strokeWidth="0.8" opacity="0.4"/>
      <rect x="155" y="78" width="30" height="24" rx="3" fill="none" stroke="#00f5d4" strokeWidth="1.5"/>
      <path d="M162 78 v-8 a8 8 0 0 1 16 0 v8" fill="none" stroke="#00f5d4" strokeWidth="1.5"/>
      <circle cx="170" cy="90" r="3" fill="#00f5d4"/>
      <circle cx="60" cy="60" r="6" fill="none" stroke="#00f5d4" strokeWidth="1.2" opacity="0.6"/>
      <circle cx="280" cy="60" r="6" fill="none" stroke="#00f5d4" strokeWidth="1.2" opacity="0.6"/>
      <circle cx="40" cy="140" r="6" fill="none" stroke="#00f5d4" strokeWidth="1.2" opacity="0.6"/>
      <circle cx="300" cy="140" r="6" fill="none" stroke="#00f5d4" strokeWidth="1.2" opacity="0.6"/>
      <circle cx="170" cy="180" r="6" fill="none" stroke="#00f5d4" strokeWidth="1.2" opacity="0.6"/>
      <line x1="66" y1="63" x2="110" y2="72" stroke="#00f5d4" strokeWidth="0.7" opacity="0.3" strokeDasharray="4,3"/>
      <line x1="274" y1="63" x2="230" y2="72" stroke="#00f5d4" strokeWidth="0.7" opacity="0.3" strokeDasharray="4,3"/>
      <line x1="44" y1="146" x2="110" y2="104" stroke="#00f5d4" strokeWidth="0.7" opacity="0.3" strokeDasharray="4,3"/>
      <line x1="296" y1="146" x2="230" y2="104" stroke="#00f5d4" strokeWidth="0.7" opacity="0.3" strokeDasharray="4,3"/>
      <line x1="170" y1="174" x2="170" y2="140" stroke="#00f5d4" strokeWidth="0.7" opacity="0.3" strokeDasharray="4,3"/>
      <circle cx="170" cy="80" r="70" fill="none" stroke="#00f5d4" strokeWidth="0.4" opacity="0.15"/>
      <circle cx="170" cy="80" r="90" fill="none" stroke="#00f5d4" strokeWidth="0.4" opacity="0.08"/>
      <text x="170" y="212" textAnchor="middle" fill="#00f5d4" fontSize="10" fontFamily="Share Tech Mono, monospace" opacity="0.5">HYBRID INTELLIGENT SECURITY</text>
    </svg>
  ),
  "CTI-Based IDS/IPS": (
    <svg viewBox="0 0 340 220" xmlns="http://www.w3.org/2000/svg" className="project-svg">
      <rect x="40" y="25" width="260" height="160" rx="4" fill="none" stroke="#00f5d4" strokeWidth="1.2" opacity="0.7"/>
      <line x1="40" y1="48" x2="300" y2="48" stroke="#00f5d4" strokeWidth="0.8" opacity="0.4"/>
      <circle cx="58" cy="37" r="5" fill="none" stroke="#00f5d4" strokeWidth="1" opacity="0.5"/>
      <circle cx="75" cy="37" r="5" fill="none" stroke="#00f5d4" strokeWidth="1" opacity="0.5"/>
      <circle cx="92" cy="37" r="5" fill="none" stroke="#00f5d4" strokeWidth="1" opacity="0.5"/>
      <text x="55" y="70" fill="#00f5d4" fontSize="9" fontFamily="Share Tech Mono, monospace" opacity="0.8">[ALERT] Intrusion — 192.168.1.44</text>
      <text x="55" y="87" fill="#00f5d4" fontSize="9" fontFamily="Share Tech Mono, monospace" opacity="0.5">[INFO]  Suricata rule: ET SCAN</text>
      <text x="55" y="104" fill="#ff4444" fontSize="9" fontFamily="Share Tech Mono, monospace" opacity="0.9">[BLOCK] IP 10.0.0.23 → blocklist</text>
      <text x="55" y="121" fill="#00f5d4" fontSize="9" fontFamily="Share Tech Mono, monospace" opacity="0.5">[INFO]  CTI feed — 2847 IOCs loaded</text>
      <text x="55" y="138" fill="#00f5d4" fontSize="9" fontFamily="Share Tech Mono, monospace" opacity="0.8">[ALERT] Port scan 172.16.0.5</text>
      <text x="55" y="155" fill="#00f5d4" fontSize="9" fontFamily="Share Tech Mono, monospace" opacity="0.4">[INFO]  Snort: 14 rules active</text>
      <rect x="55" y="165" width="7" height="10" fill="#00f5d4" opacity="0.7"/>
      <text x="170" y="212" textAnchor="middle" fill="#00f5d4" fontSize="10" fontFamily="Share Tech Mono, monospace" opacity="0.5">CTI-BASED IDS / IPS ENGINE</text>
    </svg>
  ),
  "Bullying Detection System": (
    <svg viewBox="0 0 340 220" xmlns="http://www.w3.org/2000/svg" className="project-svg">
      <rect x="80" y="35" width="180" height="130" rx="4" fill="none" stroke="#00f5d4" strokeWidth="1.2" opacity="0.7"/>
      <rect x="90" y="45" width="160" height="110" rx="2" fill="none" stroke="#00f5d4" strokeWidth="0.6" opacity="0.3"/>
      <rect x="100" y="60" width="50" height="60" rx="2" fill="none" stroke="#00f5d4" strokeWidth="1.5" opacity="0.9"/>
      <rect x="190" y="55" width="45" height="55" rx="2" fill="none" stroke="#ff4444" strokeWidth="1.5" opacity="0.9"/>
      <line x1="100" y1="60" x2="108" y2="60" stroke="#00f5d4" strokeWidth="2"/>
      <line x1="100" y1="60" x2="100" y2="68" stroke="#00f5d4" strokeWidth="2"/>
      <line x1="150" y1="60" x2="142" y2="60" stroke="#00f5d4" strokeWidth="2"/>
      <line x1="150" y1="60" x2="150" y2="68" stroke="#00f5d4" strokeWidth="2"/>
      <line x1="100" y1="120" x2="108" y2="120" stroke="#00f5d4" strokeWidth="2"/>
      <line x1="100" y1="120" x2="100" y2="112" stroke="#00f5d4" strokeWidth="2"/>
      <line x1="190" y1="55" x2="198" y2="55" stroke="#ff4444" strokeWidth="2"/>
      <line x1="190" y1="55" x2="190" y2="63" stroke="#ff4444" strokeWidth="2"/>
      <line x1="235" y1="55" x2="227" y2="55" stroke="#ff4444" strokeWidth="2"/>
      <line x1="235" y1="55" x2="235" y2="63" stroke="#ff4444" strokeWidth="2"/>
      <text x="125" y="133" textAnchor="middle" fill="#00f5d4" fontSize="8" fontFamily="Share Tech Mono, monospace">NORMAL</text>
      <text x="212" y="122" textAnchor="middle" fill="#ff4444" fontSize="8" fontFamily="Share Tech Mono, monospace">THREAT</text>
      <rect x="80" y="175" width="180" height="8" rx="2" fill="none" stroke="#00f5d4" strokeWidth="0.8" opacity="0.4"/>
      <rect x="80" y="175" width="130" height="8" rx="2" fill="#00f5d4" opacity="0.3"/>
      <text x="170" y="212" textAnchor="middle" fill="#00f5d4" fontSize="10" fontFamily="Share Tech Mono, monospace" opacity="0.5">MULTI-MODAL ML DETECTION</text>
    </svg>
  ),
  SheSafe: (
    <svg viewBox="0 0 340 220" xmlns="http://www.w3.org/2000/svg" className="project-svg">
      <rect x="120" y="20" width="100" height="170" rx="12" fill="none" stroke="#00f5d4" strokeWidth="1.5" opacity="0.8"/>
      <rect x="128" y="35" width="84" height="120" rx="3" fill="none" stroke="#00f5d4" strokeWidth="0.7" opacity="0.3"/>
      <circle cx="170" cy="172" r="5" fill="none" stroke="#00f5d4" strokeWidth="1" opacity="0.5"/>
      <circle cx="170" cy="80" r="18" fill="none" stroke="#00f5d4" strokeWidth="1.5" opacity="0.8"/>
      <circle cx="170" cy="80" r="5" fill="#00f5d4" opacity="0.9"/>
      <line x1="170" y1="98" x2="170" y2="112" stroke="#00f5d4" strokeWidth="1.5" opacity="0.7"/>
      <line x1="160" y1="112" x2="180" y2="112" stroke="#00f5d4" strokeWidth="1" opacity="0.5"/>
      <text x="170" y="136" textAnchor="middle" fill="#ff4444" fontSize="13" fontFamily="Orbitron, monospace" fontWeight="700" opacity="0.9">SOS</text>
      <circle cx="170" cy="80" r="35" fill="none" stroke="#00f5d4" strokeWidth="0.5" opacity="0.2"/>
      <circle cx="170" cy="80" r="55" fill="none" stroke="#00f5d4" strokeWidth="0.5" opacity="0.1"/>
      <circle cx="55" cy="80" r="5" fill="none" stroke="#00f5d4" strokeWidth="1" opacity="0.5"/>
      <circle cx="285" cy="80" r="5" fill="none" stroke="#00f5d4" strokeWidth="1" opacity="0.5"/>
      <line x1="60" y1="80" x2="120" y2="90" stroke="#00f5d4" strokeWidth="0.6" opacity="0.2" strokeDasharray="4,3"/>
      <line x1="280" y1="80" x2="220" y2="90" stroke="#00f5d4" strokeWidth="0.6" opacity="0.2" strokeDasharray="4,3"/>
      <text x="170" y="212" textAnchor="middle" fill="#00f5d4" fontSize="10" fontFamily="Share Tech Mono, monospace" opacity="0.5">WOMEN SAFETY IoT SYSTEM</text>
    </svg>
  ),
  "Smart Home Surveillance": (
    <svg viewBox="0 0 340 220" xmlns="http://www.w3.org/2000/svg" className="project-svg">
      <polygon points="170,25 290,90 290,180 50,180 50,90" fill="none" stroke="#00f5d4" strokeWidth="1.3" opacity="0.7"/>
      <line x1="170" y1="25" x2="50" y2="90" stroke="#00f5d4" strokeWidth="1.3" opacity="0.7"/>
      <rect x="155" y="48" width="30" height="18" rx="2" fill="none" stroke="#00f5d4" strokeWidth="1.2"/>
      <circle cx="170" cy="57" r="5" fill="none" stroke="#00f5d4" strokeWidth="1"/>
      <circle cx="170" cy="57" r="2" fill="#00f5d4" opacity="0.8"/>
      <line x1="170" y1="57" x2="130" y2="95" stroke="#00f5d4" strokeWidth="0.6" opacity="0.3" strokeDasharray="3,3"/>
      <line x1="170" y1="57" x2="210" y2="95" stroke="#00f5d4" strokeWidth="0.6" opacity="0.3" strokeDasharray="3,3"/>
      <rect x="130" y="95" width="80" height="50" rx="2" fill="none" stroke="#00f5d4" strokeWidth="0.8" opacity="0.4" strokeDasharray="4,3"/>
      <text x="170" y="126" textAnchor="middle" fill="#00f5d4" fontSize="8" fontFamily="Share Tech Mono, monospace" opacity="0.6">MOTION ZONE</text>
      <rect x="148" y="145" width="44" height="35" rx="2" fill="none" stroke="#00f5d4" strokeWidth="1" opacity="0.5"/>
      <circle cx="186" cy="163" r="2.5" fill="#00f5d4" opacity="0.6"/>
      <text x="60" y="160" fill="#00f5d4" fontSize="8" fontFamily="Share Tech Mono, monospace" opacity="0.4">RTSP</text>
      <text x="255" y="160" fill="#00f5d4" fontSize="8" fontFamily="Share Tech Mono, monospace" opacity="0.4">LIVE</text>
      <text x="170" y="212" textAnchor="middle" fill="#00f5d4" fontSize="10" fontFamily="Share Tech Mono, monospace" opacity="0.5">AI COMPUTER VISION SECURITY</text>
    </svg>
  ),
  "HuMotion Prosthetic Arm": (
    <svg viewBox="0 0 340 220" xmlns="http://www.w3.org/2000/svg" className="project-svg">
      <path d="M170 30 L200 55 L210 100 L205 145 L190 170 L170 178 L150 170 L135 145 L130 100 L140 55 Z" fill="none" stroke="#00f5d4" strokeWidth="1.3" opacity="0.7"/>
      <line x1="155" y1="178" x2="148" y2="200" stroke="#00f5d4" strokeWidth="4" strokeLinecap="round" opacity="0.6"/>
      <line x1="163" y1="180" x2="160" y2="205" stroke="#00f5d4" strokeWidth="4" strokeLinecap="round" opacity="0.6"/>
      <line x1="170" y1="181" x2="170" y2="206" stroke="#00f5d4" strokeWidth="4" strokeLinecap="round" opacity="0.6"/>
      <line x1="177" y1="180" x2="180" y2="205" stroke="#00f5d4" strokeWidth="4" strokeLinecap="round" opacity="0.6"/>
      <line x1="185" y1="178" x2="192" y2="200" stroke="#00f5d4" strokeWidth="4" strokeLinecap="round" opacity="0.6"/>
      <polyline points="50,70 65,70 70,55 78,85 85,60 92,80 98,70 113,70" fill="none" stroke="#00f5d4" strokeWidth="1.5" opacity="0.8"/>
      <polyline points="50,110 65,110 70,95 78,125 85,100 92,120 98,110 113,110" fill="none" stroke="#00f5d4" strokeWidth="1.5" opacity="0.6"/>
      <text x="55" y="88" fill="#00f5d4" fontSize="8" fontFamily="Share Tech Mono, monospace" opacity="0.5">EMG CH1</text>
      <text x="55" y="128" fill="#00f5d4" fontSize="8" fontFamily="Share Tech Mono, monospace" opacity="0.5">EMG CH2</text>
      <circle cx="160" cy="90" r="3" fill="#00f5d4" opacity="0.5"/>
      <circle cx="180" cy="90" r="3" fill="#00f5d4" opacity="0.5"/>
      <circle cx="165" cy="120" r="3" fill="#00f5d4" opacity="0.5"/>
      <circle cx="175" cy="120" r="3" fill="#00f5d4" opacity="0.5"/>
      <line x1="163" y1="90" x2="177" y2="90" stroke="#00f5d4" strokeWidth="0.8" opacity="0.4"/>
      <line x1="165" y1="120" x2="175" y2="120" stroke="#00f5d4" strokeWidth="0.8" opacity="0.4"/>
      <polyline points="227,70 242,70 247,55 255,85 262,60 269,80 275,70 290,70" fill="none" stroke="#00f5d4" strokeWidth="1.5" opacity="0.8"/>
      <text x="232" y="88" fill="#00f5d4" fontSize="8" fontFamily="Share Tech Mono, monospace" opacity="0.5">EMG CH3</text>
    </svg>
  ),
};

const projects = [
  { title: "HISN", category: "Hybrid Intelligent Security for Networks", tools: "CTI Integration, IoT Coverage, AI Threat Detection, Auto IP Blocking", link: "https://www.linkedin.com/in/zuberiii/" },
  { title: "CTI-Based IDS/IPS", category: "Intrusion Detection and Prevention System", tools: "Python, Suricata, Snort, IoT, TCP/IP, CIDR Filtering", link: "https://www.linkedin.com/in/zuberiii/" },
  { title: "Bullying Detection System", category: "Multi-modal ML Behavioral Analysis", tools: "TensorFlow, YOLO, NLP, Computer Vision, OpenCV", link: "https://www.linkedin.com/in/zuberiii/" },
  { title: "SheSafe", category: "Women Safety IoT System", tools: "Android, Firebase, GPS, IoT Monitoring, SMS Alerts", link: "https://www.linkedin.com/in/zuberiii/" },
  { title: "Smart Home Surveillance", category: "AI-based Computer Vision Security", tools: "Python, OpenCV, RTSP Streaming, Motion Detection", link: "https://www.linkedin.com/in/zuberiii/" },
  { title: "HuMotion Prosthetic Arm", category: "Embedded Systems and Robotics", tools: "EMG Sensors, Microcontrollers, Real-time Control, Embedded AI", link: "https://www.linkedin.com/in/zuberiii/" },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const goToPrev = useCallback(() => {
    goToSlide(currentIndex === 0 ? projects.length - 1 : currentIndex - 1);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    goToSlide(currentIndex === projects.length - 1 ? 0 : currentIndex + 1);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>My <span>Work</span></h2>
        <div className="carousel-wrapper">
          <button className="carousel-arrow carousel-arrow-left" onClick={goToPrev} aria-label="Previous project" data-cursor="disable"><MdArrowBack /></button>
          <button className="carousel-arrow carousel-arrow-right" onClick={goToNext} aria-label="Next project" data-cursor="disable"><MdArrowForward /></button>
          <div className="carousel-track-container">
            <div className="carousel-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number"><h3>0{index + 1}</h3></div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">{project.category}</p>
                        <div className="carousel-tools">
                          <span className="tools-label">Stack &amp; Features</span>
                          <p>{project.tools}</p>
                        </div>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link-btn" data-cursor="disable">View Project →</a>
                      </div>
                    </div>
                    <div className="carousel-svg-wrapper">
                      {ProjectSVGs[project.title as keyof typeof ProjectSVGs]}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button key={index} className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""}`} onClick={() => goToSlide(index)} aria-label={`Go to project ${index + 1}`} data-cursor="disable" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
