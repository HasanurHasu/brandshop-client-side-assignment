import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Provider/Provider";
import ProductsCard from "./ProductsCard";
import ProductsDetailsCard from "./ProductsDetailsCard";


const BrandDetails = () => {
    const { products } = useContext(AuthContext)

    const { id } = useParams()

    const filterProducts = products.filter(product => product.type.toLowerCase() === id.toLowerCase());
    return (
        <div className="max-w-6xl mx-auto mt-8">
            {
                filterProducts.length == 0 ? <>
                    <div className="">
                        <div className="flex justify-center items-center h-screen">
                            <h1 className="text-center text-4xl font-bold">Cumming Soon..</h1>
                        </div>
                    </div>
                </>
                    :
                    <>
                        <div className="my-8">
                            <div className="carousel w-full">
                                {
                                    filterProducts.map((product, idx) => <ProductsCard count={idx} key={product._id} product={product}></ProductsCard>)
                                }
                            </div>
                            <div className="flex justify-center w-full py-2 gap-2">
                                {
                                    filterProducts.map((product, idx) => <a key={idx} href={`#item${idx + 1}`} className="btn btn-xs">{idx + 1}</a>)
                                }
                            </div>
                        </div>
                        <hr />
                        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-5 mt-8 mx-4">
                            {
                                filterProducts.map(product => <ProductsDetailsCard key={product._id} product={product}></ProductsDetailsCard>)
                            }
                        </div>
                    </>
            }
        </div>
    );
};

export default BrandDetails;