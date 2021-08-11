import React, { Component } from 'react';
import WithAviaService from '../hoc';
import { connect } from 'react-redux';
import { getId, getTicket } from '../../actions';
import TicketListItems from '../ticketListItems';
import Spinner from '../spinner/spinner';

import './ticketList.css';

class TicketList extends Component {
    
    componentDidMount() {
        const {AviaSalesService} = this.props;
    
        AviaSalesService.getId()
            .then(item => {
                this.props.getId(item.searchId)  
                AviaSalesService.getTickets(item.searchId)
                    .then(item => this.props.getTicket(item));
            });
    }
    
    render() {
        const { tickets } = this.props;
        const elements = tickets.tickets;
        console.log(elements);
        
        if (!elements) {
            return <Spinner />
        }

        const content = elements.map((item, index) => {
            const { price, carrier, segments } = item;
            const id = index + 1;
            segments.map(item => {
                const { date, destination, duration, origin, stops } = item;
                
                return {
                    date, 
                    destination,
                    duration,
                    origin,
                    stops
                }
            });

            return (
                <TicketListItems 
                    key={id}
                    price={price} 
                    carrier={carrier} 
                    segments={segments} />
            )
        });
        return (
            <View items={content} /> 
        )
    }
}

const mapStateToProps = ({ id, tickets }) => {
    return {
        id,
        tickets
    }
};

const mapDispatchToProps = {
    getId,
    getTicket
};

const View = ({items}) => {
    return (
        <ul className='tickets'>
            {items}
        </ul>
    )
}

export default WithAviaService()(connect(mapStateToProps, mapDispatchToProps)(TicketList));