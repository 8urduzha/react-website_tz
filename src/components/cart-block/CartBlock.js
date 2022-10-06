import React from "react";
import {FaShoppingBasket} from "react-icons/fa"
import "./CartBlock.css"

export const CartBlock = () => {

    return(
        <div className="cart-block">
            <FaShoppingBasket size={25} className="cart-icon"/>
            <span className="cart-price">1000$</span>
        </div>
    )
}