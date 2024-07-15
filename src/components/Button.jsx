import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Button = (props) => {
  return (
    <>
      <div className="it-header-2-button d-none d-md-block">
        <Link className="it-btn">
          <span>
           {props.name} 
            <FontAwesomeIcon icon={faArrowRight}/>
          </span>
        </Link>
      </div>
    </>
  );
};

export default Button;
