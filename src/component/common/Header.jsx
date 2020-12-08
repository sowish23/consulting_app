import React, { useState, useEffect } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./Header.css";
import SideNav from "./SideNav"

// [TODO]
const Header = props => {
    const {setShowNav} = props
	return (
        <div className="header">
            {/* <SideNav show={showNav}/> */}
            <div className="header_width">
                <div className="bars" onClick={() => setShowNav(true)}><FontAwesomeIcon icon={faBars} /></div>
                <div className="title_center">
                    <div className="title">InG 정시 합격 예측</div>
                </div>
            </div>
        </div>
	);
};

export default Header;