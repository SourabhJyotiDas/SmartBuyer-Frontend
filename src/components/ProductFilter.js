import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Rating } from "@material-ui/lab";
import { BiArrowBack } from 'react-icons/bi';



const categories = [
   "Laptop",
   "Camera",
   "SmartPhone",
   "Earphones",
   "SmartWatch",
   "Charger",
   "Keyboard",
   "Monitor",
   "Tablet"
];

export default function ProductFilter({ toggleFilter, priceHandler, price, setCategory, ratings, setRatings }) {

   const navigate = useNavigate();

   const [keyword, setkeyword] = useState("")

   const searchSubmitHandler = (e) => {
      e.preventDefault();
      if (keyword.trim()) {
         navigate(`/products/${keyword}`)
      } else {
         navigate(`/products`)
      }
   }


   // const options = {
   //    size: "large",
   //    value: ratings,
   //    readOnly: true,
   //    precision: 0.5,
   // };

   return (
      <div className='w-[100vw] md:w-[30vw]  px-5 flex flex-col items-center justify-around'>

         <div className='text-2xl md:hidden w-full my-5' onClick={toggleFilter}>
            <BiArrowBack />
         </div>

         <div>
            <form action="" onSubmit={searchSubmitHandler}>
               <input className='border-2 border-purple-900 rounded-md p-2 outline-none ' type="text" name='text' value={keyword} onChange={(e) => { setkeyword(e.target.value) }} placeholder="Search" />
            </form>
         </div>

         <div className='h-[1px] bg-gray-400 w-[100%]'></div>

         {/* select category */}
         <div className='flex flex-col space-y-4 my-5'>
            <h3 className='text-xl text-purple-900'>Categories</h3>
            {
               categories.map((element, index) => {
                  return <button key={index} type="button" name='category' onClick={() => { setCategory(element) }}>
                     {element}
                  </button>
               })
            }
         </div>

         <div className='h-[1px] bg-gray-400 w-[100%]'></div>


         <h3 className='text-xl text-purple-900'>Ratings</h3>
         <Rating onChange={(e) => setRatings(e.target.value)} value={ratings} size="large" />

         <div className='h-[1px] bg-gray-400 w-[100%] '></div>

      </div>
   )
}
