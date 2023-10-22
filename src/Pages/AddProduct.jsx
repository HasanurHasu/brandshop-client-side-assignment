import Swal from "sweetalert2";


const AddProduct = () => {
    const handleAddProducts = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const image = form.image.value;

        const newProduct = { name, brand, type, price, description, rating, image }
        console.log(newProduct);

        fetch('https://brand-shop-server-eta-puce.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }
    return (
        <div className="max-w-6xl mx-auto bg-[#F4F3F0] p-20">
            <h1 className="text-3xl text-center font-bold mb-4">Add New Product</h1>
            <p className="text-center w-9/12 mx-auto">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            <div>
                <form onSubmit={handleAddProducts}>
                    <div className="grid grid-cols-2 gap-5 mt-10">
                        <div>
                            <h3 className="label-text text-xl mb-3">Name</h3>
                            <input type="name" name="name" placeholder="Enter Product Name" className="p-[10px] rounded-md w-full" />
                        </div>
                        <div>
                            <h3 className="label-text text-xl mb-3">Brand Name</h3>
                            <input type="name" name="brand" placeholder="Enter Brand Name" className="p-[10px] rounded-md w-full" />
                        </div>
                        <div>
                            <h3 className="label-text text-xl mb-3">Products Type</h3>
                            <div >
                                <select id="ddlViewBy" name="type" className="p-[10px] rounded-md w-full">
                                    <option value="">Select One</option>
                                    <option value="Macbook">Macbook</option>
                                    <option value="Iphone">Iphone</option>
                                    <option value="Ipad">Ipad</option>
                                    <option value="iWatch">iWatch</option>
                                    <option value="Airpods">Airpods</option>
                                    <option value="Accessories">Accessories</option>
                                </select>
                            </div>

                            {/* <input type="name" name="type" placeholder="Enter Products Type" className="p-[10px] rounded-md w-full" /> */}
                        </div>
                        <div>
                            <h3 className="label-text text-xl mb-3">Price</h3>
                            <input type="name" name="price" placeholder="Enter Products Price" className="p-[10px] rounded-md w-full" />
                        </div>
                        <div>
                            <h3 className="label-text text-xl mb-3">Short Description</h3>
                            <input type="name" name="description" placeholder="Enter Short Description" className="p-[10px] rounded-md w-full" />
                        </div>
                        <div>
                            <h3 className="label-text text-xl mb-3">Rating</h3>
                            <input type="name" name="rating" placeholder="Enter Products Rating" className="p-[10px] rounded-md w-full" />
                        </div>
                        <div className="col-span-2">
                            <h3 className="label-text text-xl mb-3">Image</h3>
                            <input type="name" name="image" placeholder="Enter Image URL" className="p-[10px] rounded-md w-full" />
                        </div>
                        <input type="submit" className="w-full py-[10px] text-center font-medium bg-[#D2B48C] col-span-2 border text-lg rounded-md" value="Add Products" />

                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;