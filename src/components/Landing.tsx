import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>
              <span className="landing-bracket">[</span>
              FOUNDER &amp; CEO
              <span className="landing-bracket">]</span>
            </h2>
            <h1>
              QASIM
              <br />
              <span>ZUBERI</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>Shadow Hawk &amp;</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Cyber</div>
              <div className="landing-h2-2">AI</div>
            </h2>
            <h2>
              <div className="landing-h2-info">AI</div>
              <div className="landing-h2-info-1">Cyber</div>
            </h2>
            <div className="landing-status">
              <span className="status-dot"></span>
              CTI-BASED IDPS &bull; IOT SECURITY &bull; AI/ML
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
