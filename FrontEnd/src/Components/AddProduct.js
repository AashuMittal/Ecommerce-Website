import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const location = useLocation();
    const { cart } = location.state || { cart: [] }; // Ensure cart is an empty array if undefined
    const navigate = useNavigate();

    const handleDelete = (index) => {
        const updatedCart = cart.filter((_, i) => i !== index);
        localStorage.setItem('cart', JSON.stringify(updatedCart)); 
        navigate('/add', { state: { cart: updatedCart } }); 
    };

    const handleBuyNow = (price) => {
        navigate(`/payment?price=${price}`);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className='text-center font-bold text-3xl m-3 dark:text-neutral-200 bg-orange-950'>Add Cart</h1>
            
            {cart.length > 0 ? (
                <div className="flex flex-wrap justify-center">
                    {cart.map((product, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg p-6 m-2 w-60">
                            <h2 className='font-bold text-lg mb-3 text-gray-800'>{product.title}</h2>
                            <img src={product.image} alt={product.title} className='w-full h-32 object-cover mb-4' />
                            <p className='text-gray-600 mb-4'>{product.description.substring(0, 40)}...</p>
                            <span className='font-bold text-xl text-amber-500'>${product.price}</span>
                            <div className="flex justify-between mt-4">
                                <button 
                                    onClick={() => handleBuyNow(product.price)}
                                    className='px-4 py-2 bg-red-800 text-white rounded-full hover:bg-green-600 transition duration-300'
                                >
                                    Buy Now
                                </button>
                                <button 
                                    onClick={() => handleDelete(index)}
                                    className='px-2 py-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-300'
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className='text-gray-600 text-center'>No products added to the cart yet.</p>
            )}
        </div>
    );
};

export default AddProduct;
