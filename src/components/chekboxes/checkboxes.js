import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { showChanges } from '../../actions';

const Checkboxes = ({ content, showChanges }) => {

    const [checkes, updateCheckes] = useState([]);

    useEffect(() => {              // отправляю id выбранных чеков если изменяется стейт компонента
        showChanges(content, checkes);  
    }, [checkes])

    const onChange = (event) => {   // получаю значения выбранных чеков и меняю стейт
        if (event.checked) {
            updateCheckes(checkes => [...checkes, event.id]);
        } else {
            updateCheckes(checkes.filter(item => item !== event.id));
        }
    };

    const checkbox = [
        {id: 1, label: 'Без пересадок'},
        {id: 2, label: 'Одна пересадка'},
        {id: 3, label: 'Две пересадки'},
        {id: 4, label: 'Три пересадки'},
    ];

    return checkbox.map(({ id, label }) => {
        return (
            <label key={id} className='check'>
                <input className='checkInput' 
                    id={id-1} 
                    type='checkbox'
                    onChange={(event) => onChange(event.currentTarget)} />
                <span>{label}</span>
            </label>
        )
    })
}

const mapStateToProps = ({ content }) => {
    return {
        content
    }
}

const mapDispatchToProps = {
    showChanges
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkboxes);