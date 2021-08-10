import React, { Component } from 'react';
import WithAviaService from '../hoc'
import { connect } from 'react-redux';
import { getTicket } from '../../actions';

import './ticketListItems.css';

class TicketListItems extends Component {

    componentDidMount() {
        const {AviaSalesService} = this.props;

        AviaSalesService.getId()
            .then(item => this.props.getTicket(item.searchId));

        AviaSalesService.getTickets(this.props.id)
            .then(item => this.props.getTicket(`${item}`));
    }
    
    render() {
        console.log(this.props.ticket);
        console.log(this.props.id);
        return (
            <div className='ticket'>
                <div className='header'>
                    <div className='price'>price</div>
                    <div className='logo'>logo</div>
                </div>
                <div className='ticket-info'>
                    <div className='route'>Route</div>
                    <div className='length'>Length</div>
                    <div className='stops'>Stops</div>
                </div>
            </div>
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
    getTicket
};

export default  WithAviaService()(connect(mapStateToProps, mapDispatchToProps)(TicketListItems));