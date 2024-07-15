import React from "react";
import CounterImg from "../../assets/img/funfact/funfact-bg.png"

const Counter = () => {
  return (
    <>
      <div className="it-funfact-area z-index-5">
        <div className="container">
          <div
            className="it-funfact-bg-wrap theme-bg" style={{ backgroundImage: `url(${CounterImg})` }}
              
          >
            <div className="row gx-0">
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="it-funfact-item d-flex align-items-center">
                  <div className="it-funfact-icon">
                    <span>
                      <i className="flaticon-teacher"></i>
                    </span>
                  </div>
                  <div className="it-funfact-content">
                    <h6>
                      <i
                        className="purecounter"
                        data-purecounter-duration="1"
                        data-purecounter-end="3"
                      >
                        3
                      </i>
                      k+
                    </h6>
                    <span>Successfully Trained</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="it-funfact-item d-flex align-items-center">
                  <div className="it-funfact-icon">
                    <span>
                      <i className="flaticon-completed-task"></i>
                    </span>
                  </div>
                  <div className="it-funfact-content">
                    <h6>
                      <i
                        className="purecounter"
                        data-purecounter-duration="1"
                        data-purecounter-end="15"
                      >
                        15
                      </i>
                      k+
                    </h6>
                    <span>classes Completed</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="it-funfact-item d-flex align-items-center">
                  <div className="it-funfact-icon">
                    <span>
                      <i className="flaticon-customer-review"></i>
                    </span>
                  </div>
                  <div className="it-funfact-content">
                    <h6>
                      <i
                        className="purecounter"
                        data-purecounter-duration="1"
                        data-purecounter-end="97"
                      >
                        97
                      </i>
                      k+
                    </h6>
                    <span>Satisfaction Rate</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="it-funfact-item d-flex align-items-center">
                  <div className="it-funfact-icon">
                    <span>
                      <i className="flaticon-className"></i>
                    </span>
                  </div>
                  <div className="it-funfact-content">
                    <h6>
                      <i
                        className="purecounter"
                        data-purecounter-duration="1"
                        data-purecounter-end="102"
                      >
                        102
                      </i>
                      k+
                    </h6>
                    <span>Students Community</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
