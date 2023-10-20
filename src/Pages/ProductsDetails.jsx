import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductsDetails = () => {
    const {id} = useParams();
    const [product, setProduct] = useState();
    console.log(product);
   
    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [])
    return (
        <div>
            <h1>{product}</h1>
        </div>
    );
};

export default ProductsDetails;