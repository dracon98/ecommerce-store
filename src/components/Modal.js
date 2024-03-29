import React, { Component } from 'react';
import styled from 'styled-components';
import {ProductionConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer2} from './ButtonCart';


export default class Modal extends Component {
    render() {
        return (
            <ProductionConsumer>
            {value =>{
                    const {modalOpen, closeModal} = value;
                    const {img, title, price} = value.modalProduct;
                    if (!modalOpen){
                        return null;
                    }
                    else{
                        return (
                            <ModalContainer>
                                <div className="container">
                                    <div className="row">
                                        <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                                            <h5>item added to the cart</h5>
                                            <img src={img} className="img-fluid" alt="product"/>
                                            <h5>{title}</h5>
                                            <h5 className="text-muted">price : $ {price}</h5>
                                            <Link to="/">
                                               <ButtonContainer2 onClick={()=>closeModal()}>continue shopping</ButtonContainer2> 
                                            </Link>
                                            <Link to="/cart">
                                            <ButtonContainer2 cart onClick={()=>closeModal()}>go to cart</ButtonContainer2>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </ModalContainer> 
                        )   
                    }
                }}
        </ProductionConsumer>
        )
    }
}

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    #modal{
        background: var(--mainWhite);
    }
`;