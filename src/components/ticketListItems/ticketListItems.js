import React, { Component } from 'react';
import { connect } from 'react-redux';

import './ticketListItems.css';

const TicketListItems = ({ price, carrier, segments }) => {

    const content = segments.map(item => {
        const { date, destination, duration, origin, stops } = item;
        console.log(date);
        function getDuration() {
            const hours = Math.floor(duration / 60),
                  minutes = Math.floor(((duration / 60) % 1) * 60);

            return {
                hours,
                minutes
            }
        }
        const time = getDuration();

        function getZero(num) {
            if (num < 10) {
                return `0${num}`;
            } else {
                return num;
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
                        <span>{`${origin} - ${destination}`}</span>
                        <div></div>
                    </div>
                    <div className='length'>
                        <span>В пути</span>
                        <div>{`${getZero(time.hours)}ч ${getZero(time.minutes)}м`}</div>
                    </div>
                    <div className='stops'></div>
                </div>
            </li>
        );
    })

   
    return content; 
}  

export default connect()(TicketListItems);