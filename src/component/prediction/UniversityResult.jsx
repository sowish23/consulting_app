import React, { useState, useEffect } from "react";
import "./UniversityResult.css";

const UniversityResult = () => {
    const [pass, setPass] = useState(true)
	return (
		<div className="simulation_page">
			<div className="simulation_content">
				<div className="simulation_detail">
                    <div className="section">
                        <div className="btn_tab">
                            <button className="complete_btn">◀ 이전으로</button>
                        </div>
                        <div className="result">
                            <div className="result_title">
                                국민대학교 소프트웨어학과의 내 점수
                            </div>
                            <div className="result_table">
                                <table>
                                    <thead>
                                        <tr>
                                            <td></td>
                                            <td>내 점수</td>
                                            <td className="slash">/</td>
                                            <td>만점</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>국어</td>
                                            <td>80</td>
                                            <td className="slash">/</td>
                                            <td>100</td>
                                        </tr>
                                        <tr>
                                            <td>수학</td>
                                            <td>80</td>
                                            <td className="slash">/</td>
                                            <td>100</td>
                                        </tr>
                                        <tr>
                                            <td>탐구</td>
                                            <td>80</td>
                                            <td className="slash">/</td>
                                            <td>100</td>
                                        </tr>
                                        <tr>
                                            <td>영어</td>
                                            <td>80</td>
                                            <td className="slash">/</td>
                                            <td>100</td>
                                        </tr>
                                        <tr>
                                            <td>한국사</td>
                                            <td>80</td>
                                            <td className="slash">/</td>
                                            <td>100</td>
                                        </tr>
                                        <tr>
                                            <td>내신</td>
                                            <td>80</td>
                                            <td className="slash">/</td>
                                            <td>100</td>
                                        </tr>
                                        <tr className="total_tr">
                                            <td>합계</td>
                                            <td>80</td>
                                            <td className="slash">/</td>
                                            <td>전형 총점 100</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="result_hr"></div>
                            <div className="result_badge">
                                {
                                    pass ? 
                                    <div className="pass_badge">합격 예상</div> :
                                    <div className="nonpass_badge">불합격 예상</div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="section">
                        <div className="result_number">
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
	);
};

export default UniversityResult;
