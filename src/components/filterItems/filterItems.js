import React from 'react';
import { connect } from 'react-redux';
import { showZeroChanges, showOneChange, showContent } from '../../actions';

import './filterItems.css'

const FilterItems = ({ content, showZeroChanges, showOneChange, showContent }) => {

    const checkers = document.querySelectorAll('input');
    console.log(checkers);
    
    const onChnge = (id) => {
        const check = document.getElementById(id);
        if (check.checked) {
            showZeroChanges(content);
        } else {
            showContent();
        }
    };

    return (
        <div className='filter-block'>
            <h1>Количество пересадок</h1>
            <div className='checkbox-block'>
                <div className='check'>
                    <input id='0chng' onClick={() => onChnge('0chng')} type='checkbox' value='w/o change' />
                    <span>Без пересадок</span>
                </div>
                <div className='check'>
                    <input id='1chng' onClick={() => onChnge('1chng')} type='checkbox' value='1 change' />
                    <span>1 пересадка</span>
                </div>
                <div className='check'>
                    <input id='2chng' onClick={() => onChnge('2chng')} type='checkbox' value='2 changes' />
                    <span>2 пересадки</span>
                </div>
                <div className='check'>
                    <input id='3chng' onClick={() => onChnge('3chng')} type='checkbox' value='3 changes' />
                    <span>3 пересадки</span>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ content }) => {
    return {
        content
    }
}

const mapDispatchToProps = {
    showZeroChanges,
    showOneChange,
    showContent
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterItems);