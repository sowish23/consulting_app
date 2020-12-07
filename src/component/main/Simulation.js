import React from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./Simulation.css";
import Footer from '../common/Footer';

const Simulation = () => {
    return (
        <div>
            <div className="bars"><FontAwesomeIcon icon={faBars} /></div>
            <div className="title">ING 입시연구소</div>
            <div className="sub-title">모의 지원 입력</div>
            &nbsp;
            <div className="input">
                <div className="input1">
                    <div className="input-name">계열</div>
                    <button className="input-btn1">가군</button>
                    <button className="input-btn2">나군</button>
                    <button className="input-btn3">다군</button>
                </div>
                <hr className="hr1"/>
                <div className="input2">
                    <div className="input-name">대학</div>
                    <input className="search" placeholder="▼검색하기"/>
                </div>
                <hr className="hr1"/>
                <div className="input3">
                    <div className="input-name">학과</div>
                    <input className="search" placeholder="▼검색하기"/>
                </div>
                <hr className="hr1"/>
            </div>
            <hr className="hr2"/>
            <div>
                <div>&lt;가군&gt;</div>
                <div>
                </div>
                <div>

                </div>
            </div>
            <div>
                <div>&lt;나군&gt;</div>
                <div>

                </div>
                <div>

                </div>
            </div>
            <div>
                <div>&lt;다군&gt;</div>
                <div>

                </div>
                <div>

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Simulation;