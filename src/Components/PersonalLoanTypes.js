import React from "react";
import style from "../style/PersonalLoansType.module.css";

const PersonalLoanTypes = () => {
  return (
    <div className={style.loansType}>
      <div className="container">
        <h3>Types of Personal Loan</h3>
        <div className="row">
          <div className="col-lg-6 col-12">
            <ul>
              <li>Wedding Loan</li>
              <li>Medical Emergency Loan</li>
              <li>Personal loan for your child(s) future</li>
              <li>Travel Loan</li>
            </ul>
          </div>
          <div className="col-lg-6 col-12">
            <ul>
              <li>Consumer Durable Loan</li>
              <li>Home Renovation Loan</li>
              <li>Personal Loan for Women</li>
              <li>Personal Loan for Students</li>
              <li>Festival loan</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalLoanTypes;
