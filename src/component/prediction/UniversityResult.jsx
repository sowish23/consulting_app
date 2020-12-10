import React, { useState, useEffect } from "react";
import "./UniversityResult.css";
import Header from '../common/Header';
import Footer from '../common/Footer';

const UniversityResult = () => {
    const [pass, setPass] = useState(true)
    return (
        <div>
            <Header />
            <div className="UniversityResult_page">
                <div className="UniversityResult_content">
                    <div className="UniversityResult_detail">
                        <div className="UniversityResult_section">
                            <div className="UniversityResult_btn_tab">
                                <button className="UniversityResult_complete_btn">◀ 이전으로</button>
                            </div>
                            <div className="UniversityResult_result">
                                <div className="UniversityResult_result_title">
                                    국민대학교 소프트웨어학과의 내 점수
                            </div>
                                <div className="UniversityResult_result_table">
                                    <table>
                                        <thead>
                                            <tr>
                                                <td></td>
                                                <td>내 점수</td>
                                                <td className="UniversityResult_slash">/</td>
                                                <td>만점</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>국어</td>
                                                <td>80</td>
                                                <td className="UniversityResult_slash">/</td>
                                                <td>100</td>
                                            </tr>
                                            <tr>
                                                <td>수학</td>
                                                <td>80</td>
                                                <td className="UniversityResult_slash">/</td>
                                                <td>100</td>
                                            </tr>
                                            <tr>
                                                <td>탐구</td>
                                                <td>80</td>
                                                <td className="UniversityResult_slash">/</td>
                                                <td>100</td>
                                            </tr>
                                            <tr>
                                                <td>영어</td>
                                                <td>80</td>
                                                <td className="UniversityResult_slash">/</td>
                                                <td>100</td>
                                            </tr>
                                            <tr>
                                                <td>한국사</td>
                                                <td>80</td>
                                                <td className="UniversityResult_slash">/</td>
                                                <td>100</td>
                                            </tr>
                                            <tr>
                                                <td>내신</td>
                                                <td>80</td>
                                                <td className="UniversityResult_slash">/</td>
                                                <td>100</td>
                                            </tr>
                                            <tr className="UniversityResult_total_tr">
                                                <td>합계</td>
                                                <td>80</td>
                                                <td className="UniversityResult_slash">/</td>
                                                <td>전형 총점 100</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="UniversityResult_result_hr"></div>
                                <div className="UniversityResult_result_badge">
                                    {
                                        pass ?
                                            <div className="UniversityResult_pass_badge">합격 예상</div> :
                                            <div className="UniversityResult_nonpass_badge">불합격 예상</div>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="UniversityResult_section">
                            <div className="UniversityResult_result_number">
                                <table>
                                    <thead>
                                        <tr>
                                            <td>예측컷</td>
                                            <td>내 점수</td>
                                            <td>예측컷과의 차이</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>20</td>
                                            <td>100</td>
                                            <td>80</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default UniversityResult;
