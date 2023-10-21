import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BrandCard = ({ brand }) => {
    const { name, img } = brand;
    return (
        <Link to={`/brandDetails/${name}`}>
            <div className='flex flex-col justify-between items-center border rounded-lg p-5 hover:shadow-lg hover:border-blue-600 h-60'>
                <h1 className='text-2xl font-semibold'>{name}</h1>
                <img src={img} alt={name} className='w-44' />
            </div>
        </Link>
    );
};

BrandCard.propTypes = {
    brand: PropTypes.object
};

export default BrandCard;