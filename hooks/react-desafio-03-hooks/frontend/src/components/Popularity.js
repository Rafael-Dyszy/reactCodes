import React from 'react';

const stars = {
    empty: '☆',
    full: '★',
};

const MAX_STARS = 10;

export default function Popularity({value}) {
    const fullStars = stars.full.repeat(value);
    const emptyStars = stars.empty.repeat(MAX_STARS - value);

    return <div style={{fontSize: '1.5rem', color:'#f39c12'}}>{fullStars}{emptyStars}</div>
}
