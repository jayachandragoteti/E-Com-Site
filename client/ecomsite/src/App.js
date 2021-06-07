import './App.css';
import Login from "./components/Login"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Registration from './components/Registration'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/login"><Login /></Route>
          <Route path="/register"><Registration /></Route>
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
