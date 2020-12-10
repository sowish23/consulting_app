import React from "react";
import { useHistory } from "react-router-dom";
import "./Home.css";
import Header from '../common/Header';
import Footer from '../common/Footer';

const Home = () => {
    const history = useHistory();
	return (
		<div>
			<Header />
				<div className="Home_page">
					<div className="Home_content">
                        <div className="Home_list_btns">
                            <div className="Home_list_btn" onClick={() => history.push('/prediction/mygrade')}>
                                <img src="/assets/icons/test.svg" />
                                <div className="Home_list_btn_title">내 성적 분석</div>
                            </div>
                            <div className="Home_list_btn" onClick={() => history.push('/prediction/university')}>
                                <img src="/assets/icons/education.svg" />
                                <div className="Home_list_btn_title">대학/학과별 분석</div>
                            </div>
                        </div>
                        <div className="Home_list_btns">
                            <div className="Home_list_btn" onClick={() => history.push('/prediction/beneficial')}>
                                <img src="/assets/icons/university.svg" />
                                <div className="Home_list_btn_title">나에게 유리한 대학 찾기</div>
                            </div>
                            <div className="Home_list_btn" onClick={() => history.push('/consulting')}>
                                <img src="/assets/icons/info.svg" />
                                <div className="Home_list_btn_title">맞춤 입시 정보</div>
                            </div>
                        </div>
                        <div className="Home_list_btns">
                            <div className="Home_list_btn" onClick={() => history.push('/simulation')}>
                                <img src="/assets/icons/contract.svg" />
                                <div className="Home_list_btn_title">모의 지원</div>
                            </div>
                            <div className="Home_list_btn Home_list_btn_none">
                            </div>
                        </div>
					</div>
				</div>
			<Footer />
		</div>
	);
};

export default Home;
