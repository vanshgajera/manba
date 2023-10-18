import React from "react";
import "../style/businessloan.css";
import "../App.css";
import learned from "../Assets/learned.jpg.jpg";
import businessmen from "../Assets/business men.jpg.jpg";
import businesswomen from "../Assets/business women.jpg.jpg";
import moneybag from "../Assets/money-bag (1) 1.png";
import analsis from "../Assets/analysis 1.png";
import annual from "../Assets/Nature.png";
import businesscredit from "../Assets/business-credit-score 1.png";
import profit from "../Assets/profit 1.png";
import briecase from "../Assets/Loan Amount.png";
import img from "../Assets/money (1) 2.png";
import img2 from "../Assets/Annual Turnover.png";

const BusinessLoan = () => {
  return (
    <>
      <div className="banner">
        <div className="head1">
          <h2>
            <b>Instant Approval For</b>
          </h2>
        </div>
        <div className="head2">
          <h2>
            <b>Business Loan</b>
          </h2>
        </div>
        <div className="para">
          <p>
            Lowest Interest Rates - Calculate EMI - Check Eligibility - Instant
            e-Approval
          </p>
        </div>
      </div>
      <div className="maindiv">
        <div className="container">
          <h2 className="reason">Reason to Choose Us</h2>
          <p className="variouspara">
            Leveraging business loans strategically enhances growth, stability,
            and long-term prosperity through responsible financial management
            and effective deployment.
          </p>
          <div className="main-onemore row">
            <div className="col-xl-4 col-lg-6 col-12">
              <div className="learned">
                <img src={learned} alt="learned" />
                <p className="businesspara">
                  When embarking on a new business venture, securing adequate
                  capital is often the first and most significant hurdle. A
                  business loan provides the initial capital injection required
                  to transform your vision into reality. It covers startup costs
                  such as product development, marketing, office space, and
                  equipment.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-12">
              <div className="learned">
                <img src={businessmen} alt="businessmen" />
                <p className="businesspara">
                  For existing businesses, expansion is the name of the game.
                  Whether you're looking to open new locations, hire additional
                  staff, or diversify your product line, a business loan can
                  provide the financial foundation necessary to fund these
                  growth initiatives.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-12">
              <div className="learned">
                <img src={businesswomen} alt="businesswomen" />
                <p className="businesspara">
                  Many businesses, particularly those in retail or hospitality,
                  experience seasonal fluctuations in revenue. A business loan
                  can help bridge the gap during slow periods, ensuring that
                  your business remains stable and can capitalize on peak
                  seasons.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mainFactor">
        <h2 className="factor">
          Factors that Affect 
           <span style={{ color: "#00ADEF" ,marginLeft:"11px" }}>
            Business Loan <br />
            Interest Rate
          </span>
        </h2>
        <div className="dispaycontent ">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="money">
                <div className="imgg">
                  <img src={moneybag} alt="moneybag" className="imgg" />
                </div>
                <h5>Financial Health of Business</h5>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="money">
                <div className="imgg">
                <img src={profit} alt="profit" className="imgg" />   
                </div>
                <h5>Profitability & Stability</h5>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="money">
                <div className="imgg">
                <img src={annual} alt="annual" className="imgg" />  
                </div>
                <h5>Nature of Business</h5>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="money">
                <div className="imgg">
              
                <img src={briecase} alt="briecase" className="imgg" />
                </div>
                <h5>CIBIL Score & Credit History</h5>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="money">
                <div className="imgg">
                <img src={analsis} alt="analsis" className="imgg" />
                </div>
                <h5>Business Plan</h5>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="money">
                <div className="imgg">
                <img src={img} alt="img" className="imgg" />
                  
                </div>
                <h5>Loan Amount & Repayment Tenure</h5>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="money">
                <div className="imgg">
                <img
                    src={businesscredit}
                    alt="businesscredit"
                    className="imgg"
                  />
                 
                </div>
                <h5>Collateral</h5>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="money">
                <div className="imgg">
                  <img src={img2} alt="img2" className="imgg" />
                </div>
                <h5>Annual Turnover</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button type="button" className="btn">
            APPLY NOW
          </button>
        </div>
      </div>
    </>
  );
};

export default BusinessLoan;
