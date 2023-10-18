import React from "react";
import style from "../style/HomeBanner.module.css";
import { Link } from "react-router-dom";

const HomeBanner = () => {
  return (
    <div className={style.homeBanner}>
      <div className="container">
        <h2>Bring Your Aspirations To Life,<span className={style.frame1}>Home Loan</span> 
        <span className={style.frame2}>Personal Loan</span>
        <span className={style.frame3}>Gold Loan</span>
        <span className={style.frame4}>Business Loan</span>
        <span className={style.frame5}> With A Quick Loan.</span></h2>
        <p>
          Welcome to Manba Finance, where you can find a loan solutioncustomised
          for your needs.
        </p>
        <Link to='/contact' className={style.applyBtn}>Apply Now</Link>
      </div>
    </div>
  );
};

export default HomeBanner;
