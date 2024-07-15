import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


const CourseCard = (props) => {
  return (
    <>
      
        <div className="col-xl-3 col-lg-3 col-md-6 mb-30">
          <div className="it-category-item text-center">
            <div className="it-category-icon">
              <span>
                <i className="flaticon-web-design"></i>
              </span>
            </div>
            <div className="it-category-text">
              <h4 className="it-category-title">{props.name}</h4>
              <Link to="/coursedetails" >
                25 Courses
                <span>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="custom-icon"
                  />
                </span>
              </Link>
            </div>
          </div>
        </div>
      
    
    </>
  )
}

export default CourseCard