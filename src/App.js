import React from "react";
import Main from "./main";
import Navbar from "./component/navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from "./pages/login";
import Home from "./pages/home";
import Customer from "./pages/customer";
import Product from "./pages/product";
import Transaksi from "./pages/transaksi";
import "./App.css"

export default class App extends React.Component{
  render(){
    return(
      <div>
        <Router>
          <Switch>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/" component={Home}/>
            <Route path="/customer" component={Customer}/> 
            <Route path="/product" component={Product}/>
            <Route path="/transaksi" component={Transaksi}/>  
          </Switch>
        </Router>
      </div>
    )
  }
}