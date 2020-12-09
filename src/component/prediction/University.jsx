import React from "react";
import "./University.css";
import Pagination from '@material-ui/lab/Pagination';
import Header from '../common/Header';
import Footer from '../common/Footer';


const University = () => {
	return (
		<div>
			<Header />
			<div className="prediction_page">
				<div className="prediction_content">
					<div className="prediction_detail">
						<div className="section">
							<div className="link_title">대학 / 학과별 분석</div>
							<div className="contents_radio">
								<input id="univ" type="radio" name="relation" checked />
								<label className="relation_btn" for="univ">대학 검색</label>
								<input id="department" type="radio" name="relation" />
								<label className="relation_btn" for="department">학과 검색</label>
							</div>
							<div className="select_box">
								<div className="select_region">
									<select>
										<option selected>서울</option>
									</select>
								</div>
								<div className="select_sort">
									<select>
										<option selected>문과</option>
									</select>
								</div>
								<div className="select_apply_type">
									<select>
										<option selected>가군</option>
									</select>
								</div>
							</div>
							<div className="search_btn">
								<button>검색</button>
							</div>
							<div className="result_graph">
								<table>
									<thead>
										<tr>
											<td>대학명</td>
											<td className="graph_td">예측</td>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="title_td">가톨릭대</td>
											<td></td>
										</tr>
										<tr>
											<td className="title_td">경희대</td>
											<td></td>
										</tr>
										<tr>
											<td className="title_td">고산대</td>
											<td></td>
										</tr>
										<tr>
											<td className="title_td">연세대</td>
											<td></td>
										</tr>
										<tr>
											<td className="title_td">고려대</td>
											<td></td>
										</tr>
										<tr>
											<td className="title_td">경기대<br />(서울)</td>
											<td></td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<div className="section">
							<div className="grade_table">
								<table>
									<thead>
										<tr>
											<td>대학명</td>
											<td>모집단위</td>
											<td>예측</td>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>서울여대</td>
											<td>수학과</td>
											<td className="btn_td">
												<button>결과</button>
											</td>
										</tr>
										<tr>
											<td>서울여대</td>
											<td>수학과</td>
											<td className="btn_td">
												<button>결과</button>
											</td>
										</tr>
										<tr>
											<td>서울여대</td>
											<td>수학과</td>
											<td className="btn_td">
												<button>결과</button>
											</td>
										</tr>
										<tr>
											<td>서울여대</td>
											<td>수학과</td>
											<td className="btn_td">
												<button>결과</button>
											</td>
										</tr>
										<tr>
											<td>서울여대</td>
											<td>수학과</td>
											<td className="btn_td">
												<button>결과</button>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div>
								<Pagination size="small" count={3} style={{ display: 'flex', justifyContent: 'center' }} />
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default University;
