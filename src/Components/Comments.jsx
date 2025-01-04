import React from 'react';
import './reviews.css';

const Comments = () => {
    const reviews = [
        {
            id: 1,
            name: "Александра",
            date: "Апрель 2024",
            rating: 5,
            comment: "Я очень доволен покупкой машины в данном автосалоне. Все сотрудники были внимательны и готовы помочь на каждом этапе выбора и приобретения авто. Мне предоставили отличные условия по кредитованию, а также сделали хорошую скидку на машину. Все документы оформили быстро и без лишних хлопот",
            avatarText: "Я"
        }
    ];

    const renderStars = (rating) => {
        return [...Array(5)].map((_, index) => (
            <span
                key={index}
                className={`star ${index < rating ? 'filled' : ''}`}
            >
                ★
            </span>
        ));
    };

    return (
        <div className='row '>
            <div className="reviews-container col-md-6 col-lg-4">
                {reviews.map(review => (
                    <div key={review.id} className="review-card">
                        <div className="review-header">
                            <div className="avatar">
                                {review.avatarText}
                            </div>
                            <div className="review-info">
                                <div className="name-date">
                                    <h3>{review.name}</h3>
                                    <span className="date">{review.date}</span>
                                </div>
                                <div className="rating">
                                    {renderStars(review.rating)}
                                </div>
                            </div>
                        </div>
                        <p className="review-text">{review.comment}</p>
                    </div>
                ))}
            </div>
            <div className="reviews-container col-md-6 col-lg-4">
                {reviews.map(review => (
                    <div key={review.id} className="review-card">
                        <div className="review-header">
                            <div className="avatar">
                                {review.avatarText}
                            </div>
                            <div className="review-info">
                                <div className="name-date">
                                    <h3>{review.name}</h3>
                                    <span className="date">{review.date}</span>
                                </div>
                                <div className="rating">
                                    {renderStars(review.rating)}
                                </div>
                            </div>
                        </div>
                        <p className="review-text">{review.comment}</p>
                    </div>
                ))}
            </div>
            <div className="reviews-container col-md-6 col-lg-4">
                {reviews.map(review => (
                    <div key={review.id} className="review-card">
                        <div className="review-header">
                            <div className="avatar">
                                {review.avatarText}
                            </div>
                            <div className="review-info">
                                <div className="name-date">
                                    <h3>{review.name}</h3>
                                    <span className="date">{review.date}</span>
                                </div>
                                <div className="rating">
                                    {renderStars(review.rating)}
                                </div>
                            </div>
                        </div>
                        <p className="review-text">{review.comment}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Comments;

