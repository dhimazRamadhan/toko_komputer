import React from 'react'
import axios from 'axios'
import {Modal, Button, Form} from 'react-bootstrap'
import Navbar2 from '../component/navbar'
import ProductList from '../component/productList'


export default class Product extends React.Component {
    constructor(){
        super()
        this.state = {
            products: [],
            token: "",
            action: "",
            name: "",
            price: 0,
            stock: 0,
            image: "",
            uploadFile: true,
            product_id: "",
        }
    if (localStorage.getItem('token')) {
        this.state.token = localStorage.getItem('token')
    }
    // jika belum login 
    else {
        window.location = '/login'
    }
}

headerConfig=() =>{
    let header = {
        headers: {Authorization: `Bearer ${this.state.token}`}
    }
    return header
}

getProduct = () => {
    let url = "http://localhost:8080/product/"
    axios.get(url)
        .then(res => {
            this.setState({
                product: res.data.product,
                productCount : res.data.count
            })
        })
        .catch(err => {
            console.log(err.message)
        })
}

handleAdd = () => {
    this.setState({
        isModalOpen: true,
        products: [],
        token: "",
        action: "",
        name: "",
        price: 0,
        stock: 0,
        image: null,
        action: "insert",
        })
    }

    handleClose = () => {
    this.setState({
        isModalOpen: false,
    })
}

    handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
    }

    handleFile = (e) => {
    this.setState({
    image : e.target.files[0]
    })
    }


    // handleDrop = (customer_id) => {
    // let url = "http://localhost:8080/product/" + product_id
    // if(window.confirm("Deleted this data?")){
    //     axios.delete(url)
    //     .then(res => {
    //     console.log(res.data.message)
    //     this.getProduct()
    //     })
    //     .catch(err => {
    //     console.log(err.message)
    //     })
    // }
    // }

    handleSave = (e) => {
    e.preventDefault()
    let form = new FormData()
    form.append("name",this.state.name)
    form.append("price",this.state.phone)
    form.append("stock",this.state.address)
    form.append("image",this.state.image)
    
    if(this.state.action === "insert"){
        let url = "http://localhost:8080/product/"
        axios.post(url, form)
        .then(res => {
            this.getProduct()
            this.handleClose()
        })
        .catch(err => {
            console.log(err.message)
        })
        }
        else if (this.state.action === "update"){
        let url = "http://localhost:8080/product/" + this.state.product_id
        axios.put(url, form)
        .then(res => {
            this.getProduct()
            this.handleClose()
        })
        .catch(err => {
            console.log(err.message)
        })
        }
    }
componentDidMount = () => {
    this.getProduct()
}
render() {
    return (
        <div>
        {/* <Navbar2/> */}
        <div className="product container">
            <div className="container">
                <div className='mb-4 mt-4'>
                    <h4 className=''>Data Product ({this.state.productCount})</h4>
                </div>
                <div>
                    {this.state.products.map((item, index) => {
                        return(
                        <ProductList key={index}
                            nameImage={item.image}
                            image={"http://localhost:8080/image/product/" + item.image}
                            name={item.name}
                            price={item.price}
                            stock={item.stock}
                            onEdit={() => this.handleEdit(item)}
                            onDrop={() => this.handleDrop(item.product_id)}
                        />
                        )                            
                    })}    
                    <button className="btn btn-primary" onClick={() => this.handleAdd()}>Add Data</button>        
                </div>
                
                {/* <Modal show={this.state.isModalOpen} onHide={this.handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Form Customer</Modal.Title>
            </Modal.Header>
            <Form onSubmit={(e) => this.handleSave(e)}>
            <Modal.Body>
                <Form.Group className="mb-3" controlId="name">
                <Form.Label>Nama</Form.Label>
                <Form.Control type="text" name="name" placeholder="Insert Name" value={this.state.name} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="phone">
                <Form.Label>Telepon</Form.Label>
                <Form.Control type="text" name="phone" placeholder="Insert Phone" value={this.state.phone} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="address">
                <Form.Label>Alamat</Form.Label>
                <Form.Control type="text" name="address" placeholder="Insert Address" value={this.state.address} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" name="username" placeholder="Insert Username" value={this.state.username} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Insert Password" onChange={this.handleChange} />
                </Form.Group>   
                <Form.Group className="mb-3" controlId="image">
                <Form.Label>Foto</Form.Label>
                <Form.Control type="file" name="image" placeholder="Insert Image" onChange={this.handleFile} />
                </Form.Group>          
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                Close
                </Button>
                <Button variant="primary" type="submit">
                Save
                </Button>
            </Modal.Footer>
            </Form>
        </Modal> */}
            </div>
        </div>
        </div>
    )
}
}