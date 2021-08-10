import React from 'react';

import './filterItems.css'

const FilterItems = () => {
    return (
        <div className='filter-block'>
            <h1>Количество пересадок</h1>
            <div className='checkbox-block'>
                <div className='check'>
                    <input type='checkbox' value='w/o change' />
                    <span>Без пересадок</span>
                </div>
                <div className='check'>
                    <input type='checkbox' value='1 change' />
                    <span>1 пересадка</span>
                </div>
                <div className='check'>
                    <input type='checkbox' value='2 changes' />
                    <span>2 пересадки</span>
                </div>
                <div className='check'>
                    <input type='checkbox' value='3 changes' />
                    <span>3 пересадки</span>
                </div>
            </div>
        </div>
    )
}

export default FilterItems;