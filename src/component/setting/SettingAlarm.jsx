import React from "react";
import "./Setting.css";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Header from '../common/Header';
import Footer from '../common/Footer';

const SettingAlarm = () => {
    return (
        <div>
            <Header />
            <div className="Info_page">
                <div className="Info_content">
                    <div className="section">
                        <div className="section_title">알림 설정</div>
                        <div className="section_content">
                            <div className="content_version content_name">푸시 수신 동의</div>
                            <FormGroup row>
                                <FormControlLabel
                                    control={
                                        <Switch
                                            size="small"
                                            color="primary"
                                        />
                                    }
                                />
                            </FormGroup>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default SettingAlarm;