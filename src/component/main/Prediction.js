import React from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./Prediction.css";
import Footer from '../common/Footer';

const Prediction = () => {
  return (
    <div>
      <div className="bars"><FontAwesomeIcon icon={faBars} /></div>
      <div className="title">ING 입시연구소</div>
      <div className="shortcuts shortcuts1">내 성적 분석 바로가기</div>
      <table className="table">
        <tr>
          <th className="th solid-bottom">
            과목
          </th>
          <th className="th solid-bottom">
            원점수
          </th>
          <th className="th solid-bottom">
            백분위
          </th>
          <th className="solid-bottom">표점</th>
        </tr>
        <tr>
          <td className="solid-bottom">국어</td>
          <td className="solid-bottom">100</td>
          <td className="solid-bottom">97</td>
          <td className="solid-bottom">97</td>
        </tr>
        <tr>
          <td className="solid-bottom">수학</td>
          <td className="solid-bottom">100</td>
          <td className="solid-bottom">77</td>
          <td className="solid-bottom">77</td>
        </tr>
        <tr>
          <td className="solid-bottom">영어</td>
          <td className="solid-bottom">100</td>
          <td className="solid-bottom">1</td>
          <td className="solid-bottom">1</td>
        </tr>
        <tr>
          <td className="solid-bottom">한국사</td>
          <td className="solid-bottom">100</td>
          <td className="solid-bottom">13</td>
          <td className="solid-bottom">13</td>
        </tr>
        <tr>
          <td className="solid-bottom">탐구1</td>
          <td className="solid-bottom">100</td>
          <td className="solid-bottom">20</td>
          <td className="solid-bottom">20</td>
        </tr>
        <tr>
          <td className="solid-bottom">탐구2</td>
          <td className="solid-bottom">100</td>
          <td className="solid-bottom">20</td>
          <td className="solid-bottom">20</td>
        </tr>
      </table>
      <div className="shortcuts shortcuts2">대학 / 학과별 분석 바로가기</div>
      <div className="group1">
        <button className="group1-btn btn-university">대학교별</button>
        <button className="group1-btn btn-department">학과별</button>
      </div>
      <div className="shortcuts shortcuts3">나에게 유리한 대학 찾기</div>
      <div className="group2">
        <span className="tag tag1">계열</span>
        <button className="group2-btn1">가군</button>
        <button className="group2-btn2">나군</button>
        <button className="group2-btn3">다군</button>
        <hr className="group2-hr"/>
        <span className="tag tag2">대학</span>
        <input className="group2-input" placeholder="▼검색하기"/>
        <hr className="group2-hr"/>
        <span className="tag tag3">학과</span>
        <input className="group2-input" placeholder="▼검색하기"/>
        <hr className="group2-hr"/>
      </div>
      <Footer />
    </div>
  );
};

export default Prediction;
