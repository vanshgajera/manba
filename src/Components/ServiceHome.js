import React from "react";
import style from "../style/ServiceHome.module.css";
import { Link } from "react-router-dom";

const ServiceHome = () => {
  return (
    <div className={style.serviceBanner}>
      <div className="container">
        <h6>
          <Link to="/">home &#62; </Link> Service
        </h6>
        <h3 className={style.typewriter}>Our <span> Services</span> </h3>
        <p>
        Our dedicated customer support team is here to assist you at every stage of your loan journey. Whether you have questions about the application process or need advice on the right loan for your situation, we're just a call or message away.
        </p>
        <Link to="/contact" className={` ${style.applyBtn}`}>
          Apply Now
        </Link>
      </div>
    </div>
  );
};

export default ServiceHome;
