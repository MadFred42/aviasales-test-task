import React from 'react';
import { connect } from 'react-redux';
import { showChanges, showWithoutFilter } from '../../actions';

import './filterItems.css'

const FilterItems = ({ content, showChanges, showWithoutFilter }) => {
    
    const onChnge = (id) => {
        const checkes = document.querySelectorAll("input[type='checkbox']");
        
        if (checkes[id].checked) {
            showChanges(content, id);
        } else {
            showWithoutFilter(content);
        }
    };

    const checkboxes = [
        {id: 1, type:'checkbox', label: 'Без пересадок'},
        {id: 2, type:'checkbox', label: 'Одна пересадка'},
        {id: 3, type:'checkbox', label: 'Две пересадки'},
        {id: 4, type:'checkbox', label: 'Три пересадки'},
    ];

    const checkbox = checkboxes.map(({id, type, label, checked}, index) => {
        return (
            <div key={id} className='check'>
                <input type={type} value='w/o change' onChange={() => onChnge(index)} />
                <span>{label}</span>
            </div>
        )
    })

    return (
        <div className='filter-block'>
            <h1>Количество пересадок</h1>
            <div className='checkbox-block'>
                {checkbox}
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
    showChanges,
    showWithoutFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterItems);