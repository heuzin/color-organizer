import React from 'react';
import StartRating from './starRating/StarRating';

export default function Color({ title, color, rating }) {
    return (
        <section>
            <h1>{title}</h1>
            <div style={{ height: 50, backgroundColor: color }}></div>
            <StartRating selectedStars={rating}/>
        </section>
    )
}