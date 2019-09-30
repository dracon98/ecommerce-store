import React, { Component } from 'react'
import Product from "./Product";
import Title from "./Title";
import {ProductionConsumer} from "../context";

export default class Productlist extends Component {
    render() {
        return (
           /* <div>
                <Product/>
            </div>*/
            

            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="products"/>
                        <div className="row">
                            <ProductionConsumer>
                                {value =>{
                                    return value.products.map( product =>{
                                        return <Product key={product.id} product={product} />
                                    })
                                }}
                            </ProductionConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
