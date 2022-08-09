import React from 'react'
import logo from '../assets/uber-eats-logo.png'


function navbar() {
  return (
    <div className='block sm:flex sm:justify-between m-5'>
        <div className='text-2xl'>
            <button>
                <i className="fas fa-bars"></i>
            </button>
        </div>
        <div className=''>
            <img className='' src={logo} alt="uber-eats-logo" />
        </div>
        <div className='bg-gray-300 my-3 w-44 mx-auto h-10 flex justify-around rounded-full'>
            <button className='font-bold bg-white m-1 rounded-full w-52'>Delivery</button>
            <button className='w-52 font-bold'>Pickup</button>
        </div>
        <div className='bg-gray-300 h-10 rounded-full'>
            <div className='p-2 text-zinc-900'>
                <i className="mx-3 fas fa-map-marker-alt"></i> 
                <input className='bg-transparent outline-0 font-medium' type="text" name="" id="" placeholder='Toronto, ON'/>
            </div>
            
        </div>
        <div className='bg-gray-300 my-3 h-10 rounded-full'>
            <div className='p-2 text-zinc-900'>
                <i className=" mx-3 fas fa-search"></i>
                <input className='bg-transparent font-medium outline-0' type="text" name="" id="" placeholder='Food, groceries, drinks, etc.'/>
            </div>
        </div>
        <div className='bg-black text-white w-52 h-10 m-auto  rounded-full'>          
            <button className='bg-transparent py-2 mx-auto w-full'> <i className="fas fa-shopping-cart"></i> Checkout</button>
        </div>

    </div>
    
  )
}

export default navbar