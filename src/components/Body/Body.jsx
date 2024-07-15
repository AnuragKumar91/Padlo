import React from 'react'
import HeroSection from './HeroSection'
import Categories from './Categories'
import PopularCourse from './PopularCourse'
import About from "./About";
import Session from "./Session";
import Choose from './Choose';
import Counter from './Counter'
import Testimonial from './Testimonial';
import Intructor from './Intructor';
import Career from './Career';
import Blog from './Blog';
import Subscribe from './Subscribe';

const Body = () => {
  return (
   <>
   <HeroSection />
   <Categories/>
   <PopularCourse/>
   <About/>
   <Session/>
   <Choose/>
   <Counter/>
   <Testimonial/>
   <Intructor/>
   <Career/>
   <Blog/>
   <Subscribe/>
  
   </>
  )
}

export default Body