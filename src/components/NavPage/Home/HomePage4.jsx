import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


const HomePage4 = () => {
  return (
    <>
    
      <main>
        <div className="it-hero-3-area theme-bg-2">
          <div className="it-hero-3-shape-1">
            <img src="assets/img/hero/hero-3-shape1.png" alt="img" />
          </div>
          <div className="it-hero-3-shape-2">
            <img src="assets/img/hero/hero-3-shape2.png" alt="img" />
          </div>
          <div className="it-hero-3-shape-3 d-none d-lg-block">
            <img src="assets/img/hero/hero-3-shape3.png" alt="img" />
          </div>
          <div className="it-hero-3-shape-4 d-none d-xxl-block">
            <img src="assets/img/hero/hero-3-shape4.png" alt="img" />
          </div>
          <div className="it-hero-3-shape-5 d-none d-xxl-block">
            <img src="assets/img/hero/hero-3-shape5.png" alt="img" />
          </div>
          <div className="container">
            <div className="row align-items-end">
              <div className="col-xl-6">
                <div className="it-hero-3-title-wrap it-hero-3-ptb">
                  <div className="it-hero-3-title-box">
                    <h1 className="it-hero-3-title">
                      Learn new skills online with top <span>educators.</span>
                    </h1>
                    <p>
                      We are experienced in educationl platform and skilled
                      strategies <br />
                      for the success of our online learning.
                    </p>
                  </div>
                  <div className="it-hero-3-btn-box d-flex align-items-center">
                    <Link className="it-btn-white">
                      <span>
                        Find The Course
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span>
                    </Link>

                    <div className="it-hero-3-client-box d-flex align-items-center">
                      <span>
                        Happy <br /> Students
                      </span>
                      <img
                        src="assets/img/hero/hero-3-client-img.png"
                        alt="img"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="it-hero-3-thumb">
                  <img src="assets/img/hero/hero-3-img.png" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="it-about-3-area pt-120 pb-120 p-relative">
          <div className="it-about-3-left-shape-4 d-none d-lg-block">
            <img src="assets/img/about/about-3-shap-4.png" alt="img" />
          </div>
          <div className="it-about-3-left-shape-5 d-none d-lg-block">
            <img src="assets/img/about/about-3-shap-5.png" alt="img" />
          </div>
          <div className="container">
            <div className="row g-0 align-items-center">
              <div className="col-xl-6 col-lg-6">
                <div className="it-about-3-left-box text-end p-relative">
                  <div className="it-about-3-left-shape-1 d-none d-lg-block">
                    <img src="assets/img/about/about-3-shap-1.png" alt="img" />
                  </div>
                  <div className="it-about-3-left-shape-2 d-none d-lg-block">
                    <img src="assets/img/about/about-3-shap-2.png" alt="img" />
                  </div>
                  <div className="it-about-3-thumb">
                    <img src="assets/img/about/about-3-img.png" alt="img" />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="it-about-3-title-box">
                  <span className="it-section-subtitle-3">
                    <img src="assets/img/about/bg.svg" alt="img" />
                    about us
                  </span>
                  <h2 className="it-section-title-3 pb-30">
                    Benefit from our online learning expertise earn{" "}
                    <span>professional</span>
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do <br />
                    eiusmod tempor incididunt ut labore.
                  </p>
                </div>
                <div className="it-about-3-mv-box">
                  <div className="row">
                    <div className="col-xl-6 col-md-6">
                      <div className="it-about-3-mv-item">
                        <span className="it-about-3-mv-title">
                          OUR MISSION:
                        </span>
                        <p>
                          Suspendisse ultrice gravida dictum fusce placerat
                          ultricies integer quis auctor elit sed vulputate mi
                          sit.
                        </p>
                      </div>
                    </div>
                    <div className="col-xl-6 col-md-6">
                      <div className="it-about-3-mv-item">
                        <span className="it-about-3-mv-title">
                          OUR VISSION:
                        </span>
                        <p>
                          Suspendisse ultrice gravida dictum fusce placerat
                          ultricies integer quis auctor elit sed vulputate mi
                          sit.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="it-about-3-btn-box p-relative">
                  <Link className="it-btn-yellow">
                    <span>
                      admission open
                      <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                  </Link>

                  <div className="it-about-3-left-shape-3 d-none d-md-block">
                    <img src="assets/img/about/about-3-shap-3.png" alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="it-course-area it-course-style-3 it-course-bg p-relative grey-bg pt-120 pb-120"
          data-background="assets/img/course/course-bg.png"
        >
          <div className="container">
            <div className="it-course-title-wrap mb-60">
              <div className="row align-items-end">
                <div className="col-xl-7 col-lg-7 col-md-8">
                  <div className="it-course-title-box">
                    <span className="it-section-subtitle-3">
                      <img src="assets/img/about/bg.svg" alt="img" />
                      Top Popular Course
                    </span>
                    <h4 className="it-section-title-3">
                      Check out educate features <br /> win any exam
                    </h4>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-5 col-md-4">
                  <div className="it-course-button text-start text-md-end pt-25">
                    <Link className="it-btn-theme-2">
                      <span>
                        Load More Course
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="it-course-item">
                  <div className="it-course-thumb mb-20 p-relative">
                    <Link>
                      <img src="assets/img/course/course-1-1.jpg" alt="img" />
                    </Link>

                    <div className="it-course-thumb-text">
                      <span>Development</span>
                    </div>
                  </div>
                  <div className="it-course-content">
                    <div className="it-course-rating mb-10">
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-regular fa-star"></i>
                      <span>(4.7)</span>
                    </div>
                    <h4 className="it-course-title pb-5">
                      <Link>
                        It statistics data science and Business analysis
                      </Link>
                    </h4>
                    <div className="it-course-info pb-15 mb-25 d-flex justify-content-between">
                      <span>
                        <i className="fa-light fa-file-invoice"></i>Lesson 10
                      </span>
                      <span>
                        <i className="fa-sharp fa-regular fa-clock"></i>19h 30m
                      </span>
                      <span>
                        <i className="fa-light fa-user"></i>Students 20+
                      </span>
                    </div>
                    <div className="it-course-author pb-15">
                      <img src="assets/img/course/avata-1.png" alt="img" />
                      <span>
                        By <i>Angela</i> in <i>Development</i>
                      </span>
                    </div>
                    <div className="it-course-price-box d-flex justify-content-between">
                      <span>
                        <i>$60</i> $120
                      </span>
                      <Link>
                        <i className="fa-light fa-cart-shopping"></i>Add to cart
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="it-course-item">
                  <div className="it-course-thumb mb-20 p-relative">
                    <Link>
                      <img src="assets/img/course/course-1-2.jpg" alt="img" />
                    </Link>

                    <div className="it-course-thumb-text">
                      <span>Development</span>
                    </div>
                  </div>
                  <div className="it-course-content">
                    <div className="it-course-rating mb-10">
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-regular fa-star"></i>
                      <span>(4.7)</span>
                    </div>
                    <h4 className="it-course-title pb-5">
                      <Link>
                        It statistics data science and Business analysis
                      </Link>
                    </h4>
                    <div className="it-course-info pb-15 mb-25 d-flex justify-content-between">
                      <span>
                        <i className="fa-light fa-file-invoice"></i>Lesson 10
                      </span>
                      <span>
                        <i className="fa-sharp fa-regular fa-clock"></i>19h 30m
                      </span>
                      <span>
                        <i className="fa-light fa-user"></i>Students 20+
                      </span>
                    </div>
                    <div className="it-course-author pb-15">
                      <img src="assets/img/course/avata-1.png" alt="img" />
                      <span>
                        By <i>Angela</i> in <i>Development</i>
                      </span>
                    </div>
                    <div className="it-course-price-box d-flex justify-content-between">
                      <span>
                        <i>$60</i> $120
                      </span>
                      <Link>
                        <i className="fa-light fa-cart-shopping"></i>Add to cart
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="it-course-item">
                  <div className="it-course-thumb mb-20 p-relative">
                    <Link>
                      <img src="assets/img/course/course-1-3.jpg" alt="img" />
                    </Link>

                    <div className="it-course-thumb-text">
                      <span>Development</span>
                    </div>
                  </div>
                  <div className="it-course-content">
                    <div className="it-course-rating mb-10">
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-solid fa-star"></i>
                      <i className="fa-sharp fa-regular fa-star"></i>
                      <span>(4.7)</span>
                    </div>
                    <h4 className="it-course-title pb-5">
                      <Link>Bilginer Adobe Illustrator for Graphic Design</Link>
                    </h4>
                    <div className="it-course-info pb-15 mb-25 d-flex justify-content-between">
                      <span>
                        <i className="fa-light fa-file-invoice"></i>Lesson 10
                      </span>
                      <span>
                        <i className="fa-sharp fa-regular fa-clock"></i>19h 30m
                      </span>
                      <span>
                        <i className="fa-light fa-user"></i>Students 20+
                      </span>
                    </div>
                    <div className="it-course-author pb-15">
                      <img src="assets/img/course/avata-1.png" alt="img" />
                      <span>
                        By <i>Angela</i> in <i>Development</i>
                      </span>
                    </div>
                    <div className="it-course-price-box d-flex justify-content-between">
                      <span>
                        <i>$60</i> $120
                      </span>
                      <Link>
                        <i className="fa-light fa-cart-shopping"></i>Add to cart
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="it-value-area pt-120 pb-120 p-relative fix">
          <div className="it-value-shape-1 d-none d-xxl-block">
            <img src="assets/img/value/value-shape-3.jpg" alt="img" />
          </div>
          <div className="it-value-shape-2 d-none d-xl-block">
            <img src="assets/img/value/value-shape-4.jpg" alt="img" />
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6">
                <div className="it-value-title-box">
                  <span className="it-section-subtitle-3">
                    <img src="assets/img/about/bg.svg" alt="img" />
                    Top Popular Course
                  </span>
                  <h4 className="it-section-title-3 pb-25">
                    Our classNameroom is a very deferent <span>school</span>{" "}
                    than all <br /> the others
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod <br /> tempor incididunt ut labore.
                  </p>
                </div>
                <div className="it-progress-bar-wrap">
                  <div className="it-progress-bar-item">
                    <label>Case study success</label>
                    <div className="it-progress-bar">
                      <div className="progress">
                        <div
                          className="progress-bar wow slideInLeft"
                          data-wow-delay=".1s"
                          data-wow-duration="2s"
                          role="progressbar"
                          data-width="90%"
                          aria-valuenow="90"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{
                            width: "90%",
                            visibility: "visible",
                            animationDuration: "2s",
                            animationDelay: "0.1s",
                            animationName: "slideInLeft",
                          }}
                        >
                          <span>90%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="it-progress-bar-item">
                    <label>Happy student</label>
                    <div className="it-progress-bar">
                      <div className="progress">
                        <div
                          className="progress-bar wow slideInLeft"
                          data-wow-delay=".1s"
                          data-wow-duration="2s"
                          role="progressbar"
                          data-width="82%"
                          aria-valuenow="82"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{
                            width: "82%",
                            visibility: "visible",
                            animationDuration: "2s",
                            animationDelay: "0.1s",
                            animationName: "slideInLeft",
                          }}
                        >
                          <span>82%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="it-progress-bar-item">
                    <label>Engaging</label>
                    <div className="it-progress-bar">
                      <div className="progress">
                        <div
                          className="progress-bar wow slideInLeft"
                          data-wow-delay=".1s"
                          data-wow-duration="2s"
                          role="progressbar"
                          data-width="65%"
                          aria-valuenow="58"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{
                            width: "65%",
                            visibility: "visible",
                            animationDuration: "2s",
                            animationDelay: "0.1s",
                            animationName: "slideInLeft",
                          }}
                        >
                          <span>65%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="it-progress-bar-item">
                    <label>Student Community</label>
                    <div className="it-progress-bar">
                      <div className="progress">
                        <div
                          className="progress-bar wow slideInLeft"
                          data-wow-delay=".1s"
                          data-wow-duration="2s"
                          role="progressbar"
                          data-width="58%"
                          aria-valuenow="58"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{
                            width: "58%",
                            visibility: "visible",
                            animationDuration: "2s",
                            animationDelay: "0.1s",
                            animationName: "slideInLeft",
                          }}
                        >
                          <span>98%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="it-value-right-wrap text-end p-relative">
                  <div className="it-value-right-img p-relative">
                    <img src="assets/img/value/value-1.jpg" alt="img" />
                    <Link className="it-value-play-btn">
                      <i className="fa-sharp fa-solid fa-play"></i>
                    </Link>
                  </div>
                  <div className="it-value-img-shape d-none d-xl-block">
                    <img src="assets/img/value/value-shape-2.jpg" alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="it-feature-3-area it-feature-3-bg grey-bg pt-120 pb-90"
          data-background="assets/img/feature/feature-bg.png"
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-8 col-lg-7 col-md-8">
                <div className="it-feature-3-title-box text-center mb-60">
                  <span className="it-section-subtitle-3">
                    <img src="assets/img/about/bg.svg" alt="img" />
                    HISTUDY FEATURE
                    <img src="assets/img/about/bg.svg" alt="img" />
                  </span>
                  <h4 className="it-section-title-3">
                    Check out educate features <br /> win any exam
                  </h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="it-feature-3-item mb-30 text-center">
                  <div className="it-feature-3-icon">
                    <span>
                      <i className="flaticon-coach"></i>
                    </span>
                  </div>
                  <div className="it-feature-3-content">
                    <h4 className="it-feature-3-title">
                      <Link>Best Coaching</Link>
                    </h4>
                    <p>
                      In pellentesque massa vida placerat duis. Cursus sit amet
                      dictum sit amet.
                    </p>
                  </div>
                  <div className="it-feature-3-btn">
                    <Link className="it-btn-theme-sm">
                      <span>
                        view details
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="it-feature-3-item mb-30 text-center">
                  <div className="it-feature-3-icon">
                    <span>
                      <i className="flaticon-study"></i>
                    </span>
                  </div>
                  <div className="it-feature-3-content">
                    <h4 className="it-feature-3-title">
                      <Link>Best Coaching</Link>
                    </h4>
                    <p>
                      In pellentesque massa vida placerat duis. Cursus sit amet
                      dictum sit amet.
                    </p>
                  </div>
                  <div className="it-feature-3-btn">
                    <Link className="it-btn-theme-sm">
                      <span>
                        view details
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="it-feature-3-item mb-30 text-center">
                  <div className="it-feature-3-icon">
                    <span>
                      <i className="flaticon-booking"></i>
                    </span>
                  </div>
                  <div className="it-feature-3-content">
                    <h4 className="it-feature-3-title">
                      <Link>Best Coaching</Link>
                    </h4>
                    <p>
                      In pellentesque massa vida placerat duis. Cursus sit amet
                      dictum sit amet.
                    </p>
                  </div>
                  <div className="it-feature-3-btn">
                    <Link className="it-btn-theme-sm">
                      <span>
                        view details
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="it-feature-3-item mb-30 text-center">
                  <div className="it-feature-3-icon">
                    <span>
                      <i className="flaticon-video"></i>
                    </span>
                  </div>
                  <div className="it-feature-3-content">
                    <h4 className="it-feature-3-title">
                      <Link>Best Coaching</Link>
                    </h4>
                    <p>
                      In pellentesque massa vida placerat duis. Cursus sit amet
                      dictum sit amet.
                    </p>
                  </div>
                  <div className="it-feature-3-btn">
                    <Link className="it-btn-theme-sm">
                      <span>
                        view details
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="it-video-area it-video-bg it-video-color p-relative fix pt-100 pb-95"
          data-background="assets/img/video/bg-1-1.jpg"
        >
          <div className="it-video-shape-1 d-none d-lg-block">
            <img src="assets/img/video/shape-1-1.png" alt="img" />
          </div>
          <div className="it-video-shape-2 d-none d-lg-block">
            <img src="assets/img/video/shape-1-8.png" alt="img" />
          </div>
          <div className="it-video-shape-3 d-none d-xl-block">
            <img src="assets/img/video/shape-1-3.png" alt="img" />
          </div>
          <div className="it-video-shape-4 d-none d-lg-block">
            <img src="assets/img/video/shape-1-4.png" alt="img" />
          </div>
          <div className="it-video-shape-5 d-none d-lg-block">
            <img src="assets/img/video/shape-1-5.png" alt="img" />
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-7 col-lg-7 col-md-9 col-sm-9">
                <div className="it-video-content">
                  <span>Join Our New Session</span>
                  <h3 className="it-video-title">
                    Call To Enroll Your Child <br /> <Link>(+91)958423452</Link>
                  </h3>
                  <div className="it-video-button">
                    <Link className="it-btn-theme-2">
                      <span>
                        Join With us
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5 col-md-3 col-sm-3">
                <div className="it-video-play-wrap d-flex justify-content-start justify-content-md-end align-items-center">
                  <div className="it-video-play text-center">
                    <Link className="popup-video play">
                      <i className="fas fa-play"></i>
                    </Link>
                    <Link className="text">watch now</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="it-career-area it-career-style-3 it-career-bg p-relative pb-100 pt-120">
          <div className="it-career-shape-3 d-none d-xl-block">
            <img src="assets/img/career/shape-1-2.png" alt="img" />
          </div>
          <div className="it-career-shape-6 d-none d-xl-block">
            <img src="assets/img/career/shape-1-5.png" alt="img" />
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-8">
                <div className="it-course-title-box text-center mb-60">
                  <span className="it-section-subtitle-3">
                    <img src="assets/img/about/bg.svg" alt="img" />
                    Top Popular Course
                    <img src="assets/img/about/bg.svg" alt="img" />
                  </span>
                  <h4 className="it-section-title-3">
                    Annual Exam Preparation
                  </h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6 col-lg-6 mb-30">
                <div className="it-career-item p-relative fix">
                  <div className="it-career-content">
                    <span>Medical Exam</span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      sed.
                    </p>
                    <Link className="it-btn-yellow mr-15">
                      <span>
                        Join now
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span>
                    </Link>
                  </div>
                  <div className="it-career-thumb">
                    <img src="assets/img/career/thumb-1.png" alt="img" />
                  </div>
                  <div className="it-career-shape-1">
                    <img src="assets/img/career/shape-1.png" alt="img" />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 mb-30">
                <div className="it-career-item p-relative fix">
                  <div className="it-career-content">
                    <span>BCS Exam</span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      sed.
                    </p>
                    <Link className="it-btn-yellow mr-15">
                      <span>
                        Join now
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span>
                    </Link>
                  </div>
                  <div className="it-career-thumb">
                    <img src="assets/img/career/thumb-2.png" alt="img" />
                  </div>
                  <div className="it-career-shape-1">
                    <img src="assets/img/career/shape-1.png" alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="it-testimonial-3-area"
          data-background="assets/img/testimonial/bg-2.png"
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-5 col-lg-4 d-none d-lg-block">
                <div className="it-testimonial-3-thumb">
                  <img src="assets/img/testimonial/thumb-2.png" alt="img" />
                </div>
              </div>
              <div className="col-xl-7 col-lg-8">
                <div className="it-testimonial-3-box z-index p-relative">
                  <div className="it-testimonial-3-shape-1">
                    <img src="assets/img/testimonial/shape-3-1.png" alt="img" />
                  </div>
                  <div
                    className="it-testimonial-3-wrapper p-relative"
                    data-background="assets/img/testimonial/bg-3.png"
                  >
                    <div className="it-testimonial-3-quote d-none d-md-block">
                      <img src="assets/img/testimonial/quot.png" alt="img" />
                    </div>
                    <div className="swiper-container it-testimonial-3-active">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <div className="it-testimonial-3-item">
                            <div className="it-testimonial-3-content">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquipLorem ipsum dolor
                                sit amet, consectetur adipiscing elit.
                              </p>
                              <div className="it-testimonial-3-author-box d-flex align-items-center">
                                <div className="it-testimonial-3-avata">
                                  <img
                                    src="assets/img/avatar/avatar-3-1.png"
                                    alt="img"
                                  />
                                </div>
                                <div className="it-testimonial-3-author-info">
                                  <h5>Jorge Carter</h5>
                                  <span>Software Developer</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="it-testimonial-3-item">
                            <div className="it-testimonial-3-content">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquipLorem ipsum dolor
                                sit amet, consectetur adipiscing elit.
                              </p>
                              <div className="it-testimonial-3-author-box d-flex align-items-center">
                                <div className="it-testimonial-3-avata">
                                  <img
                                    src="assets/img/avatar/avatar-2.png"
                                    alt="img"
                                  />
                                </div>
                                <div className="it-testimonial-3-author-info">
                                  <h5>Jorge Carter</h5>
                                  <span>Gloria Burnett</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="it-testimonial-3-item">
                            <div className="it-testimonial-3-content">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquipLorem ipsum dolor
                                sit amet, consectetur adipiscing elit.
                              </p>
                              <div className="it-testimonial-3-author-box d-flex align-items-center">
                                <div className="it-testimonial-3-avata">
                                  <img
                                    src="assets/img/avatar/avatar-1.png"
                                    alt="img"
                                  />
                                </div>
                                <div className="it-testimonial-3-author-info">
                                  <h5>Laurie Duncanr</h5>
                                  <span>Software Developer</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="test-slider-dots d-none d-sm-block"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="it-event-area p-relative pt-120 pb-120">
          <div className="it-event-shape-3 d-none d-xxl-block">
            <img src="assets/img/event/shape-1-1.png" alt="img" />
          </div>
          <div className="it-event-shape-4 d-none d-xl-block">
            <img src="assets/img/event/shape-1-2.png" alt="img" />
          </div>
          <div className="it-event-shape-5">
            <img src="assets/img/event/shape-1-3.png" alt="img" />
          </div>
          <div className="it-event-shape-6">
            <img src="assets/img/event/shape-1-4.png" alt="img" />
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-7 col-lg-7">
                <div className="it-event-left">
                  <div className="it-event-title-box">
                    <span className="it-section-subtitle-3">
                      <img src="assets/img/about/bg.svg" alt="img" />
                      explore Events
                    </span>
                    <h2 className="it-section-title-3 pb-20">
                      our best upcoming events
                    </h2>
                  </div>
                  <div className="it-event-content">
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod <br />
                      tempor incididunt ut labore.
                    </span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate
                    </p>
                    <Link className="it-btn-theme-2">
                      <span>
                        admission open
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5">
                <div className="it-event-thumb-box text-center text-lg-start p-relative">
                  <div className="it-event-shape-1 d-none d-lg-block">
                    <img src="assets/img/event/shape-1-5.png" alt="img" />
                  </div>
                  <div className="it-event-shape-2">
                    <img src="assets/img/event/shape-1-6.png" alt="img" />
                  </div>
                  <div className="it-event-thumb">
                    <img src="assets/img/event/thumb-1.png" alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="it-team-3-area p-relative z-index pt-110 pb-90">
          <div
            className="it-team-3-bg"
            data-background="assets/img/team/bg-3.png"
          ></div>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="it-event-title-box text-center pb-40">
                  <span className="it-section-subtitle-3 text-white">
                    <img src="assets/img/about/bg-2.svg" alt="img" />
                    Teacher
                    <img src="assets/img/about/bg-2.svg" alt="img" />
                  </span>
                  <h2 className="it-section-title-3 text-white">
                    meet our expert Instructor
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6 mb-30">
                <div className="it-team-3-item text-center">
                  <div className="it-team-3-thumb fix">
                    <img src="assets/img/team/team-3-1.jpg" alt="img" />
                  </div>
                  <div className="it-team-3-content">
                    <div className="it-team-3-social-box p-relative">
                      <button>
                        <i className="fa-light fa-share-nodes"></i>
                      </button>
                      <div className="it-team-3-social-wrap">
                        <Link>
                          {" "}
                          <i className="fa-brands fa-instagram"></i>
                        </Link>
                        <Link>
                          {" "}
                          <i className="fa-brands fa-facebook-f"></i>
                        </Link>
                        <Link>
                          {" "}
                          <i className="fa-brands fa-pinterest-p"></i>
                        </Link>
                        <Link>
                          {" "}
                          <i className="fa-brands fa-linkedin-in"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="it-team-3-author-box">
                      <h4 className="it-team-3-title">
                        <Link>Nathan Allen</Link>
                      </h4>
                      <span>Teacher</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 mb-30">
                <div className="it-team-3-item text-center">
                  <div className="it-team-3-thumb fix">
                    <img src="assets/img/team/team-3-2.jpg" alt="img" />
                  </div>
                  <div className="it-team-3-content">
                    <div className="it-team-3-social-box p-relative">
                      <button>
                        <i className="fa-light fa-share-nodes"></i>
                      </button>
                      <div className="it-team-3-social-wrap">
                        <Link>
                          {" "}
                          <i className="fa-brands fa-instagram"></i>
                        </Link>
                        <Link>
                          {" "}
                          <i className="fa-brands fa-facebook-f"></i>
                        </Link>
                        <Link>
                          {" "}
                          <i className="fa-brands fa-pinterest-p"></i>
                        </Link>
                        <Link>
                          {" "}
                          <i className="fa-brands fa-linkedin-in"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="it-team-3-author-box">
                      <h4 className="it-team-3-title">
                        <Link>Esther Boyd</Link>
                      </h4>
                      <span>Teacher</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 mb-30">
                <div className="it-team-3-item text-center">
                  <div className="it-team-3-thumb fix">
                    <img src="assets/img/team/team-3-3.jpg" alt="img" />
                  </div>
                  <div className="it-team-3-content">
                    <div className="it-team-3-social-box p-relative">
                      <button>
                        <i className="fa-light fa-share-nodes"></i>
                      </button>
                      <div className="it-team-3-social-wrap">
                        <Link>
                          {" "}
                          <i className="fa-brands fa-instagram"></i>
                        </Link>
                        <Link>
                          {" "}
                          <i className="fa-brands fa-facebook-f"></i>
                        </Link>
                        <Link>
                          {" "}
                          <i className="fa-brands fa-pinterest-p"></i>
                        </Link>
                        <Link>
                          {" "}
                          <i className="fa-brands fa-linkedin-in"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="it-team-3-author-box">
                      <h4 className="it-team-3-title">
                        <Link>Jamie Keller</Link>
                      </h4>
                      <span>Teacher</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 mb-30">
                <div className="it-team-3-item text-center">
                  <div className="it-team-3-thumb fix">
                    <img src="assets/img/team/team-3-4.jpg" alt="img" />
                  </div>
                  <div className="it-team-3-content">
                    <div className="it-team-3-social-box p-relative">
                      <button>
                        <i className="fa-light fa-share-nodes"></i>
                      </button>
                      <div className="it-team-3-social-wrap">
                        <Link>
                          {" "}
                          <i className="fa-brands fa-instagram"></i>
                        </Link>
                        <Link>
                          {" "}
                          <i className="fa-brands fa-facebook-f"></i>
                        </Link>
                        <Link>
                          {" "}
                          <i className="fa-brands fa-pinterest-p"></i>
                        </Link>
                        <Link>
                          {" "}
                          <i className="fa-brands fa-linkedin-in"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="it-team-3-author-box">
                      <h4 className="it-team-3-title">
                        <Link>Jesus Pendley</Link>
                      </h4>
                      <span>Teacher</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="it-blog-area it-blog-color pb-90">
          <div className="container">
            <div className="it-blog-title-wrap mb-80">
              <div className="row align-items-end">
                <div className="col-xl-7 col-lg-7 col-md-8">
                  <div className="it-course-title-box">
                    <span className="it-section-subtitle-3">
                      <img src="assets/img/about/bg.svg" alt="img" />
                      Top Popular Course
                    </span>
                    <h4 className="it-section-title-3">
                      Check out educate features <br /> win any exam
                    </h4>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-5 col-md-4">
                  <div className="it-course-button text-start text-md-end pt-25">
                    <Link className="it-btn-theme-2">
                      <span>
                        all blog post
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div
                  className="it-blog-item-box"
                  data-background="assets/img/blog/bg-1.jpg"
                >
                  <div className="it-blog-item">
                    <div className="it-blog-thumb fix">
                      <Link>
                        <img src="assets/img/blog/blog-1-1.jpg" alt="img" />
                      </Link>
                    </div>
                    <div className="it-blog-meta pb-15">
                      <span>
                        <i className="fa-solid fa-calendar-days"></i>
                        14 June 2023
                      </span>
                      <span>
                        <i className="fa-light fa-messages"></i>
                        Comment (06)
                      </span>
                    </div>
                    <h4 className="it-blog-title">
                      <Link>
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat
                      </Link>
                    </h4>
                    <Link className="it-btn-theme-sm">
                      <span>
                        read more
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div
                  className="it-blog-item-box"
                  data-background="assets/img/blog/bg-1.jpg"
                >
                  <div className="it-blog-item">
                    <div className="it-blog-thumb fix">
                      <Link>
                        <img src="assets/img/blog/blog-1-2.jpg" alt="img" />
                      </Link>
                    </div>
                    <div className="it-blog-meta pb-15">
                      <span>
                        <i className="fa-solid fa-calendar-days"></i>
                        14 June 2023
                      </span>
                      <span>
                        <i className="fa-light fa-messages"></i>
                        Comment (06)
                      </span>
                    </div>
                    <h4 className="it-blog-title">
                      <Link>
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat
                      </Link>
                    </h4>
                    <Link className="it-btn-theme-sm">
                      <span>
                        read more
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div
                  className="it-blog-item-box"
                  data-background="assets/img/blog/bg-1.jpg"
                >
                  <div className="it-blog-item">
                    <div className="it-blog-thumb fix">
                      <Link>
                        <img src="assets/img/blog/blog-1-3.jpg" alt="img" />
                      </Link>
                    </div>
                    <div className="it-blog-meta pb-15">
                      <span>
                        <i className="fa-solid fa-calendar-days"></i>
                        14 June 2023
                      </span>
                      <span>
                        <i className="fa-light fa-messages"></i>
                        Comment (06)
                      </span>
                    </div>
                    <h4 className="it-blog-title">
                      <Link>
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat
                      </Link>
                    </h4>
                    <Link className="it-btn-theme-sm">
                      <span>
                        read more
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
    </>
  );
};

export default HomePage4;
