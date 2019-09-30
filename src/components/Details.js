import React, { Component } from 'react'
import {ProductionConsumer} from '../context';
import {ButtonContainer2} from './ButtonCart';
import {Link} from 'react-router-dom';

export default class Details extends Component {
    render() {
        return (
            
            <ProductionConsumer>
                {value =>{
                    const {id,company,img,info,price,title,inCart} = value.detailProduct;
                    return (
                            <div className="container py-5">
                                <div className="row">
                                    <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                        <h1>{title}</h1>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-10 mx-auto col-md-6 my-3">
                                        <img src={img} className="img-fluid" alt="product"/>
                                    </div>
                                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                       <h2>model : {title} </h2>
                                       <h4 className="text-title text-uppercase text-muted mt-3 mb2">made by : <span className="text-uppercase">{company}</span></h4>
                                       <h4 className="text-blue"><strong>price : <span>$</span>{price}</strong></h4>
                                       <p className="text-capitalize font-weight-bold mt-3 mb-0">info about product : </p>
                                       <p className="text-muted lead">{info}</p>
                                       <div>
                                           <Link to="/">
                                               <ButtonContainer2>Back To Products</ButtonContainer2>
                                           </Link>
                                               <ButtonContainer2 cart disabled={inCart ? true : false} 
                                                                    onClick={()=>{  value.addToCart(id);
                                                                                    value.openModal(id);}}
                                               >{inCart? "inCart" : "add to cart"}</ButtonContainer2>
                                       </div>
                                    </div>
                                </div>
                            </div>
                    );
                }}
            </ProductionConsumer>
        )
    }
}
