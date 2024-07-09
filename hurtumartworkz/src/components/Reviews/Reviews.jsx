import React from 'react'
import './Reviews.css'

const Reviews = ({message, user, rating}) => {

    return (
        <div className="review">
            <div className="review-header">
                <h2>{user}</h2>
                <div className="rating">{'★'.repeat(rating) + '☆'.repeat(5 - rating)}</div>
            </div>
      <p>{message}</p>
    </div>
    )
}

export default Reviews