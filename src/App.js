import { Route, Switch } from 'react-router-dom';

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

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/help" component={Help} />
      <Route path="/mypage" component={MyPage} />
      <Route path="/info_form" component={InfoForm} />
      <Route path="/grade_form" component={SchoolGradeForm} />

      <Route exact path="/prediction" component={Prediction} />
      <Route path="/prediction/mygrade" component={MyGrade} />
      <Route path="/prediction/university" component={University} />
      <Route path="/prediction/beneficial" component={Beneficial} />

      <Route path="/consulting" component={Consulting} />
    </Switch>
  );
}

export default App;
