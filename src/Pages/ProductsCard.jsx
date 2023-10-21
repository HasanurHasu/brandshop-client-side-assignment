import PropTypes from 'prop-types';

const ProductsCard = ({ product, count }) => {
    const {  name, description, image } = product;
    return (
        <div id={`item${count + 1}`} className="carousel-item w-full">
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={image} className="max-w-sm" />
                    <div>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <p className="py-6">{description}</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

ProductsCard.propTypes = {
    product: PropTypes.object,
    count: PropTypes.number
};

export default ProductsCard;