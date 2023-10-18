import React from "react";
import style from "../style/HomeService.module.css";
import serviceimg from "../Assets/homeServiceimg.jpg";
const HomeService = () => {
  return (
    <div className={style.homeService}>
      <div className="container">
        <img src={serviceimg} />
      </div>
    </div>
  );
};

export default HomeService;
