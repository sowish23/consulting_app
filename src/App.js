import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './component/main/Login.jsx';
import Help from './component/main/Help.jsx';
import MyPage from './component/main/MyPage.jsx';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Login} />
      <Route path="/help" component={Help} />
      <Route path="/mypage" component={MyPage} />
    </Router>
  );
}

export default App;
