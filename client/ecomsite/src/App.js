import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

import Registration from './components/Registration'
import Header from './components/Header'
import AccountProfile from './components/AccountProfile';
import Login from "./components/Login";
import MyOrder from "./components/MyOrders";


function App() {
  return ( 
    <div className="App">
     
      <Router>
      <Header />
        <Switch>
          <Route path="/login"><Login /></Route>
          <Route path="/register"><Registration /></Route>
          <Route path="/accountprofile"><AccountProfile /></Route>
          <Route path="/myorder"><MyOrder /></Route>
          <Route path="/"><Home /></Route>

        </Switch>
      </Router>
    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}

export default App;
