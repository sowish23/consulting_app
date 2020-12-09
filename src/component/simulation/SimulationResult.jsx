import React from "react";
import "./SimulationResult.css";
import Header from '../common/Header';
import Footer from '../common/Footer';

const SimulationResult = ({history}) => {
    const type = ["가군", "나군", "다군"]
    return (
        <div>
            <Header />
            <div className="simulation_page">
                <div className="simulation_content">
                    <div className="simulation_detail">
                        <div className="section">
                            <div className="link_title">모의 지원 결과 보고</div>
                            <div className="btn_tab">
                                <button className="complete_btn" onClick={() => history.push('/simulation')}>◀ 이전으로</button>
                            </div>
                            <div className="result">
                                <div className="result_title">가군</div>
                                <div className="result_table">
                                    <table>
                                        <thead>
                                            <tr>
                                                <td>대학</td>
                                                <td>학과</td>
                                                <td>예측컷</td>
                                                <td>내점수</td>
                                                <td>예측컷과차이</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <select>
                                                        <option selected disabled>검색하기</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <select>
                                                        <option selected disabled>검색하기</option>
                                                    </select>
                                                </td>
                                                <td>500.3</td>
                                                <td>100.2</td>
                                                <td>500</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="result_hr"></div>
                                <div className="result_detail">
                                    <div className="detail_content">
                                        <div className="detail_title">정원 </div>
                                        <div><span>4900</span> 명</div>
                                    </div>
                                    <div className="detail_content">
                                        <div className="detail_title">지원자 </div>
                                        <div><span>4900</span> 명</div>
                                    </div>
                                    <div className="detail_content">
                                        <div className="detail_title">나의 등수 </div>
                                        <div><span>4900</span> 등</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default SimulationResult;
