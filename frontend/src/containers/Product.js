import React from 'react'
//import "bootstrap/dist/css/bootstrap.css";

import { Component } from 'react';

class Product extends Component {
    constructor(){
        super()
        this.state={
            items:null
        }
    }
    componentDidMount()
    {
        fetch('http://localhost:8002/api/product/').then((result)=>{
            result.json().then((data)=>{
                console.log("data",data);
                this.setState({items:data})
            })
        })
    }
    render(){
        return(
            <div>
            {
                this.state.items ?
                this.state.items.map((item)=>
                <div>
                    <span>Id: {item.id} </span>
                    <span>Name: {item.name} </span>
                    <span>Price: {item.price} </span>
                    <span>Description: {item.description} </span>
                </div>

                )
                :null
            }

            </div>
        );
    }
}
export default Product;
            
