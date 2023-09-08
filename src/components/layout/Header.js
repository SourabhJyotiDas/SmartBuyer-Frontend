import React from 'react';
import { Link } from 'react-router-dom';
import { BiLogIn } from "react-icons/bi";
import { CgMenuMotion } from "react-icons/cg";
import { AiOutlineAppstoreAdd, AiOutlineClose, AiOutlineHome, AiOutlineMessage, AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";



export default function Header() {
      const toggleMenu = () => {
            document.getElementById("mobileMenu").classList.toggle("hidden")
            document.getElementById("mobileMenuClose").classList.toggle("hidden")
            document.getElementById("mobileList").classList.toggle("hidden")
      }

      return (
            <>
                  <header className='sticky top-0 z-10'>
                        <nav className='flex items-center p-3 space-x-3 md:px-10 bg-blue-500 '>
                              <CgMenuMotion id='mobileMenu' className='text-2xl md:hidden' onClick={toggleMenu} />
                              <AiOutlineClose id='mobileMenuClose' className='text-xl hidden' onClick={toggleMenu} />
                              <Link to="/">
                                    <div className='cursor-pointer  primaryText flex items-center text-white'>
                                          SmartBuyer
                                    </div>
                              </Link>




                              <div className='list-none space-x-4 hidden md:block'>
                                    <Link className='cursor-pointer' to={"/"}>Home</Link>
                                    <Link className='cursor-pointer' to={"/products"}>Products</Link>
                                    <Link className='cursor-pointer' to={"/contact"}>Contact</Link>
                                    <Link className='cursor-pointer' to={"/cart"}>Cart</Link>
                              </div>
                              <div className=' items-center space-x-4 hidden  md:flex'>
                                    <Link className='cursor-pointer' to={"/search"}>Search</Link>
                                    <Link className='cursor-pointer text-2xl' to={"/login"}><BiLogIn /></Link>
                              </div>
                        </nav>
                        <div id='mobileList' className='hidden'>
                              <div className='flex flex-col items-start justify-start primaryText text-xs space-y-3 h-[100vh] w-[70vw] fixed top-15 z-20 bg-white '>
                                    <Link onClick={toggleMenu} className='cursor-pointer space-x-2 p-1 border-b-2 border-gray-100 text-gray-500 w-[90%] mx-auto text-2xl flex items-center' to={"/"}>
                                          <AiOutlineHome />
                                          <span className='text-xs'>Home</span>
                                    </Link>

                                    <Link onClick={toggleMenu} className='cursor-pointer space-x-2 p-1 border-b-2 border-gray-100 text-gray-500 w-[90%] mx-auto text-2xl flex items-center' to={"/products"} >
                                          <AiOutlineAppstoreAdd />
                                          <span className='text-xs'>Products</span></Link>

                                    <Link onClick={toggleMenu} className='cursor-pointer space-x-2 p-1 border-b-2 border-gray-100 text-gray-500 w-[90%] mx-auto text-2xl flex items-center' to={"/contact"} >
                                          <AiOutlineMessage />
                                          <span className='text-xs '>Contact</span></Link>

                                    <Link onClick={toggleMenu} className='cursor-pointer space-x-2 p-1 border-b-2 border-gray-100 text-gray-500 w-[90%] mx-auto text-2xl flex items-center' to={"/cart"} >
                                          <AiOutlineShoppingCart />
                                          <span className='text-xs'>Cart</span></Link>

                                    <Link onClick={toggleMenu} className='cursor-pointer space-x-2 p-1 border-b-2 border-gray-100 text-gray-500 w-[90%] mx-auto text-2xl flex items-center' to={"/search"} >
                                          <AiOutlineSearch />
                                          <span className='text-xs'>Search</span></Link>

                                    <Link onClick={toggleMenu} className='cursor-pointer space-x-2 p-1 border-b-2 border-gray-100 text-gray-500 w-[90%] mx-auto text-2xl flex items-center' to={"/login"} >
                                          <BiLogIn />
                                          <span className='text-xs'>Logout</span>
                                    </Link>

                              </div>
                        </div>

                  </header>
            </>
      )
}
