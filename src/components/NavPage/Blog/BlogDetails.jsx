import React from "react";
import BannerSection from "../../BannerSection";
import BreadImg from "../../../../src/assets/img/breadcrumb/breadcrumb.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Subscribe from "../../Body/Subscribe";

const BlogDetails = () => {
  return (
    <>
      <BannerSection img={BreadImg} title="Blog Details" name="Blog Details" />
      <div className="postbox__area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div className="postbox__details-wrapper">
                <article>
                  <div className="postbox__thumb mb-30 w-img">
                    <img
                      src="assets/img/blog/blog-details-1.jpg"
                      alt="blog-details"
                    />
                  </div>
                  <div className="postbox__details-title-box pb-40">
                    <div className="postbox__meta">
                      <span>
                        <i className="fa-solid fa-calendar-days"></i>14 June
                        2023
                      </span>
                      <span>
                        <i className="fa-regular fa-comments"></i>Comment (06)
                      </span>
                    </div>
                    <h4 className="postbox__title mb-20">
                      Pellentesque dignissim enim sit amet venenatis cursus eget
                      nunc.
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat
                      aute irure dolor in reprehenderit.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat
                      aute irure dolor in reprehenderit.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat
                      aute irure dolor in reprehenderit.
                    </p>
                  </div>
                  <div className="postbox__content pb-20">
                    <div className="postbox__content-img mb-40 d-flex justify-content-between">
                      <img
                        className="mr-30"
                        src="assets/img/blog/blog-details-2.jpg"
                        alt="blog-details"
                      />
                      <img
                        src="assets/img/blog/blog-details-3.jpg"
                        alt="blog-details"
                      />
                    </div>
                    <div className="postbox__text">
                      <h4 className="postbox__details-title">
                        Latest Articles Updated Daily
                      </h4>
                      <p>
                        With worldwide annual spend on digital advertising
                        surpassing $325 billion, it’s no surprise that different
                        approaches to online marketing are becoming available.
                        One of these new approaches is performance marketing or
                        digital performance marketing. Keep reading to learn all
                        about performance marketing
                      </p>
                    </div>
                  </div>
                  <div className="postbox__item text-center">
                    <i className="fas fa-quote-right"></i>
                    <p>
                      Diam luctus nostra dapibus varius et semper semper rutrum
                      ad risus felis eros. Cursus libero viverra tempus netus
                      diam vestibulum
                    </p>
                    <span>David Backhum</span>
                  </div>
                  <div className="postbox__details-share-wrapper">
                    <div className="row align-items-center">
                      <div className="col-xl-7 col-lg-7 col-md-7">
                        <div className="postbox__details-tag">
                          <span>Posted in:</span>
                          <Link>Development</Link>
                          <Link>Digital</Link>
                          <Link>Tech</Link>
                        </div>
                      </div>
                      <div className="col-xl-5 col-lg-5 col-md-5">
                        <div className="postbox__details-share text-lg-end">
                          <span>Share:</span>
                          <Link>
                            <i className="fab fa-facebook-f"></i>
                          </Link>
                          <Link>
                            <i className="fa-brands fa-instagram"></i>
                          </Link>
                          <Link>
                            <i className="fab fa-twitter"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="postbox__comment">
                    <h3 className="postbox__comment-title">01 Comments</h3>
                    <ul>
                      <li>
                        <div className="postbox__comment-box d-flex align-items-center">
                          <div className="postbox__comment-info ">
                            <div className="postbox__comment-avater mr-20">
                              <img
                                src="assets/img/avatar/avata-3.png"
                                alt="blog-details"
                              />
                            </div>
                          </div>
                          <div className="postbox__comment-text">
                            <div className="postbox__comment-reply d-flex align-items-center justify-content-between">
                              <span className="post-meta">
                                September 6, 2022 at 1:28 pm{" "}
                              </span>
                              <Link>Reply</Link>
                            </div>
                            <div className="postbox__comment-name">
                              <h5>Jonathon Lopez</h5>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipi
                              vestibulum lectus egestas cubilia nam sagittis,
                              nulla posuere habitant
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="postbox__content-wrap">
                    <div className="it-contact__wrap">
                      <div className="it-contact__text pb-30">
                        <h5 className="it-contact__title">
                          Let’s Get in Touch
                        </h5>
                        <p>
                          Your email address will not be published. Required
                          fields are marked *
                        </p>
                      </div>
                      <div className="it-contact__form-box">
                        <form action="#">
                          <div className="row">
                            <div className="col-xl-6 col-lg-6 col-12 mb-20">
                              <div className="it-contact__input-box">
                                <input type="text" placeholder="Your Name*" />
                              </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-12 mb-20">
                              <div className="it-contact__input-box">
                                <input
                                  type="email"
                                  placeholder="Email Address*"
                                />
                              </div>
                            </div>
                            <div className="col-12 mb-20">
                              <div className="it-contact__input-box">
                                <input type="email" placeholder="Website*" />
                              </div>
                            </div>
                            <div className="col-12 mb-20">
                              <div className="it-contact__textarea-box">
                                <textarea placeholder="Write Your Message*"></textarea>
                              </div>
                            </div>
                          </div>
                        </form>
                        <button type="submit" className="it-btn">
                          <span>
                            Send Message
                            <FontAwesomeIcon icon={faArrowRight} />
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4">
              <div className="it-sv-details-sidebar">
                <div className="it-sv-details-sidebar-search mb-55">
                  <input type="text" placeholder="search" />
                  <button type="submit">
                    <i className="fal fa-search"></i>
                  </button>
                </div>
                <div className="it-sv-details-sidebar-widget mb-55">
                  <h4 className="it-sv-details-sidebar-title mb-30">
                    service category
                  </h4>
                  <div className="it-sv-details-sidebar-category mb-10">
                    graphic design
                    <span>
                      <i className="fa-light fa-angle-right"></i>
                    </span>
                  </div>
                  <div className="it-sv-details-sidebar-category active mb-10">
                    web design
                    <span>
                      <i className="fa-light fa-angle-right"></i>
                    </span>
                  </div>
                  <div className="it-sv-details-sidebar-category mb-10">
                    it and software
                    <span>
                      <i className="fa-light fa-angle-right"></i>
                    </span>
                  </div>
                  <div className="it-sv-details-sidebar-category mb-10">
                    seles marketing
                    <span>
                      <i className="fa-light fa-angle-right"></i>
                    </span>
                  </div>
                  <div className="it-sv-details-sidebar-category mb-10">
                    art & humanities
                    <span>
                      <i className="fa-light fa-angle-right"></i>
                    </span>
                  </div>
                  <div className="it-sv-details-sidebar-category mb-10">
                    mobile application
                    <span>
                      <i className="fa-light fa-angle-right"></i>
                    </span>
                  </div>
                </div>
                <div className="sidebar__widget mb-55">
                  <div className="sidebar__widge-title-box">
                    <h3 className="sidebar__widget-title pb-10">Recent Post</h3>
                  </div>
                  <div className="sidebar__widget-content">
                    <div className="sidebar__post">
                      <div className="rc__post mb-30 d-flex align-items-start">
                        <div className="rc__post-thumb mr-20">
                          <Link>
                            <img
                              src="assets/img/blog/blog-sidebar-sm-1.jpg"
                              alt="blog-details"
                            />
                          </Link>
                        </div>
                        <div className="rc__post-content">
                          <div className="rc__meta">
                            <span>
                              <i className="fa-solid fa-calendar-days"></i>14
                              June 2023
                            </span>
                          </div>
                          <h3 className="rc__post-title">
                            <Link>
                              Interdum velit laoreet id donec ultrices tincidunt
                              arcu.
                            </Link>
                          </h3>
                        </div>
                      </div>
                      <div className="rc__post mb-30 d-flex align-items-start">
                        <div className="rc__post-thumb mr-20">
                          <Link>
                            <img
                              src="assets/img/blog/blog-sidebar-sm-2.jpg"
                              alt="blog-details"
                            />
                          </Link>
                        </div>
                        <div className="rc__post-content">
                          <div className="rc__meta">
                            <span>
                              <i className="fa-solid fa-calendar-days"></i>14
                              June 2023
                            </span>
                          </div>
                          <h3 className="rc__post-title">
                            <Link>
                              Interdum velit laoreet id donec ultrices tincidunt
                              arcu.
                            </Link>
                          </h3>
                        </div>
                      </div>
                      <div className="rc__post mb-30 d-flex align-items-start">
                        <div className="rc__post-thumb mr-20">
                          <Link>
                            <img
                              src="assets/img/blog/blog-sidebar-sm-3.jpg"
                              alt="blog-details"
                            />
                          </Link>
                        </div>
                        <div className="rc__post-content">
                          <div className="rc__meta">
                            <span>
                              <i className="fa-solid fa-calendar-days"></i>14
                              June 2023
                            </span>
                          </div>
                          <h3 className="rc__post-title">
                            <Link>
                              Interdum velit laoreet id donec ultrices tincidunt
                              arcu.
                            </Link>
                          </h3>
                        </div>
                      </div>
                      <div className="rc__post mb-30 d-flex align-items-start">
                        <div className="rc__post-thumb mr-20">
                          <Link>
                            <img
                              src="assets/img/blog/blog-sidebar-sm-4.jpg"
                              alt="blog-details"
                            />
                          </Link>
                        </div>
                        <div className="rc__post-content">
                          <div className="rc__meta">
                            <span>
                              <i className="fa-solid fa-calendar-days"></i>14
                              June 2023
                            </span>
                          </div>
                          <h3 className="rc__post-title">
                            <Link>
                              Interdum velit laoreet id donec ultrices tincidunt
                              arcu.
                            </Link>
                          </h3>
                        </div>
                      </div>
                      <div className="rc__post mb-30 d-flex align-items-start">
                        <div className="rc__post-thumb mr-20">
                          <Link>
                            <img
                              src="assets/img/blog/blog-sidebar-sm-5.jpg"
                              alt="blog-details"
                            />
                          </Link>
                        </div>
                        <div className="rc__post-content">
                          <div className="rc__meta">
                            <span>
                              <i className="fa-solid fa-calendar-days"></i>14
                              June 2023
                            </span>
                          </div>
                          <h3 className="rc__post-title">
                            <Link>
                              Interdum velit laoreet id donec ultrices tincidunt
                              arcu.
                            </Link>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="it-sv-details-sidebar-widget">
                  <h4 className="it-sv-details-sidebar-title mb-30">
                    popular tag:
                  </h4>
                  <div className="sidebar__widget-content">
                    <div className="tagcloud">
                      <Link>Balance</Link>
                      <Link>Coaching</Link>
                      <Link>Motivation</Link>
                      <Link>Courses</Link>
                      <Link>Life Guard</Link>
                      <Link>Strategy</Link>
                      <Link>Education</Link>
                      <Link>Coach</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Subscribe />
    </>
  );
};

export default BlogDetails;
