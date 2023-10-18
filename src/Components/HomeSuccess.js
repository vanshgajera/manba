import React from 'react'
import style from '../style/HomeSuccess.module.css'
import finance from '../Assets/finance 1.png'
import team from '../Assets/team 1.png'
import verified  from '../Assets/verified 1.png'
import medal from '../Assets/medal 1.png'

const HomeSuccess = () => {
    
  return (
    <div className={style.success}>
      <div className='container'>
        <div className='row'>
            <div className={`col-xl-3 col-lg-6 col-12 ${style.successText}`}>
                <img src={finance} alt='Successful Loan Approval '/>
                <span>2179</span>
                <p>Successful Loan Approval</p>
            </div>
            <div className={`col-xl-3 col-lg-6 col-12 ${style.successText}`}>
                <img src={team} alt='Customer Satisfection'/>
                <span>99%</span>
                <p>Customer Satisfection</p>
            </div>
            <div className={`col-xl-3 col-lg-6 col-12 ${style.successText}`}>
                <img src={verified} alt='verified bank'/>
                <span>70+</span>
                <p>Bank / NBFC's</p>
            </div>
            <div className={`col-xl-3 col-lg-6 col-12 ${style.successText}`}>
                    <img src={medal} alt='Award Winner'/>
                    <span>5+</span>
                    <p>Award Winner</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HomeSuccess
