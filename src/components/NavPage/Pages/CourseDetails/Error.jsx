import React from 'react'
import BannerSection from '../../../BannerSection';
import BreadImg from "../../../../../src/assets/img/breadcrumb/breadcrumb.jpg";
import Subscribe from '../../../Body/Subscribe';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Error = () => {
  return (
  <> 
  <BannerSection img={BreadImg} title="404 Page Not Found !!!!" name="404 Page"/>
  <div className="it-error-area pt-120 pb-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 order-1 order-lg-0">
              <div
                className="it-error-content wow itfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".3s"
              >
                <h5 className="it-error-title">Sorry, Page Not Found!</h5>
                <p className="mb-35">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a className="it-btn" href="index-2.html">
                  <span>
                    Back To Home
                    <FontAwesomeIcon icon={faArrowRight}/>
                  </span>
                </a>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 order-0 order-lg-1">
              <div className="it-error-thumb">
                <img src="assets/img/error/error.png" alt="error" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Subscribe/>
    </>
  )
}

export default Error