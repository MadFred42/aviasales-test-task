import React from 'react';
import SelectingTabs from '../selectingTabs/selectingTabs';
import FilterItems from '../filterItems';
import TicketList from '../ticketList';
import image from './Logo.jpg';

import './app.css';


const App = () => {

    return (
        <div className='app'>
            <img className='main-logo' src={image} alt='logo' />
            <SelectingTabs />
            <FilterItems />
            <TicketList />
        </div>
    )
}

export default App;