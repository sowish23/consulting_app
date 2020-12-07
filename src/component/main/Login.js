import React from 'react';
import "./Login.css";

const Login = () => {
    return(
        <div>
            <p className="title">ING 입시연구소</p>
            <p className="sub-title">대입 정시 컨설팅</p>
            <div className="kakao">
                <img/>
                <span className="p1">카카오톡</span>
                <span className="p2">으로 로그인</span>
            </div>
            {/* <div className="facebook">
                <img/>
                <span className="p1">구글</span>
                <span className="p2">로 로그인</span>
            </div> */}
        </div>
    );
}

export default Login;