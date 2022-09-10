import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Login from './Food/components/Login';
import CustomerRegister from './Food/components/CustomerRegister';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route exact path="/login"  component={Login}/>
        <Route exact path="/customerregister"  component={CustomerRegister}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
