import React from 'react'
import style from "../style/GoldLoanAbout.module.css";
import EasyLoanApprovals from "../Assets/Easy Loan Approvals.png";
import LowestPossiblePrices from "../Assets/Lowest Possible Prices.png";
import Hasslefree from "../Assets/Hassle free.png";
import SecureLoanProcesss from "../Assets/Secure Loan Processs.png";

const GoldLoanAbout = () => {
    return (
        <div className={style.loanAbout}>
          <div className="container">
            <h3>
           
              Reason to Choose <span>gold loan</span>
            </h3>
            <p>
              We offer award-winning, low-rate gold loans with no ongoing
              fees,saving our customers thousands of rupee.
            </p>
            <div className="row">
              <div className={`col-lg-6 col-12 ${style.loanContent}`}>
                <img src={EasyLoanApprovals} alt="Easy Loan Approvals" />
                <h4>Easy Loan Approvals</h4>
                <p>
                At Easy Loan Approvals, we understand that time is of the essence when you need financial assistance. Our user-friendly online application process takes only minutes to complete.
                </p>
              </div>
              <div className={`col-lg-6 col-12 ${style.loanContent}`}>
                <img src={LowestPossiblePrices} alt="Lowest Possible Prices" />
                <h4>Lowest Possible Prices</h4>
                <p>We work tirelessly to secure exclusive discounts and promotions for our users. Our team scours the web for the latest deals, coupons, and limited-time offers, so you don't have to. Saving money has never been easier.</p>
              </div>
              <div className={`col-lg-6 col-12 ${style.loanContent}`}>
                <img src={Hasslefree} alt="Hassle free" />
                <h4>Hassle free</h4>
                <p>
                We firmly believe that financial assistance should not discriminate based on income. Whether you earn a high salary or have a more modest income, everyone deserves the opportunity to secure a loan when needed. Hassle-Free Loans welcomes applicants from all income brackets.
                </p>
              </div>
              <div className={`col-lg-6 col-12 ${style.loanContent}`}>
                <img src={SecureLoanProcesss} alt="Secure Loan Processs"/>
                <h4>Secure Loan Processs</h4>
                <p>To prevent identity theft and fraud, we employ rigorous identity verification procedures. Our process verifies that you are who you claim to be, providing an added layer of security to your loan application.</p>
              </div>
            </div>
          </div>
        </div>
      );
}

export default GoldLoanAbout
