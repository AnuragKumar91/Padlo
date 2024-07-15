import React from 'react'
import BreadImg from "../../../../src/assets/img/breadcrumb/breadcrumb.jpg"
import BannerSection from '../../BannerSection';
import CourseCard from '../../CourseCard';
import Subscribe from "../../Body/Subscribe"

const Service1 = () => {
  return (
   <>
      <BannerSection img={BreadImg} title="Service 1" name="Service 1"/>
      <div className='row'>

     
           
          <CourseCard name="Web Design"/>
          <CourseCard name="Graphic Design"/>
         <CourseCard name="Personal Development"/>
         <CourseCard name="IT and Software"/>
         <CourseCard name="Sales Marketing"/>
         <CourseCard name="Arts and Humanities"/>
         <CourseCard name="Mobile Applications"/>
         <CourseCard name="Finance and Accounting"/>
       </div>
       <Subscribe/>
  </>
  )
}

export default Service1