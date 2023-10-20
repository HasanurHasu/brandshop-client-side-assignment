
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductsDetailsCard = ({ product }) => {
    const { _id, name, brand, type, price, description, rating, image } = product;
    return (

        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="p-10 space-y-3 items-start">
                <h2 className="card-title">{name}</h2>
                <div className='flex justify-between items-center'>
                    <p>{type}</p>
                    <p>Brand: {brand}</p>
                </div>
                <p className='text-2xl font-semibold text-red-400'>${price}</p>
                <div className="rating">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
                <div className='flex justify-between w-full'>
                    <Link to={`/productDetails/${_id}`}><button className="btn btn-primary">Details</button></Link>
                    <button className="btn btn-primary">Update</button>
                </div>

            </div>

        </div>
    );
};

ProductsDetailsCard.propTypes = {
    product: PropTypes.object
};

export default ProductsDetailsCard;