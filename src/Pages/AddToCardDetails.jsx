
import PropTypes from 'prop-types';
import Swal from 'sweetalert2'

const AddToCardDetails = ({ myCard }) => {
    const { _id, name, brand, type, price, image } = myCard;

    const handleDelete = (_id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
              }).then((result) => {
                if (result.isConfirmed) {
                    fetch(`https://brand-shop-server-eta-puce.vercel.app/addToCard/${_id}`, {
                        method: 'DELETE'
                    })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Success!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
                }
              })






        

    }

    return (
        <div className="my-6">
            <div className="flex justify-center gap-10">
                    <div className='flex justify-between items-center'>
                        <img src={image} className="h-32" />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h1 className="text-2xl font-bold">{name}</h1>
                        <div className="flex gap-8">
                            <p className="text-xl my-2">Brand: <span className="text-blue-600">{brand}</span></p>
                            <p className="text-xl my-2">Type: <span className="text-blue-600">{type}</span></p>
                        </div>
                        <hr />
                        <p className="text-2xl font-bold text-red-500">${price} <span className="text-lg font-normal text-gray-700 line-through">${parseInt(price) + 1000}</span></p>
                       <div className='mt-2'>
                       <button onClick={() => handleDelete(_id)} className="py-2 px-6 bg-gray-700 text-white font-semibold">Delete</button>
                       </div>
                    </div>
                   
                </div>
        </div>
    );
};

AddToCardDetails.propTypes = {
    myCard: PropTypes.object
};

export default AddToCardDetails;