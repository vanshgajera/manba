import React from "react";
import style from "../style/LoanDocument.module.css";
import Profile from "../Assets/profile.png";
import registeredDocument from "../Assets/registered-document.png";
import signature from "../Assets/signature.png";
import address from "../Assets/address.png";
import creditCards from "../Assets/credit-cards.png";
import identityCard from "../Assets/identity-card.png";
import { Link } from "react-router-dom";

const LoanDocument = () => {
  return (
    <div className={style.document}>
      <div className="container">
        <h3>
          What are the documents required for
          <span>Gold Loan?</span>
        </h3>
        <p>TOOLS TO HELP YOU CHOOSE</p>
        <div className="row">
          <div className={`col-xl-6 col-12 ${style.documentText}`}>
          <img src={Profile} alt="Profile" />
            <h5>Passport sized photographs</h5>
          </div>
          <div className={`col-xl-6 col-12 ${style.documentText}`}>
            <img src={registeredDocument} alt="registeredDocument" />
            <h5>Application form</h5>
          </div>
          <div className={`col-xl-6 col-12 ${style.documentText}`}>
            <img src={signature} alt="signature" />
            <h5>Signature proof</h5>
          </div>
          <div className={`col-xl-6 col-12 ${style.documentText}`}>
            <img src={address} alt="address" />
            <h5>Address proof</h5>
          </div>
          <div className={`col-xl-6 col-12 ${style.documentText}`}>
            <img src={creditCards} alt="creditCards" />
            <h5> PAN card</h5>
          </div>
          <div className={`col-xl-6 col-12 ${style.documentText}`}>
            <img src={identityCard} alt="identityCard" />
            <h5>Identity proof</h5>
          </div>
        </div>
        <Link to="/contact" className='btn'>
          Apply Now
        </Link>
      </div>
    </div>
  );
};

export default LoanDocument;
