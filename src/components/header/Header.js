import React, {useState} from "react";
import {Link} from "react-router-dom"
import './Header.css';
import {CartBlock} from "../cart-block";
import {Modal} from "../modal";


export const Header = () => {

    const [openModal, setOpenModal] = useState(false)

    return(
        <div className="header">
            <div className="wrapper">
                <Link to="/" className="header__store-title">
                    Knife store
                </Link>
                <a className="header__add-knife" onClick={() => {setOpenModal(true)}}>
                    Add knife
                </a>
            </div>
            {openModal && <Modal closeModal={setOpenModal}/>}
            <div className="wrapper header__cart-btn-wrapper">
                <CartBlock/>
            </div>
        </div>
    )
}