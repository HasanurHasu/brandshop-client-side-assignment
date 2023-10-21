import PropTypes from 'prop-types';

const AllProductsCard = ({ product }) => {
    const {  name, brand, type, price, image } = product;
    return (

        <div className="card  bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="h-40 rounded-xl" />
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
                <div>
                <button className="py-2 px-10 bg-[#0066ff] text-white font-semibold">By Now</button>
                </div>
            </div>

        </div>
    );
};

AllProductsCard.propTypes = {
    product: PropTypes.object
};

export default AllProductsCard;