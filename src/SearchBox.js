import React from 'react';

export default ({ placeholder, handlechange }) => {
    return(
        <input
            className='search'
            type='search'
            placeholder={placeholder}
            onChange={handlechange}
        />
    );
}