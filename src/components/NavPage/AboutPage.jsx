import React from "react";
import BannerSection from "../BannerSection";
import AboutUsImg from "../../../src/assets/img/breadcrumb/breadcrumb.jpg";
import About from "../Body/About";
import Counter from "../Body/Counter";
import Testimonial from "../Body/Testimonial";
import PopularCourse from "../Body/PopularCourse";
import Subscribe from "../Body/Subscribe";

const AboutPage = () => {
  return (
    <>
      <BannerSection img={AboutUsImg} title="About us" name="About" />
      <About />
      <Counter/>
      <Testimonial/>
      <PopularCourse/>
      <Subscribe/>
      
    </>
  );
};

export default AboutPage;
