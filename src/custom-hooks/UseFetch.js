import React, { useState, useEffect } from 'react';


const useFetch = (url) => {

    const [products, setProducts]= useState(null);

    useEffect(() => {
        fetch(url)
            .then(res => {
                return res.json()
            }).then(data => {
            setProducts(data)
        })
    }, [url]);


    return{products}
}

export default useFetch;