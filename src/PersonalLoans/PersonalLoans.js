import React from 'react'
import PersonalLoanBanner from '../Components/PersonalLoanBanner'
import PersonalLoanAbout from '../Components/PersonalLoanAbout'
import PersonalLoanTypes from '../Components/PersonalLoanTypes'
import PersonalLoanApply from '../Components/PersonalLoanApply'

const PersonalLoans = () => {
  return (
    <>
     <PersonalLoanBanner/> 
     <PersonalLoanAbout/>
     <PersonalLoanTypes/>
     <PersonalLoanApply/>
    </>
  )
}

export default PersonalLoans
