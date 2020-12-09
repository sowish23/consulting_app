import React from "react";
import "./MyGrade.css";
import Header from '../common/Header';
import Footer from '../common/Footer';

const MyGrade = () => {
	return (
		<div>
			<Header />
			<div className="prediction_page">
				<div className="prediction_content">
					<div className="prediction_detail">
						<div className="section">
							<div className="link_title">내 성적</div>
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
										<tr>
											<td>제2외/한문</td>
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
							<div className="grade_table">
								<div className="sort_tap">
									<select>
										<option selected>점수별</option>
									</select>
								</div>
								<table>
									<tbody>
										<tr>
											<th>조합순위</th>
											<th>조합명</th>
											<th>내순위</th>
										</tr>
										<tr>
											<td>1순위</td>
											<td>국수사2</td>
											<td>447</td>
										</tr>
										<tr>
											<td>2순위</td>
											<td>국수사(1)</td>
											<td>447</td>
										</tr>
										<tr>
											<td>3순위</td>
											<td>국/수/사(2) 中 택2</td>
											<td>447</td>
										</tr>
										<tr>
											<td>4순위</td>
											<td>국/수/사(1) 中 택2</td>
											<td>447</td>
										</tr>
										<tr>
											<td>5순위</td>
											<td>사(1)+국/수 中 택2</td>
											<td>447</td>
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

export default MyGrade;
