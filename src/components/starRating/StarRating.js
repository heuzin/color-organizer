import React from 'react';
import createArray from './functions/createArray'
import Star from './Stars'

export default function StartRating({ style = {}, totalStars = 5, selectedStars = 0, onRate}) {
    return (
        <div style={{ padding: "5px", ...style }}>
        {createArray(totalStars).map((n, i) => (
            <Star 
                key={i} 
                selected={selectedStars > i}
                onSelect={() => onRate(i + 1)}
            />
            ))}
        <p>{selectedStars} of {totalStars}</p>
        </div>
    )
}