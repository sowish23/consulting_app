import React from "react";
import "./Setting.css";

const Setting = () => {
    return(
        <div className="Info_page">
            <div className="Info_content">
                <div className="section">
                    <div className="section_title">계정</div>
                    <div className="section_content">
                        <div className="content_name">회원탈퇴</div>
                        <div className="content_name">로그아웃</div>
                    </div>
                </div>
                <div className="section">
                    <div className="section_title">앱 설정</div>
                    <div className="section_content">
                        <div className="content_name">알림 설정</div>
                    </div>
                </div>
                <div className="section">
                    <div className="section_title">앱 정보</div>
                    <div className="section_content">
                        <div className="content_version content_name">
                            <div>앱 버전</div>
                            <div>1.0 v</div>
                        </div>
                        <div className="content_name">문의하기</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Setting;