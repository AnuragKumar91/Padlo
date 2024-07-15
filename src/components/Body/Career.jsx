import React from "react";

import Careerbg1 from "../../assets/img/career/shape-1-1.png";
import Careerbg2 from "../../assets/img/career/shape-1-2.png";
import Careerbg3 from "../../assets/img/career/shape-1-3.png";
import Careerbg4 from "../../assets/img/career/shape-1-4.png";
import Careerbg5 from "../../assets/img/career/shape-1-5.png";
import CareerThumb1 from "../../assets/img/career/thumb-1.png";
import CareerThumb2 from "../../assets/img/career/thumb-2.png";
import CareerShape1 from "../../assets/img/career/shape-1.png";
import CareerShape2 from "../../assets/img/career/shape-1.png";
import CareerCard from "../CareerCard";

const Career = () => {
  return (
    <>
      <div className="it-career-area it-career-bg p-relative pt-120">
        <div className="it-career-shape-2 d-none d-xl-block">
          <img src={Careerbg1} alt="Careerbg1" />
        </div>
        <div className="it-career-shape-3 d-none d-xl-block">
          <img src={Careerbg2} alt="Careerbg2" />
        </div>
        <div className="it-career-shape-4 d-none d-xl-block">
          <img src={Careerbg3} alt="Careerbg3" />
        </div>
        <div className="it-career-shape-5 d-none d-xl-block">
          <img src={Careerbg4} alt="Careerbg4" />
        </div>
        <div className="it-career-shape-6 d-none d-xl-block">
          <img src={Careerbg5} alt="Careerbg5" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="it-career-title-box text-center mb-70">
                <span className="it-section-subtitle">Choose your career</span>
                <h4 className="it-section-title">
                  Discover your
                  <span className="p-relative z-index">
                    gain
                    <svg
                      className="title-shape-2"
                      width="168"
                      height="65"
                      viewBox="0 0 168 65"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M73.3761 8.49147C78.4841 6.01353 82.5722 4.25154 88.8933 3.3035C94.2064 2.50664 99.6305 2.0701 104.981 1.94026C120.426 1.56549 135.132 4.90121 146.506 9.70405C158.628 14.8228 166.725 22.5638 166.074 31.6501C165.291 42.5779 151.346 51.7039 133.508 56.8189C110.253 63.4874 81.7065 63.8025 58.5605 60.8285C37.5033 58.123 11.6304 51.7165 3.58132 40.0216C-3.43085 29.8337 12.0728 18.1578 27.544 11.645C40.3656 6.24763 55.7082 2.98328 70.8043 4.08403C81.9391 4.89596 93.2164 6.87822 102.462 9.99561C112.874 13.5066 120.141 18.5932 127.862 23.6332"
                        stroke="#0AB99D"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </h4>
              </div>
            </div>
            <CareerCard img1={CareerThumb1} img2={CareerShape2} />
            <CareerCard img1={CareerThumb2} img2={CareerShape1} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Career;
