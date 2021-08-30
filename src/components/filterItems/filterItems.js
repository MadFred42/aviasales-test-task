import React from 'react';
import { connect } from 'react-redux';
import { showChanges, showWithoutFilter } from '../../actions';

import './filterItems.css'

const FilterItems = ({ content, showChanges, showWithoutFilter }) => {
    
    const onChange = (event) => {
        
        if (event.checked) {
            showChanges(content, event.id);
        } else {
            showWithoutFilter(content);
        }
    };

    const checkboxes = [
        {id: 1, label: 'Без пересадок'},
        {id: 2, label: 'Одна пересадка'},
        {id: 3, label: 'Две пересадки'},
        {id: 4, label: 'Три пересадки'},
    ];

    const checkbox = checkboxes.map(({ id, label }) => {
        return (
            <label key={id} className='check'>
                <input className='checkInput' 
                    id={id-1} 
                    type='checkbox'
                    onChange={(event) => onChange(event.target)} />
                <span>{label}</span>
            </label>
        )
    })

    return (
        <div className='filter-block'>
            <h1>Количество пересадок</h1>
            {checkbox}
        </div>
    )
}

const mapStateToProps = ({ content }) => {
    return {
        content
    }
}

const mapDispatchToProps = {
    showChanges,
    showWithoutFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterItems);