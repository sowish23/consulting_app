import React from "react";
import "./Prediction.css";
import Header from '../common/Header';
import Footer from '../common/Footer';

const Prediction = ({history}) => {
	return (
		<div>
			<Header />
				<div className="prediction_page">
					<div className="prediction_content">
						<div className="prediction_detail">
							<div className="section" onClick={() => history.push('/prediction/mygrade')}>
								<div className="link_title">내 성적 분석 바로가기</div>
								<div className="grade_table">
									<table>
										<tbody>
											<tr>
												<th>과목</th>
												<th>원점수</th>
												<th>백분위</th>
												<th>표점</th>
											</tr>
											<tr>
												<td>국어</td>
												<td>100</td>
												<td>97</td>
												<td>97</td>
											</tr>
											<tr>
												<td>수학</td>
												<td>100</td>
												<td>77</td>
												<td>77</td>
											</tr>
											<tr>
												<td>영어</td>
												<td>100</td>
												<td>1</td>
												<td>1</td>
											</tr>
											<tr>
												<td>한국사</td>
												<td>100</td>
												<td>13</td>
												<td>13</td>
											</tr>
											<tr>
												<td>탐구1</td>
												<td>100</td>
												<td>20</td>
												<td>20</td>
											</tr>
											<tr>
												<td>탐구2</td>
												<td>100</td>
												<td>20</td>
												<td>20</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
							<div className="section">
								<div className="link_title">대학 / 학과별 분석 바로가기</div>
								<div className="analysis_box">
									<button className="analysis_btn">대학검색</button>
									<button className="analysis_btn">학과검색</button>
								</div>
							</div>
							<div className="section">
								<div className="link_title">나에게 유리한 대학 찾기 바로가기</div>
								<div className="univ_box">
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
							</div>
						</div>
					</div>
				</div>
			<Footer />
		</div>
	);
};

export default Prediction;
