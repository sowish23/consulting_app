import React from "react";
import "./University.css";
import Pagination from '@material-ui/lab/Pagination';
import Modal from '@material-ui/core/Modal';
import Header from '../common/Header';
import Footer from '../common/Footer';
import PaymentModal from './PaymentModal';
import queryString from 'query-string';

const University = ({match, location}) => {
	const [open, setOpen] = React.useState(false);
	const query = queryString.parse(location.search);
	console.log(query.type)
 
	const handleOpen = () => {
		setOpen(true);
	  };
	
	const handleClose = () => {
		setOpen(false);
	};
	
	return (
		<div>
			<Header />
			<div className="University_page">
				<div className="University_content">
					<div className="University_detail">
						<div className="University_section">
							<div className="University_link_title">대학 / 학과별 분석</div>
							<div className="University_contents_radio">
								<input id="univ" type="radio" name="relation" checked={query.type === "univ"} />
								<label className="University_relation_btn" for="univ">대학 검색</label>
								<input id="department" type="radio" name="relation" checked={query.type === "department"} />
								<label className="University_relation_btn" for="department">학과 검색</label>
							</div>
							<div className="University_select_box">
								<div className="University_select_region">
									<select>
										<option selected>서울</option>
									</select>
								</div>
								<div className="University_select_sort">
									<select>
										<option selected>문과</option>
									</select>
								</div>
								<div className="University_select_apply_type">
									<select>
										<option selected>가군</option>
									</select>
								</div>
							</div>
							<div className="University_search_btn">
								<button>검색</button>
							</div>
							<div className="University_result_graph">
								<table>
									<thead>
										<tr>
											<td>대학명</td>
											<td className="University_graph_td">예측</td>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="University_title_td">가톨릭대</td>
											<td></td>
										</tr>
										<tr>
											<td className="University_title_td">경희대</td>
											<td></td>
										</tr>
										<tr>
											<td className="University_title_td">고산대</td>
											<td></td>
										</tr>
										<tr>
											<td className="University_title_td">연세대</td>
											<td></td>
										</tr>
										<tr>
											<td className="University_title_td">고려대</td>
											<td></td>
										</tr>
										<tr>
											<td className="University_title_td">경기대<br />(서울)</td>
											<td></td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<div className="University_section">
							<div className="University_grade_table">
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
											<td className="University_btn_td">
												<button onClick={() => handleOpen()}>결과</button>
												<Modal
													open={open}
													onClose={handleClose}
													aria-labelledby="simple-modal-title"
													aria-describedby="simple-modal-description"
												>
													<PaymentModal  handleClose={handleClose}/>
												</Modal>
											</td>
										</tr>
										<tr>
											<td>서울여대</td>
											<td>수학과</td>
											<td className="University_btn_td">
												<button>결과</button>
											</td>
										</tr>
										<tr>
											<td>서울여대</td>
											<td>수학과</td>
											<td className="University_btn_td">
												<button>결과</button>
											</td>
										</tr>
										<tr>
											<td>서울여대</td>
											<td>수학과</td>
											<td className="University_btn_td">
												<button>결과</button>
											</td>
										</tr>
										<tr>
											<td>서울여대</td>
											<td>수학과</td>
											<td className="University_btn_td">
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
