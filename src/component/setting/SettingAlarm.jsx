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
            <div className="Setting_page">
                <div className="Setting_content">
                    <div className="Setting_section">
                        <div className="Setting_section_title">알림 설정</div>
                        <div className="Setting_section_content Setting_section_flex">
                            <div className="Setting_content_version Setting_content_name">푸시 수신 동의</div>
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