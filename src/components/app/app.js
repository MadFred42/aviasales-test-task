import React from 'react';
import SelectingTabs from '../selectingTabs/selectingTabs';
import FilterItems from '../filterItems/filterItems';
import TicketListItems from '../ticketListItems';

import image from './Logo.jpg';

import './app.css';


const App = () => {

    return (
        <div className='app'>
            <img src={image} alt='logo' />
            <SelectingTabs />
            <FilterItems />
            <TicketListItems />
        </div>
    )
}

export default App;