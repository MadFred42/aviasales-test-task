import React from 'react';
import Checkboxes from '../chekboxes';

import './filterItems.css'

export const FilterItems = () => {


    return (
        <div className='filter-block'>
            <h1>Количество пересадок</h1>
            <Checkboxes />
        </div>
    )
}