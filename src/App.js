import './App.scss';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={LoginPage} />
          <Route path='/register' component={RegisterPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
