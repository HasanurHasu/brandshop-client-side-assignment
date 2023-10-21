import { useContext } from "react";
import { AuthContext } from "../Provider/Provider";
import AllProductsCard from "./AllProductsCard";


const AllProducts = () => {
    const { products } = useContext(AuthContext)
    return (
        <div className="max-w-6xl mx-auto my-8">
            <div className="text-center">
                <h1 className="text-4xl font-bold">All Products</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, laboriosam!</p>
                <div className="flex flex-col lg:grid lg:grid-cols-3 gap-5 mt-8 mx-4">
                    {
                        products.map(product => <AllProductsCard key={product._id} product={product}></AllProductsCard>)
                    }
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default AllProducts;