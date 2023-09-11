import React, { useEffect, useState } from 'react';
import { clearErrors, getAllproduct } from '../../actions/productAction.js';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../layout/Loader.js';
import ProductCard from "../ProductCard.js";
import ProductFilter from "../ProductFilter.js";
import { useParams } from 'react-router-dom';
import Pagination from "react-js-pagination";
import Metadata from '../layout/Metadata.js';
import { RiEqualizerLine } from 'react-icons/ri';




export default function Products() {

   const dispatch = useDispatch()
   const { loading, error, products, productCount, resultPerPage } = useSelector(state => state.products)

   const params = useParams()
   // console.log(params);
   const keyword = params.keyword;

   const [currentPage, setCurrentPage] = useState(1)
   const [category, setCategory] = useState("")
   const [ratings, setRatings] = useState(0)

   const setCurrentPageNo = (e) => {
      setCurrentPage(e)
   }

   const [price, setPrice] = useState([0, 1500000])

   const priceHandler = (newPrice) => {
      setPrice(newPrice)
   }

   const toggleFilter = () => {
      document.getElementById("filter").classList.toggle("hidden")
      document.getElementById("allProducts").classList.toggle("hidden")
   }

   useEffect(() => {
      window.scrollTo(0, 0)
      if (error) {
         // return alert.error(error)
         dispatch(clearErrors)
         // console.log(error)
      }
      dispatch(getAllproduct(keyword, currentPage, price, category, ratings))
      // eslint-disable-next-line
   }, [dispatch, error, keyword, currentPage, category, ratings])


   return (
      <>
         {
            loading ? <Loader /> : <div>
               <Metadata title={"SmartBuyer - All products"} />

               {/* ///////////////////////////////////////////////////////////////////////////// */}

               <div className='w-[100vw] h-[8vh]  rounded-sm flex items-center justify-around  bg-white z-20 fixed bottom-0 md:hidden text-gray-500  
border-2 border-gray-300'>
                  <button onClick={toggleFilter} className='flex items-center  py-1 px-5 '>
                     <RiEqualizerLine className="text-xl  " />
                     <span className='font-semibold leading-loose'>Filter</span>
                  </button>
                  {/* <div className='text-2xl'>|</div> */}
                  {/* <button className='flex items-center  py-1 px-5'>
                     <BsSortDown className="text-xl  " />
                     <span className=''>Sort</span>
                  </button> */}

               </div>

               {/* For mobile Devices */}
               <div id='filter' className=' hidden z-10 bg-white pb-10 h-full absolute '>
                  <ProductFilter toggleFilter={toggleFilter} category={category} setCategory={setCategory} priceHandler={priceHandler} ratings={ratings} setRatings={setRatings} />
               </div>

               {/* For Pc */}
                <div id='allProducts' className=''>
                <div className='flex'>
                     <div className='w-[30%] h-full hidden md:block sticky top-10 bottom-0 py-10 bg-white'>
                        <ProductFilter category={category} setCategory={setCategory} priceHandler={priceHandler} ratings={ratings} setRatings={setRatings} />
                     </div>
                     <section className="flex flex-col w-[100%]">
                        <div className='flex flex-wrap justify-center'>
                           {
                              products && products.map((element, index) => (
                                 <ProductCard product={element} key={index} />
                              ))
                           }
                        </div>
                        {
                           (
                              <div className='text-purple-900 my-3 flex justify-center'>
                                 <Pagination
                                    activePage={currentPage}
                                    itemsCountPerPage={resultPerPage}
                                    totalItemsCount={productCount}
                                    onChange={setCurrentPageNo}
                                    nextPageText="Next"
                                    prevPageText="Prev"
                                    firstPageText="First page"
                                    lastPageText="Last page"
                                    itemClass='page-item'
                                    linkClass='page-link'
                                    activeClass='pageItemActive'
                                    activeLinkClass='pageLinkActive'
                                 >
                                 </Pagination>
                              </div>
                           )
                        }
                     </section>
                  </div>
                </div>


            </div>
         }
      </>
   )
}
