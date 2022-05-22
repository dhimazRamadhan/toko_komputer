import React from "react"
import Home from "./pages/home"
import Customer from "./pages/customer"
import {Route, Switch} from "react-router-dom"
import Login from "./pages/login"

export default class Main extends React.Component{
    render(){
        return(
            <Switch>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/" component={Home}/>
                <Route path="/customer" component={Customer}/>
            </Switch>
        )
    }
}