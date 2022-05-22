import React from 'react';
// import Sidebar from '../component/sidebar';
import axios from 'axios';
import Navbar from '../component/navbar';

export default class Home extends React.Component{
    constructor(){
        super()
        this.state = {
            token : "",
            adminName : ""
        }
        if (localStorage.getItem('token')){
            this.state.token = localStorage.getItem('token')
        }
        else {
            window.location = "/login"
        }
    }
    getAdmin = () => {
        let admin = (localStorage.getItem('name'))
        let url = "http://localhost:8080/admin"
        axios.get(url)
        .then(res => {
            this.setState({
                adminName : admin,
                adminCount: res.data.count
            })
        })
        .catch(err => {
            console.log(err.message)
        })
    }
    getProduct = () =>{
        let url = "http://localhost:8080/product"
        axios.get(url)
        .then(res =>{
            this.setState({
                productCount :res.data.count
            })
        })
        .catch(err => {
            console.log(err.message)
        })
    }
    getTransaksi = () => {
        let url = "http://localhost:8080/transaksi"
        axios.get(url)
        .then(res => {
            this.setState({
                transaksiCount : res.data.count
            })
        })
        .catch(err => {
            console.log(err.message)
        })
    }
    getCustomer = () => {
        let url = "http://localhost:8080/customer"
        axios.get(url)
        .then(res => {
            this.setState({
                customerCount : res.data.count
            })
        })
        .catch(err => {
            console.log(err.message)
        })
    }
    componentDidMount = () => {
        this.getAdmin()
        this.getProduct()
        this.getTransaksi()
        this.getCustomer()

    }
    render(){
        return(
            <div>
            <Navbar />
            <div className="home container">
                <div className="container d-flex justify-content-center">
                    <h2 className="fw-bolder p-4 text-center">
                        Welcome {this.state.adminName} !!
                    </h2>
                </div>
                <div className="w-25 shadow p-3 mb-5 bg-primary rounded float-start bg me-1">
                        <span class="material-icons">
                            perm_identity
                        </span><br />         
                        <span className="fw fw-bolder text-dark">TOTAL ADMIN</span>
                    <h1 classname="text-center text-dark">{this.state.adminCount}</h1>
                    <h6 className="fw-light">View Detail</h6>
                </div>
                <div className="w-25 h-50 shadow p-3 mb-5 bg-success rounded bg bg-primary float-start me-1">
                <span class="material-icons">
                tag_faces
                </span><br />  
                    <span className="fw fw-bolder text-dark">TOTAL CUSTOMER</span>
                    <h1 classname="text-center text-dark">{this.state.customerCount}</h1>
                    <h6 className="fw-light">View Detail</h6>
                </div>
                <div className="w-25 shadow p-3 mb-5 bg-warning rounded bg bg-primary float-start me-1">
                    <span class="material-icons">
                    shopping_bag
                    </span><br />  
                    <span className="fw fw-bolder text-dark">TOTAL PRODUCT</span>
                    <h1 classname="text-center text-dark">{this.state.productCount}</h1>
                    <h6 className="fw-light">View Detail</h6>
                </div>
                <div className="h-75 w-25 shadow p-3 mb-5 bg-danger rounded bg bg-primary float-start ">
                    <span class="material-icons">
                        assignment
                    </span><br />  
                    <span className="fw fw-bolder text-dark">TOTAL TRANSACTION</span>
                    <h1 classname="text-center text-dark">{this.state.transaksiCount}</h1>
                    <h6 className="fw-light">View Detail</h6>
                </div>
            </div>
            </div>
        );
    }
}