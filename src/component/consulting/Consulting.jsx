import React from "react";
import "./Consulting.css";
import Header from '../common/Header';
import Footer from '../common/Footer';

const Consulting = () => {
    return(
        <div>
            <Header />
            <div className="Consulting_page">
                <div className="Consulting_content">
                    <div className="Consulting_contents">
                        <img src={'/assets/logo/ing 로고.png'} />
                        <div className="Consulting_content_text1">현재 'AI 맞춤 컨설팅'은 서비스 준비중입니다.</div>
                        <div className="Consulting_content_text2">12월 23일 수능 성적 발표 후 <br/>모의 지원 서비스와 함께 시작됩니다.</div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Consulting;