import React from 'react';
import { showTheCheapest, showTheFastest, showOpti } from '../../actions';
import { connect } from 'react-redux';

import './selectingTabs.css';

const SelectingTabs = ({ content, active, showTheCheapest, showTheFastest, showOpti }) => {

    let classCheap = 'tabs-item';
    let classFast = 'tabs-item';
    let classOpti = 'tabs-item-r';

    if (active === 'cheapest') {
        classCheap = 'tabs-item active';
    } else if (active === 'fastest') {
        classFast = 'tabs-item active';
    } else if (active === 'opti') {
        classOpti = 'tabs-item-r active';
    }

    return (
        <div className='tabs'>
            <div id='cheapest' className={classCheap} onClick={() => showTheCheapest(content)}><p>Самый дешевый</p></div>
            <div className={classFast} onClick={() => showTheFastest(content)}><p>Самый быстрый</p></div>
            <div className={`${classOpti}`} onClick={() => showOpti(content)}><p>Оптимальный</p></div>
        </div>
    )
};

const mapStateToProps = ({content, active}) => {
    return {
        content,
        active
    }
}

const mapDispatchToProps = {
    showTheCheapest,
    showTheFastest,
    showOpti
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectingTabs);
