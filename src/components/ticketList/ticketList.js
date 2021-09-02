import React, { Component } from 'react';
import WithAviaService from '../hoc';
import { connect } from 'react-redux';
import { getId, getTicket, showContent, showFiveMore } from '../../actions';
import TicketListItems from '../ticketListItems';
import Spinner from '../spinner/spinner';
import MoreContentBtn from '../moreContentBtn';

import './ticketList.css';

class TicketList extends Component {
    
    componentDidMount() {
        const {AviaSalesService} = this.props;
        
        AviaSalesService.getId()
            .then(item => {
                this.props.getId(item.searchId);  
                AviaSalesService.getTickets(item.searchId)
                    .then(item => {
                        this.props.getTicket(item.tickets);
                        this.props.showContent(item.tickets)
                    });
            });
    }
    
    render() {
        const { content, showFiveMore } = this.props;
        
        if (!content) {
            return <Spinner />
        }

        const viewedContent = content.map((item, index) => {
            const { price, carrier, segments } = item;
            const id = index + 1;
            
            return (
                <TicketListItems 
                    key={id}
                    price={price} 
                    carrier={carrier}
                    segments={segments} />
            )
        });

        return (
            <View items={viewedContent} showFiveMore={showFiveMore} /> 
        )
    }
}

const mapStateToProps = ({ id, content }) => {
    return {
        id,
        content
    }
};

const mapDispatchToProps = {
    getId,
    getTicket,
    showContent,
    showFiveMore
};

const View = ({ items, showFiveMore }) => {
    return (
        <ul className='tickets'>
            {items}
            <MoreContentBtn onShowTickets={() => showFiveMore(items)} />
        </ul>
    )
}

export default WithAviaService()(connect(mapStateToProps, mapDispatchToProps)(TicketList));