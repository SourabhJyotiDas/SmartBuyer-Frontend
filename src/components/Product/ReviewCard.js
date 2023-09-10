import React from 'react'
import ReactStars from 'react-rating-stars-component'
import { GoVerified } from "react-icons/go"
import moment from "moment";

export default function ReviewCard({ review }) {

      const options = {
            edit: false,
            color: "gray",
            activeColor: "tomato",
            size: window.innerWidth < 600 ? 20 : 25,
            value: review.rating,
            isHalf: true
      }

      const handleToggle =()=>{
            document.getElementById("hideDetails").classList.toggle("hidden")
      }

      return (
            <div className=' shadow-xl inline-block py-3 px-2 bg-white border border-blue-500 rounded-md w-full md:w-[60%] md:mx-auto my-3'>
                  <div className='flex items-center '>
                        <img className='h-[40px] w-[40px] bg-center rounded-full mr-3' src={review.user.avatar.url} alt="" />
                        <div className='space-y-1'>
                              <p className='text-purple-900 font-semibold text-sm md:text-base flex items-center'>{review.name}</p>
                              <p className='flex items-center space-x-1'>
                                    <span className='text-blue-500'>
                                          <GoVerified />
                                    </span>
                                    <span className='text-xs font-semibold underline text-blue-400'>
                                          Verified Purchase
                                    </span>
                              </p>
                        </div>
                  </div>
                  <ReactStars {...options} />
                  {
                        review.comment.length > 250 ?
                              <div>
                                    <p id='hideDetails' className='text-xs font-semibold leading-relaxed text-gray-500 md:text-sm'>{review.comment.slice(0, 250)}...</p>
                                    <details onClick={handleToggle} className='text-xs font-semibold leading-relaxed text-gray-500 md:text-sm'>  {review.comment}
                                    <summary className='text-gray-400'>Click to Expand/Collapse</summary>
                                    </details>
                              </div>
                              :
                              <span className='text-xs font-semibold leading-relaxed text-gray-500 md:text-sm'>{review.comment}</span>
                  }

                  <div className='text-xs font-semibold text-gray-400'>
                        {moment(review.createdAt).fromNow()}
                  </div>
            </div >
      )
}
