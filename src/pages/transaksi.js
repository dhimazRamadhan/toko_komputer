import React from "react";
import Navbar from '../component/navbar';
import axios from "axios";
import TransaksiList from "../component/transaksiList";
import * as FaIcons from 'react-icons/fa';



export default class Transaksi extends React.Component {
    constructor() {
        super()
        this.state = {
            transactions: [],
            products: [],
            isModalOpen: false,
            selectedItem: null
            // action: ""
        }
        if (localStorage.getItem("token")) {
            
            this.state.token = localStorage.getItem("token")
        } else {
            window.location = "/login"
        }
    }

    headerConfig = () => {
        let header = {
            headers: { Authorization: `Bearer ${this.state.token}` }
        }
        return header
    }

    handleClose = () => {
        this.setState({
            isModalOpen: false
        });
    }

    getTransaction = () => {
        let url = "http://localhost:8080/transaksi"

        axios.get(url, this.headerConfig())
        
            .then(res => {
                this.setState({
                    transactions: res.data.transaksi,
                    transaksiCount: res.data.count
                })

            })
            .catch(err => {
                console.log(err.message)
            })
            
    }
    

    
    componentDidMount() {
        this.getTransaction()
    }




    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <div className='mb-4 mt-4'>
                        <h4 className=''>Data Transactions ({this.state.transaksiCount})</h4>
                    </div>

                    <div className="row">
                        {this.state.transactions.map((item, index) => {
                            return (
                                <TransaksiList
                                    key={item.transaksi_id}
                                    transaction_id={item.transaksi_id}
                                    customer_name={item.customer.name}
                                    customer_address={item.customer.address}

                                    time={item.waktu}
                                    products={item.detail_transaksi}
                                />
                            )
                        })}
                    </div>                
                </div>
            </div>
        )
    }
}