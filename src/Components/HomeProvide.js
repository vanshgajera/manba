import React from 'react'
import style from '../style/HomeProvide.module.css'
import economy from '../Assets/economy 1.png'
import invesment from '../Assets/invesment 1.png'
import agreement from '../Assets/agreement 1.png'
import continuous from '../Assets/continuous 1.png'


const HomeProvide = () => {
  return (
    <div className={style.provide}>
      <div className='container'>
        <div className='row'>
            <div className={`col-lg-6 col-12 ${style.provideText}`}>
                <img src={economy} alt='economy'  />
                <p>Embark on your loan journey, understanding the right loan type – personal for flexibility or business for expansion. Prepare with documentation and a strong application, focusing on credit score improvement</p>
            </div>
            <div className={`col-lg-6 col-12 ${style.provideText}`}>
                <img src={invesment} alt='invesment'/>
                <p>Unlock major investment potential with loans as a financial powerhouse, elevating your financial aspirations. Join us as we explore this gateway to seizing big opportunities and realizing your financial dreams</p>
            </div>
            <div className={`col-lg-6 col-12 ${style.provideText}`}>
                <img src={agreement} alt='agreement'/>
                <p> "Businesses often seek loans for expansion, whether opening new locations, boosting production, or diversifying products. Loans provide vital capital for growth</p>
            </div>
            <div className={`col-lg-6 col-12 ${style.provideText}`}>
                <img src={continuous} alt='continuous'/>
                <p>In today's dynamic financial landscape, gain essential insights for managing money, investments, and securing your financial future with our expert financial content.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HomeProvide
