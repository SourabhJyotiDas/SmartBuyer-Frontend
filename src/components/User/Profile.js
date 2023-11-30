import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Loader from '../layout/Loader'
import Metadata from '../layout/Metadata';
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai"
import { BsBoxSeam } from "react-icons/bs"
import { MdPassword, MdWavingHand } from "react-icons/md"

export default function Profile() {

   const navigate = useNavigate()

   const { loading, isAuthenticated, user } = useSelector(state => state.user);

   useEffect(() => {
      if (isAuthenticated === false) {
         navigate("/login");
      }
      // eslint-disable-next-line
   }, [navigate, isAuthenticated]);


   return (
      <>
         {
            loading ? <Loader /> : <div>
               <Metadata title={`${user.name}'s Profile`} />
               <div className="p-3">
                  <h1 className='font-bold leading-relaxed tracking-wider flex items-center my-4 md:text-lg'>Hey! {user.name} 
                  <MdWavingHand className='mx-1'/>
                  </h1>
                  <div className='flex flex-col justify-center items-center space-y-3'>

                     <img className='rounded-full ring-4 ring-blue-500' src={user.avatar.url} alt={user.name} />
                     <div className='flex flex-wrap justify-around w-full space-y-3  md:w-[60%]  md:items-center md:justify-center md:space-x-3 md:p-3'>
                        <div></div>
                        <Link to="/account/update">
                           <button className=' py-2 px-3 text-black font-semibold flex items-center space-x-1 border-2 border-gray-400 rounded-md whitespace-nowrap text-sm'>
                              <AiOutlineUser className='font-bold text-blue-500' />
                              <p> Edit Profile</p>
                           </button>
                        </Link>
                        <Link to="/cart">
                           <button className=' py-2 px-3 text-black font-semibold flex items-center space-x-1 border-2 border-gray-400 rounded-md whitespace-nowrap text-sm'>
                              <AiOutlineShoppingCart className='font-bold text-blue-500' />
                              <p>My Cart</p>
                           </button>
                        </Link>
                        <Link to="/orders">
                           <button className=' py-2 px-3 text-black font-semibold flex items-center space-x-1 border-2 border-gray-400 rounded-md whitespace-nowrap text-sm'>
                              <BsBoxSeam className='font-bold text-blue-500' />
                              <p>Orders</p>
                           </button>
                        </Link>
                        <Link to="/password/update">
                           <button className=' py-2 px-3 text-black font-semibold flex items-center space-x-1 border-2 border-gray-400 rounded-md whitespace-nowrap text-sm'>
                              <MdPassword className='font-bold text-blue-500' />
                              <p>Change Password</p>
                           </button>
                        </Link>
                        <div></div>
                     </div>
                  </div>
                  <div className='text-center space-y-4 my-5'>
                     <div>
                        <h4 className='font-semibold leading-relaxed tracking-wider'>Full Name</h4>
                        <p className='text-slate-500 italic'>{user.name}</p>
                     </div>
                     <div>
                        <h4 className='font-semibold leading-relaxed tracking-wider'>Email</h4>
                        <p className='text-slate-500 italic'>{user.email}</p>
                     </div>
                     <div>
                        <h4 className='font-semibold leading-relaxed tracking-wider'>Joined On</h4>
                        <p className='text-slate-500 italic'>{String(user.createdAt).substr(0, 10)}</p>
                     </div>

                  </div>
               </div>
            </div>
         }
      </>
   )
}
