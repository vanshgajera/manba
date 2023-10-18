import React from 'react'
import style from '../style/GoldLoanBanner.module.css'

const GoldLoanBanner = () => {
    return (
        <div className={style.loanBanner}>
          <div className="container">
            <h3>
              Instant Approval For
              <span>gold Loan</span>
            </h3>
            <p>
              Lowest Interest Rates - Calculate EMI - Check Eligibility - Instant
              e-Approval -
            </p>
          </div>
        </div>
      );
}

export default GoldLoanBanner
