import React from 'react';

export const TicketListHeader = ({carrier, price}) => {

    return (
        <ul className='header'>
            <li className='price'>{price} Р</li>
            <img className='logo' src={`https://pics.avs.io/99/36/${carrier}.png`} alt='logo'></img>
        </ul>
    )
}