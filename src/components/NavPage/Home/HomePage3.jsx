import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const HomePage3 = () => {
  return (
    <>
      <main>
       
        <div className="it-hero-3-area it-hero-style-4 it-hero-space theme-bg-3 fix z-index">
          <div className="it-hero-3-shape-1">
            <img src="assets/img/hero/hero-4-shape1.png" alt="img" />
          </div>
          <div className="it-hero-3-shape-2">
            <img src="assets/img/hero/hero-3-shape2.png" alt="img" />
          </div>
          <div className="it-hero-3-shape-3 d-none d-xl-block">
            <img src="assets/img/hero/hero-3-shape3.png" alt="img" />
          </div>
          <div className="it-hero-3-shape-4 d-none d-xl-block">
            <img src="assets/img/hero/hero-3-shape4.png" alt="img" />
          </div>
          <div className="it-hero-3-shape-5 d-none d-xl-block">
            <img src="assets/img/hero/hero-3-shape5.png" alt="img" />
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-7">
                <div className="it-hero-3-title-wrap it-hero-3-ptb">
                  <div className="it-hero-3-title-box">
                    <h1 className="it-hero-3-title">
                      an online Education Platform For Global{" "}
                      <span>Learners</span>
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
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-5">
                <div className="it-hero-3-thumb text-end">
                  <img src="assets/img/hero/hero-4-img.png" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="it-category-4-area pt-120 pb-90 grey-bg">
          <div className="container">
            <div className="it-category-4-title-wrap mb-60">
              <div className="row align-items-end">
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="it-category-4-title-box">
                    <span className="it-section-subtitle-4 d-flex align-items-center">
                      <img src="assets/img/category/title.svg" alt="img" />
                      category
                    </span>
                    <h4 className="it-section-title-3">
                      Favorite topics to learn
                    </h4>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="it-category-4-btn-box text-start text-md-end pt-25">
                    <Link className="it-btn-blue">
                      <span>
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-cols-xl-5 row-cols-lg-3 row-cols-md-3 row-cols-sm-2 row-cols-1">
              <div className="col mb-30">
                <div className="it-category-4-item text-center">
                  <div className="it-category-4-icon">
                    <span>
                      <img
                        src="assets/img/category/category-4-1.png"
                        alt="img"
                      />
                    </span>
                  </div>
                  <div className="it-category-4-content">
                    <h4 className="it-category-4-title">
                      <Link>web Design</Link>
                    </h4>
                    <span>08 Courses</span>
                  </div>
                </div>
              </div>
              <div className="col mb-30">
                <div className="it-category-4-item text-center">
                  <div className="it-category-4-icon">
                    <span>
                      <img
                        src="assets/img/category/category-4-2.png"
                        alt="img"
                      />
                    </span>
                  </div>
                  <div className="it-category-4-content">
                    <h4 className="it-category-4-title">
                      <Link>Graphics design</Link>
                    </h4>
                    <span>15 Courses</span>
                  </div>
                </div>
              </div>
              <div className="col mb-30">
                <div className="it-category-4-item text-center">
                  <div className="it-category-4-icon">
                    <span>
                      <img
                        src="assets/img/category/category-4-3.png"
                        alt="img"
                      />
                    </span>
                  </div>
                  <div className="it-category-4-content">
                    <h4 className="it-category-4-title">
                      <Link>Video Editor</Link>
                    </h4>
                    <span>10 Courses</span>
                  </div>
                </div>
              </div>
              <div className="col mb-30">
                <div className="it-category-4-item text-center">
                  <div className="it-category-4-icon">
                    <span>
                      <img
                        src="assets/img/category/category-4-4.png"
                        alt="img"
                      />
                    </span>
                  </div>
                  <div className="it-category-4-content">
                    <h4 className="it-category-4-title">
                      <Link>Content Writing </Link>
                    </h4>
                    <span>07 Courses</span>
                  </div>
                </div>
              </div>
              <div className="col mb-30">
                <div className="it-category-4-item text-center">
                  <div className="it-category-4-icon">
                    <span>
                      <img
                        src="assets/img/category/category-4-5.png"
                        alt="img"
                      />
                    </span>
                  </div>
                  <div className="it-category-4-content">
                    <h4 className="it-category-4-title">
                      <Link>Marketing</Link>
                    </h4>
                    <span>15 Courses</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="it-about-4-area it-about-4-style pt-120 pb-120">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6">
                <div className="it-about-4-thumb-wrap d-flex align-items-center justify-content-center justify-content-lg-end">
                  <div className="it-about-4-thumb-double d-flex flex-column">
                    <img
                      className="mb-20"
                      src="assets/img/about/thumb-4-1.jpg"
                      alt="img"
                    />
                    <img src="assets/img/about/thumb-4-2.jpg" alt="img" />
                  </div>
                  <div className="it-about-4-thumb-single">
                    <img src="assets/img/about/thumb-4-3.jpg" alt="img" />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="it-about-3-title-box">
                  <span className="it-section-subtitle-4">
                    <img src="assets/img/category/title.svg" alt="img" />
                    about us
                  </span>
                  <h2 className="it-section-title-3 pb-30">
                    we are always ensure best course for your{" "}
                    <span>learning</span>
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi.
                  </p>
                </div>
                <div className="it-about-3-mv-box">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="it-about-4-list-wrap d-flex align-items-start">
                        <div className="it-about-4-list-icon">
                          <span>
                            <i className="flaticon-video-1"></i>
                          </span>
                        </div>
                        <div className="it-about-3-mv-item">
                          <span className="it-about-3-mv-title">
                            Sharing a Screen
                          </span>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do tempor incididunt ut labore et dolore
                            magna aliqua.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="it-about-4-list-wrap d-flex align-items-start">
                        <div className="it-about-4-list-icon">
                          <span>
                            <i className="flaticon-puzzle"></i>
                          </span>
                        </div>
                        <div className="it-about-3-mv-item">
                          <span className="it-about-3-mv-title">
                            presenter Control
                          </span>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do tempor incididunt ut labore et dolore
                            magna aliqua.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="it-about-3-btn-box p-relative">
                  <Link className="it-btn-blue">
                    {" "}
                    <span>
                      admission open
                      <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                  </Link>

                  <div className="it-about-3-left-shape-3 d-none d-xl-block">
                    <img src="assets/img/about/about-3-shap-3.png" alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="it-funfact-4-area theme-bg-3 pt-75 pb-45">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-6 mb-30 d-flex justify-content-center">
                <div className="it-funfact-4-wrap d-flex align-items-center justify-content-center">
                  <div className="it-funfact-4-item">
                    <h4>
                      <span
                        data-purecounter-duration="1"
                        data-purecounter-end="6879"
                        className="purecounter"
                      >
                        6,879
                      </span>
                      +
                    </h4>
                    <p>Learners & counting</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 mb-30 d-flex justify-content-center">
                <div className="it-funfact-4-wrap d-flex align-items-center justify-content-center">
                  <div className="it-funfact-4-item">
                    <h4>
                      <span
                        data-purecounter-duration="1"
                        data-purecounter-end="1327"
                        className="purecounter"
                      >
                        1327
                      </span>
                      +
                    </h4>
                    <p>Courses & Video</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 mb-30 d-flex justify-content-center">
                <div className="it-funfact-4-wrap d-flex align-items-center justify-content-center">
                  <div className="it-funfact-4-item">
                    <h4>
                      <span
                        data-purecounter-duration="1"
                        data-purecounter-end="1359"
                        className="purecounter"
                      >
                        1359
                      </span>
                      +
                    </h4>
                    <p>Certified Students</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 mb-30 d-flex justify-content-center">
                <div className="it-funfact-4-wrap d-flex align-items-center justify-content-center">
                  <div className="it-funfact-4-item">
                    <h4>
                      <span
                        data-purecounter-duration="1"
                        data-purecounter-end="1557"
                        className="purecounter"
                      >
                        1557
                      </span>
                      +
                    </h4>
                    <p>Registered Enrolls</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="it-course-area it-course-style-3 it-course-style-4 it-course-bg p-relative pt-120 pb-90">
          <div className="container">
            <div className="it-course-title-wrap mb-60">
              <div className="row align-items-end">
                <div className="col-xl-7 col-lg-7 col-md-8">
                  <div className="it-course-title-box">
                    <span className="it-section-subtitle-4">
                      <img src="assets/img/category/title.svg" alt="img" />
                      Top Popular Course
                    </span>
                    <h4 className="it-section-title-3">
                      Check out educate features <br /> win any exam
                    </h4>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-5 col-md-4">
                  <div className="it-course-button text-start text-md-end pt-25">
                    <Link className="it-btn-blue">
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

        <div
          className="it-video-area it-video-style-4 it-video-bg p-relative fix pt-100 pb-95"
          data-background="assets/img/video/bg-4-1.jpg"
        >
          <div className="it-video-shape-1 d-none d-lg-block">
            <img src="assets/img/video/shape-4-1.png" alt="img" />
          </div>
          <div className="it-video-shape-2 d-none d-lg-block">
            <img src="assets/img/video/shape-1-2.png" alt="img" />
          </div>
          <div className="it-video-shape-3 d-none d-xl-block">
            <img src="assets/img/video/shape-1-4.png" alt="img" />
          </div>
          <div className="it-video-shape-5 d-none d-lg-block">
            <img src="assets/img/video/shape-1-5.png" alt="img" />
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-7 col-lg-7 col-md-9 col-sm-9">
                <div className="it-video-content">
                  <span>are you ready for this offer</span>
                  <h3 className="it-video-title">
                    40% offer for very first 100
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi.
                  </p>
                  <div className="it-video-button">
                    <Link className="it-btn-blue">
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
          className="it-wrok-area it-wrok-bg pt-120 pb-90"
          data-background="assets/img/work/work-bg.jpg"
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6">
                <div className="it-course-title-box mb-60 text-center">
                  <span className="it-section-subtitle-4">
                    <img src="assets/img/category/title.svg" alt="img" />
                    working strategy
                  </span>
                  <h4 className="it-section-title-3">our work process</h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="it-work-item text-center">
                  <div className="it-work-icon">
                    <span>
                      <img src="assets/img/work/work-1.svg" alt="img" />
                    </span>
                  </div>
                  <div className="it-work-content">
                    <h4 className="it-work-title-sm">
                      <Link>start course</Link>
                    </h4>
                    <p>
                      Duis aute irure dolor reprehenderit in voluptate velit
                      esse cillum dolore fugiat nulla pariatur. Excepteur
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="it-work-item active text-center">
                  <div className="it-work-icon">
                    <span>
                      <img src="assets/img/work/work-1.svg" alt="img" />
                    </span>
                  </div>
                  <div className="it-work-content">
                    <h4 className="it-work-title-sm">
                      <Link>Make Decision</Link>
                    </h4>
                    <p>
                      Duis aute irure dolor reprehenderit in voluptate velit
                      esse cillum dolore fugiat nulla pariatur. Excepteur
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="it-work-item text-center">
                  <div className="it-work-icon">
                    <span>
                      <img src="assets/img/work/work-1.svg" alt="img" />
                    </span>
                  </div>
                  <div className="it-work-content">
                    <h4 className="it-work-title-sm">
                      <Link>Get a Certificate</Link>
                    </h4>
                    <p>
                      Duis aute irure dolor reprehenderit in voluptate velit
                      esse cillum dolore fugiat nulla pariatur. Excepteur
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="it-testimonial-3-area it-testimonial-4-style theme-bg-3">
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
                  <div className="it-testimonial-3-wrapper white-bg p-relative">
                    <div className="it-testimonial-3-quote">
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
                    <div className="test-slider-dots"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="it-contact-area it-contact-style-4 p-relative pt-120 pb-100">
          <div className="it-contact-shape-1 d-none d-lg-block">
            <img src="assets/img/contact/shape-1-1.png" alt="img" />
          </div>
          <div className="it-contact-shape-2 d-none d-lg-block">
            <img src="assets/img/contact/shape-1-2.png" alt="img" />
          </div>
          <div className="it-contact-shape-3 d-none d-xxl-block">
            <img src="assets/img/contact/shape-1-3.png" alt="img" />
          </div>
          <div className="it-contact-shape-4 d-none d-lg-block">
            <img src="assets/img/contact/shape-1-4.png" alt="img" />
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-7 col-lg-7">
                <div className="it-contact-left">
                  <div className="it-contact-title-box pb-20">
                    <span className="it-section-subtitle-4">
                      <img src="assets/img/category/title.svg" alt="img" />
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
                    className="it-contact-timer-box"
                    data-countdown
                    data-date="June 10 2024 20:20:2"
                  >
                    <div className="row">
                      <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 mb-20">
                        <div className="it-contact-timer text-center">
                          <h6 data-days>00</h6>
                          <i>DAYS</i>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 mb-20">
                        <div className="it-contact-timer text-center">
                          <h6 data-hours>00</h6>
                          <i>HOURS</i>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 mb-20">
                        <div className="it-contact-timer text-center">
                          <h6 data-minutes>00</h6>
                          <i>MINUTES</i>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 mb-20">
                        <div className="it-contact-timer text-center">
                          <h6 data-seconds>00</h6>
                          <i>SECONDS</i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5">
                <div
                  className="it-contact-wrap"
                  data-background="assets/img/contact/bg-5.jpg"
                >
                  <h4 className="it-contact-title pb-15">
                    Sign Up for Free Resources
                  </h4>
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
                      <div className="col-12 mb-15">
                        <div className="it-contact-input-box">
                          <input type="text" placeholder="Phone" />
                        </div>
                      </div>
                      <div className="col-12 mb-30">
                        <div className="it-contact-textarea-box">
                          <textarea placeholder="Message"></textarea>
                        </div>
                      </div>
                    </div>
                  </form>
                  <button type="submit" className="it-btn-blue">
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

        <div className="it-event-2-area it-event-style-4 p-relative pt-90 grey-bg">
          <div className="container">
            <div className="it-event-2-title-wrap mb-60">
              <div className="row align-items-end">
                <div className="col-12">
                  <div className="it-event-2-title-box text-center">
                    <span className="it-section-subtitle-4">
                      <img src="assets/img/category/title.svg" alt="img" />
                      Our Events
                    </span>
                    <h2 className="it-section-title-3">Upcoming Events</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="it-event-2-item-box">
                  <div className="it-event-2-item">
                    <div className="it-event-2-thumb fix">
                      <Link>
                        {" "}
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
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
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
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
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

        <div className="it-blog-area it-blog-style-3 it-blog-style-4 grey-bg pt-90 pb-90">
          <div className="container">
            <div className="it-blog-title-wrap mb-60">
              <div className="row align-items-end">
                <div className="col-xl-8 col-lg-8 col-md-8">
                  <div className="it-blog-title-box">
                    <span className="it-section-subtitle-4">
                      <img src="assets/img/category/title.svg" alt="img" />
                      DIRECTLY FROM BLOG
                    </span>
                    <h4 className="it-section-title">
                      Our latest news <br /> & upcoming blog posts
                    </h4>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="it-blog-button text-start text-md-end">
                    <Link className="it-btn-blue">
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
                    <Link className="it-btn-blue">
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
                    <Link className="it-btn-blue">
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

export default HomePage3;
