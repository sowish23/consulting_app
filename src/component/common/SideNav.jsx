import React, { useState, useEffect } from "react";
import "./SideNav.css";

const SideNav = props => {
    const { show, setShowNav } = props;
    const [ showSub1, setShowSub1 ] = useState(false)
    const [ showSub2, setShowSub2 ] = useState(false)
    const [ showSub3, setShowSub3 ] = useState(false)

    return (
        <div className={show ? "side_nav show_nav" : "side_nav"}>
            <div className="nav_content">
                <div className="quit_btn">
                    <div className="quit_img" onClick={() => setShowNav(false)}>
                        <img src='/assets/icons/delete.svg' />
                    </div>
                </div>
                <div className="nav_menus">
                    <div className="nav_menu">
                        <div className="menu_title">
                            <div>합격 예측</div>
                            <div className="submenu_img" onClick={() => { setShowSub1(!showSub1); setShowSub2(false); setShowSub3(false)} }>
                                <img src='/assets/icons/sub_menu.svg' />
                            </div>
                        </div>
                        {
                            showSub1 ?
                            <div className="menu_sub">
                                <div className="menu_sub_title">- 내 성적 분석</div>
                                <div className="menu_sub_title">- 대학/학과별 분석</div>
                                <div className="menu_sub_title">- 나에게 유리한 대학찾기</div>
                            </div> :
                            null
                        }
                    </div>
                    <div className="nav_menu">
                        <div className="menu_title">
                            <div>AI 맞춤 컨설팅</div>
                        </div>
                    </div>
                    <div className="nav_menu">
                        <div className="menu_title">
                            <div>모의지원</div>
                            <div className="submenu_img" onClick={() => { setShowSub2(!showSub2); setShowSub1(false); setShowSub3(false)} }>
                                <img src='/assets/icons/sub_menu.svg' />
                            </div>
                        </div>
                        {
                            showSub2 ?
                            <div className="menu_sub">
                                <div className="menu_sub_title">- 모의 지원 입력</div>
                                <div className="menu_sub_title">- 모의 지원 결과 보고</div>
                            </div> :
                            null
                        }
                    </div>
                    <div className="nav_menu">
                        <div className="menu_title">
                            <div>설정</div>
                            <div className="submenu_img" onClick={() => { setShowSub3(!showSub3); setShowSub1(false); setShowSub2(false)} }>
                                <img src='/assets/icons/sub_menu.svg' />
                            </div>
                        </div>
                        {
                            showSub3 ?
                            <div className="menu_sub">
                                <div className="menu_sub_title">- 내 정보</div>
                            </div> :
                            null
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SideNav;