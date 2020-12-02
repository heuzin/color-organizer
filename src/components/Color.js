import React from 'react';
import { FaTrash } from 'react-icons/fa';
import StartRating from './starRating/StarRating';

export default function Color({ id, title, color, rating, onRemove }) {
    return (
        <section>
            <h1>{title}</h1>
            <button onClick={() => onRemove(id)}>
                <FaTrash />
            </button>
            <div style={{ height: 50, backgroundColor: color }}></div>
            <StartRating selectedStars={rating}/>
        </section>
    )
}