import React, {useState} from "react";
import {useParams} from "react-router-dom";
import useFetch from "../../custom-hooks/UseFetch";
import './Product.css';
import {ModalAccept} from "./modal-accept";
import {ModalUpdate} from "./modal-update";

export const Product = () => {

    const { id } = useParams()
    const {products} = useFetch('http://localhost:3001/products/' + id)
    const [openModal, setOpenModal] = useState(false)
    const [updateModal, setUpdateModal] = useState(false)


    return(
        <div className="product-info">
            {openModal && <ModalAccept closeModal={setOpenModal}/>}
            {updateModal && <ModalUpdate closeModal={setUpdateModal}/>}
            {products &&(
                <div className="product-info-block">
                    <img src={products.imageUrl} alt="" className="product-img"/>
                    <h2>Knife info - {id} </h2>
                    <p>{products.name}</p>
                    <p>Knife weight: {products.weight}</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ducimus, illum. <br/>
                        Aperiam culpa debitis earum enim, hic nesciunt nostrum perspiciatis quidem sequi <br/>
                        temporibus veritatis, vitae!</p>
                    <p>Knife price: {products.price}</p>
                    <button onClick={() => {
                        setOpenModal(true)
                    }}>Delete</button>

                    <button onClick={() => {
                        setUpdateModal(true)
                    }}>Edit</button>

                </div>)}
        </div>
    )
}