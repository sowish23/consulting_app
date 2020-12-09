import React from 'react';
import "./Login.css";

const Login = ({history}) => {
    return(
        <div className="Login_page">
            <div className="Login_contents">
                <div className="Login_content_text1">InG 정시 합격 예측</div>
                <div className="Login_content_text2">대입 정시 컨설팅</div>
            </div>
            <button className="Login_kakao_btn" onClick={() => history.push('/help')}>
                <img className="Login_kakao_icon" src={'/assets/icons/kakao-talk.svg'}/>
                <kakaoTalk />
                <span className="Login_p1">카카오톡</span>
                <span className="Login_p2">으로 로그인</span>
            </button>
        </div>
    );
}

export default Login;