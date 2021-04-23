import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import LogIn from './Component/LogIn/LogIn';
import Admin from './Component/Admin/Admin';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/login">
          <LogIn/>
        </Route>
        <Route path="/admin/:id">
          <Admin/>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
