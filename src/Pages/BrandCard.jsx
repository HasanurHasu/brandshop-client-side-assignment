import PropTypes from 'prop-types';

const BrandCard = ({ brand }) => {
    const { name, img } = brand;
    return (
        <div className='flex flex-col justify-center items-center border rounded-lg p-5 hover:shadow-lg cursor-pointer hover:border-blue-600'>
            <h1 className='text-2xl font-semibold'>{name}</h1>
            <img src={img} alt={name} className='w-44' />
        </div>
    );
};

BrandCard.propTypes = {
    brand: PropTypes.object
};

export default BrandCard;