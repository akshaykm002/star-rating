import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'

function StarRating({stars }) {
    const [rating , setRating] = useState(0);
    const [hover ,setHover ] = useState(0)

    function handleClick(getCurrentIndex){
        console.log(getCurrentIndex);
        setRating(getCurrentIndex)


    }
    function handleMouseEnter(getCurrentIndex){
        console.log(getCurrentIndex);
        setHover(getCurrentIndex)

    }
    function handleMouseLeave(){
        setHover(rating)

    }
  return (
    <div className='stars'>
    {
        [...Array(stars)].map((_,index)=>{
            index += 1;

            return <FaStar 
            className={index<= (rating || hover)&& 'active'}
            key={index}
            onClick={()=>handleClick(index)}
            onMouseMove={()=>handleMouseEnter(index)}
            onMouseLeave={()=>handleMouseLeave}
            size={40}
            />
        })
    }
        
    </div>
  )
}

export default StarRating