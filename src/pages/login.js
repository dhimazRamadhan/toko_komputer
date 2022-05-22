import axios from "axios";
import React from 'react';

export default class Login extends React.Component{
    constructor(){
        super()
        this.state = {
            username : "",
            password : ""
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleLogin = (e) => {
        e.preventDefault()
        let data = {
            username : this.state.username,
            password : this.state.password
        }
        let url = "http://localhost:8080/admin/auth/"
        axios.post(url, data)
        .then(res => {
            if (res.data.logged){
                let name = res.data.data.name
                let admin = res.data.data
                let token = res.data.token
                localStorage.setItem("name", name)
                localStorage.setItem("admin", JSON.stringify(admin))
                localStorage.setItem("token", token)
                window.location = "/"
            }
            else{
                window.alert(res.data.message)
            }
        })
    }
    render(){
        return(
            <div className="container mt-5 ">
                <main className="shadow-lg p-3 mb-5 bg-body rounded position-absolute top-50 start-50 translate-middle">
                    <form className='mt-lg-4' onSubmit={(e) => this.handleLogin(e)}>
                        <h4 className='fw-bold'>LOGIN ADMIN</h4>
                        <div className="form-floating mt-lg-3">
                            <input type="text" className="form-control" id="userName" 
                            name="username" placeholder="Insert Username" onChange = {this.handleChange} value={this.state.username} required/>
                            <label for="floatingInput" >Username</label>
                        </div>
                        <div className="form-floating mt-3">
                            <input type="password" class="form-control" id="password" 
                            name="password" placeholder="Password" onChange = {this.handleChange} value={this.state.password} required/>
                            <label for="floatingPassword">Password</label>
                        </div>
                        <button className="w-40 btn btn-lg btn-dark mt-3 " type="submit">Sign in</button>
                        <p className="mt-5 mb-3 text-muted">&copy; Login dulu atuh kang</p>
                    </form>
                </main>
            </div>
        );
    }
}