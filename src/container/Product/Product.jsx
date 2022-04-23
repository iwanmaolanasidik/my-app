import React, { Component, Fragment } from "react";
import {FiShoppingCart} from "react-icons/fi";
import CardProduct from "../CardProduct/CardProduct";

class Product extends Component{
    state = {
        order : 4
    }

    handleCounterChange = (newValue) => {
        this.setState({
            order: newValue
        })
    }

    render(){
        return(
            <Fragment>
            <div className="row d-flex justify-content-center">
                <div className="card text-center" style={{width: "20rem"}}>
                    <div className="card-header">
                        <FiShoppingCart/> <span className="count">{this.state.order}</span>
                    </div>
                    <CardProduct onCounterChange={(value)=>this.handleCounterChange(value)}/>
                </div>
            </div>
            </Fragment>
        )
    }
}

export default Product;