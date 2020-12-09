import React from 'react';
import "./Login.css";

const Login = ({history}) => {
    return(
        <div className="Login_page">
            <div className="contents">
                <div className="content_text1">InG 정시 합격 예측</div>
                <div className="content_text2">대입 정시 컨설팅</div>
            </div>
            <button className="kakao_btn" onClick={() => history.push('/help')}>
                <img className="kakao_icon" src={'/assets/icons/kakao-talk.svg'}/>
                <kakaoTalk />
                <span className="p1">카카오톡</span>
                <span className="p2">으로 로그인</span>
            </button>
        </div>
    );
}

export default Login;