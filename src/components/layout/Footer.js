import React from 'react';
import { AiFillAndroid } from "react-icons/ai"
import { GrAppleAppStore } from "react-icons/gr"

export default function Footer() {
      return (
            <>
                  <footer className='flex flex-col md:flex-row md:items-center md:justify-around  space-y-5 md:space-y-0 bg-purple-900 text-white py-5 px-5 text-xs '>
                        <div className='space-y-2 '>
                              <h4 className='capitalize primaryText'>Download our app</h4>
                              <p>Download app for  Android and Mobile Phones</p>
                              <button className='py-2 px-3 rounded-md bg-blue-400 text-white'> <AiFillAndroid className='text-xs' /></button>
                              <button className='py-2 px-3 rounded-md mx-5 bg-blue-400 text-white'><GrAppleAppStore className='text-xs' /></button>

                        </div>
                        <div className=' space-y-1 md:space-y-2'>
                              <div className='cursor-pointer  primaryText'>SmartBuyer</div>
                              <p>High quality is our first priority</p>
                              <p>Copyright 2027 &copy;  SmartBuyer</p>
                              <p>Design by <span>Sourabh Jyoti Das</span></p>
                        </div>
                        <div className='list-none space-y-1 md:space-y-2'>
                              <div className='primaryText'>Lets Connect</div>
                              <li className='cursor-pointer  primaryText'>Instagram</li>
                              <li className='cursor-pointer  primaryText'>Youtube</li>
                              <li className='cursor-pointer  primaryText'>Twitter</li>
                              <li className='cursor-pointer  primaryText'>LinkedIn</li>
                        </div>
                  </footer>
            </>
      )
}
