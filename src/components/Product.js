import React, { Component } from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductionConsumer} from '../context';

export default class Product extends Component {
    render() {
        const {id, title, img, price, inCart} = this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <ProductionConsumer>
                        {value => (
                            <div className="img-container p-5"
                            onClick={() => value.handleDetail(id)}>
                        
                    {/*Card Upper Part */}
                        <Link to="/details">
                            <img src={img} alt="product" className="card-img-top"/>
                        </Link>
                        <button className="cart-btn" 
                                disabled={inCart ? true : false} 
                                onClick={()=>{value.addToCart(id);
                                            value.openModal(id);}}>
                        {inCart ? (
                            <p className="text-capitalize mb-0">
                                {" "}
                                in cart
                            </p>
                        ) : (
                            <i className="fa fa-cart-plus "/>
                        )}
                        </button>
                    </div>
                        )}
                    </ProductionConsumer>
                    {/*Card Footer */}
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">{title}</p>
                        <h5 className="text-blue font-italic mb-0">
                            <span className="mr-1">$</span>
                            {price}
                        </h5>
                    </div>
                </div>
            </ProductWrapper>
        )
    }
}

const ProductWrapper = styled.div`
    .card{
        border-color: transparent;
        transition: all 0.5s linear;
    }
    .card-footer{
        background: transparent;
        border-top: transparent;
        transition: all 0.5s linear; 
    }
    &:hover{
        .card{
            border: 0.04 rem solid rgba(0,0,0,0.2);
            box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
        }
        .card-footer{
            background: rgba(238, 238, 238, 1);
        }  
    }
    .card-img-top{
        transition: all 0.5s linear;
    }
    .img-container{
        position: relative;
        overflow: hidden;
    }
    .img-container:hover .card-img-top{
        transform: scale(1.3);
    }
    .cart-btn{
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 0rem 0.5rem;
        background: var(--lightBlue);
        border: none;
        color: var(--mainWhite);
        font-size: 1.4rem;
        border-radius: 0.5rem 0 0 0;
        transform: translate(100%,100%);
        transition: all 0.25s linear;
    }
    .img-container:hover .cart-btn{
        transform: translate(0,0);
    }
    .cart-btn:hover{
        color: var(--mainBlue);
        cursor: pointer;
    }
    .cart-btn:focus{
        outline: none;
    }
`;
