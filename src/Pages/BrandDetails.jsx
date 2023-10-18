import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Provider/Provider";
import ProductsCard from "./ProductsCard";


const BrandDetails = () => {
    const {products} = useContext(AuthContext)

    const { id } = useParams()
    console.log(id);
    console.log(products);

    const filterProducts = products.filter(product => product.type.toLowerCase() === id.toLowerCase());
    return (
       <div className="grid grid-cols-2 gap-6 mt-8 max-w-6xl mx-auto">
        {
            filterProducts.map(product => <ProductsCard key={product._id} product={product}></ProductsCard>)
        }
       </div>
    );
};

export default BrandDetails;