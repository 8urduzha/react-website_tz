import React from "react";
import './ModalAccept.css'
import {useNavigate, useParams} from "react-router-dom";
import useFetch from "../../../custom-hooks/UseFetch";

export const ModalAccept = ({closeModal, }) => {

    const { id } = useParams()
    const {products} = useFetch('http://localhost:3001/products/' + id)
    const navigate = useNavigate();

    const handleClick = () => {
        fetch('http://localhost:3001/products/'+ id, {
            method: 'DELETE'
        }).then( () => {
            console.log(id)
            navigate('/')
        })
    }

    return(
        <div className="modal-accept_block">
            <div className="modal-accept_box">
                <h2>You realy want delete?</h2>
                <div className="modal-accept_buttons">
                    <button className="modal-accept_btn" onClick={handleClick}>Yes</button>
                    <button className="modal-accept_btn" onClick={() => closeModal(false)}>No</button>
                </div>
            </div>
        </div>
    )
}