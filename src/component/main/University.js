import React from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./University.css";
import Footer from '../common/Footer';
import Header from '../common/Header';

const University = () => {
  return (
    <div>
      <Header />
      <div className="sub-title">대학 / 학과별 분석</div>
      <div className="contents">
        <div className="tabs">
          <button className="tab1">대학교별</button>
          <button className="tab2">학과별</button>
        </div>
        <div className="search">▼대학교 검색</div>
        <table className="table">
          <tr>
            <th><span className="table-title title1">대학명</span></th>
            <th><span className="table-title title2">학과</span></th>
            <th><span className="table-title title3">예측</span></th>
          </tr>
          <tr>
            <td>서울여대</td>
            <td></td>
            <td>
              <input className="result" type="button" value="결과" />
            </td>
          </tr>
          <tr>
            <td>서울여대</td>
            <td>수학과</td>
            <td>
              <input className="result" type="button" value="결과" />
            </td>
          </tr>
          <tr>
            <td>서울여대</td>
            <td>멀티미디어학과</td>
            <td>
              <input className="result" type="button" value="결과" />
            </td>
          </tr>
          <tr>
            <td>서울여대</td>
            <td></td>
            <td>
              <input className="result" type="button" value="결과" />
            </td>
          </tr>
          <tr>
            <td>서울여대</td>
            <td>행정학과</td>
            <td>
              <input className="result" type="button" value="결과" />
            </td>
          </tr>
          <tr>
            <td>서울여대</td>
            <td>조경학과</td>
            <td>
              <input className="result" type="button" value="결과" />
            </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
        </table>
      </div>
      <div className="pages">
        <div className="page1">1</div>
        <div className="page2">2</div>
        <div className="page3">3</div>
      </div>
      <Footer />
    </div>
  );
};

export default University;
