import React from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export default class CustomerList extends React.Component{
    render (){
        return(
            <tr>                                                              
                <td><img src={this.props.image} className="img rounded-circle" width="40" height="40"/></td>
                <td>{this.props.name}</td>
                <td>{this.props.phone}</td>
                <td>{this.props.address}</td>
                <td> 
                    <button className='btn btn-sm m-1 btn-primary' onClick={this.props.onEdit}> 
                        <FaIcons.FaRegEdit />
                    </button>
                    <button className='btn btn-sm btn-danger' onClick={this.props.onDrop}> 
                        <FaIcons.FaRegTrashAlt />
                    </button>
                </td>
                {/* <div className="card-body row">
                    <div className="col-sm-3">
                        <img alt={this.props.name} src={this.props.image} 
                        className= "img rounded-circle" width="150" height="150"/>
                    </div>
                    <div className="col-sm-7">
                        <h6 className="text-dark">Name: {this.props.name}</h6>
                        <h6 className="text-dark">Phone : {this.props.phone}</h6>
                        <h6 className="text-dark">Address : {this.props.address}</h6>
                    </div>
                    <div className="col-sm-2">
                        <button className="btn btn-secondary" onClick={this.props.onEdit}>Edit</button>
                        <button className="btn btn-danger" onClick={this.props.onDrop}>Delete</button>
                    </div>
                </div> */}
            </tr>
        )
    }
}