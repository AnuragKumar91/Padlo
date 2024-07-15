import React from "react";
import { Link } from "react-router-dom";
import logoBlack from "../../../assets/img/logo/logo-black.png";
import homepage1img from "../../../assets/img/menu/home-1.jpg";
import homepage2img from "../../../assets/img/menu/home-2.jpg";
import homepage4img from "../../../assets/img/menu/home-4.jpg";
import homepage3img from "../../../assets/img/menu/home-3.jpg";
import homepage5img from "../../../assets/img/menu/home-5.jpg";
import Button from "../../Button";

const Nav = (props) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return (
    <>
      <div id="header-sticky" className="it-header-2-area">
        <div className="container container-1380">
          <div className="it-header-2-plr">
            <div className="it-header-wrap p-relative">
              <div className="row align-items-center">
                <div className="col-xl-2 col-6">
                  <div className="it-header-2-logo">
                    <Link to="/" onClick={scrollToTop}>
                      <img src={logoBlack} alt="logoBlack" />
                    </Link>
                  </div>
                </div>
                <div className="col-xl-7 d-none d-xl-block">
                  <div className="it-header-2-main-menu">
                    <nav className="it-menu-content">
                      <ul>
                        <li className="has-dropdown p-static">
                          <Link>Home</Link>
                          <div className="it-submenu submenu has-home-img">
                            <div className="row gx-6 row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-5">
                              <div className="col home-img">
                                <div className="home-img-thumb mb-15">
                                  <img src={homepage1img} alt="homepage1img" />
                                  <div className="home-img-btn">
                                    <Link className="it-btn-white-sm"  to="/home1">
                                      Multi Page
                                    </Link>
                                    <Link className="it-btn-white-sm">
                                      One Page
                                    </Link>
                                  </div>
                                </div>
                                <div className="home-img-content text-center">
                                  <h4 className="home-img-title">
                                    <Link to="/home1">Home 01</Link>
                                  </h4>
                                </div>
                              </div>
                              <div className="col home-img">
                                <div className="home-img-thumb mb-15">
                                  <img src={homepage2img} alt="homepage2img" />
                                  <div className="home-img-btn">
                                    <Link className="it-btn-white-sm" to="/home5">
                                      Multi Page
                                    </Link>
                                    <Link className="it-btn-white-sm">
                                      One Page
                                    </Link>
                                  </div>
                                </div>
                                <div className="home-img-content text-center">
                                  <h4 className="home-img-title">
                                    <Link to="/home5">Home 02</Link>
                                  </h4>
                                </div>
                              </div>
                              <div className="col home-img">
                                <div className="home-img-thumb mb-15">
                                  <img src={homepage3img} alt="homepage3img" />
                                  <div className="home-img-btn">
                                    <Link className="it-btn-white-sm" to="/home4">
                                      Multi Page
                                    </Link>
                                    <Link className="it-btn-white-sm">
                                      One Page
                                    </Link>
                                  </div>
                                </div>
                                <div className="home-img-content text-center">
                                  <h4 className="home-img-title">
                                    <Link to="/home4">Home 03</Link>
                                  </h4>
                                </div>
                              </div>
                              <div className="col home-img">
                                <div className="home-img-thumb mb-15">
                                  <img src={homepage4img} alt="homepage4img" />
                                  <div className="home-img-btn">
                                    <Link className="it-btn-white-sm"  to="/home3">
                                      Multi Page
                                    </Link>
                                    <Link className="it-btn-white-sm">
                                      One Page
                                    </Link>
                                  </div>
                                </div>
                                <div className="home-img-content text-center">
                                  <h4 className="home-img-title">
                                    <Link  to="/home3">Home 04</Link>
                                  </h4>
                                </div>
                              </div>
                              <div className="col home-img">
                                <div className="home-img-thumb mb-15">
                                  <img src={homepage5img} alt="homepage5img" />
                                  <div className="home-img-btn">
                                    <Link className="it-btn-white-sm"  to="/home2">
                                      Multi Page
                                    </Link>
                                    <Link className="it-btn-white-sm">
                                      One Page
                                    </Link>
                                  </div>
                                </div>
                                <div className="home-img-content text-center">
                                  <h4 className="home-img-title">
                                    <Link to="/home2">Home 05</Link>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <Link to="/about">About us </Link>
                        </li>
                        <li className="has-dropdown">
                          <Link>Services </Link>
                          <ul className="it-submenu submenu">
                            <li>
                              <Link to="/service1">Service 01</Link>
                            </li>
                            <li>
                              <Link to="/service2">Service 02</Link>
                            </li>
                            <li>
                              <Link to="/service3">Service 03</Link>
                            </li>
                            <li>
                              <Link to="/servicedetails">Service Details</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="has-dropdown">
                          <Link>Pages</Link>
                          <ul className="it-submenu submenu has-megamenu">
                            <li>
                              <Link to="/course1">Course 01</Link>
                            </li>
                            <li>
                              <Link to="/course2">Course 02</Link>
                            </li>
                            <li>
                              <Link to="/coursedetails">Course Details</Link>
                            </li>
                            <li>
                              <Link to="/teacher">Teacher</Link>
                            </li>
                            <li>
                              <Link to="/teacherdetails">Teacher deatils</Link>
                            </li>
                            <li>
                              <Link to="/price">price</Link>
                            </li>
                            <li>
                              <Link to="/event">Event</Link>
                            </li>
                            <li>
                              <Link to="/eventdetails">Event Details</Link>
                            </li>
                            <li>
                              <Link to="/cart">Cart</Link>
                            </li>
                            <li>
                              <Link to="/checkout">Checkout</Link>
                            </li>
                            <li>
                              <Link to="/testimonial">Testimonial</Link>
                            </li>
                            <li>
                              <Link to="/instructorRegistration">
                                Instructor Registration
                              </Link>
                            </li>
                            <li>
                              <Link to="/studentRegistration01">
                                {" "}
                                Student Registration 01
                              </Link>
                            </li>
                            <li>
                              <Link to="/StudentRegistration02">
                                {" "}
                                Student Registration 02
                              </Link>
                            </li>
                            <li>
                              <Link to="/faq">Faq</Link>
                            </li>
                            <li>
                              <Link to="/SignIn">Sign In</Link>
                            </li>
                            <li>
                              <Link to="/SignUp">Sign Up</Link>
                            </li>
                            <li>
                              <Link to="/error">Error</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="has-dropdown">
                          <Link>Blog</Link>
                          <ul className="it-submenu submenu">
                            <li>
                              <Link to="/blog1">Blog 01</Link>
                            </li>
                            <li>
                              <Link to="/blog2">Blog 02</Link>
                            </li>
                            <li>
                              <Link to="/blogsidebar">Blog SideBar</Link>
                            </li>
                            <li>
                              <Link to="/blogdetails">Blog Details</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="/contact">Contact</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-xl-3 col-6">
                  <div className="it-header-2-right d-flex align-items-center justify-content-end">
                    <div className="it-header-2-icon">
                      <Link to="/cart">
                        <i className="fa-regular fa-cart-shopping"></i>
                      </Link>
                    </div>
                   <Button name="contact us" />
                    <div className="it-header-2-bar d-xl-none">
                      <button className="it-menu-bar">
                        <i className="fa-solid fa-bars"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
