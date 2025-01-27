import React from "react";
import BannerSection from "../../../BannerSection";
import BreadImg from "../../../../../src/assets/img/breadcrumb/breadcrumb.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Subscribe from "../../../Body/Subscribe";


const EventDetail = () => {
  return (
    <>
      <BannerSection
        img={BreadImg}
        title="Event Details"
        name="Event Details"
      />
      <div className="it-event-details-area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-8">
              <div className="it-evn-details-wrap">
                <div className="it-evn-details-thumb mb-35">
                  <img src="assets/img/event/details-1.jpg" alt="event" />
                </div>
                <h4 className="it-evn-details-title">
                  These are Designed to Provide Hands Training and
                  Skill-Building.
                </h4>
                <div className="postbox__meta">
                  <span>
                    <i className="fa-light fa-file-invoice"></i>Lesson 10
                  </span>
                  <span>
                    <i className="fa-light fa-clock"></i>9.00AM- 01.00 PM
                  </span>
                  <span>
                    <i className="fa-light fa-location-dot"></i>3783 Columbia
                    Mine Road
                  </span>
                </div>
                <div className="it-evn-details-text mb-40">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in.
                  </p>
                </div>
                <div className="it-evn-details-text">
                  <h6 className="it-evn-details-title-sm pb-10">
                    Event Description
                  </h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim.. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum..
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4">
              <div className="it-evn-sidebar-box">
                <div className="it-evn-sidebar-thumb mb-40">
                  <img src="assets/img/event/details-sm.jpg" alt="event" />
                </div>
                <Link className="it-btn w-100 text-center mb-20">
                <span>
                    Buy Ticket
                    <FontAwesomeIcon icon={faArrowRight} />
                  </span>
                </Link>
                
                <div className="it-evn-sidebar-list">
                  <ul>
                    <li>4:00 pm 6:00 pm </li>
                    <li>25 January, 2024</li>
                    <li>
                        <Link>
                        3783 Columbia Mine Road <br />
                        Shinnston, WV 26431
                        </Link>

                    </li>
                    <li>
                        <Link>
                        <span
                          className="__cf_email__"
                          data-cfemail="8ae3e4ece5e7ebe3e6caede7ebe3e6a4e9e5e7"
                        >
                          [email&#160;protected]
                        </span>
                        </Link>

                    </li>
                    <li>
                        <Link>
                        +9870123456789
                        </Link>
                   
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Subscribe/>
    </>
  );
};

export default EventDetail;
