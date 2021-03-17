
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Components/Login';
import Signup from './Components/Signup'

import Button from './Components/LandingPage';
import Homepage from './Components/Homepage'
import Signupformdata from './Components/Signupformdata'
import Signupwelcome from './Components/Signupwelcome';
function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route exact path= "/" component={Button} />
         <Route exact path= "/login" component={Login} />
         <Route exact path= "/about" component={Signup} />
         <Route exact path= "/homepage" component={Homepage} />
         <Route exact path= "/Signupformdata" component={Signupformdata} />
         <Route exact path= "/Signupwelcome" component={Signupwelcome} />
         
      
       </Switch>
       </Router>
    </div>
  );
}

export default App;
