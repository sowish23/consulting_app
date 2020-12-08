import React from "react";
import "./Simulation.css";

const Simulation = () => {
    const type = ["가군", "나군", "다군"]
	return (
		<div className="simulation_page">
			<div className="simulation_content">
				<div className="simulation_detail">
					{/* <div className="section">
						<div className="univ_box">
                            <div className="box_content">
                                <div className="contents_title">계열</div>
                                <div className="contents_radio">
                                    <input id="가군" type="radio" name="relation"/>
                                    <label className="relation_btn" for="가군">가군</label>
                                    <input id="나군" type="radio" name="relation"/>
                                    <label className="relation_btn" for="나군">나군</label>
                                    <input id="다군" type="radio" name="relation"/>
                                    <label className="relation_btn" for="다군">다군</label>
                                </div>
                            </div>
                            <div className="box_content">
                                <div className="contents_title">대학</div>
                                <div className="contents_input">
                                    <input placeholder="▼검색하기"/>
                                </div>
                            </div>
                            <div className="box_content">
                                <div className="contents_title">학과</div>
                                <div className="contents_input">
                                    <input placeholder="▼검색하기"/>
                                </div>
                            </div>
						</div>
					</div>
                    <div className="section_hr">
                    </div> */}
                    <div className="section">
						<div className="link_title">모의 지원 입력</div>
                        {
                            type.map(e => {
                                return (
                                    <div className="apply_type">
                                        <div className="type_title">{e}</div>
                                        <div className="apply_table">
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
                                                    {
                                                        type.map(() => {
                                                            return(
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
                                                            )
                                                        })
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="apply_btn">
                                            <button>모의 지원 결과 보러 가기</button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
				</div>
			</div>
		</div>
	);
};

export default Simulation;
