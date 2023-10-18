import React from 'react'
import style from '../style/Spinner.module.css'

const Spinner = () => {
  return (
    <div className={style.backgroundLoader}>
  <div className={style.loader}>
    <span className={`${style.spinner} ${style.spinner1}`}></span>
    <span className={`${style.spinner} ${style.spinner2}`}></span>
    <span className={`${style.spinner} ${style.spinner3}`}></span>
    <br />
    <span className={style.loaderText}>LOADING...</span>
  </div>
</div>
  )
}

export default Spinner
