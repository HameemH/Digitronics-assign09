import React from 'react';
import './Review.css'

const Review = (props) => {
    console.log(props.review);
    const{id,name, ratings, review} = props.review;
    return (
        <div className='col-4 border border-1 rounded '>
            <h1>{name}</h1>
            <p>{review}</p>
            <h3>{ratings}</h3>
        </div>
    );
};

export default Review;