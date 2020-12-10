import { Route, Switch } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

import Home from './component/home/Home.jsx';

import Login from './component/main/Login.jsx';
import Help from './component/main/Help.jsx';
import MyPage from './component/main/MyPage.jsx';
import InfoForm from './component/main/InfoForm.jsx';
import SchoolGradeForm from './component/main/SchoolGradeForm.jsx';

import Prediction from './component/prediction/Prediction.jsx';
import MyGrade from './component/prediction/MyGrade.jsx';
import University from './component/prediction/University.jsx';
import UniversityResult from './component/prediction/UniversityResult.jsx';
import Beneficial from './component/prediction/Beneficial.jsx';

import Consulting from './component/consulting/Consulting.jsx';

import Simulation from './component/simulation/Simulation.jsx';
import SimulationResult from './component/simulation/SimulationResult.jsx';

import Setting from './component/setting/Setting.jsx';
import SettingAlarm from './component/setting/SettingAlarm.jsx';

function App() {
  return (
    <div>
      <ScrollToTop/>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/help" component={Help} />
        <Route path="/mypage" component={MyPage} />
        <Route path="/info_form" component={InfoForm} />
        <Route path="/grade_form" component={SchoolGradeForm} />

        <Route exact path="/home" component={Home} />

        <Route exact path="/prediction" component={Prediction} />
        <Route path="/prediction/mygrade" component={MyGrade} />
        <Route exact path="/prediction/university" component={University} />
        <Route path="/prediction/university/result" component={UniversityResult} />
        <Route path="/prediction/beneficial" component={Beneficial} />

        <Route path="/consulting" component={Consulting} />

        <Route exact path="/simulation" component={Simulation} />
        {/* result id 값에따라서 가,나,다군 구분할수 있도록 추후에 변경 */}
        <Route path="/simulation/result" component={SimulationResult} />

        <Route exact path="/setting" component={Setting} />
        <Route path="/setting/push" component={SettingAlarm} />
      </Switch>
    </div>
  );
}

export default App;
