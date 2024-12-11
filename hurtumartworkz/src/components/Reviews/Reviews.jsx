import React from 'react';

const Reviews = ({ message, user, rating }) => {
    return (
        <div className="p-2.5 mb-2.5 mr-2.5 rounded">
            <div className="flex justify-between items-center">
                <h2 className="text-black text-[20px]">{user}</h2>
                <div className="text-yellow-400 text-[30px]">
                    {'★'.repeat(rating) + '☆'.repeat(5 - rating)}
                </div>
            </div>
            <p>{message}</p>
        </div>
    );
};

export default Reviews;
