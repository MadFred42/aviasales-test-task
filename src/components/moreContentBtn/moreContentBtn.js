import React from 'react';

import './moreContentBtn.css';

const MoreContentBtn = ({ onShowTickets }) => {
    return (
        <button onClick={() => onShowTickets()}>Показать ещё 5 билетов!</button>
    )
}

export default MoreContentBtn;