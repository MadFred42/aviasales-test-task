import React from 'react';

import './ticketListItems.css';

const TicketListItems = ({ price, carrier, segments }) => {
    
    const content = segments.map((item, index) => {
        const { origin, destination, date, duration, stops } = item;

        function getDurationFlight() {
            const hours = Math.floor(duration / 60),
                  minutes = Math.floor(((duration / 60) % 1) * 60);
    
            return {
                hours,
                minutes
            }
        }

        const departureDate = new Date(date);
        const departureHours = departureDate.getHours();
        const departureMinutes = departureDate.getMinutes();

        const getArrivalTime = () => {
            let arrivalHours = departureHours + getDurationFlight().hours;
            let arrivalMinutes = departureMinutes + getDurationFlight().minutes;
            console.log(arrivalHours);
            if (arrivalHours > 24 && arrivalMinutes > 59) {
                return {
                    arrivalHours: arrivalHours - 23,
                    arrivalMinutes: arrivalMinutes - 60  
                };
            } else if (arrivalHours < 24 && arrivalMinutes > 59) {
                return {
                    arrivalHours: arrivalHours + 1,
                    arrivalMinutes: arrivalMinutes - 60
                }
            } else if (arrivalHours > 24 && arrivalMinutes < 59) {
                return {
                    arrivalHours:arrivalHours - 24,
                    arrivalMinutes
                } 
            } else if (arrivalHours > 48 && arrivalMinutes < 59) {
                return {
                    arrivalHours:arrivalHours - 48,
                    arrivalMinutes
                } 
            } else {
                return {
                    arrivalHours: arrivalHours,
                    arrivalMinutes: arrivalMinutes
                }
            }
        }

        console.log(getArrivalTime().arrivalHours);

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
        }

        return (
            <div key={index + 1} className='ticket-info'>
                <div className='route'>
                    <span>{`${origin} - ${destination}`}</span>
                    <div>{getZero(departureHours)}:{getZero(departureMinutes)} - {getZero(getArrivalTime().arrivalHours)}:{getZero(getArrivalTime().arrivalMinutes)}</div>
                </div>
                <div className='length'>
                    <span>В пути</span>
                    <div>{`${getZero(getDurationFlight().hours)}ч ${(getDurationFlight().minutes)}м`}</div>
                </div>
                <div className='stops'>
                    <span>{stops.length} пересадки</span>
                    {getStops()}
                </div>
            </div>
        )
    })  
    
    return (
        <li className='ticket'>
            <div className='header'>
                <div className='price'>{price} Р</div>
                <img className='logo' src={`https://pics.avs.io/99/36/${carrier}.png`} alt='logo'></img>
            </div>
            {content}
        </li>
    );
}  

export default TicketListItems;