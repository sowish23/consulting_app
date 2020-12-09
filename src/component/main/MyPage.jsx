import React, { useState, useEffect } from "react";
import "./MyPage.css";
import Header from '../common/Header';
import Footer from '../common/Footer';

const MyPage = ({history}) => {
	const society = ["생활과 윤리", "윤리와 사상", "한국지리", "세계지리", "동아시아사", "세계사", "법과 정치", "경제", "사회·문화"]
	const science = ["물리1", "화학1", "생명1", "지구과학1", "물리2", "화학2", "생명2", "지구과학2"]
	const career = []

	const [subject, checkSubject] = useState('')

	return (
		<div>
			<Header />
			<div className="MyPage_page">
				<div className="MyPage_content">
					<div className="MyPage_detail">
						<div className="MyPage_info">
							<div className="MyPage_info_table">
								<div className="MyPage_table_contents">
									<div className="MyPage_contents_title">수험생 이름</div>
									<div>
										<input className="MyPage_name_input" />
									</div>
								</div>
								<div className="MyPage_table_contents">
									<div className="MyPage_contents_title">수험생과의 관계</div>
									<div className="MyPage_contents_radio">
										<input id="본인" type="radio" name="relation" />
										<label className="MyPage_relation_btn" for="본인">본인</label>
										<input id="학생모" type="radio" name="relation" />
										<label className="MyPage_relation_btn" for="학생모">학생모</label>
										<input id="학생부" type="radio" name="relation" />
										<label className="MyPage_relation_btn" for="학생부">학생부</label>
									</div>
								</div>
								<div className="MyPage_table_contents">
									<div className="MyPage_contents_title">학년</div>
									<div className="MyPage_contents_radio">
										<input id="고1" type="radio" name="MyPage_grade" />
										<label className="MyPage_relation_btn" for="고1">고1</label>
										<input id="고2" type="radio" name="MyPage_grade" />
										<label className="MyPage_relation_btn" for="고2">고2</label>
										<input id="고3" type="radio" name="MyPage_grade" />
										<label className="MyPage_relation_btn" for="고3">고3</label>
										<input id="N수" type="radio" name="MyPage_grade" />
										<label className="MyPage_relation_btn" for="N수">N수</label>
									</div>
								</div>
								<div className="MyPage_table_contents">
									<div className="MyPage_contents_title">출신 고교</div>
									<div>
										<input className="MyPage_name_input" />
									</div>
								</div>
								<div className="MyPage_table_contents">
									<div className="MyPage_contents_title">핸드폰 번호</div>
									<div>
										<input className="MyPage_tel_input" />
									-
									<input className="MyPage_tel_input" />
									-
									<input className="MyPage_tel_input" />
									</div>
								</div>
								<div className="MyPage_table_contents">
									<div className="MyPage_contents_title">이메일 주소</div>
									<div>
										<input className="MyPage_email_input" />
									</div>
								</div>
							</div>
						</div>
						<div className="MyPage_grade">
							<div className="MyPage_table_contents_title">
								<div className="MyPage_contents_subject_title">과목</div>
								<div className="MyPage_contents_input_title">표준점수</div>
								<div className="MyPage_contents_input_title">백분위</div>
								<div className="MyPage_contents_input_title">등급</div>
							</div>
							<div className="MyPage_grade_table">
								<div className="MyPage_table_contents">
									<div className="MyPage_contents_subject">국어</div>
									<div className="MyPage_contents_input">
										<input className="MyPage_grade_input" placeholder="표준점수 입력" />
									</div>
									<div className="MyPage_contents_input">
										<input className="MyPage_grade_input" placeholder="백분위 입력" />
									</div>
									<div className="MyPage_contents_input">
										<input className="MyPage_grade_input" placeholder="등급 입력" />
									</div>
								</div>
								<div className="MyPage_table_contents">
									<div className="MyPage_contents_subject">
										<select className="MyPage_contents_select">
											<option value="" selected disabled>수학 가/나</option>
											<option value="가">수학 가</option>
											<option value="나">수학 나</option>
										</select>
									</div>
									<div className="MyPage_contents_input">
										<input className="MyPage_grade_input" placeholder="표준점수 입력" />
									</div>
									<div className="MyPage_contents_input">
										<input className="MyPage_grade_input" placeholder="백분위 입력" />
									</div>
									<div className="MyPage_contents_input">
										<input className="MyPage_grade_input" placeholder="등급 입력" />
									</div>
								</div>
								<div className="MyPage_table_contents">
									<div className="MyPage_contents_subject">영어</div>
									<div className="MyPage_contents_input">
										<input className="MyPage_grade_input" placeholder="표준점수 입력" />
									</div>
									<div className="MyPage_contents_input">
										<input className="MyPage_grade_input" placeholder="백분위 입력" />
									</div>
									<div className="MyPage_contents_input">
										<input className="MyPage_grade_input" placeholder="등급 입력" />
									</div>
								</div>
								<div className="MyPage_table_contents">
									<div className="MyPage_contents_sub_check">
										<input type="radio" name="subject" value="society" onChange={e => checkSubject(e.target.value)} />
										<span>사회탐구</span>
									</div>
									<div className="MyPage_contents_sub_check">
										<input type="radio" name="subject" value="science" onChange={e => checkSubject(e.target.value)} />
										<span>과학탐구</span>
									</div>
									<div className="MyPage_contents_sub_check">
										<input type="radio" name="subject" value="career" onChange={e => checkSubject(e.target.value)} />
										<span>직업탐구</span>
									</div>
								</div>
								<div className="MyPage_table_contents">
									<div className="MyPage_contents_subject">
										<select className="MyPage_contents_select">
											<option value="" selected disabled>탐구 1</option>
											{
												subject === 'society' ?
													society.map(e => {
														return (
															<option value={e}>{e}</option>
														)
													}) :
													subject === 'science' ?
														science.map(e => {
															return (
																<option value={e}>{e}</option>
															)
														}) :
														career.map(e => {
															return (
																<option value={e}>{e}</option>
															)
														})
											}
										</select>
									</div>
									<div className="MyPage_contents_input">
										<input className="MyPage_grade_input" placeholder="표준점수 입력" />
									</div>
									<div className="MyPage_contents_input">
										<input className="MyPage_grade_input" placeholder="백분위 입력" />
									</div>
									<div className="MyPage_contents_input">
										<input className="MyPage_grade_input" placeholder="등급 입력" />
									</div>
								</div>
								<div className="MyPage_table_contents">
									<div className="MyPage_contents_subject">
										<select className="MyPage_contents_select">
											<option value="" selected disabled>탐구 2</option>
											{
												subject === 'society' ?
													society.map(e => {
														return (
															<option value={e}>{e}</option>
														)
													}) :
													subject === 'science' ?
														science.map(e => {
															return (
																<option value={e}>{e}</option>
															)
														}) :
														career.map(e => {
															return (
																<option value={e}>{e}</option>
															)
														})
											}
										</select>
									</div>
									<div className="MyPage_contents_input">
										<input className="MyPage_grade_input" placeholder="표준점수 입력" />
									</div>
									<div className="MyPage_contents_input">
										<input className="MyPage_grade_input" placeholder="백분위 입력" />
									</div>
									<div className="MyPage_contents_input">
										<input className="MyPage_grade_input" placeholder="등급 입력" />
									</div>
								</div>
								<div className="MyPage_table_contents">
									<div className="MyPage_contents_subject">제2외국어</div>
									<div className="MyPage_contents_input">
										<input className="MyPage_grade_input" placeholder="표준점수 입력" />
									</div>
									<div className="MyPage_contents_input">
										<input className="MyPage_grade_input" placeholder="백분위 입력" />
									</div>
									<div className="MyPage_contents_input">
										<input className="MyPage_grade_input" placeholder="등급 입력" />
									</div>
								</div>
								<div className="MyPage_table_contents">
									<div className="MyPage_contents_subject">한국사</div>
									<div className="MyPage_contents_input">
										<input className="MyPage_grade_input" placeholder="표준점수 입력" />
									</div>
									<div className="MyPage_contents_input">
										<input className="MyPage_grade_input" placeholder="백분위 입력" />
									</div>
									<div className="MyPage_contents_input">
										<input className="MyPage_grade_input" placeholder="등급 입력" />
									</div>
								</div>
							</div>
						</div>
						<div className="MyPage_edit_btn">
							<button onClick={() => history.push('/info_form')}>수정하기</button>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default MyPage;
