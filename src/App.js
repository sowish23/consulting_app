import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './component/main/Login.jsx';
import Help from './component/main/Help.jsx';
import MyPage from './component/main/MyPage.jsx';
import InfoForm from './component/main/InfoForm.jsx';
import SchoolGradeForm from './component/main/SchoolGradeForm.jsx';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Login} />
      <Route path="/help" component={Help} />
      <Route path="/mypage" component={MyPage} />
      <Route path="/info_form" component={InfoForm} />
      <Route path="/grade_form" component={SchoolGradeForm} />
    </Router>
  );
}

export default App;
