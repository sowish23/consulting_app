import React from 'react';
import "./PaymentModal.css";

const PaymentModal = (props) => {
    const {handleClose} = props;
    return(
        <div className="PaymentModal_page">
            <div className="PaymentModal_content">
                <div className="PaymentModal_title_box">
                    <div className="PaymentModal_quit_btn" onClick={() => handleClose()}>
                        <img src='/assets/icons/modal_quit.svg' />
                    </div>
                    <div className="PaymentModal_title">서비스 이용 요금 안내</div>
                </div>
                <div className="PaymentModal_text_box">
                    <div className="PaymentModal_texts">
                        <div className="PaymentModal_list_img">
                            <img src="/assets/icons/circle_list.svg" />
                        </div>
                        <div className="PaymentModal_text">
                            <p>금액 : 만 원 <span style={{color: 'red', textDecoration: 'underline'}}>(단, 아래 조건수행시 전액 환불)</span></p>
                            <p>-광고 수신 동의</p>
                            <p>-합격 불합격 인증샷 입력</p>
                        </div>
                    </div>
                    <div className="PaymentModal_texts">
                        <div className="PaymentModal_list_img">
                            <img src="/assets/icons/circle_list.svg" />
                        </div>
                        <div className="PaymentModal_text">
                            <p>환불 시기 :  추합 발표까지 끝난 2월 말경에 일괄 환불해 드립니다 (수수료 제외) </p>
                            <p>환불계좌는 인증샷 포스팅 페이지에 기록해 주시면 됩니다</p>
                        </div>
                    </div>
                    <div className="PaymentModal_texts">
                        <div className="PaymentModal_list_img">
                            <img src="/assets/icons/circle_list.svg" />
                        </div>
                        <div className="PaymentModal_text">
                            <p>제공하는 서비스</p>
                            <p>- <span className="PaymentModal_text_highlight">과거 실제 컷을 예측컷으로 제공</span></p>
                            <p>- 나의 대학별 점수와 예측컷과의 차이</p>
                            <p>- <span className="PaymentModal_text_highlight">나에게 유리한 대학 찾기 (특허 출원)</span></p>
                            <p>- <span className="PaymentModal_text_highlight">앱 푸쉬로 맞춤 입시 정보 제공</span></p>
                            <p>- 앱 푸쉬로 모의 지원 결과 보고 (미정)</p>
                        </div>
                    </div>
                    <div className="PaymentModal_additional_text">
                        <p>
                            * 모의 지원 결과 보고 시스템이 준비는 되어 있으나, 올해 모의 지원 서비스 이용자의 수에 따라 정보를 제공하지 않을 수 있습니다. <br/>
                            혹시라도 버그나 수치상의 오류가 있을 경우, 프로그램 상에서 오류를 잡으려면 시간이 걸리기 때문에
                            앱 푸쉬로 바로 바로 수정된 자료를 보내드리겠습니다. <br/>감사합니다.
                        </p>
                    </div>
                    <div className="PaymentModal_checkbox">
                        <input type="checkbox" />
                        <label>광고 수신 동의</label>
                    </div>
                    <div className="PaymentModal_pay_btn">
                        <button>결제 바로 가기</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaymentModal;