import { useEffect } from "react";
import { useState } from "react";
import BrandCard from "./BrandCard";


const BrandItems = () => {
    const [brands, setBrands] = useState([])

    useEffect(() => {
        fetch('/brandCategory.json')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])
    return (
        <div className="mt-8">
            <h1 className="text-center text-3xl font-bold">Brands Category</h1>
            <div className="grid grid-cols-3 gap-5 mt-8">
                {
                    brands.map(brand => <BrandCard key={brand.id} brand={brand}></BrandCard>)
                }
            </div>
        </div>
    );
};

export default BrandItems;