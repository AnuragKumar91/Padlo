import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import SliderImg1 from "../../../../src/assets/img/slider/slider-1.jpg";
import SliderImg2 from "../../../../src/assets/img/slider/slider-2.jpg";
import SliderImg3 from "../../../../src/assets/img/slider/slider-3.jpg";



const HomePage5 = () => {
  return (
    <>
      
      <main>
        <div className="it-slider-area fix">
          <div className="it-slider-wrap p-relative">
            <div className="it-slider-active">
              <div
                className="it-slider-bg it-slider-overlay d-flex align-items-center it-slider-height p-relative"
                style={{ backgroundImage: `url(${SliderImg1})` }}
              >
                <div className="it-slider-shape-1 d-none d-xl-block">
                  <img src="assets/img/slider/slider-shape-2.png" alt="img" />
                </div>
                <div className="it-slider-shape-2 d-none d-xl-block">
                  <img src="assets/img/slider/slider-shape-1.png" alt="img" />
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-xl-7 col-lg-8">
                      <div className="it-hero-2-content z-index-5">
                        <h1 className="it-hero-2-title">
                          Page welcome to Horeb private University
                        </h1>
                        <div className="it-hero-2-text">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                        </div>
                      </div>
                      <div className="it-hero-2-btn-box d-flex align-items-center">
                        <Link className="it-btn-white sky-bg mr-30">
                          <span>
                            Explore all Courses
                            <FontAwesomeIcon icon={faArrowRight} />
                          </span>
                        </Link>

                        <div className="it-hero-2-play">
                          <Link className="popup-video">
                            <i className="fas fa-play"></i>
                          </Link>

                          <span>Watch Now</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="it-slider-bg it-slider-overlay d-flex align-items-center it-slider-height p-relative"
                style={{ backgroundImage: `url(${SliderImg2})` }}
              >
                <div className="it-slider-shape-1 d-none d-xl-block">
                  <img src="assets/img/slider/slider-shape-2.png" alt="img" />
                </div>
                <div className="it-slider-shape-2 d-none d-xl-block">
                  <img src="assets/img/slider/slider-shape-1.png" alt="img" />
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-xl-7 col-lg-8">
                      <div className="it-hero-2-content z-index-5">
                        <h1 className="it-hero-2-title">
                          Page welcome to Horeb private University
                        </h1>
                        <div className="it-hero-2-text">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                        </div>
                      </div>
                      <div className="it-hero-2-btn-box d-flex align-items-center">
                        <Link className="it-btn-white sky-bg mr-30">
                          <span>
                            Explore all Courses
                            <FontAwesomeIcon icon={faArrowRight} />
                          </span>
                        </Link>

                        <div className="it-hero-2-play">
                          <Link className="popup-video">
                            <i className="fas fa-play"></i>
                          </Link>

                          <span>Watch Now</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="it-slider-bg it-slider-overlay d-flex align-items-center it-slider-height p-relative"
                style={{ backgroundImage: `url(${SliderImg3})` }}
              >
                <div className="it-slider-shape-1 d-none d-xl-block">
                  <img src="assets/img/slider/slider-shape-2.png" alt="img" />
                </div>
                <div className="it-slider-shape-2 d-none d-xl-block">
                  <img src="assets/img/slider/slider-shape-1.png" alt="img" />
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-xl-7 col-lg-8">
                      <div className="it-hero-2-content z-index-5">
                        <h1 className="it-hero-2-title">
                          Page welcome to Horeb private University
                        </h1>
                        <div className="it-hero-2-text">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                        </div>
                      </div>
                      <div className="it-hero-2-btn-box d-flex align-items-center">
                        <Link className="it-btn-white sky-bg mr-30">
                          <span>
                            Explore all Courses
                            <FontAwesomeIcon icon={faArrowRight} />
                          </span>
                        </Link>

                        <div className="it-hero-2-play">
                          <Link className="popup-video">
                            <i className="fas fa-play"></i>
                          </Link>

                          <span>Watch Now</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="it-slider-nav-wrap z-index-5">
              <div className="it-slider-nav-active d-none d-lg-block">
                <div className="it-slider-nav-thumb">
                  <img src="assets/img/slider/slider-1-sm.jpg" alt="img" />
                </div>
                <div className="it-slider-nav-thumb">
                  <img src="assets/img/slider/slider-2-sm.jpg" alt="img" />
                </div>
                <div className="it-slider-nav-thumb">
                  <img src="assets/img/slider/slider-3-sm.jpg" alt="img" />
                </div>
                <div className="it-slider-nav-thumb">
                  <img src="assets/img/slider/slider-1-sm.jpg" alt="img" />
                </div>
                <div className="it-slider-nav-thumb">
                  <img src="assets/img/slider/slider-2-sm.jpg" alt="img" />
                </div>
                <div className="it-slider-nav-thumb">
                  <img src="assets/img/slider/slider-3-sm.jpg" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="it-feature-area grey-bg it-feature-2-style pt-120 pb-120">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="it-feature-item text-center">
                  <div className="it-feature-item-content z-index">
                    <div className="it-feature-icon">
                      <span>
                        <i className="flaticon-className"></i>
                      </span>
                    </div>
                    <div className="it-feature-text pt-30">
                      <h4 className="it-feature-title">Education Services</h4>
                      <p>
                        Lorem ipsum dolor amet, consectetur adipiscing elit, sed
                        eiusmod tempor incididunt ut labore et dolore
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="it-feature-item text-center">
                  <div className="it-feature-item-content z-index">
                    <div className="it-feature-icon">
                      <span>
                        <i className="flaticon-bachelor"></i>
                      </span>
                    </div>
                    <div className="it-feature-text pt-30">
                      <h4 className="it-feature-title">EXPERT TEACHERS</h4>
                      <p>
                        Lorem ipsum dolor amet, consectetur adipiscing elit, sed
                        eiusmod tempor incididunt ut labore et dolore
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="it-feature-item text-center">
                  <div className="it-feature-item-content z-index">
                    <div className="it-feature-icon">
                      <span>
                        <i className="flaticon-study"></i>
                      </span>
                    </div>
                    <div className="it-feature-text pt-30">
                      <h4 className="it-feature-title">STRATEGI LOCATION</h4>
                      <p>
                        Lorem ipsum dolor amet, consectetur adipiscing elit, sed
                        eiusmod tempor incididunt ut labore et dolore
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="it-about-2-area p-relative pt-120 pb-120">
          <div className="it-about-2-shape-2 d-none d-xxl-block">
            <img src="assets/img/about/shape-2-2.png" alt="img" />
          </div>
          <div className="it-about-2-big-text">
            <h6>ABUT US</h6>
          </div>
          <div className="container">
            <div className="row align-items-end">
              <div className="col-xl-6 col-lg-6 order-1 order-lg-0">
                <div className="it-about-2-thumb-wrap d-flex justify-content-between">
                  <div className="it-about-2-thumb p-relative mt-95">
                    <img src="assets/img/about/thumb-2-1.jpg" alt="img" />
                    <div className="it-about-2-shape-1 d-none d-xxl-block">
                      <img src="assets/img/about/shape-2-1.png" alt="img" />
                    </div>
                  </div>
                  <div className="it-about-2-thumb">
                    <img src="assets/img/about/thumb-2-2.jpg" alt="img" />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 order-0 order-lg-1">
                <div className="it-about-2-right">
                  <div className="it-about-2-title-box pb-25">
                    <span className="it-section-subtitle-2">our about us</span>
                    <h4 className="it-section-title">
                      We Are High School Since <br />
                      10 Years Experience
                    </h4>
                  </div>
                  <div className="it-about-2-text pb-5">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut <br />
                      enim ad minim veniam, quis nostrud exercitation.
                    </p>
                  </div>
                  <div className="it-about-2-text-2 mb-30">
                    <span>
                      Standard dummy text ever since the unknown scramble make a
                      type specimen book
                    </span>
                  </div>
                  <div className="it-about-2-bottom d-flex justify-content-between align-items-end">
                    <div className="it-about-2-icon-wrap">
                      <div className="it-about-2-icon mb-25 d-flex align-items-center">
                        <img src="assets/img/about/icon-1-1.png" alt="img" />
                        <span>Flexible classNamees</span>
                      </div>
                      <div className="it-about-2-icon mb-35 d-flex align-items-center">
                        <img src="assets/img/about/icon-1-2.png" alt="img" />
                        <span>Learn From Anywhere</span>
                      </div>
                      <Link className="it-btn-white sky-bg">
                        <span>
                          More About Us
                          <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                      </Link>
                    </div>
                    <div className="it-about-2-video p-relative">
                      <div className="it-about-2-thumb-sm">
                        <img src="assets/img/about/thumb-sm.png" alt="img" />
                      </div>
                      <div className="it-about-2-video-icon">
                        <Link className="popup-video play">
                          <i className="fas fa-play"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="it-cta-area it-cta-height black-bg p-relative">
          <div className="it-cta-bg d-none d-xl-block">
            <img src="assets/img/about/cta-1.png" alt="img" />
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-9 col-lg-7 col-md-7">
                <div className="it-cta-content">
                  <h4 className="it-cta-title">
                    educate gives you the tools create an online course.
                  </h4>
                </div>
              </div>
              <div className="col-xl-3 col-lg-5 col-md-5">
                <div className="it-cta-button text-md-end">
                  <Link className="it-btn-white sky-bg">
                    <span>
                      More About Us
                      <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="it-course-area it-course-style-2  p-relative pt-120 pb-120">
          <div className="it-course-shape-6 d-none d-xl-block">
            <img src="assets/img/course/shape-1-6.png" alt="img" />
          </div>
          <div className="container">
            <div className="it-course-title-wrap p-relative mb-60">
              <div className="it-course-shape-5 d-none d-xl-block">
                <img src="assets/img/course/shape-1-5.png" alt="img" />
              </div>
              <div className="row align-items-end">
                <div className="col-xl-8 col-lg-8 col-md-8">
                  <div className="it-course-title-box">
                    <span className="it-section-subtitle-2">Our Courses</span>
                    <h4 className="it-section-title">
                      Creating A Community Of <br />
                      Life Long Learners.
                    </h4>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="it-course-button text-start text-md-end">
                    <Link className="it-btn-white sky-bg">
                      <span>
                        All Courses
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="it-course-2-wrap d-flex align-items-center">
                  <div className="it-course-thumb  p-relative">
                    <Link className="fix">
                      <img src="assets/img/course/course-1-4.jpg" alt="img" />
                    </Link>

                    <div className="it-course-thumb-text">
                      <span>Marketing</span>
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
                    <h4 className="it-course-title pb-15">
                      <Link>
                        It statistics data science and Business analysis
                      </Link>
                    </h4>
                    <div className="it-course-info pb-20 mb-25 d-flex justify-content-between">
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
                    <div className="it-course-author pb-25">
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
              <div className="col-xl-6 col-lg-6">
                <div className="it-course-2-wrap d-flex align-items-center">
                  <div className="it-course-thumb  p-relative">
                    <Link>
                      <img src="assets/img/course/course-1-5.jpg" alt="img" />
                    </Link>

                    <div className="it-course-thumb-text">
                      <span>Marketing</span>
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
                    <h4 className="it-course-title pb-15">
                      <Link>
                        It statistics data science and Business analysis
                      </Link>
                    </h4>
                    <div className="it-course-info pb-20 mb-25 d-flex justify-content-between">
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
                    <div className="it-course-author pb-25">
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

        <div className="it-choose-area it-choose-style-2 z-index fix p-relative grey-bg pt-180 pb-110">
          <div className="it-choose-shape-5 d-none d-xl-block">
            <img src="assets/img/choose/shape-1-7.png" alt="img" />
          </div>
          <div className="it-choose-shape-6 d-none d-xl-block">
            <img src="assets/img/choose/shape-1-8.png" alt="img" />
          </div>
          <div className="it-choose-shape-7 d-none d-xl-block">
            <img src="assets/img/choose/shape-1-9.png" alt="img" />
          </div>
          <div className="it-choose-shape-8 d-none d-xl-block">
            <img src="assets/img/choose/shape-1-10.png" alt="img" />
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6 mb-30">
                <div className="it-choose-thumb-box text-center text-lg-end">
                  <div className="it-choose-thumb p-relative">
                    <img src="assets/img/choose/choose-2-2.jpg" alt="img" />
                    <div className="it-choose-shape-1">
                      <img src="assets/img/choose/shape-1-5.png" alt="img" />
                    </div>
                    <div className="it-choose-shape-2">
                      <img src="assets/img/choose/shape-1-6.png" alt="img" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 mb-30">
                <div className="it-choose-left">
                  <div className="it-choose-title-box mb-30">
                    <span className="it-section-subtitle-2">WHY CHOOSE US</span>
                    <h4 className="it-section-title">
                      Creating A Community Of Life Long Learners.
                    </h4>
                  </div>
                  <div className="it-choose-content-box">
                    <div className="it-choose-content d-flex align-items-center mb-30">
                      <div className="it-choose-icon">
                        <span>
                          <i className="flaticon-skill"></i>
                        </span>
                      </div>
                      <div className="it-choose-text">
                        <h4 className="it-choose-title">Affordable Courses</h4>
                        <p className="mb-0">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit eiusmod tempor incididunt ut labore.
                        </p>
                      </div>
                    </div>
                    <div className="it-choose-content d-flex align-items-center mb-30">
                      <div className="it-choose-icon">
                        <span>
                          <i className="flaticon-funds"></i>
                        </span>
                      </div>
                      <div className="it-choose-text">
                        <h4 className="it-choose-title">
                          Efficient & Flexible
                        </h4>
                        <p className="mb-0">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit eiusmod tempor incididunt ut labore.
                        </p>
                      </div>
                    </div>
                    <div className="it-choose-content d-flex align-items-center">
                      <div className="it-choose-icon">
                        <span>
                          <i className="flaticon-flexibility"></i>
                        </span>
                      </div>
                      <div className="it-choose-text">
                        <h4 className="it-choose-title">Skilled Teachers</h4>
                        <p className="mb-0">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit eiusmod tempor incididunt ut labore.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="it-testimonial-5-area it-testimonial-style-2 p-relative pt-120 pb-120">
          <div className="it-testimonial-5-shape-5 d-none d-xl-block">
            <img src="assets/img/testimonial/shape-5-6.png" alt="img" />
          </div>
          <div className="it-testimonial-5-shape-6 d-none d-xl-block">
            <img src="assets/img/testimonial/shape-5-7.png" alt="img" />
          </div>
          <div className="it-testimonial-5-shape-7 d-none d-xl-block">
            <img src="assets/img/testimonial/shape-5-8.png" alt="img" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="it-testimonial-5-title-box text-center mb-60">
                  <span className="it-section-subtitle-2">Testimonial</span>
                  <h4 className="it-section-title-5">
                    Creating A Community Of <br />
                    Life Long Learners.
                  </h4>
                </div>
              </div>
              <div className="col-xl-12">
                <div className="it-testimonial-5-wrapper p-relative">
                  <div className="swiper-container it-testimonial-5-active">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="it-testimonial-5-item p-relative z-index">
                          <div className="it-testimonial-3-author-box d-flex align-items-center mb-20">
                            <div className="it-testimonial-3-avata">
                              <img
                                src="assets/img/avatar/avatar-3-1.png"
                                alt="img"
                              />
                            </div>
                            <div className="it-testimonial-3-author-info">
                              <h5>Jorge Carter</h5>
                              <span>Student</span>
                            </div>
                          </div>
                          <div className="it-testimonial-5-content z-index-5">
                            <div className="it-testimonial-5-star pb-10">
                              <i className="fa-sharp fa-solid fa-star"></i>
                              <i className="fa-sharp fa-solid fa-star"></i>
                              <i className="fa-sharp fa-solid fa-star"></i>
                              <i className="fa-sharp fa-solid fa-star"></i>
                              <i className="fa-sharp fa-solid fa-star"></i>
                            </div>
                            <div className="it-testimonial-5-text">
                              <p>
                                “Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation”
                              </p>
                            </div>
                          </div>
                          <div className="it-testimonial-5-quote d-none d-xl-block">
                            <img
                              src="assets/img/testimonial/quote-1-2.png"
                              alt="img"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="it-testimonial-5-item p-relative z-index">
                          <div className="it-testimonial-3-author-box d-flex align-items-center mb-20">
                            <div className="it-testimonial-3-avata">
                              <img
                                src="assets/img/avatar/avatar-2.png"
                                alt="img"
                              />
                            </div>
                            <div className="it-testimonial-3-author-info">
                              <h5>George McGruder</h5>
                              <span>Student</span>
                            </div>
                          </div>
                          <div className="it-testimonial-5-content z-index-5">
                            <div className="it-testimonial-5-star pb-10">
                              <i className="fa-sharp fa-solid fa-star"></i>
                              <i className="fa-sharp fa-solid fa-star"></i>
                              <i className="fa-sharp fa-solid fa-star"></i>
                              <i className="fa-sharp fa-solid fa-star"></i>
                              <i className="fa-sharp fa-solid fa-star"></i>
                            </div>
                            <div className="it-testimonial-5-text">
                              <p>
                                “Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation”
                              </p>
                            </div>
                          </div>
                          <div className="it-testimonial-5-quote d-none d-xl-block">
                            <img
                              src="assets/img/testimonial/quote-1-2.png"
                              alt="img"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="it-testimonial-5-item p-relative z-index">
                          <div className="it-testimonial-3-author-box d-flex align-items-center mb-20">
                            <div className="it-testimonial-3-avata">
                              <img
                                src="assets/img/avatar/avatar-1.png"
                                alt="img"
                              />
                            </div>
                            <div className="it-testimonial-3-author-info">
                              <h5>Georgia Griffith</h5>
                              <span>Student</span>
                            </div>
                          </div>
                          <div className="it-testimonial-5-content z-index-5">
                            <div className="it-testimonial-5-star pb-10">
                              <i className="fa-sharp fa-solid fa-star"></i>
                              <i className="fa-sharp fa-solid fa-star"></i>
                              <i className="fa-sharp fa-solid fa-star"></i>
                              <i className="fa-sharp fa-solid fa-star"></i>
                              <i className="fa-sharp fa-solid fa-star"></i>
                            </div>
                            <div className="it-testimonial-5-text">
                              <p>
                                “Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation”
                              </p>
                            </div>
                          </div>
                          <div className="it-testimonial-5-quote d-none d-xl-block">
                            <img
                              src="assets/img/testimonial/quote-1-2.png"
                              alt="img"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="it-video-area it-video-style-2 it-video-bg p-relative fix pt-100 pb-95"
          data-background="assets/img/video/bg-1-1.jpg"
        >
          <div className="it-video-shape-1 d-none d-lg-block">
            <img src="assets/img/video/shape-1-6.png" alt="img" />
          </div>
          <div className="it-video-shape-2 d-none d-lg-block">
            <img src="assets/img/video/shape-1-2.png" alt="img" />
          </div>
          <div className="it-video-shape-3 d-none d-lg-block">
            <img src="assets/img/video/shape-1-7.png" alt="img" />
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
                    <Link className="it-btn blue-bg">
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

        <div
          className="it-contact-area it-contact-style-2 it-contact-bg p-relative pt-120 pb-120"
          data-background="assets/img/contact/bg-1-2.jpg"
        >
          <div className="it-contact-shape-1 d-none d-xxl-block">
            <img src="assets/img/contact/shape-1-1.png" alt="img" />
          </div>
          <div className="it-contact-shape-3 z-index-5 d-none d-xxl-block">
            <img src="assets/img/contact/shape-1-6.png" alt="img" />
          </div>
          <div className="it-contact-shape-4 d-none d-xxl-block">
            <img src="assets/img/contact/shape-1-4.png" alt="img" />
          </div>
          <div className="it-contact-shape-5 d-none d-xxl-block">
            <img src="assets/img/contact/shape-1-7.png" alt="img" />
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-7 col-lg-6">
                <div className="it-contact-left">
                  <div className="it-contact-title-box pb-20">
                    <span className="it-section-subtitle-2">
                      Contact With US
                    </span>
                    <h2 className="it-section-title-3">
                      Register Now Get Premium Online Admison
                    </h2>
                  </div>
                  <div className="it-contact-text pb-15">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo
                    </p>
                  </div>
                  <div
                    className="it-contact-timer-box mb-40"
                    data-countdown
                    data-date="Sep 30 2024 20:20:22"
                  >
                    <div className="row">
                      <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-6">
                        <div className="it-contact-timer text-center">
                          <h6 data-days>00</h6>
                          <i>DAYS</i>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-6">
                        <div className="it-contact-timer text-center">
                          <h6 data-hours>00</h6>
                          <i>HOURS</i>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-6">
                        <div className="it-contact-timer text-center">
                          <h6 data-minutes>00</h6>
                          <i>MINUTES</i>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-6">
                        <div className="it-contact-timer text-center">
                          <h6 data-seconds>00</h6>
                          <i>SECONDS</i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="it-contact-thumb-box">
                    <img src="assets/img/contact/thumb-1-1.jpg" alt="img" />
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6">
                <div
                  className="it-contact-wrap"
                  data-background="assets/img/contact/bg-5.jpg"
                >
                  <h4 className="it-contact-title text-black">
                    Search for courses
                  </h4>
                  <p className="pb-15">
                    Suspendisse ultrice gravida dictum fusce <br />
                    placerat ultricies integer
                  </p>
                  <form action="#">
                    <div className="row">
                      <div className="col-12 mb-15">
                        <div className="it-contact-input-box">
                          <input type="text" placeholder="Your Name" />
                        </div>
                      </div>
                      <div className="col-12 mb-15">
                        <div className="it-contact-input-box">
                          <input type="email" placeholder="Your Email" />
                        </div>
                      </div>
                      <div className="col-md-6 col-12 mb-15">
                        <div className="it-contact-select mb-30">
                          <select>
                            <option>Instructor</option>
                            <option>01 Year</option>
                            <option>02 Year</option>
                            <option>03 Year</option>
                            <option>04 Year</option>
                            <option>05 Year</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6 col-12 mb-15">
                        <div className="it-contact-select mb-30">
                          <select>
                            <option>Department</option>
                            <option>01 Year</option>
                            <option>02 Year</option>
                            <option>03 Year</option>
                            <option>04 Year</option>
                            <option>05 Year</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6 col-12 mb-15">
                        <div className="it-contact-select mb-30">
                          <select>
                            <option>Campus</option>
                            <option>01 Year</option>
                            <option>02 Year</option>
                            <option>03 Year</option>
                            <option>04 Year</option>
                            <option>05 Year</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6 col-12 mb-15">
                        <div className="it-contact-select mb-30">
                          <select>
                            <option>Level</option>
                            <option>01 Year</option>
                            <option>02 Year</option>
                            <option>03 Year</option>
                            <option>04 Year</option>
                            <option>05 Year</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </form>
                  <button type="submit" className="it-btn black-bg">
                    <span>
                      submit now
                      <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="it-event-2-area p-relative pt-90 pb-90">
          <div className="container">
            <div className="it-event-2-title-wrap mb-60">
              <div className="row align-items-end">
                <div className="col-12">
                  <div className="it-event-2-title-box text-center">
                    <span className="it-section-subtitle-2">Our Events</span>
                    <h2 className="it-section-title-3">Upcoming Events</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-6 col-md-6 mb-30">
                <div className="it-event-2-item-box">
                  <div className="it-event-2-item">
                    <div className="it-event-2-thumb fix">
                      <Link>
                        <img src="assets/img/event/event-1-1.jpg" alt="img" />
                      </Link>

                      <div className="it-event-2-date">
                        <span>
                          <i>08</i> <br />
                          October
                        </span>
                      </div>
                    </div>
                    <div className="it-event-2-content">
                      <h4 className="it-event-2-title">
                        <Link>
                          print, and publishing industries for previewing
                        </Link>
                      </h4>
                      <div className="it-event-2-text">
                        <p className="mb-0 pb-10">
                          Lorem ipsum dolor sit amet, consectetur elit, sed
                          doeiusmod tempor
                        </p>
                      </div>
                      <div className="it-event-2-meta">
                        <span>
                          <i className="fa-light fa-clock"></i>
                          Time: 11:00am 03;00pm
                        </span>
                        <span>
                          <Link>
                            <i className="fa-light fa-location-dot"></i>
                          </Link>
                          Location: USA
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 mb-30">
                <div className="it-event-2-item-box">
                  <div className="it-event-2-item">
                    <div className="it-event-2-thumb fix">
                      <Link>
                        <img src="assets/img/event/event-1-2.jpg" alt="img" />
                      </Link>

                      <div className="it-event-2-date">
                        <span>
                          <i>05</i> <br />
                          October
                        </span>
                      </div>
                    </div>
                    <div className="it-event-2-content">
                      <h4 className="it-event-2-title">
                        <Link>
                          print, and publishing industries for previewing
                        </Link>
                      </h4>
                      <div className="it-event-2-text">
                        <p className="mb-0 pb-10">
                          Lorem ipsum dolor sit amet, consectetur elit, sed
                          doeiusmod tempor
                        </p>
                      </div>
                      <div className="it-event-2-meta">
                        <span>
                          <i className="fa-light fa-clock"></i>
                          Time: 11:00am 03;00pm
                        </span>
                        <span>
                          <Link>
                            <i className="fa-light fa-location-dot"></i>
                          </Link>
                          Location: USA
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 mb-30">
                <div className="it-event-2-item-box">
                  <div className="it-event-2-item">
                    <div className="it-event-2-thumb fix">
                      <Link>
                        <img src="assets/img/event/event-1-3.jpg" alt="img" />
                      </Link>

                      <div className="it-event-2-date">
                        <span>
                          <i>25</i> <br />
                          April
                        </span>
                      </div>
                    </div>
                    <div className="it-event-2-content">
                      <h4 className="it-event-2-title">
                        <Link>
                          print, and publishing industries for previewing
                        </Link>
                      </h4>
                      <div className="it-event-2-text">
                        <p className="mb-0 pb-10">
                          Lorem ipsum dolor sit amet, consectetur elit, sed
                          doeiusmod tempor
                        </p>
                      </div>
                      <div className="it-event-2-meta">
                        <span>
                          <i className="fa-light fa-clock"></i>
                          Time: 11:00am 03;00pm
                        </span>
                        <span>
                          <Link>
                            <i className="fa-light fa-location-dot"></i>
                          </Link>
                          Location: USA
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="it-brand-area black-bg pt-50 pb-50">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="it-brand-wrapper">
                  <div className="swiper-container it-brand-active">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="it-brand-item text-center">
                          <img src="assets/img/brand/brand-1-1.png" alt="img" />
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="it-brand-item text-center">
                          <img src="assets/img/brand/brand-1-1.png" alt="img" />
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="it-brand-item text-center">
                          <img src="assets/img/brand/brand-1-1.png" alt="img" />
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="it-brand-item text-center">
                          <img src="assets/img/brand/brand-1-1.png" alt="img" />
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="it-brand-item">
                          <img src="assets/img/brand/brand-1-1.png" alt="img" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="it-faq-area p-relative pt-120 pb-120">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6">
                <div className="it-faq-thumb text-center text-lg-start">
                  <img src="assets/img/faq/faq-2.jpg" alt="img" />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="it-faq-wrap">
                  <div className="it-faq-title-box mb-20">
                    <span className="it-section-subtitle-2">faq</span>
                    <h4 className="it-section-title-5">
                      Frequently asked some questions?
                    </h4>
                  </div>
                  <div className="it-custom-accordion it-custom-accordion-style-2">
                    <div className="accordion" id="accordionExample">
                      <div className="accordion-items tp-faq-active">
                        <h2 className="accordion-header" id="headingOne">
                          <button
                            className="accordion-buttons "
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            Why do students prefer online learning?
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body d-flex align-items-center">
                            <p className="mb-0">
                              Lorem ipsum dolor sit amet, consectetur elit, sed
                              doeiusmod tempor incididunt ut labore et dolore
                              magna aliqua. Ut enim ad minim veniam, quis
                              nostrud exercitation.
                            </p>
                            <img
                              className="d-none d-xl-block"
                              src="assets/img/faq/thumb-2.jpg"
                              alt="img"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="accordion-items">
                        <h2 className="accordion-header" id="headingTwo">
                          <button
                            className="accordion-buttons collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            Where should I study abroad?
                          </button>
                        </h2>
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body d-flex align-items-center">
                            <p className="mb-0">
                              Lorem ipsum dolor sit amet, consectetur elit, sed
                              doeiusmod tempor incididunt ut labore et dolore
                              magna aliqua. Ut enim ad minim veniam, quis
                              nostrud exercitation.
                            </p>
                            <img
                              className="d-none d-xl-block"
                              src="assets/img/faq/thumb-2.jpg"
                              alt="img"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="accordion-items">
                        <h2 className="accordion-header" id="headingThree">
                          <button
                            className="accordion-buttons collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            How can I contact a school directly?
                          </button>
                        </h2>
                        <div
                          id="collapseThree"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body d-flex align-items-center">
                            <p className="mb-0">
                              Lorem ipsum dolor sit amet, consectetur elit, sed
                              doeiusmod tempor incididunt ut labore et dolore
                              magna aliqua. Ut enim ad minim veniam, quis
                              nostrud exercitation.
                            </p>
                            <img
                              className="d-none d-xl-block"
                              src="assets/img/faq/thumb-2.jpg"
                              alt="img"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="accordion-items">
                        <h2 className="accordion-header" id="headingFour">
                          <button
                            className="accordion-buttons collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                          >
                            How do I find a school where I want to study?
                          </button>
                        </h2>
                        <div
                          id="collapseFour"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingFour"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body d-flex align-items-center">
                            <p className="mb-0">
                              Lorem ipsum dolor sit amet, consectetur elit, sed
                              doeiusmod tempor incididunt ut labore et dolore
                              magna aliqua. Ut enim ad minim veniam, quis
                              nostrud exercitation.
                            </p>
                            <img
                              className="d-none d-xl-block"
                              src="assets/img/faq/thumb-2.jpg"
                              alt="img"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="it-blog-area it-blog-style-3 grey-bg pt-90 pb-90">
          <div className="container">
            <div className="it-blog-title-wrap mb-60">
              <div className="row align-items-end">
                <div className="col-xl-8 col-lg-8 col-md-8">
                  <div className="it-blog-title-box">
                    <span className="it-section-subtitle-2">
                      DIRECTLY FROM BLOG
                    </span>
                    <h4 className="it-section-title">
                      Our latest news & upcoming <br />
                      blog posts
                    </h4>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="it-blog-button text-start text-md-end">
                    <Link className="it-btn blue-bg">
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
              <div className="col-xl-6 col-lg-6 col-md-6 mb-30">
                <div className="it-blog-item">
                  <div className="it-blog-thumb fix">
                    <Link>
                      <img src="assets/img/blog/blog-1-7.jpg" alt="img" />
                    </Link>
                  </div>
                  <div className="it-blog-content">
                    <div className="it-blog-meta pb-25">
                      <span>
                        <i className="fa-light fa-user"></i>
                        Sunilra smoth
                      </span>
                      <span>
                        <i className="fa-light fa-calendar-days"></i>
                        March 28, 2023
                      </span>
                    </div>
                    <h4 className="it-blog-title pb-5">
                      <Link>
                        Lorem ipsum dolor sit amet, consectetur Adipiscing elit,
                        sed do.
                      </Link>
                    </h4>
                    <Link className="it-btn blue-bg">
                      <span>
                        read more
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 mb-30">
                <div className="it-blog-item">
                  <div className="it-blog-thumb fix">
                    <Link>
                      <img src="assets/img/blog/blog-1-8.jpg" alt="img" />
                    </Link>
                  </div>
                  <div className="it-blog-content">
                    <div className="it-blog-meta pb-25">
                      <span>
                        <i className="fa-light fa-user"></i>
                        Sunilra smoth
                      </span>
                      <span>
                        <i className="fa-light fa-calendar-days"></i>
                        March 28, 2023
                      </span>
                    </div>
                    <h4 className="it-blog-title pb-5">
                      <Link>
                        Lorem ipsum dolor sit amet, consectetur Adipiscing elit,
                        sed do.
                      </Link>
                    </h4>
                    <Link className="it-btn blue-bg">
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

export default HomePage5;
