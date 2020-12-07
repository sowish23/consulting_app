import React, { useState, useEffect } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./Header.css";

// [TODO]
const Header = () => {
	return (
        <div className="header">
            <div className="bars"><FontAwesomeIcon icon={faBars} /></div>
            <div className="title">ING 입시연구소</div>
        </div>
	);
};

export default Header;