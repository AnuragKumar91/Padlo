import React from "react";
import BannerSection from "../../../BannerSection";
import BreadImg from "../../../../../src/assets/img/breadcrumb/breadcrumb.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Subscribe from "../../../Body/Subscribe";

const CourseDetails = () => {
  return (
    <>
      <BannerSection
        img={BreadImg}
        title="Course Details"
        name="Course Details"
      />
      <div className="it-course-details-area pt-120 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-8">
              <div className="it-course-details-wrap">
                <div className="it-evn-details-thumb mb-35">
                  <img src="assets/img/event/details-1.jpg" alt="details" />
                </div>
                <div className="it-evn-details-rate mb-15">
                  <span>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    (4.7)
                  </span>
                </div>
                <h4 className="it-evn-details-title mb-0 pb-5">
                  Web Development Fully Complete Guideline
                </h4>
                <div className="postbox__meta">
                  <span>
                    <i className="fa-light fa-file-invoice"></i>Lesson 10
                  </span>
                  <span>
                    <i className="fa-light fa-clock"></i>9.00AM- 01.00 PM
                  </span>
                  <span>
                    <i className="fa-light fa-user"></i>Students 20+
                  </span>
                </div>
                <div className="it-course-details-nav pb-60">
                  <nav>
                    <div className="nav nav-tab" id="nav-tab" role="tablist">
                      <button
                        className="nav-link active"
                        id="nav-home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-home"
                        type="button"
                        role="tab"
                        aria-controls="nav-home"
                        aria-selected="true"
                      >
                        overview
                      </button>
                      <button
                        className="nav-link"
                        id="nav-profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-profile"
                        type="button"
                        role="tab"
                        aria-controls="nav-profile"
                        aria-selected="false"
                      >
                        curriculum
                      </button>
                      <button
                        className="nav-link"
                        id="nav-contact-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-contact"
                        type="button"
                        role="tab"
                        aria-controls="nav-contact"
                        aria-selected="false"
                      >
                        instructor
                      </button>
                      <button
                        className="nav-link"
                        id="nav-reviews-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-reviews"
                        type="button"
                        role="tab"
                        aria-controls="nav-reviews"
                        aria-selected="false"
                      >
                        reviews
                      </button>
                    </div>
                  </nav>
                </div>
                <div className="it-course-details-content">
                  <div className="tab-content" id="nav-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="nav-home"
                      role="tabpanel"
                      aria-labelledby="nav-home-tab"
                    >
                      <div className="it-course-details-wrapper">
                        <div className="it-evn-details-text mb-40">
                          <h6 className="it-evn-details-title-sm pb-5">
                            Course Description
                          </h6>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim..
                          </p>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum..
                          </p>
                        </div>
                        <div className="it-evn-details-text">
                          <h6 className="it-evn-details-title-sm pb-5">
                            What Will I Learn From This Course?
                          </h6>
                          <p>
                            Himenaeos. Vestibulum sollicitudin varius mauris non
                            dignissim. Sed quis iaculis est. Nulla quam neque,
                            interdum vitae fermentum lacinia, interdum eu magna.
                            Mauris non posuere tellus. Donec quis euismod
                            tellus. Nam vel lacus eu nisl bibendum accumsan
                            vitae vitae nibh. Nam nec eros id magna hendrerit
                            sagittis Nullam sed mi non odio feugiat volutpat sit
                            amet nec elit. Maecenas id hendrerit ipsum
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-profile"
                      role="tabpanel"
                      aria-labelledby="nav-profile-tab"
                    >
                      <div className="it-course-details-wrapper">
                        <div className="it-evn-details-text mb-40">
                          <h6 className="it-evn-details-title-sm pb-5">
                            Course Description
                          </h6>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim..
                          </p>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum..
                          </p>
                        </div>
                        <div className="it-evn-details-text">
                          <h6 className="it-evn-details-title-sm pb-5">
                            What Will I Learn From This Course?
                          </h6>
                          <p>
                            Himenaeos. Vestibulum sollicitudin varius mauris non
                            dignissim. Sed quis iaculis est. Nulla quam neque,
                            interdum vitae fermentum lacinia, interdum eu magna.
                            Mauris non posuere tellus. Donec quis euismod
                            tellus. Nam vel lacus eu nisl bibendum accumsan
                            vitae vitae nibh. Nam nec eros id magna hendrerit
                            sagittis Nullam sed mi non odio feugiat volutpat sit
                            amet nec elit. Maecenas id hendrerit ipsum
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-contact"
                      role="tabpanel"
                      aria-labelledby="nav-contact-tab"
                    >
                      <div className="it-course-details-wrapper">
                        <div className="it-evn-details-text mb-40">
                          <h6 className="it-evn-details-title-sm pb-5">
                            Course Description
                          </h6>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim..
                          </p>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum..
                          </p>
                        </div>
                        <div className="it-evn-details-text">
                          <h6 className="it-evn-details-title-sm pb-5">
                            What Will I Learn From This Course?
                          </h6>
                          <p>
                            Himenaeos. Vestibulum sollicitudin varius mauris non
                            dignissim. Sed quis iaculis est. Nulla quam neque,
                            interdum vitae fermentum lacinia, interdum eu magna.
                            Mauris non posuere tellus. Donec quis euismod
                            tellus. Nam vel lacus eu nisl bibendum accumsan
                            vitae vitae nibh. Nam nec eros id magna hendrerit
                            sagittis Nullam sed mi non odio feugiat volutpat sit
                            amet nec elit. Maecenas id hendrerit ipsum
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-reviews"
                      role="tabpanel"
                      aria-labelledby="nav-reviews-tab"
                    >
                      <div className="it-course-details-wrapper">
                        <div className="it-evn-details-text mb-40">
                          <h6 className="it-evn-details-title-sm pb-5">
                            Course Description
                          </h6>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim..
                          </p>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum..
                          </p>
                        </div>
                        <div className="it-evn-details-text">
                          <h6 className="it-evn-details-title-sm pb-5">
                            What Will I Learn From This Course?
                          </h6>
                          <p>
                            Himenaeos. Vestibulum sollicitudin varius mauris non
                            dignissim. Sed quis iaculis est. Nulla quam neque,
                            interdum vitae fermentum lacinia, interdum eu magna.
                            Mauris non posuere tellus. Donec quis euismod
                            tellus. Nam vel lacus eu nisl bibendum accumsan
                            vitae vitae nibh. Nam nec eros id magna hendrerit
                            sagittis Nullam sed mi non odio feugiat volutpat sit
                            amet nec elit. Maecenas id hendrerit ipsum
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4">
              <div className="it-evn-sidebar-box it-course-sidebar-box">
                <div className="it-evn-sidebar-thumb mb-30">
                  <img src="assets/img/event/details-sm.jpg" alt="details" />
                </div>
                <div className="it-course-sidebar-rate-box pb-20">
                  <div className="it-course-sidebar-rate d-flex justify-content-between align-items-center">
                    <span>course fee</span>
                    <span className="rate">
                      $60 <i>$120</i>
                    </span>
                  </div>
                  <i>29-da money-back guarantee</i>
                </div>
                <Link className="it-btn w-100 text-center mb-20">
                  <span>
                    Buy Ticket
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="custom-icon"
                    />
                  </span>
                </Link>

                <div className="it-evn-sidebar-list">
                  <ul>
                    <li>
                      <span>4:00 pm 6:00 pm </span> <span>start date</span>
                    </li>
                    <li>
                      <span>enrolled</span>
                      <span>100</span>
                    </li>
                    <li>
                      <span>lectures</span>
                      <span>80</span>
                    </li>
                    <li>
                      <span>skill level</span>
                      <span>Basic</span>
                    </li>
                    <li>
                      <span>className day</span>
                      <span>Monday-friday</span>
                    </li>
                    <li>
                      <span>language</span>
                      <span>English</span>
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

export default CourseDetails;
