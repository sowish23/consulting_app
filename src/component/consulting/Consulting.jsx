import React from "react";
import "./Consulting.css";

const Consulting = () => {
    return(
        <div className="Consult_page">
            <div className="Consult_content">
                <div className="contents">
                    <img src={'/assets/logo/ing 로고.png'} />
                    <div className="content_text1">현재 'AI 맞춤 컨설팅'은 서비스 준비중입니다.</div>
                    <div className="content_text2">12월 23일 수능 성적 발표 후 <br/>모의 지원 서비스와 함께 시작됩니다.</div>
                </div>
            </div>
        </div>
    );
}
export default Consulting;