import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './component/main/Login.jsx';
import Help from './component/main/Help.jsx';
import MyPage from './component/main/MyPage.jsx';
import InfoForm from './component/main/InfoForm.jsx';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Login} />
      <Route path="/help" component={Help} />
      <Route path="/mypage" component={MyPage} />
      <Route path="/info/create" component={InfoForm} />
    </Router>
  );
}

export default App;
