import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Provider/Provider";
import ProductsCard from "./ProductsCard";


const BrandDetails = () => {
    const { products } = useContext(AuthContext)

    const { id } = useParams()
    console.log(id);
    console.log(products);

    const filterProducts = products.filter(product => product.type.toLowerCase() === id.toLowerCase());
    return (
        <div>
            <div className="carousel w-full">
                {
                    filterProducts.map((product, idx) => <ProductsCard count={idx} key={product._id} product={product}></ProductsCard>)
                }
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                {
                    filterProducts.map((product, idx) => <a key={idx} href={`#item${idx+1}`} className="btn btn-xs">{idx+1}</a>)
                }
            </div>
        </div>
    );
};

export default BrandDetails;