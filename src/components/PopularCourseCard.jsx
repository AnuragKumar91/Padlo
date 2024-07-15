import React from "react";
import AvatarImg from "../assets/img/course/avata-1.png"
import { Link } from "react-router-dom";


const PopularCourseCard = (props) => {
  return (
    <>
    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
        <div className="it-course-item">
          <div className="it-course-thumb mb-20 p-relative">
            <Link>
              <img src={props.img} alt="CourseImg1" />
            </Link>
            <div className="it-course-thumb-text">
              <span>Development</span>
            </div>
          </div>
          <div className="it-course-content">
            <div className="it-course-rating mb-10">
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-regular fa-star"></i>
              <span>(4.7)</span>
            </div>
            <h4 className="it-course-title pb-5">
              <Link>It statistics data science and Business analysis</Link>
            </h4>
            <div className="it-course-info pb-15 mb-25 d-flex justify-content-between">
              <span>
                <i className="fa-light fa-file-invoice"></i>Lesson 10
              </span>
              <span>
                <i className="fa-sharp fa-regular fa-clock"></i>19h 30m
              </span>
              <span>
                <i className="fa-light fa-user"></i>Students 20+
              </span>
            </div>
            <div className="it-course-author pb-15">
              <img src={AvatarImg} alt="true" />
              <span>
                By <i>Angela</i> in <i>Development</i>
              </span>
            </div>

            <div className="it-course-price-box d-flex justify-content-between">
              <span>
                <i>$60</i> $120
              </span>
              <Link>
                <i className="fa-light fa-cart-shopping"></i>Add to cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PopularCourseCard;