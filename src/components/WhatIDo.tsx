import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);

  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line x1="0" y1="0" x2="0" y2="100%" stroke="rgba(0,245,212,0.3)" strokeWidth="1" strokeDasharray="7,7" />
              <line x1="100%" y1="0" x2="100%" y2="100%" stroke="rgba(0,245,212,0.3)" strokeWidth="1" strokeDasharray="7,7" />
            </svg>
          </div>

          <div className="what-content what-noTouch" ref={(el) => setRef(el, 0)}>
            <div className="what-border1">
              <svg height="100%">
                <line x1="0" y1="0" x2="100%" y2="0" stroke="rgba(0,245,212,0.3)" strokeWidth="1" strokeDasharray="6,6" />
                <line x1="0" y1="100%" x2="100%" y2="100%" stroke="rgba(0,245,212,0.3)" strokeWidth="1" strokeDasharray="6,6" />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>CYBER DEFENSE</h3>
              <h4>CTI-Based IDS/IPS Systems</h4>
              <p>
                Building AI-powered intrusion detection and prevention systems
                that analyze network traffic in real time, integrate cyber threat
                intelligence feeds, and provide automated response for IoT
                and enterprise networks.
              </p>
              <h5>Skillset &amp; tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Suricata / Snort</div>
                <div className="what-tags">CTI Feeds</div>
                <div className="what-tags">TCP/IP Analysis</div>
                <div className="what-tags">CIDR Filtering</div>
                <div className="what-tags">IoT Security</div>
                <div className="what-tags">Wireshark / Nmap</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>

          <div className="what-content what-noTouch" ref={(el) => setRef(el, 1)}>
            <div className="what-border1">
              <svg height="100%">
                <line x1="0" y1="100%" x2="100%" y2="100%" stroke="rgba(0,245,212,0.3)" strokeWidth="1" strokeDasharray="6,6" />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>AI/ML SYSTEMS</h3>
              <h4>Intelligent Automation at Scale</h4>
              <p>
                Building LLM-powered pipelines, RAG systems, NLP classifiers,
                and computer vision models. Deploying production-ready AI
                backends with Django, FastAPI, Docker, and CI/CD across cloud
                and edge environments.
              </p>
              <h5>Skillset &amp; tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Python / TensorFlow</div>
                <div className="what-tags">LangChain / LLMs</div>
                <div className="what-tags">YOLO / OpenCV</div>
                <div className="what-tags">Django / FastAPI</div>
                <div className="what-tags">Docker / CI-CD</div>
                <div className="what-tags">RAG Pipelines</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);
    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
