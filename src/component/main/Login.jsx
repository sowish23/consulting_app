import React from 'react';
import "./Login.css";

const Login = () => {
    return(
        <div>
            <p className="title">ING 입시연구소</p>
            <p className="sub-title">대입 정시 컨설팅</p>
            <button className="kakao_btn">
                <img className="kakao_icon" src={'/assets/icons/kakao-talk.svg'}/>
                <kakaoTalk />
                <span className="p1">카카오톡</span>
                <span className="p2">으로 로그인</span>
            </button>
        </div>
    );
}

export default Login;