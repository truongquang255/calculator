import React from 'react'

export default function Food({food}) {
  return (
    <div className='h-72 border border-black'>
        <img src={food.image} className='h-3/4 w-full object-cover '></img>
        <div className='px-2 py-1'>
            <p className='truncate '>{food.title}</p>
        </div>
    </div>
  )
}
