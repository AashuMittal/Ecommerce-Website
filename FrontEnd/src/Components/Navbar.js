import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const auth = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate('/login');
  };

  const handleAddCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || []; 
    navigate("/add", { state: { cart } }); 
  };

  return (
    <div>
      <nav className="bg-white dark:bg-gray-500">
        <div className="flex justify-between items-center mx-auto max-w-screen-xl p-4">
         
          <div className="flex items-center">
            <a href="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src="https://img.freepik.com/premium-vector/ecommerce-logo-design_624194-144.jpg" className="h-8 rounded-md w-27 h-19" alt="Flowbite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white ">E-<span className=' bg-red-900'>DashBoard</span></span>
            </a>
            <ul className="flex flex-row font-medium ml-8 space-x-8 rtl:space-x-reverse text-sm mr-10">
              <li>
                <Link to="/" className="text-gray-900 dark:text-white hover:underline">Home</Link>
              </li>
              <li>
                <Link to="/product" className="text-gray-900 dark:text-white hover:underline">Products</Link>
              </li>
              <li>
                <button onClick={handleAddCart} className="text-gray-900 dark:text-white hover:underline flex items-center space-x-2">
                  <FaShoppingCart /> 
                  <span>Add Cart</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Right Side - Auth Links */}
          <div className="flex items-center space-x-4">
            <Link to="/signup" className="text-gray-900 dark:text-white hover:underline mr-8">Signup</Link>
            {auth ? (
              <Link onClick={logout} to="/login" className="text-gray-900 hover:underline text-2xl dark:text-blue-800 font-bold">
                {auth.name} 
                <span className="ml-5 dark:text-black text-xl font-medium">Logout</span>
              </Link>
            ) : (
              <Link to="/login" className="text-gray-900 dark:text-white hover:underline ">Login</Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
