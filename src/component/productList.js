import React from "react"
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
 
class ProductList extends React.Component{
    render(){
        return (
            <div className="container w-50 p-2 d-flex justify-content shadow p-3 mb-5">
                        {/* menampilkan Gambar / cover */}
                        <div className="">
                            <img src={this.props.image} className="img"
                            height="200" width="200" alt={this.props.name} />
                        </div>
                        {/* menampilkan deskripsi */}
                        
                        <div className="w-25">
                            <h5 className="text-info">
                                { this.props.name }
                            </h5>
                            <h6 className="text-danger">
                                Price: { this.props.price}
                            </h6>
                            <h6 className="text-dark">
                                Stock: { this.props.stock}
                            </h6>
 
                            {/* button untuk mengedit */}
                            <button className="btn btn-sm btn-primary m-1"
                            onClick={this.props.onEdit}>
                                <FaIcons.FaRegEdit/>
                            </button>
 
                            {/* button untuk menghapus */}
                            <button className="btn btn-sm btn-danger m-1"
                            onClick={this.props.onDrop}>
                                <FaIcons.FaRegTrashAlt/>
                            </button>
                        </div>
                    </div>
         
        )
    }
}
export default ProductList;
