import React from "react";
import style from "../style/PersonalLoanApply.module.css";
import ApplyImg from "../Assets/Applyloan.png";

const PersonalLoanApply = () => {
  return (
    <div className={style.apply}>
      <div className="container">
        <h3>How To Apply For a Personal Loan ?</h3>
        <p>
          Apply for Manba Finance Personal Loan in 3 easy steps – it’s easy, seamless
          and quick.
        </p>
        <div className="row">
          <div className={`col-xl-6 col-12 ${style.leftContent}`}>
            <img src={ApplyImg} alt="ApplyImg" />
          </div>
          <div className={`col-xl-6 col-12  ${style.rightContent}`}>
            <div className={style.applyContent}>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <circle cx="10" cy="10" r="10" fill="#00ADEF" />
                </svg>
              </div>
              <div>
                <h4>Step 1</h4>
                <p>Verify personal details</p>
              </div>
            </div>
            <div className={style.iconLine}></div>
            <div className={style.applyContent}>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <circle cx="10" cy="10" r="10" fill="#00ADEF" />
                </svg>
              </div>
              <div>
                <h4>Step 2</h4>
                <p>Choose your loan amount and tenure; confirm your bank details</p>
              </div>
            </div>
            <div className={style.iconLine}></div>
            <div className={style.applyContent}>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <circle cx="10" cy="10" r="10" fill="#00ADEF" />
                </svg>
              </div>
              <div>
                <h4>Step 3</h4>
                <p>Receive the loan amount in your bank account</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalLoanApply;
