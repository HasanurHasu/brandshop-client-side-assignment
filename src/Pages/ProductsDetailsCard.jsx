
import PropTypes from 'prop-types';

const ProductsDetailsCard = ({ product }) => {
    const { _id, name, brand, type, price, description, rating, image } = product;
    return (

        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="p-10 items-start">
                <h2 className="card-title">{name}</h2>
                <p>Brand: {brand}</p>
                <p>Price: {price}</p>
                <p>{description}</p>
                <p>Rating: {rating}</p>
                
            </div>
            <div className='flex justify-around w-full'>
            <button className="btn btn-primary">Buy Now</button>
            <button className="btn btn-primary">Buy Now</button>
            </div>
        </div>
    );
};

ProductsDetailsCard.propTypes = {
    product: PropTypes.object
};

export default ProductsDetailsCard;