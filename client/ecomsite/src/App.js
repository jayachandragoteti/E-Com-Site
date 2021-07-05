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
import AddProduct from './components/Dashboard/AddProduct'
import AddCategory from './components/Dashboard/AddCategory'
import ProductsList from './components/products/ProductsList'
import ProductView from './components/products/ProductView'

function App() {
  return ( 
    <div className="App">
     
      <Router>
      <Header />
        <Switch>
          <Route path="/login">
            <Login />
            </Route>
          <Route path="/register">
            <Registration />
            </Route>
          <Route path="/accountprofile"><AccountProfile /></Route>
          <Route path="/myorder"><MyOrder /></Route>
          <Route path="/addproduct">
            <AddProduct />
          </Route>
          <Route path="/addcategory">
            <AddCategory />
          </Route>
          <Route path="/productslist">
            <ProductsList />
          </Route>
          <Route path="/productview">
            <ProductView />
          </Route>
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
