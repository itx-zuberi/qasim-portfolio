import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Career <span>&amp;</span>
          <br /> Experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Founder / CEO</h4>
                <h5>Shadow Hawk Pakistan</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Founded a SYSaaS and SaaS cybersecurity venture delivering
              CTI-based defense platforms, secure IoT ecosystems, and AI-driven
              threat detection as subscription services. Architected multi-tenant
              backend infrastructure using Django, PostgreSQL, Docker, and CI/CD
              pipelines. Delivered 50+ projects across multiple sectors.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Automation Specialist</h4>
                <h5>NASTP Alpha &mdash; Rawalpindi</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Developed Python-based automation workflows and intelligent
              monitoring systems. Implemented log analysis, system monitoring,
              and workflow orchestration pipelines. Designed AI-driven automation
              pipelines for operational process optimization.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Automation Engineer</h4>
                <h5>Devrolin Pakistan</h5>
              </div>
              <h3>2025&ndash;26</h3>
            </div>
            <p>
              Built Python automation tools for log processing, data pipeline
              orchestration, and workflow optimization. Integrated automation
              scripts into software development workflows. Developed monitoring
              utilities that reduced manual overhead for engineering teams.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BS Computer Science</h4>
                <h5>KICSIT &mdash; IST Islamabad</h5>
              </div>
              <h3>2021&ndash;25</h3>
            </div>
            <p>
              Coursework in Artificial Intelligence, Machine Learning, Data
              Structures, Computer Networks, Software Engineering, Database
              Systems, Operating Systems, and Cybersecurity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
