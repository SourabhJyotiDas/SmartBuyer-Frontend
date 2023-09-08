import React, { Fragment } from "react";
import CartItemCard from "./CartItemCard.js";
import { useSelector, useDispatch } from "react-redux";
import { removeItemsFromCart } from "../../actions/cartAction";
import { Link, useNavigate } from "react-router-dom";
import { addItemsToCart } from "../../actions/cartAction";
import { RiDeleteBin2Line } from "react-icons/ri"
import { CgShoppingCart } from "react-icons/cg"

const Cart = () => {

   const navigate = useNavigate()
   const dispatch = useDispatch();
   const { cartItems } = useSelector((state) => state.cart);

   const increaseQuantity = (id, quantity, stock) => {
      const newQty = quantity + 1;
      if (stock <= quantity) {
         return;
      }
      dispatch(addItemsToCart(id, newQty));
   };

   const decreaseQuantity = (id, quantity) => {
      const newQty = quantity - 1;
      if (1 >= quantity) {
         return;
      }
      dispatch(addItemsToCart(id, newQty));
   };

   const deleteCartItems = (id) => {
      dispatch(removeItemsFromCart(id));
   };

   const checkoutHandler = () => {
      navigate("/login?redirect=shipping");
   };

   return (
      <Fragment>
         {cartItems.length === 0 ? (<div className="flex flex-col items-center justify-center my-10">
            <CgShoppingCart className="text-8xl text-gray-200" />

            <p className="py-7 text-xl font-semibold">Your cart is empty!</p>
            <Link to="/products" className="bg-blue-500 px-7 py-1 text-white font-semibold">Shop now</Link>

         </div>
         ) : (
            <div className=" md:flex  md:items-start">
               <div>
                  <p className="font-bold py-3 border-b-2 border-blue-500 top-1 sticky p-3 text-blue-500">SmartBuyer( {cartItems.length} )</p>

                  {cartItems && cartItems.map((item) => (
                     <div className=" text-xs md:text-sm p-3 md:w-[60%] mx-auto border-2 border-gray-100 md:my-3" key={item.product}>
                        <div className="flex flex-col justify-center">
                           <CartItemCard item={item} />
                           <div className="flex items-center space-x-5 primaryText py-3">
                              <div className="flex items-center ">
                                 <button className="p-3 bg-gray-400" onClick={() => decreaseQuantity(item.product, item.quantity)}>
                                    -
                                 </button>
                                 <button className="p-3">{item.quantity}</button>
                                 {/* <input type="number" value={item.quantity} readOnly /> */}
                                 <button className="p-3 bg-gray-400" onClick={() => increaseQuantity(item.product, item.quantity, item.stock)}>
                                    +
                                 </button>
                              </div>
                              <p className="text-sm text-green-500"><span>{`${item.price.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}`}</span></p>
                           </div>
                           <button className="w-[100%] flex items-center justify-center space-x-2 text-gray-500 border-2 border-gray-200 p-3" onClick={() => deleteCartItems(item.product)}>
                              <RiDeleteBin2Line className="text-xl " />
                              <span className="font-semibold text-sm">Remove</span>
                           </button>
                        </div>
                     </div>
                  ))}
               </div>

               <div className="border-t-2 border-gray-300 p-3 flex md:flex-col justify-between md:justify-center 
               sticky bottom-0 bg-white
               md:space-y-3 items-center md:w-[50vw] md:h-[50vh] md:sticky md:top-[20vh] md:border-2 md:border-gray-200">

                  <div className="text-center">
                     <p className=" md:block text-xs md:text-2xl font-semibold ">Total Price</p>

                     <p className=" font-semibold text-base text-green-500">{`${cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0).toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}`}</p>
                  </div>

                  <div className="flex justify-center ">
                     <button className="py-2 px-5 bg-yellow-500 font-bold whitespace-nowrap" onClick={checkoutHandler}>Place order</button>
                  </div>
               </div>
            </div>
         )}
      </Fragment>
   );
};

export default Cart;
