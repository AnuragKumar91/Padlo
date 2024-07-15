import React from "react";
import { Link } from "react-router-dom";
import Shpae2 from "../../../src/assets/img/contact/shape-2-1.png";
import BreadImg from "../../../src/assets/img/breadcrumb/breadcrumb.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Subscribe from "../Body/Subscribe";
import BannerSection from "../BannerSection";

const ContactPage = () => {
  return (
    <>
      
      <main style={{ gap: "10px" }}>
        <BannerSection img={BreadImg}
                        title="Contact us"
                        name="Contact" />

        <div className="it-contact__area pt-120 pb-120">
          <div className="container">
            <div className="it-contact__wrap fix z-index-3 p-relative">
              <div className="it-contact__shape-1 d-none d-xl-block">
                <img src={Shpae2} alt="Shpae2" />
              </div>
              <div className="row align-items-end">
                <div className="col-xl-7">
                  <div className="it-contact__right-box">
                    <div className="it-contact__section-box pb-20">
                      <h4 className="it-contact__title pb-15">Get in Touch</h4>
                      <p>
                        Suspendisse ultrice gravida dictum fusce placerat <br />
                        ultricies integer{" "}
                      </p>
                    </div>
                    <div className="it-contact__content mb-55">
                      <ul>
                        <li>
                          <div className="it-contact__list d-flex align-items-start">
                            <div className="it-contact__icon">
                              <span>
                                <i className="fa-solid fa-location-dot"></i>
                              </span>
                            </div>
                            <div className="it-contact__text">
                              <span>Our Address</span>
                              <Link>
                                1564 Goosetown Drive <br />
                                Matthews, NC 28105
                              </Link>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="it-contact__list d-flex align-items-start">
                            <div className="it-contact__icon">
                              <span>
                                <i className="fa-solid fa-clock"></i>
                              </span>
                            </div>
                            <div className="it-contact__text">
                              <span>Hours of Operation</span>
                              <Link>Mon - Fri: 9.00am to 5.00pm</Link>
                              <span>[2nd sat Holiday]</span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="it-contact__list d-flex align-items-start">
                            <div className="it-contact__icon">
                              <span>
                                <i className="fa-solid fa-phone phone"></i>
                              </span>
                            </div>
                            <div className="it-contact__text">
                              <span>contact</span>
                              <Link>+99- 35895-4565</Link>
                              <Link>
                                <span
                                  className="__cf_email__"
                                  data-cfemail="8ffcfaffffe0fdfbf6e0facfe6e1e9e0a1ece0e2"
                                >
                                  [email&#160;protected]
                                </span>
                              </Link>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="it-contact__bottom-box d-flex align-items-center justify-content-between">
                      <div className="it-contact__scrool smooth">
                        <Link>
                          <i className="fa-solid fa-arrow-down"></i>Customer
                          Care
                        </Link>
                      </div>
                      <div className="it-footer-social">
                        <Link>
                          {" "}
                          <i className="fa-brands fa-facebook-f"></i>
                        </Link>
                        <Link>
                          <i className="fa-brands fa-instagram"></i>
                        </Link>
                        <Link>
                          {" "}
                          <i className="fa-brands fa-pinterest-p"></i>
                        </Link>
                        <Link>
                          {" "}
                          <i className="fa-brands fa-twitter"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5">
                  <div className="it-contact__form-box">
                    <form action="#">
                      <div className="row">
                        <div className="col-12 mb-25">
                          <div className="it-contact-input-box">
                            <label>Name*</label>
                            <input type="text" placeholder="Name" />
                          </div>
                        </div>
                        <div className="col-12 mb-25">
                          <div className="it-contact-input-box">
                            <label>Email Address*</label>
                            <input type="email" placeholder="Email" />
                          </div>
                        </div>
                        <div className="col-12 mb-25">
                          <div className="it-contact-input-box">
                            <label>Phone*</label>
                            <input type="text" placeholder="Phone" />
                          </div>
                        </div>
                        <div className="col-12 mb-25">
                          <div className="it-contact-input-box">
                            <label>Subject*</label>
                            <input type="text" placeholder="Subject" />
                          </div>
                        </div>
                        <div className="col-12 mb-25">
                          <div className="it-contact-textarea-box">
                            <label>Message</label>
                            <textarea placeholder="Message"></textarea>
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
            </div>
          </div>
        </div>

      <Subscribe/>
      </main>
    </>
  );
};

export default ContactPage;
