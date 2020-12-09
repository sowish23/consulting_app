import React from "react";
import "./SchoolGradeForm.css";
import Footer from '../common/Footer';
import Header from '../common/Header';

const SchoolGradeForm = ({history}) => {
	const korean = ["국어", "국어Ⅰ", "국어생활", "문학", "문학Ⅰ", "문학Ⅱ", "문법", "독서", "작문", "화법", "화법과작문Ⅰ", "화법과작문Ⅱ", "독서와문법Ⅰ", "독서와문법Ⅱ"]
	const math = ["공통수학", "수학", "수학Ⅰ", "수학Ⅱ", "실용수학", "이산수학", "확률과통계", "수학의활용", "미적분과통계기본", "적분과통계", "기하와벡터"]
	const english = ["공통영어", "영어", "영어Ⅰ", "엉어Ⅱ", "영어독해", "영어작문", "영어회화", "영어독해와작문", "심화영어독해와작문", "실용영어Ⅰ", "실용영어Ⅱ", "실용영어독해와작문"]
	const society = ["경제", "경제지리", "공통사회", "국사", "도덕", "동아시아", "법과사회", "사회", "사회문화", "세계사", "세계지리", "윤리", "인간사회와환경", "정치", "한국근현대사", "한국지리", "한국사"]
	const science = ["공통과학", "과학", "과학Ⅰ", "물리", "물리Ⅰ", "물리Ⅱ", "생물", "생물Ⅰ", "생물Ⅱ", "생활과과학", "지구과학", "지구과학Ⅰ", "지구과학Ⅱ", "화학", "화학Ⅰ", "화학Ⅱ", "생명과학"]
	const etc = ["음악", "음악과생활", "음악실기", "음악이론", "미술", "미술과생활", "미술실기", "미술이론", "체육", "체육과건강", "체육실기", "체육이론", "가정과학",
	"공업기술", "기술가정", "기술경영", "농업과학", "해양과학", "독일어", "독일어Ⅰ", "독일어Ⅱ", "스페인어Ⅰ", "스페인어Ⅱ", "일본어", "일본어Ⅰ", "일본어Ⅱ", "중국어", "중국어Ⅰ",
	"중국어Ⅱ", "한문", "한문고전", "교양", "국제물류실무", "국제통상실무", "금융일반", "사무관리실무", "상업경제", "상업기술", "상업디자인", "컴퓨터일반", "회계원리", "회계정보처리시스템"]
	const subjects = [korean, math, english, society, science, etc]
	const semester = [[1, 1], [1, 2], [2, 1], [2, 2], [3, 1], [3, 2]]
	return (
		<div className="SchoolGradeForm_page">
			<Header />
			<div className="SchoolGradeForm_content">
				<div className="SchoolGradeForm_detail">
					<div className="btn_tab">
						<button className="complete_btn" onClick={() => history.push('/mypage')}>완료하기</button>
					</div>
					<div className="info">
						<p className="info_title">내신 성적 입력</p>
						{
							semester.map(e => {
								return (
									<div className="info_table">
										<div className="grade_cards">
											<div className="grade_card">{e[0]}학년</div>
											<div className="grade_card">{e[1]}학기</div>
										</div>
										<div className="score_table">
											<table>
												<tbody>
													<tr>
														<td>교과</td>
														<td>과목</td>
														<td>단위수</td>
														<td>성취도</td>
														<td>등급</td>
													</tr>
													{
														subjects.map(sub => {
															return (
																<tr>
																	<td>
																		{
																			sub === korean ? "국어" :
																			sub === math ? "수학" :
																			sub === english ? "영어" :
																			sub === society ? "사회" :
																			sub === science ? "과학" : 
																			"기타"
																		}
																	</td>
																	<td>
																		<select className="table_select">
																			<option value=""></option>
																			{
																				sub.map(e => {
																					return(
																						<option value={e}>{e}</option>
																					)
																				})
																			}
																		</select>
																	</td>
																	<td>
																		<input placeholder="입력" className="table_input"/>
																	</td>
																	<td>
																		<input placeholder="입력" className="table_input"/>
																	</td>
																	<td>
																		<input placeholder="입력" className="table_input"/>
																	</td>
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
			<Footer />
		</div>
	);
};

export default SchoolGradeForm;
