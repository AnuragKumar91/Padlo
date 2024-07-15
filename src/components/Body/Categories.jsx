import React from 'react';
import CategoryImg from "../../assets/img/category/shape-1.png"
import Button from "../Button"
import CourseCard from "../CourseCard";


const Categories = () => {
  return (
 <div className="it-category-area pt-120 pb-120">
    <div className="container">
        <div  className="it-category-title-wrap p-relative mb-70">
            <div className="it-category-shape d-none d-xl-block">
            <img src={CategoryImg} alt="true" />

            </div>
            <div  className="row align-items-end">
                <div className="col-xl-8 col-lg-8">
                    <div className="it-category-title-box">
                        <span className="it-section-subtitle">CATEGORIES</span>
                        <h4 className="it-section-title">
                        Browse By
                        <span className="p-relative">
                        Categories
                        <svg  className="title-shape-2"
                        width="168"
                        height="65"
                        viewBox="0 0 168 65"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                       <path
                          d="M73.3761 8.49147C78.4841 6.01353 82.5722 4.25154 88.8933 3.3035C94.2064 2.50664 99.6305 2.0701 104.981 1.94026C120.426 1.56549 135.132 4.90121 146.506 9.70405C158.628 14.8228 166.725 22.5638 166.074 31.6501C165.291 42.5779 151.346 51.7039 133.508 56.8189C110.253 63.4874 81.7065 63.8025 58.5605 60.8285C37.5033 58.123 11.6304 51.7165 3.58132 40.0216C-3.43085 29.8337 12.0728 18.1578 27.544 11.645C40.3656 6.24763 55.7082 2.98328 70.8043 4.08403C81.9391 4.89596 93.2164 6.87822 102.462 9.99561C112.874 13.5066 120.141 18.5932 127.862 23.6332"
                          stroke="#0AB99D"
                          strokeWidth="3"
                         strokeLinecap="round"
                        />

                        </svg>
                        </span>
                        </h4>

                    </div>

                </div>
                <div className="col-xl-4 col-lg-4">
                    <div className="it-category-button text-start text-md-end">
                        <Button name="Categories" ></Button>

                    </div>

                </div>

            </div>

        </div>
        <div className="row">
         <CourseCard name="Web Design"/>
         <CourseCard name="Graphic Design"/>
         <CourseCard name="Personal Development"/>
         <CourseCard name="IT and Software"/>
         <CourseCard name="Sales Marketing"/>
         <CourseCard name="Arts and Humanities"/>
         <CourseCard name="Mobile Applications"/>
         <CourseCard name="Finance and Accounting"/>
       
          <div/>
          <div/>
          </div>
          <div/>
          <div/>
          </div>
          <div/>
          <div/>
          </div>
       
        
    

  )
}



export default Categories;