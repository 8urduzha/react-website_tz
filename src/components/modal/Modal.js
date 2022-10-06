import React, {useState} from "react";
import './Modal.css'
import {useNavigate} from "react-router-dom";




export const Modal = ({closeModal}) => {

    const[name, setName] = useState("")
    const[weight, setWeight] = useState("")
    const[price, setPrice] = useState("")
    const[imageUrl, setImageUrl] = useState("")

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const productsUpdate ={name, weight, price, imageUrl}

        fetch('http://localhost:3001/products', {
            method: 'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(productsUpdate)
        }).then( () => {
            console.log('new product added')
            window.location.reload();
        })


    }

    return(
        <div className="modal-block">
            <div className="modal-window">
                <div className="modal-top">
                    <h2>Here you can add knife to list</h2>
                    <button className="close-modal-btn" onClick={() => closeModal(false)}>X</button>
                </div>
                <div className="modal-middle">
                <div className="modal-form">
                    <form onSubmit={handleSubmit}>
                        <div className="modal-form-box">
                        <label>Product title</label>
                        <input
                            type="text"
                            required
                            value={name}
                            onChange={(e)=> setName(e.target.value)}
                        />
                        </div>
                        <div className="modal-form-box">
                        <label>Product weight</label>
                        <input
                            type="text"
                            required
                            value={weight}
                            onChange={(e)=> setWeight(e.target.value)}
                        />
                        </div>
                        <div className="modal-form-box">
                        <label>Product price $</label>
                        <input
                            type="number"
                            required
                            value={price}
                            onChange={(e)=> setPrice(e.target.value)}
                        />
                        </div>
                        <div className="modal-form-box">
                        <label>Product image(URL)</label>
                        <textarea
                            required
                            value={imageUrl}
                            onChange={(e)=> setImageUrl(e.target.value)}
                        />
                        </div>
                        <div className="modal-button-box">
                            <button className="modal-btn-add" >Add</button>
                        </div>
                    </form>
                </div>
                </div>
                <div className="modal-bottom">
                                    </div>
            </div>
        </div>
    )
}