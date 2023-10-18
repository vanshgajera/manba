import React from "react";
import style from "../style/HomeAbout.module.css";
import HomeAboutImg from "../Assets/HomeAboutimg.png";
import Aboutimg1 from "../Assets/aboutimg1.png";
import Aboutimg2 from "../Assets/aboutimg2.png";
import Aboutimg3 from "../Assets/aboutimg3.png";

const HomeAbout = () => {
  return (
    <div className={style.homeAbout}>
      <div className="container">
        <h3>Why Choose Us</h3>
        <div className="row">
          <div className={`col-xl-6 col-12 ${style.leftAbout}`}>
            <img src={HomeAboutImg} alt="HomeAboutImg" />
          </div>
          <div className={`col-xl-6 col-12 ${style.about}`}>
            <p>
              At Manba finanserve, we are more than a loan services provider we
              are your gateway to financial confidence. When you choose us,
              you're choosing a dedicated team of professionals who are
              passionate about helping you achieve your financial goals. Your
              success is our success, and we're excited to embark on this
              journey with you. We invite you to experience the Manba finanserve
              difference – where your financial well-being is our top priority.
            </p>
            <div className={style.aboutContent}>
              <img src={Aboutimg1} alt="Aboutimg1" />
              <div>
                <h4> Trusted Expertise</h4>
                <p>
                  With decades of experience in the financial industry, we have
                  earned the trust of countlessindividuals and businesses.
                </p>
              </div>
            </div>
            <div className={style.line}></div>
            <div className={style.aboutContent}>
              <img src={Aboutimg2} alt="Aboutimg1" />
              <div>
                <h4>Comprehensive Loan Options</h4>
                <p>
                  We offer a diverse range of loan products to meet every need.
                  Whether you're looking for a personal loan, a gold loan, home
                  loan, or any other type of loan, we have a solution designed
                  just for you.
                </p>
              </div>
            </div>
            <div className={style.line}></div>
            <div className={style.aboutContent}>
              <img src={Aboutimg3} alt="Aboutimg1" />
              <div>
                <h4> Competitive Rates</h4>
                <p>
                  We believe that access to funds should be affordable. That's
                  why we offer some of the most competitive interest rates in
                  the market. We work tirelessly to ensure that borrowing with
                  us is cost-effective.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
