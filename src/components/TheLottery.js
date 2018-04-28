import React from 'react';
import Ticket from './Ticket';
import Checkbox from './ui/checkbox';
import Lohotron from './Lohotron';
import './TheLottery.css';

let Lottery = ({ tickets, winnerTicket, currentNumber,
  gameProgress, startLohotron, getNewTicket, toggleTwoPlayersMode }) => {
  return (
    <div className="window-big">
      <div className="container">
        <div className="window-header">
          <h1 className="lottery-header">SUPER LOTTERY</h1>
          <h2>SHIRASS</h2>
        </div>
        <div className="window-body">
          <Lohotron
            curentNumber={currentNumber}
            startLohotron={startLohotron}
          />
          <div className='tickets-row'>
            {tickets.map((ticket, index) => (
              <Ticket
                key={index}
                win={winnerTicket === index ? true : false}
                ticketNumber={ticket}
                onClick={() => getNewTicket(index)} />
            ))
            }
          </div>
          <div className="window-controls-bottom">
            {gameProgress === 'pending' &&
              <Checkbox
                defaultChecked
                onChange={toggleTwoPlayersMode}
                text='Two players'
              />
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lottery;
