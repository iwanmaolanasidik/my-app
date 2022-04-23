import React, { Component, Fragment } from "react";
import cocacola from "./../../img/coca.jpg";

class CardProduct extends Component{
    state = {
        order : 4
    }

    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue)
    }

    // kurangi jumlah pesanan
    btnMinus = () => {
        if(this.state.order > 0){
            this.setState({
                order: this.state.order - 1
            },()=>{
                this.handleCounterChange(this.state.order);
            })
        }
    }

    // tambah jumlah pesanan
    btnPlus = () => {
        this.setState({
            order: this.state.order + 1
        },()=>{
            this.handleCounterChange(this.state.order);
        })

    }

    render(){
        return(
            <Fragment>
            <div className="card-body">
                <h5 className="card-title">Coca Cola 1L</h5>
                <img src={cocacola} alt="Thumbnail" className="card-img-top"/>
            </div>
            <div className="card-footer text-muted">
                <button className="btn btn-sm btn-primary minus" onClick={this.btnMinus}>-</button>
                <input className="ms-2" type="text" value={this.state.order}/>
                <button className="btn btn-sm btn-primary ms-2 plus" onClick={this.btnPlus}>+</button>
            </div>
            </Fragment>
        )
    }
}

export default CardProduct;