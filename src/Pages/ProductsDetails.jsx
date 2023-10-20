import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Provider/Provider";
import Swal from "sweetalert2";

const ProductsDetails = () => {
    const {user} = useContext(AuthContext);
    const userEmail = user.email;
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    console.log(product);
    const {  name, brand, type, price, description, image } = product;

    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const handleAddToCard = () => {

        const addToCard = {name, brand, type, price, description, image, userEmail };
        console.log(addToCard);
        fetch('http://localhost:5000/addToCard', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addToCard)
        })
        .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }
    return (
        <div className="max-w-6xl mx-auto">
            <div className="hero">
                <div className="hero-content gap-8 flex-col lg:flex-row">
                    <img src={image} className="max-w-xs p-10" />
                    <div>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <div className="flex gap-20">
                            <p className="text-xl my-2">Brand: <span className="text-blue-600">{brand}</span></p>
                            <p className="text-xl my-2">Type: <span className="text-blue-600">{type}</span></p>
                        </div>
                        <hr />
                        <p className="text-2xl font-bold text-red-500">${price} <span className="text-lg font-normal text-gray-700 line-through">${parseInt(price) + 1000}</span></p>
                        <div className="space-y-3">
                            <p className="">{description}</p>
                            <div className="flex gap-10">
                                <button onClick={handleAddToCard} className="py-2 px-4 bg-blue-600 text-white font-semibold">Add to Card</button>
                                <button className="py-2 px-6 bg-orange-500 text-white font-semibold">By Now</button>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsDetails;