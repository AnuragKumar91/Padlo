import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const TopNav = () => {
  return (
    <>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-8 col-lg-8 col-md-5 col-sm-4">
            <div className="it-header-2-top-left">
              <ul className="text-center text-sm-start">
                <li className="d-none d-lg-inline-block">
                  <Link>
                    <span>
                      <FontAwesomeIcon icon={faPhone} />
                    </span>
                    (568) 367-987-237
                  </Link>
                </li>
                <li>
                  <Link>
                    <span>
                      <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                    <span
                      className="__cf_email__"
                      data-cfemail="13747c657a7f7f72747653747e727a7f3d707c7e"
                    >
                      [email&#160;protected]
                    </span>
                  </Link>
                </li>
                <li className="d-none d-xl-inline-block">
                  <Link>
                    <span>
                      <FontAwesomeIcon icon={faLocationDot} />
                    </span>
                    Hudson, Wisconsin(WI), 54016
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-7 col-sm-8 d-none d-sm-block">
            <div className="it-header-2-top-right text-end">
              <ul>
                <li>
                  <div
                    id="it-header-2-lang"
                    className="it-header-2-lang d-none d-sm-block"
                  >
                    <ul>
                      <li>
                        <Link>
                          English
                          <span>
                            <FontAwesomeIcon icon={faChevronDown} />
                          </span>
                        </Link>
                        <ul className="it-header-2-lang-submenu">
                          <li>
                            <Link>Arabic</Link>
                          </li>
                          <li>
                            <Link>Japanese</Link>
                          </li>
                          <li>
                            <Link>Spanich</Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="it-header-2-top-social">
                    <Link>
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link>
                      <i className="fab fa-twitter"></i>
                    </Link>
                    <Link>
                      <i className="fab fa-skype"></i>
                    </Link>
                    <Link>
                      <i className="fab fa-linkedin"></i>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNav;
