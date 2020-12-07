import React from "react";
import "./Bar1.css";

const Bar1 = () => {
  return (
    <div className="div1">
        <div className="div2">
            <div>
                <span>모의 집원</span>
                <span className="text-right">▽</span>
            </div>
            <hr/>
            <br/>
            <div>
                <span>합격 예측</span>
                <span className="text-right">▽</span>
            </div>
            <hr/>
            <br/>
            <div>
                <span>AI 맞춤 컨설팅</span>
            </div>
            <hr/>
            <br/>
            <div>
                <span>설정</span>
                <span className="text-right">▽</span>
            </div>
        </div>
    </div>
  );
}
export default Bar1;