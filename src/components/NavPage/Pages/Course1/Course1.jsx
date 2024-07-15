import React from 'react'
import BannerSection from "../../../BannerSection";
import BreadImg from "../../../../../src/assets/img/breadcrumb/breadcrumb.jpg"
import PopularCourseCard from '../../../PopularCourseCard';
import CourseImg1 from "../../../../../src/assets/img/course/course-1-1.jpg"
import Subscribe from "../../../Body/Subscribe"




const Course1 = () => {
  return (
 <>
  <BannerSection img={BreadImg} title="Course 01" name="Course 01"/>

  <PopularCourseCard img={CourseImg1}/>
  
  <Subscribe/>
 
 </>
  )
}

export default Course1