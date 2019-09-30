import React, { Component } from 'react';
import Title from '../Title';
import Columns from './Columns';
import Empty from './Empty';
import Cartlist from './Cartlist';
import Carttotal from './Carttotal';
import {ProductionConsumer} from '../../context';

export default class Cart extends Component {
    render() {
        return (
            <section>
                <ProductionConsumer>
                    {value=>{
                        const {cart} = value;
                        if(cart.length>0){
                            return(
                                <React.Fragment>
                                    <Title name="your" title="cart"/>
                                    <Columns/>
                                    <Cartlist value={value}/>
                                    <Carttotal value={value}/>
                                </React.Fragment>
                            );
                        }
                        else{
                            return(
                                    <Empty/>  
                            );
                        }
                    }}
                </ProductionConsumer>       
            </section>
        )
    }
}
