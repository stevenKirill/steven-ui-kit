import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import classes from './fiveStars.module.css';

/** Компанент 5 звезд */
const FiveStars = ({ size = '5x' }) => {
    const [rating,setRating] = useState('');
    const [hover,setHover] = useState(null);

    const handleSetRating = (e) => {
        const { value } = e.target;
        setRating(value);
    };
    
    return (
        <div>
            {Array.from({length: 5}, (_,i) => {
                const val = i + 1;
                return (
                    <label className={classes.wrapper}>
                        <input
                            className={classes.radio}
                            type="radio"
                            name="stars"
                            value={val}
                            onChange={handleSetRating}
                        />
                        <FontAwesomeIcon
                            icon={faStar}
                            size={size}
                            color={val <= (rating || hover) ? '#FFD523' : '#2C2E43'}
                            className="pointer"
                            onMouseEnter={() => setHover(val)}
                            onMouseLeave={() => setHover(null)}
                        />
                    </label>
                );
            })}
            <p>Рейтинг: {rating}</p>
            <button onClick={() => setRating('')} className={classes.reset}>Сбросить</button>
        </div>
    );
};

export default FiveStars;
