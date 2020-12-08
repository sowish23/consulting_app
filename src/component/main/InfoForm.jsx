import React, { useState, useEffect } from "react";
import "./InfoForm.css";

const Info = props => {
	const {showNav} = props;
	const society = ["생활과 윤리", "윤리와 사상", "한국지리", "세계지리", "동아시아사", "세계사", "법과 정치", "경제", "사회·문화"]
	const science = ["물리1", "화학1", "생명1", "지구과학1", "물리2", "화학2", "생명2", "지구과학2"]
	const career = []

	const [subject, checkSubject] = useState('')

	return (
		<div className={showNav? "Info_page show_nav" : "Info_page"}>
			<div className="Info_content">
				<div className="Info_detail">
					<div className="btn_tab">
						<button className="complete_btn">완료하기</button>
					</div>
					<div className="info">
						<p className="info_title">내 정보 입력</p>
						<div className="info_table">
							<div className="table_contents">
								<div className="contents_title">수험생 이름</div>
								<div>
									<input className="name_input"/>
								</div>
							</div>
							<div className="table_contents">
								<div className="contents_title">수험생과의 관계</div>
								<div className="contents_radio">
									<input id="본인" type="radio" name="relation"/>
									<label className="relation_btn" for="본인">본인</label>
									<input id="학생모" type="radio" name="relation"/>
									<label className="relation_btn" for="학생모">학생모</label>
									<input id="학생부" type="radio" name="relation"/>
									<label className="relation_btn" for="학생부">학생부</label>
								</div>
							</div>
							<div className="table_contents">
								<div className="contents_title">학년</div>
								<div className="contents_radio">
									<input id="고1" type="radio" name="grade"/>
									<label className="relation_btn" for="고1">고1</label>
									<input id="고2" type="radio" name="grade"/>
									<label className="relation_btn" for="고2">고2</label>
									<input id="고3" type="radio" name="grade"/>
									<label className="relation_btn" for="고3">고3</label>
									<input id="N수" type="radio" name="grade"/>
									<label className="relation_btn" for="N수">N수</label>
								</div>
							</div>
							<div className="table_contents">
								<div className="contents_title">출신 고교</div>
								<div>
									<input className="name_input"/>
								</div>
							</div>
							<div className="table_contents">
								<div className="contents_title">핸드폰 번호</div>
								<div>
									<input className="tel_input"/>
									-
									<input className="tel_input"/>
									-
									<input className="tel_input"/>
								</div>
							</div>
							<div className="table_contents">
								<div className="contents_title">이메일 주소</div>
								<div>
									<input className="email_input"/>
								</div>
							</div>
						</div>
					</div>
					<div className="grade">
						<div className="grade_title">
							수능 성적 입력
						</div>
						<div className="grade_subtitle">
							<span className="subtitle">*가채점 결과를 입력해주세요.</span>
						</div>
						<div className="table_contents_title">
							<div className="contents_subject_title">과목</div>
							<div className="contents_input_title">표준점수</div>
							<div className="contents_input_title">백분위</div>
							<div className="contents_input_title">등급</div>
						</div>
						<div className="grade_table">
							<div className="table_contents">
								<div className="contents_subject">국어</div>
								<div className="contents_input">
									<input className="grade_input" placeholder="표준점수 입력"/>
								</div>
								<div className="contents_input">
									<input className="grade_input" placeholder="백분위 입력"/>
								</div>
								<div className="contents_input">
									<input className="grade_input" placeholder="등급 입력"/>
								</div>
							</div>
							<div className="table_contents">
								<div className="contents_subject">
									<select className="contents_select">
										<option value="" selected disabled>수학 가/나</option>
										<option value="가">수학 가</option>
										<option value="나">수학 나</option>
									</select>
								</div>
								<div className="contents_input">
									<input className="grade_input" placeholder="표준점수 입력"/>
								</div>
								<div className="contents_input">
									<input className="grade_input" placeholder="백분위 입력"/>
								</div>
								<div className="contents_input">
									<input className="grade_input" placeholder="등급 입력"/>
								</div>
							</div>
							<div className="table_contents">
								<div className="contents_subject">영어</div>
								<div className="contents_input">
									<input className="grade_input" placeholder="표준점수 입력"/>
								</div>
								<div className="contents_input">
									<input className="grade_input" placeholder="백분위 입력"/>
								</div>
								<div className="contents_input">
									<input className="grade_input" placeholder="등급 입력"/>
								</div>
							</div>
							<div className="table_contents">
								<div className="contents_sub_check">
									<input type="radio" name="subject" value="society" onChange={e => checkSubject(e.target.value)}/>
									<span>사회탐구</span>
								</div>
								<div className="contents_sub_check">
									<input type="radio" name="subject" value="science" onChange={e => checkSubject(e.target.value)}/>
									<span>과학탐구</span>
								</div>
								<div className="contents_sub_check">
									<input type="radio" name="subject" value="career" onChange={e => checkSubject(e.target.value)}/>
									<span>직업탐구</span>
								</div>
							</div>
							<div className="table_contents">
								<div className="contents_subject">
									<select className="contents_select">
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
								<div className="contents_input">
									<input className="grade_input" placeholder="표준점수 입력"/>
								</div>
								<div className="contents_input">
									<input className="grade_input" placeholder="백분위 입력"/>
								</div>
								<div className="contents_input">
									<input className="grade_input" placeholder="등급 입력"/>
								</div>
							</div>
							<div className="table_contents">
								<div className="contents_subject">
									<select className="contents_select">
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
								<div className="contents_input">
									<input className="grade_input" placeholder="표준점수 입력"/>
								</div>
								<div className="contents_input">
									<input className="grade_input" placeholder="백분위 입력"/>
								</div>
								<div className="contents_input">
									<input className="grade_input" placeholder="등급 입력"/>
								</div>
							</div>
							<div className="table_contents">
								<div className="contents_subject">제2외국어</div>
								<div className="contents_input">
									<input className="grade_input" placeholder="표준점수 입력"/>
								</div>
								<div className="contents_input">
									<input className="grade_input" placeholder="백분위 입력"/>
								</div>
								<div className="contents_input">
									<input className="grade_input" placeholder="등급 입력"/>
								</div>
							</div>
							<div className="table_contents">
								<div className="contents_subject">한국사</div>
								<div className="contents_input">
									<input className="grade_input" placeholder="표준점수 입력"/>
								</div>
								<div className="contents_input">
									<input className="grade_input" placeholder="백분위 입력"/>
								</div>
								<div className="contents_input">
									<input className="grade_input" placeholder="등급 입력"/>
								</div>
							</div>
						</div>
						<div className="grade_input_link">
							<span>내신성적 입력하기</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Info;
