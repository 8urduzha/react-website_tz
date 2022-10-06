import './HomePage.css';
import {Catalog} from "../../components/catalog/Catalog";
import useFetch from "../../custom-hooks/UseFetch";

export const HomePage = () => {

    const {products} = useFetch('http://localhost:3001/products')

    return(
        <div className="home-page">
            {products && <Catalog products={products}/>}
        </div>
    )
}