import React from "react";
import style from "../style/ServiceAbout.module.css";
import { Link } from "react-router-dom";
import backpersonalLoan from "../Assets/backpersonalLoanimg.png";
import backgoldloan from "../Assets/backgoldLoanimg.png";
import backhomeloan from "../Assets/backhomeloanimg.png";

const ServiceAbout = () => {
  return (
    <div className={style.serviceabout}>
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-6 col-12">
            <div className={`${style.filpBox} mx-sm-auto`}>
                <div className={style.filpBack}>
                  <div className={style.imgContent}>
                    <img src={backpersonalLoan} alt="personalLoan" />
                  </div>
                  <h4> Personal Loan</h4>
                  <p>
                    Get Personal Loan Based On Your Credit Profile- From 1 Lakh
                    To 15 Lakh.
                  </p>
                  <Link to="/personalLoan" className={style.findBtn}>FIND OUT MORE</Link>
                </div>
              </div>
            </div>
         
          <div className="col-xl-4 col-lg-6 col-12">
            <div className={`${style.filpBox} mx-sm-auto`}>
            <div className={style.filpBack}>
                  <div className={style.imgContent}>
                    <img src={backgoldloan} alt="goldloan" />
                  </div>
                  <h4> Gold Loan</h4>
                  <p style={{fontSize:'16px'}}>
                    The most significant objective is to project gold loans as a
                    'Good Smart Option, as against being the Last Option' for
                    seeking financial credit.
                  </p>
                  <Link to="/goldloan" className={style.findBtn}>FIND OUT MORE</Link>
                </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-12">
            <div className={`${style.filpBox} mx-sm-auto`}>
            <div className={style.filpBack}>
                  <div className={style.imgContent}>
                    <img src={backhomeloan} alt="homeloan" />
                  </div>
                  <h4> Home Loan</h4>
                  <p>
                    Various insurers in India & buy insurance policy online. Get
                    instant quotes & save huge on premiums.
                  </p>
                  <Link to="/homeLoan" className={style.findBtn}>FIND OUT MORE</Link>
                </div>
                </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default ServiceAbout;
