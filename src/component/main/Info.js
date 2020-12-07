import React from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./Info.css";
import Footer from '../common/Footer';

const Info = () => {
  return (
    <div>
      <div className="bars"><FontAwesomeIcon icon={faBars} /></div>
      <div className="title">ING 입시연구소</div>
      <button className="btn"></button>
      <p className="subTitle subTitle1">내 정보 입력</p>
      <div className="sub1">
        <div className="userState contents">
          <div className="userName">
            수험생 이름
            <input className="name"/>
          </div>
        </div>
        <hr/>
        <div className="relation contents">
          수험생과의 관계
          <button className="relation_btn">본인</button>
          <button className="relation_btn"> 학생모</button>
          <button className="relation_btn">학생부</button>
        </div>
        <hr/>
        <div className="grade contents">
          <div>
            학년
            <button className="grade_btn grade_btn1">고1</button>
            <button className="grade_btn">고2</button>
            <button className="grade_btn">고3</button>
            <button className="grade_btn">N수</button>
          </div>
        </div>
        <hr/>
        <div className="highShool contents">
          출신 고교
          <input  className="highShool-input"/>
        </div>
        <hr/>
        <div className="phone-number contents">
          핸드폰 번호
          <input className="phone phone-input"/>-
          <input className="phone"/>-
          <input className="phone"/> 
        </div>
        <hr/>
        <div className="email contents">
          이메일 주소
          <input className="email-input"/>
        </div>
      </div>
      <p className="subTitle subTitle2">수능 성적 입력</p>
      <div className="sub2">
        <div className="satGrade"></div>
        <div>
          <div className="must">※필수 입력</div>
          <div className="subject">국어</div>
          <input className="score" placeholder="원점수 입력"/>
          <hr/>
        </div>
        <div>
          <div className="must">※필수 입력</div>
          <div className="subject">수학(가/나)▼</div>
          <input className="score" placeholder="원점수 입력"/>
          <hr/>
        </div>
        <div>
          <div className="must">※필수 입력</div>
          <div className="subject">영어</div>
          <input className="score" placeholder="원점수 입력"/>
          <hr/>
        </div>
        <div>
          <div className="must">※필수 입력</div>
          <div className="subject">탐구1▼</div>
          <input className="score" placeholder="원점수 입력"/>
          <hr/>
        </div>
        <div>
          <div className="must">※필수 입력</div>
          <div className="subject">탐구2▼</div>
          <input className="score" placeholder="원점수 입력"/>
          <hr/>
        </div>
        <div>
          <div className="must">※필수 입력</div>
          <div className="subject">한국사</div>
          <input className="score" placeholder="원점수 입력"/>
          <hr/>
        </div>
        <div className="not-must">
          <div className="subject">제 2외국어/한문</div>
          <input className="score" placeholder="원점수 입력"/>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Info;
