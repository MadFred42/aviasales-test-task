import React from 'react';

import './selectingTabs.css';

const SelectingTabs = () => {
    return (
        <div className='tabs'>
            <div className="tabs-item active"><p>Самый дешевый</p></div>
            <div className='tabs-item'><p>Самый быстрый</p></div>
            <div className='tabs-item-r'><p>Оптимальный</p></div>
        </div>
    )
};

export default SelectingTabs;
