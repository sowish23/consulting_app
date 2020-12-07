import React, { useState, useEffect } from "react";
import "./Footer.css";

// [TODO]
const Footer = () => {
	return (
        <div className="nav">
            <ul className="nav-list">
                <li className="nav-btn">홈</li>
                <li className="nav-btn">모의 지원</li>
                <li className="nav-btn">합격 예측</li>
                <li className="nav-btn">컨설팅</li>
                <li className="nav-btn">설정</li>
            </ul>
        </div>
	);
};

export default Footer;