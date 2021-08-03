import React from 'react'
//import "bootstrap/dist/css/bootstrap.css";

import { Component } from 'react';

class Product extends Component {
    constructor() {
        super()
        this.state = {
            items: null
        }
    }
    componentDidMount() {
        fetch('http://localhost:8000/api/product/').then((result) => {
            result.json().then((data) => {
                console.log("data", data);
                this.setState({ items: data })
            })
        })
    }
    render() {
        return (
            <div className="card">

                {
                    this.state.items ?
                        this.state.items.map((item, index) =>
                        <div className="main_content">
                            <div className="card_header"  key={index}>
                                <div className="">
                                    <img src={item.image} alt=""/>
                                </div>
                                <h2>{item.name} </h2>
                                <p className="price">Price: {item.price} </p>
                                <span>{item.description} </span>
                                <button >Add to Cart</button>
                            </div>
                        </div>
                        

                        )
                        : null
                }
                
            </div>
        );
    }
}
export default Product;

