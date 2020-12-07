import React from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./Info.css";
import Footer from '../common/Footer';
import Header from '../common/Header';

const Info = () => {
	return (
		<div className="Info_page">
			<Header />
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
								<div>
									<button className="relation_btn">본인</button>
									<button className="relation_btn"> 학생모</button>
									<button className="relation_btn">학생부</button>
								</div>
							</div>
							<div className="table_contents">
								<div className="contents_title">학년</div>
								<div>
									<button className="relation_btn">고1</button>
									<button className="relation_btn">고2</button>
									<button className="relation_btn">고3</button>
									<button className="relation_btn">N수</button>
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
						<p className="grade_title">수능 성적 입력</p>
						<div className="grade_table">
							<div className="table_contents">
								<div className="contents_title">※필수 입력</div>
								<div className="contents_subject">국어</div>
								<div className="contents_input">
									<input className="grade_input" placeholder="원점수 입력"/>
								</div>
							</div>
							<div className="table_contents">
								<div className="contents_title">※필수 입력</div>
								<div className="contents_subject">
									<select className="contents_select">
										<option value="" selected disabled>수학 가/나</option>
										<option value="가">수학 가</option>
										<option value="나">수학 나</option>
									</select>
								</div>
								<div className="contents_input">
									<input className="grade_input"/>
								</div>
							</div>
							<div className="table_contents">
								<div className="contents_title">※필수 입력</div>
								<div className="contents_subject">영어</div>
								<div className="contents_input">
									<input className="grade_input"/>
								</div>
							</div>
							<div className="table_contents">
								<div className="contents_title">※필수 입력</div>
								<div className="contents_subject">
									<select className="contents_select">
										<option value="" selected disabled>탐구 1</option>
										<option value="생활과 윤리">생활과 윤리</option>
										<option value="윤리와 사상">윤리와 사상</option>
										<option value="한국지리">한국지리</option>
										<option value="세계지리">세계지리</option>
										<option value="동아시아사">동아시아사</option>
										<option value="세계사">세계사</option>
										<option value="법과 정치">법과 정치</option>
										<option value="경제">경제</option>
										<option value="사회·문화">사회·문화</option>
										<option value="물리1">물리1</option>
										<option value="화학1">화학1</option>
										<option value="생명1">생명1</option>
										<option value="지구과학1">지구과학1</option>
										<option value="물리2">물리2</option>
										<option value="화학2">화학2</option>
										<option value="생명2">생명2</option>
										<option value="지구과학2">지구과학2</option>
									</select>
								</div>
								<div className="contents_input">
									<input className="grade_input"/>
								</div>
							</div>
							<div className="table_contents">
								<div className="contents_title">※필수 입력</div>
								<div className="contents_subject">
									<select className="contents_select">
										<option value="" selected disabled>탐구 2</option>
										<option value="생활과 윤리">생활과 윤리</option>
										<option value="윤리와 사상">윤리와 사상</option>
										<option value="한국지리">한국지리</option>
										<option value="세계지리">세계지리</option>
										<option value="동아시아사">동아시아사</option>
										<option value="세계사">세계사</option>
										<option value="법과 정치">법과 정치</option>
										<option value="경제">경제</option>
										<option value="사회·문화">사회·문화</option>
										<option value="물리1">물리1</option>
										<option value="화학1">화학1</option>
										<option value="생명1">생명1</option>
										<option value="지구과학1">지구과학1</option>
										<option value="물리2">물리2</option>
										<option value="화학2">화학2</option>
										<option value="생명2">생명2</option>
										<option value="지구과학2">지구과학2</option>
									</select>
								</div>
								<div className="contents_input">
									<input className="grade_input"/>
								</div>
							</div>
							<div className="table_contents">
								<div className="contents_title">※필수 입력</div>
								<div className="contents_subject">한국사</div>
								<div className="contents_input">
									<input className="grade_input" placeholder="원점수 입력"/>
								</div>
							</div>
							<div className="table_contents">
								<div className="contents_title"></div>
								<div className="contents_subject">제 2외국어/한문</div>
								<div className="contents_input">
									<input className="grade_input" placeholder="원점수 입력"/>
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

export default Info;
