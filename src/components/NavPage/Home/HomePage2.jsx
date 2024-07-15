import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import ClassImg1 from "../../../../src/assets/img/class/class-1-1.jpg";
import ClassImg2 from "../../../../src/assets/img/class/class-1-2.jpg";
import ClassImg3 from "../../../../src/assets/img/class/class-1-3.jpg"
import dataImg1 from "../../../../src/assets/img/hero/hero-bg-5.jpg"
import dataImg2 from "../../../../src/assets/img/feature/bg-1-1.jpg"
import dataImg3 from "../../../../src/assets/img/funfact/bg-2.png"
import dataImg4 from "../../../../src/assets/img/video/bg-5-1.jpg"






const HomPage2 = () => {
  return (
    <>
      <main>
        
        <div
          className="it-hero-2-area it-hero-2-bg it-hero-5-style fix p-relative"
          style={{ backgroundImage: `url(${dataImg1})` }}
        >
          <div className="it-hero-5-shape-1">
            <img src="assets/img/hero/shape-5-1.png" alt="img" />
          </div>
          <div className="it-hero-5-shape-2 d-none d-lg-block">
            <img src="assets/img/hero/shape-5-2.png" alt="img" />
          </div>
          <div className="it-hero-5-shape-3">
            <img src="assets/img/hero/shape-5-3.png" alt="img" />
          </div>
          <div className="it-hero-5-shape-4">
            <img src="assets/img/hero/shape-5-4.png" alt="img" />
          </div>
          <div className="it-hero-5-shape-7">
            <img src="assets/img/hero/shape-5-5.png" alt="img" />
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xxl-6 col-xl-6 col-lg-6">
                <div className="it-hero-2-content">
                  <h1 className="it-hero-2-title">
                    Develop Your skills <br />
                    with online courses <br />
                    From A Pro
                  </h1>
                  <div className="it-hero-2-text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <div className="it-hero-2-btn-box d-flex align-items-center">
                      <Link className="it-btn-yellow radius mr-30 mb-20">
                      <span>
                          Explore all Courses
                          <FontAwesomeIcon icon={faArrowRight} className="custom-icon" />

                        </span>
                      </Link>
                      <div className="it-hero-2-play mb-20">
                       <Link  className="popup-video">
                        
                       <i className="fas fa-play"></i>
                       </Link>
                        <span>Watch Now</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-6 col-lg-6">
                <div className="it-hero-2-thumb-box p-relative">
                  <div className="it-hero-2-thumb p-relative">
                    <img src="assets/img/hero/hero-5.png" alt="img" />
                    <div className="it-hero-5-shape-5">
                      <img src="assets/img/hero/shape-5-1.png" alt="img" />
                    </div>
                    <div className="it-hero-5-shape-6">
                      <img src="assets/img/hero/shape-5-6.png" alt="img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="it-feature-area pt-120 pb-120">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div
                  className="it-feature-item text-center"
                  style={{ backgroundImage: `url(${dataImg2})` }}
                >
                  <div className="it-feature-item-content z-index">
                    <div className="it-feature-icon">
                      <span>
                        <i className="flaticon-className"></i>
                      </span>
                    </div>
                    <div className="it-feature-text pt-30">
                      <h4 className="it-feature-title">ACTIVE LEARNING</h4>
                      <p>
                        Lorem ipsum dolor amet, consectetur adipiscing elit, sed
                        eiusmod tempor incididunt ut labore et dolore
                      </p>
                    </div>
                    <div className="it-feature-button">
                    <Link className="it-btn-border">
                    <span>
                          Learn More
                          <FontAwesomeIcon icon={faArrowRight} className="custom-icon" />

                        </span>
                    </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div
                  className="it-feature-item text-center"
                  data-background="assets/img/feature/bg-1-1.jpg"
                >
                  <div className="it-feature-item-content z-index">
                    <div className="it-feature-icon">
                      <span>
                        <i className="flaticon-coach"></i>
                      </span>
                    </div>
                    <div className="it-feature-text pt-30">
                      <h4 className="it-feature-title">EXPERT TEACHERS</h4>
                      <p>
                        Lorem ipsum dolor amet, consectetur adipiscing elit, sed
                        eiusmod tempor incididunt ut labore et dolore
                      </p>
                    </div>
                    <div className="it-feature-button">
                    <Link className="it-btn-border">
                    <span>
                          Learn More
                          <FontAwesomeIcon icon={faArrowRight} className="custom-icon" />

                        </span>
                    </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div
                  className="it-feature-item text-center"
                  data-background="assets/img/feature/bg-1-1.jpg"
                >
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
                    <div className="it-feature-button">
                    <Link className="it-btn-border">
                    <span>
                          Learn More
                          <FontAwesomeIcon icon={faArrowRight} className="custom-icon" />

                        </span>
                    </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="it-about-5-area p-relative pt-60 pb-120">
          <div className="it-about-5-shape-2">
            <img src="assets/img/about/shape-5-2.png" alt="img" />
          </div>
          <div className="it-about-5-shape-3 d-none d-xl-block">
            <img src="assets/img/about/shape-5-3.png" alt="img" />
          </div>
          <div className="it-about-5-shape-4 d-none d-md-block">
            <img src="assets/img/about/shape-5-4.png" alt="img" />
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6">
                <div className="it-about-5-thumb-box p-relative">
                  <div className="it-about-5-thumb z-index">
                    <img src="assets/img/about/about-5.png" alt="img" />
                  </div>
                  <div className="it-about-5-shape-1">
                    <img src="assets/img/about/shape-5-1.png" alt="img" />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="it-about-5-right">
                  <div className="it-about-5-title-box pb-10">
                    <span className="it-section-subtitle-5">
                      <i className="fa-light fa-book"></i>about us
                    </span>
                    <h4 className="it-section-title-5">
                      Learn about our work <br />
                      and cultural <span>activities</span>
                    </h4>
                  </div>
                  <div className="it-about-5-text mb-30">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud..
                    </p>
                  </div>
                  <div className="it-about-5-content">
                    <div className="it-about-5-list mb-20">
                      <ul>
                        <li>
                          <i className="fa-sharp fa-solid fa-circle-check"></i>
                          QUALITY EDUCATIORS
                        </li>
                        <li>
                          <i className="fa-sharp fa-solid fa-circle-check"></i>
                          PLAY TO LEARN
                        </li>
                      </ul>
                    </div>
                    <div className="it-about-5-list mb-40">
                      <ul>
                        <li>
                          <i className="fa-sharp fa-solid fa-circle-check"></i>
                          SAFETY AND SECURITY
                        </li>
                        <li>
                          <i className="fa-sharp fa-solid fa-circle-check"></i>
                          HOMELIKE ENVIROMEND
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="it-feature-button">
                    <Link  className="it-btn-yellow radius">
                    <span>
                        admission open
                        <FontAwesomeIcon icon={faArrowRight} className="custom-icon" />

                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="it-funfact-5-area it-funfact-5-bg p-relative fix yellow-bg pt-100 pb-60"
          style={{ backgroundImage: `url(${dataImg3})` }}
        >
          <div className="it-funfact-5-shape-1 d-none d-xxl-block">
            <img src="assets/img/funfact/shape-5-1.png" alt="img" />
          </div>
          <div className="it-funfact-5-shape-2">
            <img src="assets/img/funfact/shape-5-2.png" alt="img" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-md-6 mb-30">
                <div className="it-funfact-5-item text-center">
                  <div className="it-funfact-5-icon">
                    <span>
                      <i className="flaticon-ux-design"></i>
                    </span>
                  </div>
                  <div className="it-funfact-5-content mt-25">
                    <h4
                      className="it-funfact-5-number purecounter"
                      data-purecounter-duration="1"
                      data-purecounter-end="2500"
                    >
                      0
                    </h4>
                    <span>Total Teacher</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 mb-30">
                <div className="it-funfact-5-item text-center">
                  <div className="it-funfact-5-icon">
                    <span>
                      <i className="flaticon-completed-task"></i>
                    </span>
                  </div>
                  <div className="it-funfact-5-content mt-25">
                    <h4
                      className="it-funfact-5-number purecounter"
                      data-purecounter-duration="1"
                      data-purecounter-end="5000"
                    >
                      0
                    </h4>
                    <span>Total student</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 mb-30">
                <div className="it-funfact-5-item text-center">
                  <div className="it-funfact-5-icon">
                    <span>
                      <i className="flaticon-coding"></i>
                    </span>
                  </div>
                  <div className="it-funfact-5-content mt-25">
                    <h4
                      className="it-funfact-5-number purecounter"
                      data-purecounter-duration="1"
                      data-purecounter-end="408"
                    >
                      0
                    </h4>
                    <span>Total className Room</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 mb-30">
                <div className="it-funfact-5-item text-center">
                  <div className="it-funfact-5-icon">
                    <span>
                      <i className="flaticon-promotion"></i>
                    </span>
                  </div>
                  <div className="it-funfact-5-content mt-25">
                    <h4
                      className="it-funfact-5-number purecounter"
                      data-purecounter-duration="1"
                      data-purecounter-end="7313"
                    >
                      0
                    </h4>
                    <span>Best Awards Won</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="it-className-area p-relative pt-120 pb-90">
          <div className="it-className-shape-1 d-none d-xxl-block">
            <img src="assets/img/className/shape-1-1.png" alt="img" />
          </div>
          <div className="it-className-shape-2 d-none d-xxl-block">
            <img src="assets/img/className/shape-1-2.png" alt="img" />
          </div>
          <div className="it-className-shape-3 d-none d-xxl-block">
            <img src="assets/img/className/shape-1-2.png" alt="img" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="it-className-title-box text-center mb-65">
                  <span className="it-section-subtitle-5">
                    <i className="fa-light fa-book"></i> On Going classNamees{" "}
                    <i className="fa-light fa-book"></i>
                  </span>
                  <h4 className="it-section-title-5">
                    Our Popular classNamees
                  </h4>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 mb-30">
                <div className="it-className-item text-center">
                  <div className="it-className-thumb p-relative">
                    <div className="fix">
                      <img
                        src={ClassImg1}
                        alt="img"
                      />
                    </div>
                    <div className="it-className-rate">
                      <span>$60</span>
                    </div>
                  </div>
                  <div className="it-className-text">
                    <h4 className="it-className-title">
                      <Link>
                      Painting className For Young Children
                      </Link>
                    
                    </h4>
                    <p>
                      Suspendisse ultrice gravida dictum fusce placerat
                      ultricies integer quis auctor elit sed vulputate mi sit.
                    </p>
                  </div>
                  <div className="it-className-meta-box d-flex justify-content-between align-items-center">
                    <div className="it-className-meta text-center">
                      <i className="fa-sharp fa-light fa-file-invoice"></i>
                      <span>02 Lessons</span>
                    </div>
                    <div className="it-className-meta text-center">
                      <i className="fa-regular fa-clock"></i>
                      <span>4h 50m</span>
                    </div>
                    <div className="it-className-meta text-center">
                      <i className="fa-light fa-users"></i>
                      <span>Students</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 mb-30">
                <div className="it-className-item active text-center">
                  <div className="it-className-thumb p-relative">
                    <div className="fix">
                      <img
                        src={ClassImg2}
                        alt="img"
                      />
                    </div>
                    <div className="it-className-rate">
                      <span>$60</span>
                    </div>
                  </div>
                  <div className="it-className-text">
                    <h4 className="it-className-title">
                      <Link>
                      Painting className For Young Children

                      </Link>
                      
                    </h4>
                    <p>
                      Suspendisse ultrice gravida dictum fusce placerat
                      ultricies integer quis auctor elit sed vulputate mi sit.
                    </p>
                  </div>
                  <div className="it-className-meta-box d-flex justify-content-between align-items-center">
                    <div className="it-className-meta text-center">
                      <i className="fa-sharp fa-light fa-file-invoice"></i>
                      <span>02 Lessons</span>
                    </div>
                    <div className="it-className-meta text-center">
                      <i className="fa-regular fa-clock"></i>
                      <span>4h 50m</span>
                    </div>
                    <div className="it-className-meta text-center">
                      <i className="fa-light fa-users"></i>
                      <span>Students</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 mb-30">
                <div className="it-className-item text-center">
                  <div className="it-className-thumb p-relative">
                    <div className="fix">
                      <img
                        src={ClassImg3}
                        alt="img"
                      />
                    </div>
                    <div className="it-className-rate">
                      <span>$60</span>
                    </div>
                  </div>
                  <div className="it-className-text">
                    <h4 className="it-className-title">
                    <Link>
                      Painting className For Young Children

                      </Link>
                    </h4>
                    <p>
                      Suspendisse ultrice gravida dictum fusce placerat
                      ultricies integer quis auctor elit sed vulputate mi sit.
                    </p>
                  </div>
                  <div className="it-className-meta-box d-flex justify-content-between align-items-center">
                    <div className="it-className-meta text-center">
                      <i className="fa-sharp fa-light fa-file-invoice"></i>
                      <span>02 Lessons</span>
                    </div>
                    <div className="it-className-meta text-center">
                      <i className="fa-regular fa-clock"></i>
                      <span>4h 50m</span>
                    </div>
                    <div className="it-className-meta text-center">
                      <i className="fa-light fa-users"></i>
                      <span>Students</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="it-video-2-area it-video-2-bg p-relative pt-120 pb-120"
          style={{ backgroundImage: `url(${dataImg4})` }}>
          <div className="it-video-2-shape-1 d-none d-lg-block">
            <img src="assets/img/video/shape-5-2.png" alt="img" />
          </div>
          <div className="it-video-2-shape-2 d-none d-lg-block">
            <img src="assets/img/video/shape-5-1.png" alt="img" />
          </div>
          <div className="it-video-2-shape-3 d-none d-lg-block">
            <img src="assets/img/video/shape-5-3.png" alt="img" />
          </div>
          <div className="it-video-2-shape-4 d-none d-lg-block">
            <img src="assets/img/video/shape-5-4.png" alt="img" />
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6">
                <div className="it-video-2-left">
                  <div className="it-video-2-title-box mb-10">
                    <span className="it-section-subtitle-5">
                      <i className="fa-light fa-book"></i> On Going classNamees
                    </span>
                    <h4 className="it-section-title-5">new approach to fun</h4>
                  </div>
                  <div className="it-video-2-text mb-30">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do <br />
                      eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. <br />
                      Ut enim ad minim veniam, quis nostrud..
                    </p>
                  </div>
                  <div className="it-video-2-button">
                   <Link className="it-btn-yellow radius">
                   <span>
                        Find Events
                        <FontAwesomeIcon icon={faArrowRight} className="custom-icon" />

                      </span>
                   </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="it-video-2-thumb p-relative">
                  <img src="assets/img/video/thumb-5.jpg" alt="img" />
                  <div className="it-video-2-play">
                    <Link className="popup-video">
                    <i className="fas fa-play"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="it-testimonial-5-area p-relative pt-120 pb-120">
          <div className="it-testimonial-5-shape-1 d-none d-xxl-block">
            <img src="assets/img/testimonial/shape-5-2.png" alt="img" />
          </div>
          <div className="it-testimonial-5-shape-2 d-none d-xl-block">
            <img src="assets/img/testimonial/shape-5-3.png" alt="img" />
          </div>
          <div className="it-testimonial-5-shape-3 d-none d-xl-block">
            <img src="assets/img/testimonial/shape-5-4.png" alt="img" />
          </div>
          <div className="it-testimonial-5-shape-4 d-none d-xxl-block">
            <img src="assets/img/testimonial/shape-5-5.png" alt="img" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="it-testimonial-5-title-box text-center mb-60">
                  <span className="it-section-subtitle-5">
                    <i className="fa-light fa-book"></i> Testimonial{" "}
                    <i className="fa-light fa-book"></i>
                  </span>
                  <h4 className="it-section-title-5">what parents say</h4>
                </div>
              </div>
              <div className="col-xl-12">
                <div className="it-testimonial-5-wrapper p-relative">
                  <div className="swiper-container it-testimonial-5-active">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="it-testimonial-5-item-wrap">
                          <div className="it-testimonial-5-item mb-30">
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
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed eiusmod tempor incididunt
                                  ut labore et dolore magna aliqua. Ut enim ad
                                  minim veniam, quis nostrud exercitation
                                  ullamco laboris ut aliquip Lorem ipsum dolor
                                  sit amet, consectetur adipiscing elit, sed do
                                  eiusmod.
                                </p>
                              </div>
                            </div>
                          </div>
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
                      <div className="swiper-slide">
                        <div className="it-testimonial-5-item-wrap">
                          <div className="it-testimonial-5-item mb-30">
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
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed eiusmod tempor incididunt
                                  ut labore et dolore magna aliqua. Ut enim ad
                                  minim veniam, quis nostrud exercitation
                                  ullamco laboris ut aliquip Lorem ipsum dolor
                                  sit amet, consectetur adipiscing elit, sed do
                                  eiusmod.
                                </p>
                              </div>
                            </div>
                          </div>
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
                      <div className="swiper-slide">
                        <div className="it-testimonial-5-item-wrap">
                          <div className="it-testimonial-5-item mb-30">
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
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed eiusmod tempor incididunt
                                  ut labore et dolore magna aliqua. Ut enim ad
                                  minim veniam, quis nostrud exercitation
                                  ullamco laboris ut aliquip Lorem ipsum dolor
                                  sit amet, consectetur adipiscing elit, sed do
                                  eiusmod.
                                </p>
                              </div>
                            </div>
                          </div>
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
                  </div>
                  <div className="test-slider-dots style-2 text-center pt-50"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="it-team-3-area it-team-3-style-2 p-relative z-index pt-110 pb-90">
          <div className="it-team-3-shape-1 d-none d-xl-block">
            <img src="assets/img/team/shape-5-1.png" alt="img" />
          </div>
          <div className="it-team-3-shape-2 d-none d-xl-block">
            <img src="assets/img/team/shape-5-2.png" alt="img" />
          </div>
          <div className="it-team-3-shape-3 d-none d-xl-block">
            <img src="assets/img/team/shape-5-3.png" alt="img" />
          </div>
          <div
            className="it-team-3-bg overley"
            data-background="assets/img/team/bg-5-1.jpg"
          ></div>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="it-event-title-box text-center pb-70">
                  <span className="it-section-subtitle-5 yellow">
                    <i className="fa-light fa-book"></i>
                    best teacher
                    <i className="fa-light fa-book"></i>
                  </span>
                  <h2 className="it-section-title-3 text-white">
                    meet our expert Instructor
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3 col-lg-6 col-md-6 mb-30">
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
                        <Link> <i className="fa-brands fa-instagram"></i></Link>
                       <Link><i className="fa-brands fa-facebook-f"></i></Link>
                        <Link> <i className="fa-brands fa-pinterest-p"></i></Link>
                        <Link><i className="fa-brands fa-linkedin-in"></i></Link>
                        
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
              <div className="col-xl-3 col-lg-6 col-md-6 mb-30">
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
                      <Link> <i className="fa-brands fa-instagram"></i></Link>
                       <Link><i className="fa-brands fa-facebook-f"></i></Link>
                        <Link> <i className="fa-brands fa-pinterest-p"></i></Link>
                        <Link><i className="fa-brands fa-linkedin-in"></i></Link>
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
              <div className="col-xl-3 col-lg-6 col-md-6 mb-30">
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
                      <Link> <i className="fa-brands fa-instagram"></i></Link>
                       <Link><i className="fa-brands fa-facebook-f"></i></Link>
                        <Link> <i className="fa-brands fa-pinterest-p"></i></Link>
                        <Link><i className="fa-brands fa-linkedin-in"></i></Link>
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
              <div className="col-xl-3 col-lg-6 col-md-6 mb-30">
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
                      <Link> <i className="fa-brands fa-instagram"></i></Link>
                       <Link><i className="fa-brands fa-facebook-f"></i></Link>
                        <Link> <i className="fa-brands fa-pinterest-p"></i></Link>
                        <Link><i className="fa-brands fa-linkedin-in"></i></Link>
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

        <div className="it-faq-area it-faq-style-5 p-relative pb-120">
          <div className="it-faq-shape-1 d-none d-xl-block">
            <img src="assets/img/faq/shape-5-1.png" alt="img" />
          </div>
          <div className="it-faq-shape-2 d-none d-xl-block">
            <img src="assets/img/faq/shape-5-2.png" alt="img" />
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xxl-6 col-xl-6 col-lg-6">
                <div className="it-faq-thumb">
                  <img src="assets/img/faq/faq-1.jpg" alt="img" />
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6">
                <div className="it-faq-wrap">
                  <div className="it-faq-title-box mb-20">
                    <span className="it-section-subtitle-5">
                      <i className="fa-light fa-book"></i> faq
                    </span>
                    <h4 className="it-section-title-5 yellow">
                      Frequently asked some
                      <span>questions?</span>
                    </h4>
                  </div>
                  <div className="it-custom-accordion">
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
                              className="d-none d-md-block"
                              src="assets/img/faq/thumb-1.jpg"
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
                              className="d-none d-md-block"
                              src="assets/img/faq/thumb-1.jpg"
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
                              className="d-none d-md-block"
                              src="assets/img/faq/thumb-1.jpg"
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
                              className="d-none d-md-block"
                              src="assets/img/faq/thumb-1.jpg"
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
          className="it-contact-area it-contact-bg p-relative pt-120 pb-120"
          data-background="assets/img/contact/bg.jpg"
        >
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
          <div className="it-contact-shape-5 d-none d-xxl-block">
            <img src="assets/img/contact/shape-1-5.png" alt="img" />
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-7 col-lg-7">
                <div className="it-contact-left">
                  <div className="it-contact-title-box pb-20">
                    <span className="it-section-subtitle-5">
                      <i className="fa-light fa-book"></i>
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
                    data-date="Sep 30 2024 20:20:22"
                  >
                    <div className="row">
                      <div className="col-xl-3 col-lg-3 col-md-3 col-6">
                        <div className="it-contact-timer text-center">
                          <h6 data-days>00</h6>
                          <i>DAYS</i>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-3 col-6">
                        <div className="it-contact-timer text-center">
                          <h6 data-hours>00</h6>
                          <i>HOURS</i>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-3 col-6">
                        <div className="it-contact-timer text-center">
                          <h6 data-minutes>00</h6>
                          <i>MINUTES</i>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-3 col-md-3 col-6">
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
                  <button type="submit" className="it-btn-yellow radius">
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

        <div className="it-gallery-area p-relative grey-bg-2 pt-120 pb-120">
          <div className="it-gallery-shape-1 d-none d-lg-block">
            <img src="assets/img/gallery/shape-1-1.png" alt="img" />
          </div>
          <div className="it-gallery-shape-2 d-none d-lg-block">
            <img src="assets/img/gallery/shape-1-2.png" alt="img" />
          </div>
          <div className="it-gallery-shape-3 d-none d-lg-block">
            <img src="assets/img/gallery/shape-1-3.png" alt="img" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="it-gallery-title-box text-center pb-70">
                  <span className="it-section-subtitle-5">
                    <i className="fa-light fa-book"></i>
                    portfolio
                    <i className="fa-light fa-book"></i>
                  </span>
                  <h2 className="it-section-title-3">Photo Gallery</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-6">
                <div className="it-gallery-item p-relative">
                  <div className="it-gallery-thumb">
                    <img src="assets/img/gallery/thumb-1-1.jpg" alt="img" />
                  </div>
                  <div className="it-gallery-icon">
                    <Link  className="popup-image">
                    <i className="fa-light fa-plus"></i>
                    </Link>
                   
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6">
                <div className="it-gallery-item p-relative">
                  <div className="it-gallery-thumb">
                    <img src="assets/img/gallery/thumb-1-2.jpg" alt="img" />
                  </div>
                  <div className="it-gallery-icon">
                    <Link   className="popup-image">   <i className="fa-light fa-plus"></i></Link>
                    
                  </div>
                </div>
                <div className="it-gallery-item p-relative">
                  <div className="it-gallery-thumb">
                    <img src="assets/img/gallery/thumb-1-3.jpg" alt="img" />
                  </div>
                  <div className="it-gallery-icon">
                    <Link   className="popup-image">
                    <i className="fa-light fa-plus"></i>
                    </Link>
                    
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6">
                <div className="it-gallery-item p-relative">
                  <div className="it-gallery-thumb">
                    <img src="assets/img/gallery/thumb-1-4.jpg" alt="img" />
                  </div>
                  <div className="it-gallery-icon">
                    <Link className="popup-image">
                    <i className="fa-light fa-plus"></i>
                    </Link>
                    
                      
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="it-blog-area it-blog-style-2 it-blog-style-5 p-relative pt-90 pb-90">
          <div className="it-blog-shape-1 d-none d-md-block">
            <img src="assets/img/blog/shape-1.png" alt="img" />
          </div>
          <div className="container">
            <div className="it-blog-title-wrap mb-80">
              <div className="row align-items-end">
                <div className="col-xl-8 col-lg-8 col-md-8">
                  <div className="it-blog-title-box">
                    <span className="it-section-subtitle-5">
                      <i className="fa-light fa-book"></i>
                      explore Events
                    </span>
                    <h2 className="it-section-title-3">Post Popular Post.</h2>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="it-blog-button text-start text-md-end">
                    <Link className="it-btn-yellow radius">
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
                        <img src="assets/img/blog/blog-1-4.jpg" alt="img" />
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
                    <Link className="it-btn-yellow-sm"><span>
                        read more
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span></Link>
                    
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
                        <img src="assets/img/blog/blog-1-5.jpg" alt="img" />
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
                    <Link className="it-btn-yellow-sm"><span>
                        read more
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span></Link>
                    
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
                        <Link><img src="assets/img/blog/blog-1-6.jpg" alt="img" /></Link>
                      
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
                      <Link>velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat</Link>
                      
                    </h4>
                    <Link className="it-btn-yellow-sm">
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

export default HomPage2;
