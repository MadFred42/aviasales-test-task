import React from 'react';

import './ticketListItems.css';

const TicketListItems = ({ price, carrier, segments }) => {
    
    function getDurationFlight() {
        const hours = Math.floor(segments[0].duration / 60),
              minutes = Math.floor(((segments[0].duration / 60) % 1) * 60),
              hoursBack = Math.floor(segments[1].duration / 60),
              minutesBack = Math.floor(((segments[1].duration / 60) % 1) * 60);

        return {
            hours,
            minutes,
            hoursBack,
            minutesBack
        }
    }

    const timeDuration = getDurationFlight();

    function getZero(num) {
        if (num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    const getTimeFlight = (i) => {
        const time = new Date(segments[i].date);
        const fullFlight = time.getMinutes();
    }
    getTimeFlight(0)
    const getStops = (i) => {
        switch (segments[i].stops.length) {
            case 1:
                return (
                    <div>{segments[i].stops[0]}</div>
                );
            case 2:
                return (
                    <div>{segments[i].stops[0]}, {segments[i].stops[1]}</div>
                )
            case 3:
                return (
                    <div>{segments[i].stops[0]}, {segments[i].stops[1]}, {segments[i].stops[2]}</div>
                )
            default:
                return;
        }
    }
    
    return (
        <li className='ticket'>
            <div className='header'>
                <div className='price'>{price} Р</div>
                <img className='logo' src={`https://pics.avs.io/99/36/${carrier}.png`} alt='logo'></img>
            </div>
            <div className='ticket-info'>
                <div className='route'>
                    <span>{`${segments[0].origin} - ${segments[0].destination}`}</span>
                    <div></div>
                </div>
                <div className='length'>
                    <span>В пути</span>
                    <div>{`${getZero(timeDuration.hours)}ч ${getZero(timeDuration.minutes)}м`}</div>
                </div>
                <div className='stops'>
                    <span>{segments[0].stops.length} пересадки</span>
                    {getStops(0)}
                </div>
            </div>
        </li>
    );

}  

export default TicketListItems;