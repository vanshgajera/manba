import React from "react";
import "../style/homeloan.css";
import "../style/homeloanmailti.css";
import realEstate from "../Assets/real-estate 2.jpg";
import shopping from "../Assets/shopping 1.jpg";
import briefcase from "../Assets/briefcase 2.jpg";
import mortgage from "../Assets/mortgage 1.jpg";
import discount from "../Assets/discount 1.png";
import hours from "../Assets/24-hours-support.png";
import wallet from "../Assets/wallet.png";
import credit from "../Assets/credit-card.png";

const HomeLoans = () => {
  return (
    <>
      <div className="bg">
        <div className="head1">
          <h2>
            Instant Approval For <span>Home Loan</span>
          </h2>
        </div>

        <div className="para">
          <p>
            Lowest Interest Rates - Calculate EMI - Check Eligibility - Instant
            e-Approval 
          </p>
        </div>
      </div>
      <div className="choose">
        <div className="container">
          <h2 className="choosehead">Reason to Choose us</h2>
          <p className="choosepara">
            We offer award-winning, low-rate Home loans with no ongoing
            fees,saving our customers thousands of Rupee.
          </p>
          <div className="homeloan row">
            <div className="easyLowest col-12 col-lg-6">
              <img
                src={realEstate}
                alt="real-estate"
                className="homeloansImg"
              />
              <h3>
                <b>Easy Loan Approvals</b>
              </h3>
              <p>
                Cum sociis natoque penatibus et nis dis parturgnis dis
                parturient montes, nascetur ridiculus mus..
              </p>
            </div>
            <div className="easyLowest col-12 col-lg-6">
              <img src={shopping} alt="shopping" className="homeloansImg" />
              <h3>
                <b>Lowest Possible Prices</b>
              </h3>
              <p>
                One of the best ways to get a lower interest rate on your
                personal loan is to improve your credit score before applying
                for a loan.
              </p>
            </div>

            <div className="easyLowest col-12 col-lg-6">
              <img src={briefcase} alt="briefcase" className="homeloansImg" />
              <h3>
                <b>Hassle free</b>
              </h3>
              <p>
                Suspendisse potenti. Nunc ut tellus iquam imperdiet lacus s
                aliquam felis tincidunt.
              </p>
            </div>
            <div className="easyLowest col-12 col-lg-6">
              <img src={mortgage} alt="mortgage" className="homeloansImg" />
              <h3>
                <b>Secure Loan Processs</b>
              </h3>
              <p>
                Nulla ornare bibendum laoreteger tempus alesuada libero imperdie
                fermentum senc a ornare risus.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h5 className="toolshead">TOOLS TO HELP YOU CHOOSE</h5>
        <h2 className="multibank"> Why borrow with MultiBank</h2>
      </div>
      <div className="serviceabout">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-6 col-12 ">
              <div className={`filpBox`}>
              <div className="filpBack">
                    <div className="imgContent">
                      <img src={discount} alt="discount" />
                    </div>
                    <h4>Get interest rate discount</h4>
                    <p>
                      In just 30 minutes, an experienced banker will help you
                      get a .25% interest rate discount with an eligible
                      checking and savings account.
                    </p>
                  </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-12">
              <div className={`filpBox `}>
              <div className="filpBack">
                    <div className="imgContent">
                      <img src={hours} alt="hours" />
                    </div>
                    <h4> Exceptional service from specialists</h4>
                    <p>
                     The most significant objective is to project gold loans as
                      a 'Good Smart Option, as against being the Last Option'
                      for seeking financial credit.
                    </p>
                  </div>

              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-12">
              <div className={`filpBox `}>
              <div className="filpBack">
                    <div className="imgContent">
                      <img src={wallet} alt="wallet" />
                    </div>
                    <h4> Convenient payment options</h4>
                    <p>
                      Make your payments quickly and easily through online and
                      mobile banking, by phone or mail, with recurring automatic
                      payments, or in a branch.
                    </p>
                  </div>
          
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-12">
              <div className={`filpBox `}>
              <div className="filpBack">
                    <div className="imgContent">
                      <img src={credit} alt="credit" />
                    </div>
                    <h4> Secure online & mobile banking</h4>
                    <p>
                    
                      Sign on for 24/7 account access to make payments, transfer
                      money, check balances, and view your statements online.
                    </p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeLoans;
