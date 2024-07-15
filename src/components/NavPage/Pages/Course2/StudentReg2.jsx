import React from 'react'
import BannerSection from '../../../BannerSection';
import BreadImg from "../../../../../src/assets/img/breadcrumb/breadcrumb.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Subscribe from '../../../Body/Subscribe';


const StudentReg2 = () => {
  return (
    <>
    <BannerSection img={BreadImg} title="Student Registration 02" name="Student Registration 2"/>
    <div className="it-student-area pt-120 pb-120">
    <div className="container">
    <div className="row">
    <div className="col-xl-12">
    <div className="it-student-bg">
    <h4 className="it-student-title">Student Registration</h4>
    <div className="it-student-content mb-70">
    <h4 className="it-student-subtitle">Fields with are required</h4>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</p>
    </div>
    <div className="it-student-regiform">
    <h4 className="it-student-regiform-title">Credentials</h4>
    <form action="#">
    <div className="it-student-regiform-wrap">
    <div className="it-student-regiform-item">
    <label>First Name *</label>
    <input type="text"/>
    </div>
    <div className="it-student-regiform-item">
    <label>Last Name *</label>
    <input type="text"/>
    </div>
    <div className="it-student-regiform-item">
    <label>User Name *</label>
    <input type="text"/>
    </div>
    <div className="it-student-regiform-item">
    <label>Course category *</label>
    <div className="postbox__select">
    <select>
    <option>Select an option</option>
    <option>01 Year</option>
    <option>02 Year</option>
    <option>03 Year</option>
    <option>04 Year</option>
    <option>05 Year</option>
    </select>
    </div>
    </div>
    <div className="it-student-regiform-item">
    <label>Subject *</label>
    <div className="postbox__select">
    <select>
    <option>Select an option</option>
    <option>01 Year</option>
    <option>02 Year</option>
    <option>03 Year</option>
    <option>04 Year</option>
    <option>05 Year</option>
    </select>
    </div>
    </div>
    <div className="it-student-regiform-item">
    <label>Department *</label>
    <div className="postbox__select">
    <select>
    <option>Select an option</option>
    <option>01 Year</option>
    <option>02 Year</option>
    <option>03 Year</option>
    <option>04 Year</option>
    <option>05 Year</option>
    </select>
    </div>
    </div>
    <div className="it-student-regiform-item">
    <label>Email *</label>
    <input type="email"/>
    </div>
    <div className="it-student-regiform-item">
    <label>Password *</label>
    <input type="text"/>
    </div>
    <div className="it-student-regiform-item">
    <label>Password Confirmation *</label>
    <input type="text"/>
    </div>
    <div className="it-student-regiform-btn">
    <button className="it-btn w-100">
    <span>
    Create account
    <FontAwesomeIcon icon={faArrowRight} />
    </span>
    </button>
    </div>
    </div>
    </form>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    <Subscribe/>
    
    </>
  )
}

export default StudentReg2