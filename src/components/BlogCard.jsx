import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';



const BlogCard = (props) => {
  return (
   <>
    
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div
                className="it-blog-item-box"
                style={{ backgroundImage: `url(${props.bg})` }}
              >
                <div className="it-blog-item">
                  <div className="it-blog-thumb fix">
                    <Link>
                    <img src={props.Blog1} alt="BlogI"
                    />
                    </Link>
                  </div>
                  <div className="it-blog-meta pb-15">
                    <span>
                      <i className="fa-solid fa-calendar-days"></i>
                      14 June 2023</span
                    >
                    <span>
                      <i className="fa-light fa-messages"></i>
                      Comment (06)</span
                    >
                  </div>
                  <h4 className="it-blog-title">
                    <Link> 
                    velit esse cillum dolore eu fugiat nulla pariatur.
                      Excepteur sint occaecat cupidatat
                    </Link>
                  </h4>
                <Link className="it-btn sm">
                <span>
                      read more
                      <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                </Link>
                </div>
              </div>
            </div>
            
         

   </>
  )
}

export default BlogCard