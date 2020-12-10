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
						<div className="MyPage_btn_tab">
							<button className="MyPage_complete_btn" onClick={() => history.push('/info_form')}>수정하기</button>
						</div>
						<div className="MyPage_info">
							<div className="MyPage_info_table">
								<div className="MyPage_table_contents">
									<div className="MyPage_contents_title">수험생 이름</div>
									<div>
										김수능
									</div>
								</div>
								<div className="MyPage_table_contents">
									<div className="MyPage_contents_title">수험생과의 관계</div>
									<div className="MyPage_contents_radio">
										본인
									</div>
								</div>
								<div className="MyPage_table_contents">
									<div className="MyPage_contents_title">학년</div>
									<div className="MyPage_contents_radio">
										고3
									</div>
								</div>
								<div className="MyPage_table_contents">
									<div className="MyPage_contents_title">출신 고교</div>
									<div>정시고등학교</div>
								</div>
								<div className="MyPage_table_contents">
									<div className="MyPage_contents_title">핸드폰 번호</div>
									<div>
										010-1111-2222
									</div>
								</div>
								<div className="MyPage_table_contents">
									<div className="MyPage_contents_title">이메일 주소</div>
									<div>
										test@gmail.com
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
										100
									</div>
									<div className="MyPage_contents_input">
										92
									</div>
									<div className="MyPage_contents_input">
										2
									</div>
								</div>
								<div className="MyPage_table_contents">
									<div className="MyPage_contents_subject">
										수학 가
									</div>
									<div className="MyPage_contents_input">
										100
									</div>
									<div className="MyPage_contents_input">
										92
									</div>
									<div className="MyPage_contents_input">
										2
									</div>
								</div>
								<div className="MyPage_table_contents">
									<div className="MyPage_contents_subject">영어</div>
									<div className="MyPage_contents_input">
										100
									</div>
									<div className="MyPage_contents_input">
										92
									</div>
									<div className="MyPage_contents_input">
										2
									</div>
								</div>
								<div className="MyPage_table_contents">
									<div className="MyPage_contents_sub_check">
										<input type="radio" name="subject" value="society" onChange={e => checkSubject(e.target.value)} checked/>
										<span>사회탐구</span>
									</div>
									<div className="MyPage_contents_sub_check">
										<input type="radio" name="subject" value="science" onChange={e => checkSubject(e.target.value)} disabled/>
										<span>과학탐구</span>
									</div>
									<div className="MyPage_contents_sub_check">
										<input type="radio" name="subject" value="career" onChange={e => checkSubject(e.target.value)} disabled/>
										<span>직업탐구</span>
									</div>
								</div>
								<div className="MyPage_table_contents">
									<div className="MyPage_contents_subject">
										법과 정치
									</div>
									<div className="MyPage_contents_input">
										100
									</div>
									<div className="MyPage_contents_input">
										92
									</div>
									<div className="MyPage_contents_input">
										2
									</div>
								</div>
								<div className="MyPage_table_contents">
									<div className="MyPage_contents_subject">
										생활과 윤리
									</div>
									<div className="MyPage_contents_input">
										100
									</div>
									<div className="MyPage_contents_input">
										92
									</div>
									<div className="MyPage_contents_input">
										2
									</div>
								</div>
								<div className="MyPage_table_contents">
									<div className="MyPage_contents_subject">제2외국어</div>
									<div className="MyPage_contents_input">
										100
									</div>
									<div className="MyPage_contents_input">
										92
									</div>
									<div className="MyPage_contents_input">
										2
									</div>
								</div>
								<div className="MyPage_table_contents">
									<div className="MyPage_contents_subject">한국사</div>
									<div className="MyPage_contents_input">
										100
									</div>
									<div className="MyPage_contents_input">
										92
									</div>
									<div className="MyPage_contents_input">
										2
									</div>
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

export default MyPage;
