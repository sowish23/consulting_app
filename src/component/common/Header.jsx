import React, { useState, useEffect } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./Header.css";
import SideNav from "./SideNav"

const Header = props => {
	const [showNav, setShowNav] = useState(false)
	return (
        <div className="Header">
            <SideNav show={showNav} setShowNav={setShowNav}/>
            <div className="Header_width">
                <div className="Header_bars" onClick={() => setShowNav(true)}><FontAwesomeIcon icon={faBars} /></div>
                <div className="Header_title_center">
                    <div className="Header_title">InG 정시 합격 예측</div>
                </div>
            </div>
        </div>
	);
};

export default Header;