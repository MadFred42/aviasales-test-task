import React from 'react';
import Spinner from '../spinner/spinner';
import TicketListHeader from '../ticketListHeader';
// import { connect } from 'react-redux';

import './ticketListItems.css';

const TicketListItems = ({ price, carrier, segments }) => {
    
    if(!segments) {
        return <Spinner/>
    }
    
    const content = segments.map((item, index) => {

        const { origin, destination, date, duration, stops } = item;
        
        function getDurationFlight() {
            const hours = Math.floor(duration / 60),
                  minutes = Math.floor(((duration / 60) % 1) * 60);
            const flightDuration = (`${getZero(hours)}ч${getZero(minutes)}м`);
            
            return flightDuration;
        }
        
        const departureDate = new Date(date);
        const departureTime = departureDate.toLocaleTimeString([], {timeStyle: 'short'});
        const arrivalDate = new Date(+departureDate + duration * 6e4);
        const arrivalTime = arrivalDate.toLocaleTimeString([], {timeStyle: 'short'});

        function getZero(num) {
            if (num < 10) {
                return `0${num}`;
            } else {
                return num;
            }
        }

        const getStops = () => {

            switch (stops.length) {
                case 1:
                    return (
                        <div>{stops[0]}</div>
                    );
                case 2:
                    return (
                        <div>{stops[0]}, {stops[1]}</div>
                    )
                case 3:
                    return (
                        <div>{stops[0]}, {stops[1]}, {stops[2]}</div>
                    )
                default:
                    return;
            }
        };

        return (
            <ul key={index + 1} className='ticket-info'>
                <li className='route'>
                    <span>{`${origin} - ${destination}`}</span>
                    <div>{departureTime} - {arrivalTime}</div>
                </li>
                <li className='length'>
                    <span>В пути</span>
                    <div>{getDurationFlight()}</div>
                </li>
                <li className='stops'>
                    <span>{stops.length} пересадки</span>
                    {getStops()}
                </li>
            </ul>
        )
    });  
    
    return (
        <div className='ticket'>
            <TicketListHeader price={price} carrier={carrier} />
            {content}
        </div>
    );
}  

export default TicketListItems;