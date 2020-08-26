import React from 'react';
import './search-panel.css';

const SearchPannel = () => {
    return(
        <input className='form-control search-input'
        type='text'
        placeholder='Поле для записей'
        ></input>
    )
}
export default SearchPannel;