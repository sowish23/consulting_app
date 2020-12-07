import React from "react";
import "./MyInfo.css";
import Header from '../common/Header';
import Footer from '../common/Footer';

const MyInfo = () => {
    return(
        <div className="myInfo_page">
            <Header />
            <div className="content">
                <div className="div1">
                    <div className="sub-title">계정</div>
                    <div className="content">회원탈퇴</div>
                    <div className="content">로그아웃</div>
                </div>
                <div className="div2">
                    <div className="sub-title">앱 설정</div>
                    <div className="content">알림 설정</div>
                </div>
                <div className="div3">
                    <div className="sub-title">앱 정보</div>
                    <span className="content version">앱 버전</span>
                    <span className="content version-num">1</span>
                    <div className="content">문의하기</div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
export default MyInfo;