import React from 'react';
import { showTheCheapest } from '../../actions';
import { connect } from 'react-redux';

import './selectingTabs.css';

const SelectingTabs = ({ content }, dispatch) => {
    console.log(dispatch);
    return (
        <div className='tabs'>
            <button className="tabs-item active" onClick={() => showTheCheapest()}><p>Самый дешевый</p></button>
            <button className='tabs-item'><p>Самый быстрый</p></button>
            <button className='tabs-item-r'><p>Оптимальный</p></button>
        </div>
    )
};


const mapDispatchToProps = {
    showTheCheapest
}

export default connect(null, mapDispatchToProps)(SelectingTabs);
