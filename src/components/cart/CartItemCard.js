import React from "react";
import "./CartItemCard.css";
import { Link } from "react-router-dom";

const CartItemCard = ({ item}) => {
   return (
      <div className=" flex items-center space-x-3 md:space-x-5 primaryText">
         <img className="h-[80px] md:h-[20vh] md:rounded-md" src={item.image} alt="img" />
         <div className="flex flex-col space-y-5">
            <Link to={`/product/${item.product}`}>{item.name}</Link>
         </div>
      </div>
   );
};

export default CartItemCard;
