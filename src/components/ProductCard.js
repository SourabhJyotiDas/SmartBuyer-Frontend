import React from 'react'
import { Link } from 'react-router-dom';
import { Rating } from "@material-ui/lab";


export default function Product({ product }) {
      const options = {
            size: "large",
            value: product.ratings,
            readOnly: true,
            precision: 0.5,
      };
      return (
            <>
                  <Link className='hover:scale-105 hover:shadow-2xl shadow-xl ease-in-out duration-300 rounded-lg p-2 m-3' to={`/product/${product._id}`}>
                        <div className="md:h-[100%] md:w-[25vw] lg:w-[18vw] p-5">
                              <div className="flex flex-col">
                                    <img className="h-auto" src={product.images[0].url} alt="content" />
                                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{product.category}</h3>
                                    <h2 className="font-bold  ">{product.name}</h2>
                                    <p className="leading-relaxed text-sm">{`${product.description.slice(0,55)}...`}</p>
                                    <div className='flex items-center '>
                                          <Rating {...options} />/<span className=' tracking-widest'>{product.numOfReviews
                                          } </span>
                                    </div>
                                    <h2 className="text-lg  font-semibold title-font text-green-500">{`${product.price.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}`}</h2>
                              </div>
                        </div>
                  </Link>


            </>
      )
}
