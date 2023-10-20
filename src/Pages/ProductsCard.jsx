import PropTypes from 'prop-types';
import { AiFillEye } from 'react-icons/ai';
import { BiSolidPencil } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ProductsCard = ({ product, count }) => {
    console.log(count);
    const { _id, name, description, image } = product;
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
    product: PropTypes.object
};

export default ProductsCard;