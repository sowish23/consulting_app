import React, { useState, useEffect } from "react";
import "./Footer.css";
import { NavLink } from 'react-router-dom';

const Footer = () => {
    const activeStyle = {
        fontWeight: 'bold',
        fontSize : '1.2em',
        textDecoration: 'none',
        color: '#70cde5'
    }
	return (
        <div className="Footer_nav">
            <ul className="Footer_nav_list">
                <li className="Footer_nav_btn">
                    <NavLink exact to ='/home' activeStyle={activeStyle}>
                        <img src={'/assets/icons/home.svg'} />
                        <div className="Footer_btn_title">홈</div>
                    </NavLink>
                </li>
                <li className="Footer_nav_btn">
                    <NavLink exact to ='/prediction' activeStyle={activeStyle}>
                        <img src={'/assets/icons/darts.svg'} />
                        <div className="Footer_btn_title">합격 예측</div>
                    </NavLink>
                </li>
                <li className="Footer_nav_btn">
                    <NavLink exact to ='/consulting' activeStyle={activeStyle}>
                        <img src={'/assets/icons/debate.svg'} />
                        <div className="Footer_btn_title">맞춤 입시 정보</div>
                    </NavLink>
                </li>
                <li className="Footer_nav_btn">
                    <NavLink exact to ='/simulation' activeStyle={activeStyle}>
                        <img src={'/assets/icons/copy.svg'} />
                        <div className="Footer_btn_title">모의 지원</div>
                    </NavLink>
                </li>
                <li className="Footer_nav_btn">
                    <NavLink exact to ='/setting' activeStyle={activeStyle}>
                        <img src={'/assets/icons/user.svg'} />
                        <div className="Footer_btn_title">설정</div>
                    </NavLink>
                </li>
            </ul>
        </div>
	);
};

export default Footer;