import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Registration from './components/Registration';
import Header from './components/Header';

import AddProduct from './components/Dashboard/AddProduct'
import AddCategory from './components/Dashboard/AddCategory'
import ProductsList from './components/Dashboard/ProductsList'

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Registration />
          </Route>
          <Route path="/addproduct">
            <AddProduct />
          </Route>
          <Route path="/addcategory">
            <AddCategory />
          </Route>
          <Route path="/productslist">
            <ProductsList />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}

export default App;
