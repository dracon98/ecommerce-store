import React from 'react'
import { timingSafeEqual } from 'crypto';

export default function Cartitems({item,value}) {
    const {id, title, img, price, total, count} = item;
    const {itemIncrement, itemDecrement, removeItem, itemChange} = value;
    return (
        <div className="row my-1 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img src={img} style={{width:'5rem',height:"5rem"}} className="img-fluid" alt="product"/>

                
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">product : </span>
                {title}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">price : </span>
                ${price}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-black mx-1" onClick={ ()=>itemDecrement(id)}>-</span>
                        {/* <input className="btn btn-black mx-1" type="text" name="count" defaultValue={count} onChange={()=>itemChange(value)}/>*/}
                        <span className="btn btn-black mx-1">{count}</span>
                        <span className="btn btn-black mx-1" onClick={ ()=>itemIncrement(id)}>+</span>
                        
                    </div>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <div className="cart-icon" onClick={()=> removeItem(id)}>
                    <i className="fa fa-trash"/>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <strong> item total : $ {total}</strong>
            </div>
        </div>
    )
}
