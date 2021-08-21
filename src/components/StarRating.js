import React from 'react'

const StarRating = ({rating,handelrating}) => {
    function star(x)
    {
        var star=[];
        for(let i=0;i<5;i++)
            {
               if(i<x)
               {
                   star.push(<span onClick={()=>handelrating(i)} style={{color:'gold'}}>★</span>)
               }
               else{
                   star.push(<span onClick={()=>handelrating(i)} style={{color:'black',fontSize:'20px'}}>☆</span>)
               }
            }

            return star;
    }
    return (
        <div>
               {star(rating)}
        </div>
    )
}

export default StarRating
