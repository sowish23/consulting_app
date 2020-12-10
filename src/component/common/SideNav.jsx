import React, { useState, useEffect } from "react";
import "./SideNav.css";
import { NavLink } from 'react-router-dom';

const SideNav = props => {
    const { show, setShowNav } = props;
    const [showSub1, setShowSub1] = useState(false)
    const [showSub2, setShowSub2] = useState(false)
    const [showSub3, setShowSub3] = useState(false)

    return (
        <div className={show ? "SideNav_back" : null}>
            <div className={show ? "SideNav_side_nav SideNav_show_nav" : "SideNav_side_nav"}>
                <div className="SideNav_nav_content">
                    <div className="SideNav_quit_btn">
                        <div className="SideNav_quit_img" onClick={() => setShowNav(false)}>
                            <img src='/assets/icons/delete.svg' />
                        </div>
                    </div>
                    <div className="SideNav_nav_menus">
                        <div className="SideNav_nav_menu">
                            <div className="SideNav_menu_title" onClick={() => { setShowSub1(!showSub1); setShowSub2(false); setShowSub3(false) }}>
                                <div>합격 예측</div>
                                <div className="SideNav_submenu_img">
                                    <img src='/assets/icons/sub_menu.svg' />
                                </div>
                            </div>
                            {
                                showSub1 ?
                                    <div className="SideNav_menu_sub">
                                        <NavLink exact to ='/prediction/mygrade'>
                                            <div className="SideNav_menu_sub_title">- 내 성적 분석</div>
                                        </NavLink>
                                        <NavLink exact to ='/prediction/university'>
                                        <div className="SideNav_menu_sub_title">- 대학/학과별 분석</div>
                                        </NavLink>
                                        <NavLink exact to ='/prediction/beneficial'>
                                        <div className="SideNav_menu_sub_title">- 나에게 유리한 대학찾기</div>
                                        </NavLink>
                                    </div> :
                                    null
                            }
                        </div>
                        <div className="SideNav_nav_menu">
                            <div className="SideNav_menu_title">
                                <NavLink exact to ='/consulting'>
                                    <div>AI 맞춤 컨설팅</div>
                                </NavLink>
                            </div>
                        </div>
                        <div className="SideNav_nav_menu">
                            <div className="SideNav_menu_title" onClick={() => { setShowSub2(!showSub2); setShowSub1(false); setShowSub3(false) }}>
                                <div>모의지원</div>
                                <div className="SideNav_submenu_img">
                                    <img src='/assets/icons/sub_menu.svg' />
                                </div>
                            </div>
                            {
                                showSub2 ?
                                    <div className="SideNav_menu_sub">
                                        <NavLink exact to ='/simulation'>
                                            <div className="SideNav_menu_sub_title">- 모의 지원 입력</div>
                                        </NavLink>
                                        <NavLink exact to ='/simulation/result'>
                                            <div className="SideNav_menu_sub_title">- 모의 지원 결과 보고</div>
                                        </NavLink>
                                    </div> :
                                    null
                            }
                        </div>
                        <div className="SideNav_nav_menu">
                            <div className="SideNav_menu_title" onClick={() => { setShowSub3(!showSub3); setShowSub1(false); setShowSub2(false) }}>
                                <div>설정</div>
                                <div className="SideNav_submenu_img">
                                    <img src='/assets/icons/sub_menu.svg' />
                                </div>
                            </div>
                            {
                                showSub3 ?
                                    <div className="SideNav_menu_sub">
                                        <NavLink exact to ='/setting'>
                                            <div className="SideNav_menu_sub_title">- 내 정보</div>
                                        </NavLink>
                                    </div> :
                                    null
                            }
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default SideNav;