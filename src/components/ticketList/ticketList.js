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
        const { tickets, content } = this.props;
        // const elements = tickets.tickets;
        console.log(content);
        if (!tickets) {
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
            <View items={viewedContent} /> 
        )
    }
}

const mapStateToProps = ({ id, tickets, content }) => {
    return {
        id,
        tickets,
        content
    }
};

const mapDispatchToProps = {
    getId,
    getTicket,
    showContent,
    showFiveMore
};

const View = ({ items }) => {
    return (
        <ul className='tickets'>
            {items}
            <button onClick={() => showFiveMore()}>ПОКАЗАТЬ ЕЩЁ 5 БИЛЕТОВ</button>
            {/* <MoreContentBtn  /> */}
        </ul>
    )
}

export default WithAviaService()(connect(mapStateToProps, mapDispatchToProps)(TicketList));