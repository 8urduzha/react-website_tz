import React, {useState} from "react";
import './ModalUpdate.css'
import {Link, useParams} from "react-router-dom";
import useFetch from "../../../custom-hooks/UseFetch";

export const ModalUpdate = ({closeModal}) => {

    const { id } = useParams()
    const {products} = useFetch('http://localhost:3001/products/' + id)

    const[name, setName] = useState("")
    const[weight, setWeight] = useState("")
    const[price, setPrice] = useState("")
    const[imageUrl, setImageUrl] = useState("")


    const initializingData = () => {

        }

    initializingData()


    const editSubmit = (e) => {
        e.preventDefault();
        const productsUpdate ={name, weight, price, imageUrl}

        fetch('http://localhost:3001/products/' + id, {
            method: 'PUT',
            headers: {
                "Accept":"application/json",
                "Content-Type":"application/json",
            },
            body: JSON.stringify(productsUpdate)
        }).then( () => {
            console.log('new product added')
            window.location.reload();
        })
    }

    return (
         <div className="modal-block">
                <div className="modal-window">
                    <div className="modal-top">
                        <h2>Here you can update information</h2>
                        <button className="close-modal-btn" onClick={() => closeModal(false)}>X</button>
                    </div>
                    <div className="modal-middle">
                        <div className="modal-form">
                            <form onSubmit={editSubmit}>
                                <div className="modal-form-box">
                                    <label>Product title</label>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="modal-form-box">
                                    <label>Product weight</label>
                                    <input
                                        type="text"
                                        value={weight}
                                        onChange={(e) => setWeight(e.target.value)}
                                    />
                                </div>
                                <div className="modal-form-box">
                                    <label>Product price $</label>
                                    <input
                                        type="number"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                    />
                                </div>
                                <div className="modal-form-box">
                                    <label>Product image(URL)</label>
                                    <textarea
                                        value={imageUrl}
                                        onChange={(e) => setImageUrl(e.target.value)}
                                    />
                                </div>
                                <div className="modal-button-box">
                                    <button className="modal-btn-add">Add</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
}