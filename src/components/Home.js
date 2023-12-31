import React, { useEffect } from 'react';
import { TfiMouseAlt } from "react-icons/tfi";
import ProductCard from "./ProductCard.js";
import Metadata from "./layout/Metadata";
import { clearErrors, getAllproduct } from '../actions/productAction.js';
import { useSelector, useDispatch } from 'react-redux';
import Loader from './layout/Loader.js';



export default function Home() {


      const dispatch = useDispatch()
      const { loading, error, products } = useSelector(state => state.products)

      useEffect(() => {
            window.scroll(0, 0)
            if (error) {
                  dispatch(clearErrors)
            }
            dispatch(getAllproduct())
            // eslint-disable-next-line
      }, [dispatch, error])



      return (
            <>
                  {
                        loading ? <Loader /> : <div>
                              <Metadata title={"SmartBuyer - Homepage"} />
                              <div className="h-[100vh] bg-gradient-to-b from-blue-500 to-white flex flex-col justify-center items-center space-y-7" data-aos="zoom-out-down" data-aos-duration="600" data-aos-once="true">
                                    <h4 className='text-center tracking-widest'> Welcome to <div className='primaryText text-xs'>SmartBuyer</div> </h4>
                                    <h1 className='text-center uppercase font-bold text-2xl  leading-loose tracking-widest'>Find Amazing products below</h1>
                                    <a href="#homepage"> <button className='flex items-center bg-white border-2 border-gray-400 py-2 px-5 rounded-lg  primaryFont tracking-widest hover:bg-transparent hover:text-white hover:ease-in-out duration-300'> Scrool <TfiMouseAlt /> </button></a>
                              </div>

                              <div id='homepage' className=" py-5 px-1">
                                    <h3 className=' leading-loose tracking-widest text-center text-xl primaryText'>Featured Products</h3>
                                    <div className='h-[1px] w-[80%] bg-gray-400 m-auto'></div>
                                    <div className='flex flex-wrap justify-center'>

                                          {
                                                products && products.map((element, index) => (
                                                      <ProductCard product={element} key={index} />
                                                ))
                                          }
                                    </div>
                              </div>
                        </div>
                  }

            </>
      )
}
