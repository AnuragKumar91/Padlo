import React from "react";
import { Link } from "react-router-dom";
import FooterImg1 from "../../assets/img/footer/thumb-1-1.png";
import FooterImg2 from "../../assets/img/footer/thumb-1-2.png";
import FooterImg3 from "../../assets/img/footer/thumb-1-3.png";
import FooterImg4 from "../../assets/img/footer/thumb-1-4.png";
import FooterImg5 from "../../assets/img/footer/thumb-1-5.png";
import FooterImg6 from "../../assets/img/footer/thumb-1-6.png";
import FooterBg from "../../assets/img/footer/bg-1-1.jpg";
import Logo from "../../assets/img/logo/logo-white.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return (
    <>
      <footer>
        <div
          className="it-footer-area it-footer-bg black-bg pt-120 pb-70"
          style={{ backgroundImage: `url(${FooterBg})` }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-50">
                <div className="it-footer-widget footer-col-1">
                  <div className="it-footer-logo pb-25">
                    <Link >
                      <img src={Logo} alt="Logo" />
                    </Link>
                  </div>
                  <div className="it-footer-text pb-5">
                    <p>
                      Interdum velit laoreet id donec ultrices <br />
                      tincidunt arcu. Tincidunt tortor aliquam nulla facilisi
                      cras fermentum odio eu.
                    </p>
                  </div>
                  <div className="it-footer-social">
                    <Link>
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                    <Link onClick={scrollToTop}>
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                    <Link onClick={scrollToTop}>
                      <i className="fa-brands fa-pinterest-p"></i>
                    </Link>
                    <Link onClick={scrollToTop}>
                      <i className="fa-brands fa-twitter"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-50">
                <div className="it-footer-widget footer-col-2">
                  <h4 className="it-footer-title">our services:</h4>
                  <div className="it-footer-list">
                    <ul>
                      <li>
                        <Link onClick={scrollToTop}>
                          <i className="fa-regular fa-angle-right"></i>Web
                          development
                        </Link>
                      </li>
                      <li>
                        <Link onClick={scrollToTop}>
                          <i className="fa-regular fa-angle-right"></i>UI/UX
                          Design
                        </Link>
                      </li>
                      <li>
                        <Link onClick={scrollToTop}>
                          <i className="fa-regular fa-angle-right"></i>
                          Management
                        </Link>
                      </li>
                      <li>
                        <Link onClick={scrollToTop}>
                          <i className="fa-regular fa-angle-right"></i>Digital
                          Marketing
                        </Link>
                      </li>
                      <li>
                        <Link onClick={scrollToTop}>
                          <i className="fa-regular fa-angle-right"></i>Blog News
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 mb-50">
                <div className="it-footer-widget footer-col-3">
                  <h4 className="it-footer-title">quick links:</h4>
                  <div className="it-footer-list">
                    <ul>
                      <li>
                        <Link onClick={scrollToTop}>
                          <i className="fa-regular fa-angle-right"></i>Templates
                        </Link>
                      </li>
                      <li>
                        <Link onClick={scrollToTop}>
                          <i className="fa-regular fa-angle-right"></i>Blogs and
                          Article
                        </Link>
                      </li>
                      <li>
                        <Link onClick={scrollToTop}>
                          <i className="fa-regular fa-angle-right"></i>
                          Intergrations
                        </Link>
                      </li>
                      <li>
                        <Link onClick={scrollToTop}>
                          <i className="fa-regular fa-angle-right"></i>Webinars
                        </Link>
                      </li>
                      <li>
                        <Link onClick={scrollToTop}>
                          <i className="fa-regular fa-angle-right"></i>Privacy &
                          Policy
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-50">
                <div className="it-footer-widget footer-col-4">
                  <h4 className="it-footer-title">Gallery</h4>
                  <div className="it-footer-gallery-box">
                    <div className="row gx-5">
                      <div className="col-md-4 col-4">
                        <div className="it-footer-thumb mb-10">
                          <img src={FooterImg1} alt="FooterImg1" />
                        </div>
                      </div>
                      <div className="col-md-4 col-4">
                        <div className="it-footer-thumb mb-10">
                          <img src={FooterImg2} alt="FooterImg2" />
                        </div>
                      </div>
                      <div className="col-md-4 col-4 mb-10">
                        <div className="it-footer-thumb">
                          <img src={FooterImg3} alt="FooterImg3" />
                        </div>
                      </div>
                      <div className="col-md-4 col-4">
                        <div className="it-footer-thumb">
                          <img src={FooterImg4} alt="FooterImg4" />
                        </div>
                      </div>
                      <div className="col-md-4 col-4">
                        <div className="it-footer-thumb">
                          <img src={FooterImg5} alt="FooterImg5" />
                        </div>
                      </div>
                      <div className="col-md-4 col-4">
                        <div className="it-footer-thumb">
                          <img src={FooterImg6} alt="FooterImg6" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="it-copyright-area it-copyright-height">
          <div className="container">
            <div className="row">
              <div
                className="col-12 wow itfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".3s"
              >
                <div className="it-copyright-text text-center">
                  <p>
                    Copyright © 2023 <Link to="/" onClick={scrollToTop}>Educate</Link> || All Rights Reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
