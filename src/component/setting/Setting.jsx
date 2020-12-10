import React from "react";
import "./Setting.css";
import Header from '../common/Header';
import Footer from '../common/Footer';

const Setting = ({ history }) => {
    return (
        <div>
            <Header />
            <div className="Setting_page">
                <div className="Setting_content">
                    <div className="Setting_section">
                        <div className="Setting_section_title">계정</div>
                        <div className="Setting_section_content">
                            <div className="Setting_content_name">회원 정보 수정</div>
                            <div className="Setting_content_name" onClick={() => history.push('/mypage')}>내 성적 수정</div>
                            <div className="Setting_content_name">회원탈퇴</div>
                            <div className="Setting_content_name">로그아웃</div>
                        </div>
                    </div>
                    <div className="Setting_section">
                        <div className="Setting_section_title">앱 설정</div>
                        <div className="Setting_section_content">
                            <div className="Setting_content_name" onClick={() => history.push('/setting/push')}>알림 설정</div>
                        </div>
                    </div>
                    <div className="Setting_section">
                        <div className="Setting_section_title">앱 정보</div>
                        <div className="Setting_section_content">
                            <div className="Setting_content_version Setting_content_name">
                                <div>앱 버전</div>
                                <div>1.0 v</div>
                            </div>
                            <div className="Setting_content_name">문의하기</div>
                            <div className="Setting_content_name_additional">
                                <div className="Setting_content_name">사업체명 ) 코딱지닷컴</div>
                                <div className="Setting_content_name">대표자 ) 강준호</div>
                                <div className="Setting_content_name">사업자 등록번호 ) 127-56-00490 </div>
                                <div className="Setting_content_name">위치 ) 대치동 906-23 만수빌딩 502 </div>
                                <div className="Setting_content_name">이메일 ) ingconsulting@naver.com </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Setting;