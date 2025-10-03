import React from "react";

export default function Skills() {
  return (
    <div className="unslate_co--section" id="skills-section">
      <div className="container">
        {/* Section Title */}
        <div className="row justify-content-center mb-5">
          <div className="col-md-7 text-center">
            <h2 className="heading-h2 divider">
              <span className="gsap-reveal">My Skills</span>
            </h2>
            <span className="gsap-reveal">
              <img src="src/assets/images/divider.png" alt="divider" width="76" />
            </span>
          </div>
        </div>

        {/* Skills List */}
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="progress-wrap">
              <h3 className="gsap-reveal">HTML5 / CSS3</h3>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "95%" }}
                  aria-valuenow="95"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <span>95%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="progress-wrap">
              <h3 className="gsap-reveal">JavaScript (ES6+)</h3>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "90%" }}
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <span>90%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="progress-wrap">
              <h3 className="gsap-reveal">React.js</h3>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "85%" }}
                  aria-valuenow="85"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <span>85%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="progress-wrap">
              <h3 className="gsap-reveal">Node.js / Express</h3>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "80%" }}
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <span>80%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="progress-wrap">
              <h3 className="gsap-reveal">MySQL</h3>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <span>75%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="progress-wrap">
              <h3 className="gsap-reveal">UI/UX Design</h3>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "70%" }}
                  aria-valuenow="70"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <span>70%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
