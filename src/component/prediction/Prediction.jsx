import React from "react";
import "./Prediction.css";
import Header from '../common/Header';
import Footer from '../common/Footer';

const Prediction = ({history}) => {
	return (
		<div>
			<Header />
				<div className="Prediction_page">
					<div className="Prediction_content">
						<div className="Prediction_detail">
							<div className="Prediction_section" onClick={() => history.push('/prediction/mygrade')}>
								<div className="Prediction_link_title">내 성적 분석 바로가기</div>
								<div className="Prediction_grade_table">
									<table>
										<tbody>
											<tr>
												<th>과목</th>
												<th>표점</th>
												<th>백분위</th>
												<th>등급</th>
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
							<div className="Prediction_section" onClick={() => history.push('/prediction/university')}>
								<div className="Prediction_link_title">대학 / 학과별 분석 바로가기</div>
								<div className="Prediction_analysis_box">
									<button className="Prediction_analysis_btn">대학검색</button>
									<button className="Prediction_analysis_btn">학과검색</button>
								</div>
							</div>
							<div className="Prediction_section" onClick={() => history.push('/prediction/beneficial')}>
								<div className="Prediction_link_title">나에게 유리한 대학 찾기 바로가기</div>
								<div className="Prediction_univ_box">
									대학별 유블리 지수 확인하기 (특허 출원)  ▶
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
