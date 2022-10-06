import React from "react";
import './Catalog.css'
import {Link, useParams} from "react-router-dom";
import useFetch from "../../custom-hooks/UseFetch";

export const Catalog = ({products}) => {

    // const navigation = useNavigation();
    return(
        <div className="catalog">
            {/*{products.sort( (a,b) => a.id > b.id ? 1:-1)}*/}
            {products.map((product) => (

                <div className="catalog-preview" key={product.id}>
                    <Link to={`/product/${product.id}`}>
                        <img src={product.imageUrl} className="product-img" alt=""/>
                    </Link>
                        <h2>{product.name} </h2>
                        <p>Weight: {product.weight} kg</p>
                        <p>Price {product.price} $</p>
                    {/*<button >Delete</button>*/}
                </div>
            ))}
        </div>
    )
}