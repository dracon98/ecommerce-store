import React from 'react'
import Cartitems from './Cartitems';

export default function Cartlist({value}) {
    const {cart} = value;
    return (
        <div className="container-fluid">
                {cart.map( item =>{
                    return <Cartitems key={item.id} item={item} value={value}/>;
                }

                )}
        </div>
    )
}

