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
        <div className="nav">
            <ul className="nav-list">
                <li className="nav-btn">
                    <NavLink exact to ='/help' activeStyle={activeStyle}>
                        <img src={'/assets/icons/home.svg'} />
                        <div className="btn_title">홈</div>
                    </NavLink>
                </li>
                <li className="nav-btn">
                    <NavLink exact to ='/prediction' activeStyle={activeStyle}>
                        <img src={'/assets/icons/darts.svg'} />
                        <div className="btn_title">합격 예측</div>
                    </NavLink>
                </li>
                <li className="nav-btn">
                    <NavLink exact to ='/consulting' activeStyle={activeStyle}>
                        <img src={'/assets/icons/debate.svg'} />
                        <div className="btn_title">컨설팅</div>
                    </NavLink>
                </li>
                <li className="nav-btn">
                    <NavLink exact to ='/simulation' activeStyle={activeStyle}>
                        <img src={'/assets/icons/copy.svg'} />
                        <div className="btn_title">모의 지원</div>
                    </NavLink>
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