import React, { useState, useEffect } from "react";
import "./Footer.css";

// [TODO]
const Footer = () => {
	return (
        <div className="nav">
            <ul className="nav-list">
                <li className="nav-btn">
                    <img src={'/assets/icons/home.svg'} />
                    <div className="btn_title">홈</div>
                </li>
                <li className="nav-btn">
                    <img src={'/assets/icons/copy.svg'} />
                    <div className="btn_title">모의 지원</div>
                </li>
                <li className="nav-btn">
                    <img src={'/assets/icons/darts.svg'} />
                    <div className="btn_title">합격 예측</div>
                </li>
                <li className="nav-btn">
                    <img src={'/assets/icons/debate.svg'} />
                    <div className="btn_title">컨설팅</div>
                </li>
                <li className="nav-btn">
                    <img src={'/assets/icons/user.svg'} />
                    <div className="btn_title">설정</div>
                </li>
            </ul>
        </div>
	);
};

export default Footer;