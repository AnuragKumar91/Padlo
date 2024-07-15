import React from 'react'
import Testomonialbg from "../../assets/img/testimonial/testimonial-bg.jpg"
import Shape from "../../assets/img/testimonial/shape-2-1.png"
import TestimonialCard from '../TestimonialCard'


const Testimonial = () => {
  return (
   <>
      <div
        className="it-testimonial-area it-testimonial-ptb it-testimonial-bg fix p-relative"
        style={{ backgroundImage: `url(${Testomonialbg})` }}
      >
        <div className="it-testimonial-shape-1 d-none d-xl-block">
          <img src={Shape} alt="true" />
        </div>
        <div className="container">
          <div className="it-testimonial-title-wrap mb-60">
            <div className="row align-items-end">
              <div className="col-xl-6 col-lg-8 col-md-9 col-sm-8">
                <div className="it-testimonial-title-box">
                  <span className="it-section-subtitle">testimonial</span>
                  <h4 className="it-section-title">
                    Creating A Community Of Life Long
                    <span className="p-relative z-index"
                      >Learners.
                      <svg
                        className="title-shape-3"
                        width="169"
                        height="65"
                        viewBox="0 0 169 65"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M73.9865 8.52241C79.0935 6.03398 83.1809 4.26476 89.5018 3.31494C94.8148 2.51659 100.239 2.08052 105.59 1.95274C121.035 1.5839 135.743 4.94481 147.12 9.7789C159.246 14.931 167.348 22.7171 166.701 31.8511C165.923 42.8363 151.983 52.0035 134.146 57.1364C110.893 63.8284 82.3457 64.1305 59.197 61.1289C38.1374 58.3982 12.2599 51.9446 4.20444 40.1836C-2.8133 29.9382 12.6851 18.2085 28.1538 11.6691C40.9733 6.24978 56.315 2.97602 71.4123 4.09034C82.5481 4.91227 93.8269 6.91079 103.074 10.0494C113.489 13.5844 120.759 18.7016 128.482 23.7722"
                          stroke="#0AB99D"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </h4>
                </div>
              </div>
              <div className="col-xl-6 col-lg-4 col-md-3 col-sm-4">
                <div className="it-testimonial-arrow text-end"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="it-testimonial-slide-wrap p-relative">
                <div className="it-testimonial-slide-quote d-none d-xl-block">
                  <i className="fa-sharp fa-solid fa-quote-right"></i>
                </div>
                <TestimonialCard/>
              </div>
            </div>
          </div>
        </div>
      </div>
             
   </>
  )
}

export default Testimonial