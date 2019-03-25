import React from 'react';
import ReactStars from 'react-stars';

export default (props) => (
    <ReactStars
        value={props.rating}
        edit={false}
        size={30}
    />
)