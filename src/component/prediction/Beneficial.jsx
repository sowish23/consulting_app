import React from "react";
import "./Beneficial.css";
import Header from '../common/Header';
import Footer from '../common/Footer';


const Beneficial = () => {
    const type = ["가군", "나군", "다군"]
    return (
        <div>
            <Header />
            <div className=".Beneficial_simulation_page">
                <div className=".Beneficial_simulation_content">
                    <div className=".Beneficial_simulation_detail">
                        <div className=".Beneficial_section">
                            <div className=".Beneficial_link_title">나에게 유리한 대학 찾기</div>
                            <div className=".Beneficial_result_hr"></div>
                            <div className=".Beneficial_result">
                                <div className=".Beneficial_result_title">지원 희망 대학 입력</div>
                                {
                                    type.map(e => {
                                        return (
                                            <div>
                                                <div className=".Beneficial_result_subtitle">{e}</div>
                                                <div className=".Beneficial_result_table">
                                                    <table>
                                                        <thead>
                                                            <tr>
                                                                <td>대학</td>
                                                                <td>학과</td>
                                                                <td>예측컷</td>
                                                                <td>내점수</td>
                                                                <td>예측컷과차이</td>
                                                                <td>유블리지수</td>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {
                                                                type.map(() => {
                                                                    return (
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
                                                                            <td>500</td>
                                                                        </tr>
                                                                    )
                                                                })
                                                            }
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Beneficial;
