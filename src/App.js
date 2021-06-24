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
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Order from'./Component/Order/Order'

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/login">
          <LogIn/>
        </Route>
        <PrivateRoute exact path="/admin/:id">
          <Admin/>
        </PrivateRoute>
        <PrivateRoute exact path="/order">
          <Order/>
        </PrivateRoute>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
