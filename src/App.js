import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components';
import {Home, Cart, About, Error, PrivateRoute, Products, SingleProduct, Checkout,AuthWrapper} from './pages';


function App() {
  return (
  <AuthWrapper>
    <Router>
      <Navbar />
      <Sidebar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/About">
            <About/>
          </Route>
          <Route exact path="/Cart">
            <Cart/>
          </Route>
          <Route exact path="/Products">
            <Products/>
          </Route>
          <Route exact path="/Products/:id" children={ <SingleProduct/>}/>
          <PrivateRoute exact path="/Checkout">
          <Checkout/>
          </PrivateRoute>
          <Route exact path="*">
            <Error/>
          </Route>
        </Switch>
        <Footer/>
    </Router>
  </AuthWrapper>  
      );
}

export default App;
