import PropTypes from 'prop-types';
import { AiFillEye } from 'react-icons/ai';
import { BiSolidPencil } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ProductsCard = ({ product }) => {
    const {name, brand, type, price, description, rating, image} = product;
    return (
        <div className='flex justify-between items-center rounded-md bg-[#F4F3F0]  w-full p-4'>
            <div>
                <img src={image} alt="" className='w-48 py-5' />
            </div>
            <div>
                <p className='font-semibold text-lg'>Name: <span className='font-normal'>{name}</span></p>
                <p className='font-semibold text-lg'>Brand: <span className='font-normal'>{brand}</span></p>
                <p className='font-semibold text-lg'>Price: <span className='font-normal'>{price}</span></p>
            </div>
            <div className='flex flex-col gap-3'>
                <button className='text-white bg-[#D2B48C] p-2 text-xl rounded-md'><AiFillEye></AiFillEye></button>
                <Link ><button className='text-white bg-[#3C393B] p-2 text-xl rounded-md'><BiSolidPencil></BiSolidPencil></button></Link>
                <button className='text-white bg-[#EA4744] p-2 text-xl rounded-md'><MdDelete></MdDelete></button>
            </div>
        </div>
    );
};

ProductsCard.propTypes = {
    product: PropTypes.object
};

export default ProductsCard;