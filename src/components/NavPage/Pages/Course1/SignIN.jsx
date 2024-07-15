import React from 'react'
import BannerSection from '../../../BannerSection';
import BreadImg from "../../../../../src/assets/img/breadcrumb/breadcrumb.jpg";
import Subscribe from '../../../Body/Subscribe';
import { Link } from 'react-router-dom';



const SignIN = () => {
  return (
    <>
    <BannerSection img={BreadImg} title="Sign In" name="Sign In" />
    <div className="it-signup-area pt-120 pb-120">
        <div className="container">
          <div className="it-signup-bg p-relative">
            <div className="it-signup-thumb d-none d-lg-block">
              <img src="assets/img/contact/signup.jpg" alt="" />
            </div>
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <form action="#">
                  <div className="it-signup-wrap">
                    <h4 className="it-signup-title">sign In</h4>
                    <div className="it-signup-input-wrap">
                      <div className="it-signup-input mb-20">
                        <input type="email" placeholder="Email *" />
                      </div>
                      <div className="it-signup-input mb-20">
                        <input type="password" placeholder="Password *" />
                      </div>
                    </div>
                    <div className="it-signup-forget d-flex justify-content-between flex-wrap">
                        <Link className="mb-20">
                        Forgot Password?
                        </Link>
                    
                      <div className="it-signup-agree mb-20">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label"
                            for="flexCheckDefault"
                          >
                            Remember me
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="it-signup-btn mb-40">
                      <button className="it-btn large">sign In</button>
                    </div>
                    <div className="it-signup-text">
                      <span>
                        Don't have an account? <Link>Sign In</Link>
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Subscribe/>
    </>
  )
}

export default SignIN