import React from "react";
import NewsletterImg1 from "../../assets/img/newsletter/shape-1-1.png";
import NewsletterImg2 from "../../assets/img/newsletter/shape-1-2.png";
import NewsletterImg3 from "../../assets/img/newsletter/shape-1-3.png";
import NewsletterImg4 from "../../assets/img/newsletter/shape-1-4.png";

const Subscribe = () => {
  return (
    <>
      <div className="it-newsletter-area it-newsletter-height fix p-relative theme-bg">
        <div className="it-newsletter-shape-1 d-none d-lg-block">
          <img src={NewsletterImg1} alt="NewsletterImg1" />
        </div>
        <div className="it-newsletter-shape-2 d-none d-lg-block">
          <img src={NewsletterImg2} alt="NewsletterImg2" />
        </div>
        <div className="it-newsletter-shape-3 d-none d-xl-block">
          <img src={NewsletterImg3} alt="NewsletterImg3" />
        </div>
        <div className="it-newsletter-shape-4 d-none d-xl-block">
          <img src={NewsletterImg4} alt="NewsletterImg4" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="it-newsletter-left">
                <h4 className="it-section-title text-white pb-20">
                  Join Our Newsletter
                </h4>
                <span>
                  Subscribe our newsletter to get our latest update & news.
                </span>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="it-newsletter-right p-relative text-end">
                <input type="text" placeholder="Enter your email:" />
                <button className="it-btn black-bg" type="submit">
                  <span>subscribe now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
