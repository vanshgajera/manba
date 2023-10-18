import React from "react";
import "../App.css";
import "../style/aboutUs.css";
import loan from "../Assets/loan (2) 1.jpg";
import money from "../Assets/money (1) 1.jpg";
import group from "../Assets/group 1.jpg";
import help from "../Assets/help-web-button 1.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="aboutBanner">
        <div className="container">
          <h6>
            <Link to="/">home &#62; </Link> About
          </h6>
        </div>
      </div>
      <div className="container about">
        <div className="messageBtn">
            <Link to="/service" className="button-14">
              <b>WELCOME MESSAGE</b>
            </Link>
        </div>

        <h3>Who We Are</h3>

        <div className="pra">
          <p>
            specialized financial institution that supplies credit for the
            purchase of consumer goods and services by purchasing the time-sales
            contracts of merchants or by granting small loans directly to
            consumers. Specialized consumer finance agencies now operate
            throughout western Europe, Canada, the United States, Australia,
            Japan, and some Latin American countries. Although they existed in
            the early 1900s, their greatest development came after World War II.
          </p>

          <p>
            Large-sales finance companies, which operate by purchasing unpaid
            customer accounts at a discount from merchants and collecting
            payments due from consumers, were a response to the need for
            installment financing for the purchase of automobiles in the early
            1900s. Ally Financial, for example, was established as the General
            Motors Acceptance Corporation (GMAC) in 1919 to purchase automobile
            accounts receivable from car dealers who were themselves unable to
            finance time purchases. Many companies in both Europe and the United
            States continue to specialize in financing purchases of particular
            commodities and remain closely associated with specific
            manufacturers. Some also extend credit for wholesale purchases by
            retail dealers.
          </p>

          <p>
            Consumer finance or small-loan companies also arose in the 1900s.
            Until then the need for consumer loans had been met primarily by
            illegal “loan shark” activities because it was unprofitable for
            banks to make small loans at rates below legally set usury levels.
            In 1911 several states in the United States began adopting
            small-loan laws that authorized loans to consumers at rates above
            usury levels, making it financially practical to operate a consumer
            loan business. Today many companies engage both in the sales-finance
            business and in making loans directly to consumers.
          </p>
        </div>
      </div>
      <div className="valueup">
        <div className="container">
          <div className="title">
            <h3>Values</h3>
          </div>
          <div className="valuepra">
            <p>
              Our values are anchored around our business ethics, consumer focus
              and
            </p>
            <p>corporate responsibility towards society at large.</p>
          </div>
          <div className={`row create`}>
            <div className="col-lg-2 col-12">
              <h3>C</h3>
              <p>Cost-effective & simple</p>
            </div>
            <div className="col-lg-2 col-12">
              <h3>R</h3>
              <p>Respect for all</p>
            </div>
            <div className="col-lg-2 col-12">
              <h3>E</h3>
              <p>Exemplary governance</p>
            </div>
            <div className="col-lg-2 col-12">
              <h3>A</h3>
              <p>Accountability, professionalism & discipline</p>
            </div>
            <div className="col-lg-2 col-12">
              <h3>T</h3>
              <p>CTransparency & integrity</p>
            </div>
            <div className="col-lg-2 col-12">
              <h3>E</h3>
              <p>Effective teamwork and commitment</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container aboutMain">
        <h3>How It Works</h3>

        <div className="row">
          <div className="col-lg-6 col-12 ">
            <div className="fastloan">
              <img src={loan} alt="loan" className="loanimg" />
              <div className="round"></div>
              <h3>Fast Loans</h3>
              <p>
                We are always flexible enough to cover all of your financial
                needs, whichever those might be. Regardless of whether you're
                about to make a first-time home purchase.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-12 ">
            <div className="fastloan">
              <img src={money} alt="loan" className="loanimg" />
              <div className="round"></div>
              <h3>Flexible Money</h3>
              <p>
                We understand that financial situations, credit scores, and
                other fi- nancially-related things can vary.That is why we
                employ a flexible, person-centric approach to each.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-12 ">
            <div className="fastloan">
              <img src={group} alt="loan" className="loanimg" />
              <div className="round"></div>
              <h3>Seasoned team</h3>
              <p>
                Our experts spent last few years excelling their skills and
                expanding their practical knowledge. We're the best, each of our
                crew mem- bers is!
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-12 ">
            <div className="fastloan">
              <img src={help} alt="loan" className="loanimg" />
              <div className="round"></div>
              <h3>Helpful</h3>
              <p>
                With so many mortgages and loans featuring interest rates that
                are just outright bad, we're here to level the field. Thanks to
                our re- financing and home equity loan programs you'll.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
