import React from 'react';
import createArray from './functions/createArray'
import Star from './Stars'

export default function StartRating({ style = {}, totalStars = 5, selectedStars = 0 }) {
    return (
        <div style={{ padding: "5px", ...style }}>
        {createArray(totalStars).map((n, i) => (
            <Star 
                key={i} 
                selected={selectedStars > i}/>
            ))}
        <p>{selectedStars} of {totalStars}</p>
        </div>
    )
}