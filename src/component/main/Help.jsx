import React from "react";
import "./Help.css";

const Help = ({history}) => {
    return (
        <div className="Help_page">
            <div className="Help_content">
                <div className="Help_content_title">InG 정시 합격 예측</div>
                <div className="Help_content_subtitle">대입 정시 컨설팅</div>
                <div className="Help_content_video">
                    <div className="Help_video">
                        <video autoplay controls loop muted>
                            <source src="/assets/video/최종본.mp4" type="video/mp4" />
                            해당 브라우저는 동영상 재생을 지원하지 않습니다.
                        </video>
                    </div>
                    <div className="Help_video_title">
                        <p className="Help_video-text">입시 빅데이터를 기반으로 한</p>
                        <p className="Help_video-text">AI 맞춤형 입시 코칭 시스템</p>
                    </div>
                </div>
                <div className="Help_content_hr">
                </div>
                <div className="Help_content_detail">
                    <div className="Help_Help_detail_text">
                        <p className="Help_text-title">1. 왜 ‘ing’ 정시 합격 예측을 사용해야 하는가?</p>
                        <p className="Help_text-p">- 한마디로 타입시기관에서는 볼 수 없는 서비스 </p>
                        <p className="Help_text-p">– 나에게 유리한 대학 찾기(특허 출원), 앱 푸쉬로 맞춤 정보 제공, 앱 푸쉬로 모의 지원 결과 보고 등 –을 이용할 수 있기 때문입니다.</p>
                    </div>
                    <div className="Help_detail_text">
                        <p className="Help_text-title">2. 비용이 무료? 만원?</p>
                        <p className="Help_text-p">- 프로그램을 이용하려면, 만원을 결제해야 가능하지만, 수시/정시 합불 인증샷을 보내줄 경우 2월말에 전액 환불해 드립니다.</p>
                    </div>
                    <div className="Help_detail_text">
                        <p className="Help_text-title">3. ‘나에게 가장 유리한 대학 찾기’란 무엇인가? </p>
                        <p className="Help_text-p">- 한 학생의 대학별 점수는 반영 과목, 과목별 반영 비율, 과목별 가중치, 내신 반영비율, 표점 or 백분위에 따라, 대학별로 유불리가 존재합니다. </p>
                        <p className="Help_text-p">그리고 이러한 유불리는 전형 총점이 1000점 만점일 때, 보통 3~10점의 큰 점수차가 납니다</p>
                        <p className="Help_text-p">(최초합격생과 추가합격생의 점수 차가 보통 0.1점이라는 점을 고려해보면, 꽤 큰 차이입니다).</p>
                        <p className="Help_text-p">현재 모든 입시기관에서는 특정 과목을 선택했을 때의 유불리는 제공하지만, 과목별 반영비율, 과목별 가중치,</p>
                        <p className="Help_text-p">내신 반영비율, 표점 or 백분위에 따른 유불리 차이는 제공하지 않습니다. ING는 이 부분을 특허출원하여, 유일하게 제공합니다.</p>
                    </div>
                    <div className="Help_detail_text">
                        <p className="Help_text-title">4. 맞춤식 정보란 무엇?</p>
                        <p className="Help_text-p">- 예를 들어 서연고에 지망하고자 하는 학생에게 중하위 대학 정보는 필요 없을것입니다. </p>
                        <p className="Help_text-p">학생의 점수와 계열에 맞춘 입시정보를 앱 푸쉬로 제공합니다.</p>
                    </div>
                    <div className="Help_detail_text">
                        <p className="Help_text-title">5. 앱 푸쉬로 보내는 정보는?</p>
                        <p className="Help_text-p">- 특정 대학이나 부문에 있어서는 고급 정보를 소지하지만, 모든 대학들의 고급 정보를 소지하긴 힘듭니다.</p>
                        <p className="Help_text-p">그래서, 이런 정보들은 외부적으로 매뉴얼화 하기 보다는, 앱푸쉬로 해당 학생에게 제공하려 합니다.</p>
                    </div>
                    <div className="Help_detail_text">
                        <p className="Help_text-title">6. 대표가 대치동 입시 학원 원장으로 20년이라던데, 입시 컨설팅에 노하우는?</p>
                        <p className="Help_text-p">- 20년간의 컨설팅의 노하우는 케이스 바이 케이스라서, 일반적으로 제공하기 보단</p>
                        <p className="Help_text-p">AI와 앱의 기술적인 도움을 받아서, ‘맞춤식’으로 제공할 예정입니다.</p>
                    </div>

                </div>
                <div className="Help_continue_btn">
                    <button onClick={() => history.push('/info_form')}>서비스 체험하기</button>
                </div>
            </div>
        </div>
    );
};

export default Help;
